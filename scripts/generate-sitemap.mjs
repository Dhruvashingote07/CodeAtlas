import { readFileSync, writeFileSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const SITE_URL = 'https://codeatlas.dev'
const CONTENT_FILE = path.resolve(__dirname, '../src/data/generated/content.json')
const OUTPUT_FILE = path.resolve(__dirname, '../public/sitemap.xml')

const CONTENT_TYPES = ['roadmap', 'books', 'interview-questions', 'cheatsheet', 'documentation', 'faq', 'projects', 'practice', 'certifications']

function xmlUrl(loc, priority = '0.8', changefreq = 'weekly') {
  return `  <url>\n    <loc>${SITE_URL}${loc}</loc>\n    <priority>${priority}</priority>\n    <changefreq>${changefreq}</changefreq>\n  </url>`
}

let content
try {
  content = JSON.parse(readFileSync(CONTENT_FILE, 'utf-8'))
} catch {
  console.error('Could not read content.json. Run generate-content.mjs first.')
  process.exit(1)
}

const techs = [
  ...content.languages.languages.map(t => ({ ...t, path: 'languages' })),
  ...content.webDevelopment.frontendTechnologies.map(t => ({ ...t, path: 'web-development' })),
  ...content.webDevelopment.backendTechnologies.map(t => ({ ...t, path: 'web-development' })),
  ...content.databases.databases.map(t => ({ ...t, path: 'databases' })),
  ...content.aiML.aiMLTechnologies.map(t => ({ ...t, path: 'ai-ml' })),
  ...content.dataScience.dataScienceTools.map(t => ({ ...t, path: 'data-science' })),
  ...content.devops.devOpsTools.map(t => ({ ...t, path: 'devops' })),
  ...content.cybersecurity.cybersecurityTools.map(t => ({ ...t, path: 'cybersecurity' })),
  ...content.mobileDevelopment.mobileTechnologies.map(t => ({ ...t, path: 'mobile-development' })),
  ...content.iot.iotTechnologies.map(t => ({ ...t, path: 'iot' })),
]

const urls = []

// Homepage
urls.push(xmlUrl('/', '1.0', 'daily'))

// Top-level category pages
const CATEGORIES = [
  '/languages', '/web-development', '/databases', '/ai-ml', '/data-science',
  '/devops', '/cybersecurity', '/mobile-development', '/iot',
  '/tools', '/books', '/interview-prep', '/cheatsheet', '/resources', '/search',
]
CATEGORIES.forEach(cat => urls.push(xmlUrl(cat, '0.9', 'weekly')))

// Roadmaps
const roadmapIds = content.roadmaps?.roadmaps || []
roadmapIds.forEach(rm => urls.push(xmlUrl(`/roadmaps/${rm.id || rm}`, '0.8', 'weekly')))

// Technology pages + sub-pages
techs.forEach(tech => {
  const basePath = `/${tech.path}/${tech.id}`
  urls.push(xmlUrl(basePath, '0.9', 'weekly'))

  CONTENT_TYPES.forEach(ct => {
    urls.push(xmlUrl(`${basePath}/${ct}`, '0.7', 'monthly'))
  })
})

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`

writeFileSync(OUTPUT_FILE, xml, 'utf-8')
console.log(`Sitemap generated: ${OUTPUT_FILE} (${urls.length} URLs)`)
