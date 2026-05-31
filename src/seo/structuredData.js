const SITE_URL = 'https://codeatlas.dev'

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CodeAtlas',
    description: 'The Complete Map of Software Development, AI, and Technology Learning',
    url: SITE_URL,
    logo: `${SITE_URL}/og-image.jpg`,
    sameAs: [
      'https://github.com/codeatlas',
      'https://twitter.com/codeatlas',
    ],
  }
}

export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'CodeAtlas',
    url: SITE_URL,
    description: 'The Complete Map of Software Development, AI, and Technology Learning',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function getBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}

export function getArticleSchema({ title, description, image, datePublished, dateModified }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: [image || `${SITE_URL}/og-image.jpg`],
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name: 'CodeAtlas',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'CodeAtlas',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/og-image.jpg`,
      },
    },
  }
}

export function getTechArticleSchema({ title, description, techName, difficulty, topics }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: title,
    description,
    image: `${SITE_URL}/og-image.jpg`,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    author: {
      '@type': 'Organization',
      name: 'CodeAtlas',
      url: SITE_URL,
    },
    about: {
      '@type': 'Thing',
      name: techName,
      description,
    },
    educationalLevel: difficulty,
    keywords: [techName, ...(topics || [])].join(', '),
  }
}

export function getBookSchema({ title, author, description, url, image }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: title,
    author: author ? { '@type': 'Person', name: author } : undefined,
    description,
    url,
    image,
  }
}

export function getFAQSchema(questions) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(q => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer || 'Refer to the resources linked above for a detailed answer.',
      },
    })),
  }
}

export function getCourseSchema({ name, description, provider, url }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: provider || 'CodeAtlas',
      sameAs: SITE_URL,
    },
    url: `${SITE_URL}${url}`,
  }
}

export function buildItemListSchema({ name, description, items }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    description,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Thing',
        name: item.name,
        url: `${SITE_URL}${item.url}`,
      },
    })),
  }
}
