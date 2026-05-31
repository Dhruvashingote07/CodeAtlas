const BASE_URL = 'https://codeatlas.dev'

export function getHomeMeta() {
  return {
    title: 'CodeAtlas - The Complete Map of Software Development',
    description: 'Master programming languages, AI, DevOps, cybersecurity, and more. Your all-in-one hub for learning resources, developer tools, and career growth.',
    keywords: ['programming', 'software development', 'coding', 'learn to code', 'developer roadmap', 'AI', 'DevOps', 'web development', 'tech learning platform'],
    canonicalUrl: BASE_URL,
    ogImage: '/og-image.jpg',
  }
}

export function getCategoryMeta(slug, name, description) {
  const title = `${name} - Complete Learning Resources`
  return {
    title,
    description: `${description} Explore comprehensive guides, books, cheat sheets, interview questions, and projects for all ${name.toLowerCase()}.`,
    keywords: [name.toLowerCase(), 'learning resources', 'tutorials', 'developer guide', 'programming', 'roadmap'],
    canonicalUrl: `${BASE_URL}/${slug}`,
    ogType: 'website',
  }
}

export function getTechnologyMeta(tech, subPage = 'Overview') {
  const title = subPage === 'Overview'
    ? `${tech.name} - Complete Developer Guide & Learning Resources`
    : `${tech.name} ${subPage} - Complete Developer Guide`
  const desc = subPage === 'Overview'
    ? `${tech.description} Explore ${tech.name} learning resources, books, cheat sheets, interview questions, projects, and more.`
    : `${tech.name} ${subPage.toLowerCase()} — curated resources, tutorials, and best practices for mastering ${tech.name}.`
  return {
    title,
    description: desc,
    keywords: [tech.name.toLowerCase(), subPage.toLowerCase(), 'tutorial', 'learning', 'developer guide', ...(tech.topics || [])],
    canonicalUrl: `${BASE_URL}/${tech.category || 'languages'}/${tech.id}/${subPage.toLowerCase().replace(/\s+/g, '-')}`,
    ogType: 'article',
  }
}

export function getBookMeta(book) {
  return {
    title: `${book.title} by ${book.author || 'Unknown'} - Book Review & Resources`,
    description: `Learn about "${book.title}" by ${book.author || 'Unknown'}. ${book.description || ''}`,
    keywords: [book.title, book.author || '', 'programming book', 'tech book', 'developer reading'],
    canonicalUrl: `${BASE_URL}/books#${encodeURIComponent(book.title)}`,
  }
}

export function getToolMeta(tool) {
  return {
    title: `${tool.name} - Developer Tool Guide & Resources`,
    description: `${tool.description} Learn how to use ${tool.name} with guides, cheat sheets, and best practices.`,
    keywords: [tool.name.toLowerCase(), 'developer tool', 'devops', 'software engineering', 'coding tool'],
    canonicalUrl: `${BASE_URL}/tools#${tool.name.toLowerCase().replace(/\s+/g, '-')}`,
  }
}

export function getInterviewMeta(topic) {
  return {
    title: `${topic.name} Interview Questions & Preparation`,
    description: `Prepare for ${topic.name} interviews with curated questions, answers, and practice resources. Ace your next technical interview.`,
    keywords: [`${topic.name.toLowerCase()} interview`, 'interview questions', 'tech interview', 'coding interview', 'job preparation'],
    canonicalUrl: `${BASE_URL}/interview-prep#${topic.id}`,
  }
}

export function getCheatsheetMeta(tech) {
  return {
    title: `${tech.name} Cheat Sheet - Quick Reference Guide`,
    description: `Comprehensive ${tech.name} cheat sheet covering syntax, commands, concepts, and best practices. Quick reference for developers.`,
    keywords: [`${tech.name.toLowerCase()} cheat sheet`, 'quick reference', 'programming syntax', 'developer cheat sheet'],
    canonicalUrl: `${BASE_URL}/cheatsheet#${tech.id}`,
  }
}

export function getSearchMeta(query) {
  return {
    title: `Search results for "${query}"`,
    description: `Search results for "${query}" on CodeAtlas. Find learning resources, documentation, books, and tools.`,
    noIndex: true,
    canonicalUrl: `${BASE_URL}/search?q=${encodeURIComponent(query)}`,
  }
}

export function getNotFoundMeta() {
  return {
    title: 'Page Not Found - 404',
    description: 'The page you are looking for does not exist. Explore CodeAtlas for developer learning resources.',
    noIndex: true,
    canonicalUrl: BASE_URL,
  }
}
