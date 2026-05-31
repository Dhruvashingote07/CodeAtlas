import { useParams, Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { allTechnologies, allContent } from '../../data/catalog'
import HelmetMeta from '../../components/seo/HelmetMeta'
import JsonLd from '../../components/seo/JsonLd'
import Breadcrumbs from '../../components/seo/Breadcrumbs'
import FaqSection from '../../components/seo/FaqSection'
import { getTechnologyMeta } from '../../seo/metadata'
import { getBreadcrumbSchema, getTechArticleSchema, getBookSchema, getFAQSchema } from '../../seo/structuredData'
import { technologyFAQs } from '../../content/faq'
import TechnologySubNav from './TechnologySubNav'

const CONTENT_TYPES = ['overview', 'roadmap', 'books', 'interview-questions', 'cheatsheet', 'documentation', 'faq', 'projects', 'practice', 'certifications']

function formatLabel(str) {
  return str.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}

function getContentData(item, contentType) {
  switch (contentType) {
    case 'roadmap': return item.roadmapNodes || item.roadmap || null
    case 'books': return item.recommendedBooks || item.books || null
    case 'interview-questions': return item.interviewQuestions || null
    case 'cheatsheet': return item.cheatSheets || null
    case 'documentation': return item.officialDocumentationLinks || item.documentation || null
    case 'faq': return technologyFAQs[item.id] || null
    case 'projects': return item.projectIdeas || null
    case 'practice': return item.practicePlatforms || null
    case 'certifications': return item.certifications || null
    default: return null
  }
}

function getContentTitle(contentType, techName) {
  const labels = {
    roadmap: `${techName} Roadmap — Learning Path & Topics`,
    books: `${techName} Books — Recommended Reading`,
    'interview-questions': `${techName} Interview Questions — Prepare for Interviews`,
    cheatsheet: `${techName} Cheat Sheet — Quick Reference`,
    documentation: `${techName} Documentation — Official Resources`,
    faq: `${techName} FAQ — Frequently Asked Questions`,
    projects: `${techName} Projects — Hands-On Practice`,
    practice: `${techName} Practice Platforms — Coding Exercises`,
    certifications: `${techName} Certifications — Career Credentials`,
  }
  return labels[contentType] || `${techName} ${formatLabel(contentType)}`
}

function getContentDescription(contentType, techName, data) {
  if (!data) return `Explore ${techName} learning resources and guides.`
  const count = Array.isArray(data) ? data.length : 0
  const labels = {
    roadmap: `Follow the complete ${techName} learning roadmap with ${count > 0 ? `${count} stages` : 'structured topics'}.`,
    books: `Discover ${count > 0 ? `${count} recommended` : 'top'} ${techName} books and reading resources.`,
    'interview-questions': `Practice with ${count > 0 ? `${count}` : 'curated'} ${techName} interview questions and answers.`,
    cheatsheet: `Quick reference ${techName} cheat sheet covering syntax, commands, and key concepts.`,
    documentation: `Access ${count > 0 ? `${count}` : 'official'} ${techName} documentation and reference links.`,
    faq: `Find answers to frequently asked questions about ${techName}, including use cases, learning resources, and career guidance.`,
    projects: `Build real-world ${techName} projects with ${count > 0 ? `${count} project` : 'hands-on'} ideas.`,
    practice: `Practice ${techName} with ${count > 0 ? `${count} platform` : 'coding'} exercises and challenges.`,
    certifications: `Earn ${techName} certifications with ${count > 0 ? `${count} certification` : 'career'} paths.`,
  }
  return labels[contentType] || `Explore ${techName} ${formatLabel(contentType)} resources.`
}

function RoadmapSection({ data, techName }) {
  if (!data) return <EmptyState type="roadmap" />
  const nodes = Array.isArray(data) ? data : []
  return (
    <div className="space-y-6">
      {nodes.map((node, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="card p-5">
          <h3 className="font-bold text-lg text-primary-600 dark:text-primary-400 mb-2">{node.label || `Stage ${i + 1}`}</h3>
          <div className="flex flex-wrap gap-2">
            {(node.topics || node.label || '').split(/\s{2,}|\n/).filter(Boolean).map((topic, j) => (
              <span key={j} className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full">{topic.trim()}</span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

function BooksSection({ data }) {
  if (!data || data.length === 0) return <EmptyState type="books" />
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((book, i) => {
        const title = book.title || book.name
        const author = book.author || ''
        return (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }} className="card p-4">
            {book.url ? (
              <a href={book.url} target="_blank" rel="noopener noreferrer" className="block">
                <ContentCard title={title} subtitle={author} />
              </a>
            ) : (
              <ContentCard title={title} subtitle={author} />
            )}
          </motion.div>
        )
      })}
    </div>
  )
}

function InterviewSection({ data }) {
  if (!data || data.length === 0) return <EmptyState type="interview-questions" />
  return (
    <div className="space-y-3">
      {data.map((q, i) => {
        const question = typeof q === 'string' ? q : q.question
        const difficulty = q.difficulty || ''
        return (
          <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.03 }} className="card p-4 flex items-center justify-between">
            <span className="text-gray-900 dark:text-white font-medium">{question}</span>
            {difficulty && (
              <span className={`shrink-0 ml-3 text-xs font-medium px-2.5 py-1 rounded-full ${
                difficulty === 'Easy' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
              }`}>{difficulty}</span>
            )}
          </motion.div>
        )
      })}
    </div>
  )
}

function CheatsheetSection({ data }) {
  if (!data || data.length === 0) return <EmptyState type="cheatsheet" />
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((cs, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
          {cs.url ? (
            <a href={cs.url} target="_blank" rel="noopener noreferrer" className="card p-4 flex items-center gap-3 hover:-translate-y-1 block">
              <span className="text-2xl">📋</span>
              <span className="font-medium text-gray-900 dark:text-white">{cs.name}</span>
            </a>
          ) : (
            <div className="card p-4 flex items-center gap-3">
              <span className="text-2xl">📋</span>
              <span className="font-medium text-gray-900 dark:text-white">{cs.name}</span>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  )
}

function DocsSection({ data }) {
  if (!data || data.length === 0) return <EmptyState type="documentation" />
  return (
    <div className="space-y-2">
      {data.map((doc, i) => (
        <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.03 }}>
          {doc.url ? (
            <a href={doc.url} target="_blank" rel="noopener noreferrer" className="card p-3 flex items-center justify-between hover:-translate-y-0.5">
              <span className="font-medium text-gray-900 dark:text-white text-sm">{doc.name}</span>
              {doc.type && <span className="text-xs text-gray-500">{doc.type}</span>}
            </a>
          ) : (
            <div className="card p-3 flex items-center justify-between opacity-60">
              <span className="font-medium text-gray-900 dark:text-white text-sm">{doc.name}</span>
              {doc.type && <span className="text-xs text-gray-500">{doc.type}</span>}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  )
}

function ProjectsSection({ data }) {
  if (!data || data.length === 0) return <EmptyState type="projects" />
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {data.map((project, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="card p-4 flex items-start gap-3">
          <span className="text-xl shrink-0 mt-0.5">🚀</span>
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">{project.name || project}</h3>
            {project.description && <p className="text-sm text-gray-500 mt-1">{project.description}</p>}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

function PracticeSection({ data }) {
  if (!data || data.length === 0) return <EmptyState type="practice" />
  return (
    <div className="flex flex-wrap gap-3">
      {data.map((platform, i) => (
        <motion.span key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }}
          className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium">
          {platform.name || platform}
        </motion.span>
      ))}
    </div>
  )
}

function CertsSection({ data }) {
  if (!data || data.length === 0) return <EmptyState type="certifications" />
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((cert, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="card p-4">
          <div className="font-medium text-gray-900 dark:text-white text-sm">{cert.name}</div>
          {cert.provider && <div className="text-xs text-gray-500 mt-1">{cert.provider}</div>}
        </motion.div>
      ))}
    </div>
  )
}

function EmptyState({ type }) {
  return (
    <div className="text-center py-12">
      <p className="text-gray-500 dark:text-gray-400">No {formatLabel(type)} resources available yet for this technology.</p>
    </div>
  )
}

function ContentCard({ title, subtitle }) {
  return (
    <div>
      <div className="font-medium text-gray-900 dark:text-white">{title}</div>
      {subtitle && <div className="text-sm text-gray-500 mt-0.5">{subtitle}</div>}
    </div>
  )
}

export default function TechnologySubPage() {
  const { category, slug, contentType } = useParams()
  const location = useLocation()

  const validContentType = CONTENT_TYPES.includes(contentType) ? contentType : 'overview'

  const tech = allTechnologies.find(t => t.id === slug)
  const itemWithPath = allContent.find(c => c.id === slug)

  if (!tech) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Technology not found</h1>
        <Link to="/" className="text-primary-600 hover:underline mt-4 inline-block">Go home</Link>
      </div>
    )
  }

  const techMeta = getTechnologyMeta(tech, formatLabel(validContentType))
  const data = getContentData(tech, validContentType)

  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: formatLabel(category), path: `/${category}` },
    { name: tech.name, path: `/${category}/${slug}` },
  ]

  if (validContentType !== 'overview') {
    breadcrumbItems.push({ name: formatLabel(validContentType), path: `/${category}/${slug}/${validContentType}` })
  }

  const pageTitle = validContentType === 'overview' ? tech.name : getContentTitle(validContentType, tech.name)
  const pageDesc = validContentType === 'overview'
    ? tech.description
    : getContentDescription(validContentType, tech.name, data)

  const canonicalUrl = validContentType === 'overview'
    ? `https://codeatlas.dev/${category}/${slug}`
    : `https://codeatlas.dev/${category}/${slug}/${validContentType}`

  const schemas = [
    getBreadcrumbSchema(breadcrumbItems),
  ]

  if (validContentType === 'roadmap') {
    schemas.push(getTechArticleSchema({
      title: pageTitle,
      description: pageDesc,
      techName: tech.name,
      difficulty: tech.difficulty,
      topics: tech.topics,
    }))
  }

  if (validContentType === 'books' && data) {
    data.forEach(book => {
      schemas.push(getBookSchema({
        title: book.title || book.name,
        author: book.author,
        description: `${tech.name} book`,
        url: book.url || canonicalUrl,
      }))
    })
  }

  if (validContentType === 'interview-questions' && data) {
    schemas.push(getFAQSchema(
      data.map(q => ({
        question: typeof q === 'string' ? q : q.question,
        answer: `Practice this ${tech.name} interview question. Difficulty: ${q.difficulty || 'Various'}`,
      }))
    ))
  }

  if (validContentType === 'faq' && data) {
    schemas.push(getFAQSchema(data))
  }

  function renderContent() {
    switch (validContentType) {
      case 'roadmap': return <RoadmapSection data={data} techName={tech.name} />
      case 'books': return <BooksSection data={data} />
      case 'interview-questions': return <InterviewSection data={data} />
      case 'cheatsheet': return <CheatsheetSection data={data} />
      case 'documentation': return <DocsSection data={data} />
      case 'faq': return <FaqSection data={data} />
      case 'projects': return <ProjectsSection data={data} />
      case 'practice': return <PracticeSection data={data} />
      case 'certifications': return <CertsSection data={data} />
      default: return (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">Select a content type above to view resources.</p>
        </div>
      )
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <HelmetMeta
        title={pageTitle}
        description={pageDesc}
        canonicalUrl={canonicalUrl}
        ogType={validContentType === 'overview' ? 'website' : 'article'}
      />
      {schemas.map((schema, i) => (
        <JsonLd key={i} schema={schema} />
      ))}

      <Breadcrumbs items={breadcrumbItems} />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-4 mb-2">
          <span className="text-4xl">{tech.icon}</span>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{pageTitle}</h1>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">{pageDesc}</p>
          </div>
        </div>

        <TechnologySubNav category={category} slug={slug} activeContentType={validContentType} />

        {renderContent()}
      </motion.div>
    </div>
  )
}
