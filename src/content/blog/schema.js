export const BLOG_POST_SCHEMA = {
  slug: 'string (required) — URL-friendly identifier',
  title: 'string (required) — SEO title',
  description: 'string (required) — meta description for search engines',
  category: '"Programming" | "Web Development" | "Databases" | "DevOps" | "AI" | "Machine Learning" | "Cybersecurity"',
  tags: ['string'],
  published: 'string (ISO date) — publication date',
  updated: 'string (ISO date) — last updated date',
  author: 'string — author name',
  readingTime: 'string — estimated reading time (e.g. "5 min read")',
  content: 'string (markdown or structured content)',
  toc: [{ id: 'string', title: 'string', level: 'number' }],
}

export function generateTOC(content) {
  if (!content || typeof content !== 'string') return []
  const headingRegex = /^(#{1,3})\s+(.+)$/gm
  const toc = []
  let match
  while ((match = headingRegex.exec(content)) !== null) {
    toc.push({
      id: match[2].toLowerCase().replace(/[^\w]+/g, '-'),
      title: match[2],
      level: match[1].length,
    })
  }
  return toc
}

export const blogCategories = [
  { id: 'programming', name: 'Programming', slug: 'programming' },
  { id: 'web-development', name: 'Web Development', slug: 'web-development' },
  { id: 'databases', name: 'Databases', slug: 'databases' },
  { id: 'devops', name: 'DevOps', slug: 'devops' },
  { id: 'ai', name: 'AI', slug: 'ai' },
  { id: 'machine-learning', name: 'Machine Learning', slug: 'machine-learning' },
  { id: 'cybersecurity', name: 'Cybersecurity', slug: 'cybersecurity' },
]
