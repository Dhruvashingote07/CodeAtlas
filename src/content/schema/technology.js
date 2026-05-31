export const TECHNOLOGY_CONTENT_SCHEMA = {
  id: 'string (required) — unique identifier',
  name: 'string (required) — display name',
  icon: 'string — emoji icon',
  color: 'string — hex color',
  category: 'string — parent category slug',
  description: 'string (required) — SEO description',
  difficulty: '"Beginner" | "Intermediate" | "Advanced"',
  overview: 'string — full markdown overview of the technology',

  faq: [
    {
      question: 'string',
      answer: 'string (required, detailed)',
    }
  ],

  learningPath: [
    {
      stage: 'number',
      title: 'string',
      duration: 'string',
      description: 'string',
      topics: ['string'],
      projects: ['string'],
      resources: ['string (URLs)'],
    }
  ],

  documentation: [
    { name: 'string', url: 'string (required, official only)', type: '"Official" | "API Reference" | "Tutorial" | "Guide"' }
  ],

  books: [
    {
      title: 'string (required)',
      author: 'string (required)',
      publisher: 'string',
      url: 'string (official purchase/legal link)',
      description: 'string',
      difficulty: 'string',
      pages: 'number',
      year: 'number',
      isbn: 'string',
    }
  ],

  projects: [
    {
      title: 'string (required)',
      difficulty: '"Beginner" | "Intermediate" | "Advanced"',
      description: 'string (required)',
      skills: ['string'],
    }
  ],

  interviewQuestions: [
    {
      question: 'string (required)',
      answer: 'string (detailed answer)',
      difficulty: '"Easy" | "Medium" | "Hard"',
      category: 'string',
    }
  ],

  cheatsheet: [
    { name: 'string', url: 'string', description: 'string' }
  ],

  practicePlatforms: ['string'],

  certifications: [
    {
      name: 'string (required)',
      provider: 'string',
      url: 'string (official URL)',
      difficulty: 'string',
      cost: 'string',
      duration: 'string',
    }
  ],

  careerPaths: ['string'],
  salaryInformation: {
    entry: 'string',
    mid: 'string',
    senior: 'string',
    note: 'string',
  },
  technologyEcosystem: ['string'],
  relatedTechnologies: ['string'],
  tags: ['string'],
  roadmapUrl: 'string',
  prerequisites: ['string'],
  topics: ['string'],
  searchText: 'string (auto-generated, lowercased concatenation for search indexing)',
}

export function validateTechnologyContent(data) {
  if (!data || typeof data !== 'object') return false
  if (!data.id || typeof data.id !== 'string') return false
  if (!data.name || typeof data.name !== 'string') return false
  if (!data.description || typeof data.description !== 'string') return false
  return true
}
