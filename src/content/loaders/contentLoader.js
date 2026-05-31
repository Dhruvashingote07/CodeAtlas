import { allTechnologies, allBooks, roadmaps, toolCategories, interviewTopics } from '../../data/catalog'
import { technologyFAQs } from '../faq'

export function getAllTechWithFAQs() {
  return allTechnologies.map(tech => ({
    ...tech,
    faq: technologyFAQs[tech.id] || [],
  }))
}

export function getCurrentVersion() {
  const content = technologyFAQs
  const techCount = Object.keys(content).filter(k => content[k] !== null && Array.isArray(content[k])).length
  return { techCount, faqCount: techCount > 0 ? '8+ per technology' : '0', generated: new Date().toISOString() }
}

export function getSearchableContent() {
  const techs = allTechnologies.map(t => ({
    id: t.id,
    name: t.name,
    icon: t.icon,
    type: 'technology',
    category: t.category || t._path || 'general',
    description: t.description,
    difficulty: t.difficulty,
    tags: t.tags || [],
    topics: t.topics || [],
    url: `/${t._path || 'languages'}/${t.id || ''}`,
    searchText: [
      t.name,
      t.description,
      ...(t.tags || []),
      ...(t.topics || []),
      t.difficulty,
    ].filter(Boolean).join(' ').toLowerCase(),
  }))

  const books = allBooks.map(b => ({
    id: b.id || b.title,
    name: b.title,
    icon: '📚',
    type: 'book',
    category: b.language || b.category || 'general',
    description: b.description || 'A recommended book for developers',
    author: b.author,
    difficulty: b.difficulty,
    tags: b.topics || [],
    url: `/books#${encodeURIComponent(b.title || '')}`,
    searchText: [
      b.title,
      b.author,
      b.description,
      b.language,
      ...(b.topics || []),
    ].filter(Boolean).join(' ').toLowerCase(),
  }))

  const tools = toolCategories.flatMap(c => c.tools).map(t => ({
    id: t.id || t.name,
    name: t.name,
    icon: t.icon,
    type: 'tool',
    category: 'tools',
    description: t.description || 'Developer tool',
    tags: [],
    url: t.url || (t.name ? `/tools#${t.name.toLowerCase().replace(/\s+/g, '-')}` : ''),
    searchText: [t.name, t.description].filter(Boolean).join(' ').toLowerCase(),
  }))

  return [...techs, ...books, ...tools]
}
