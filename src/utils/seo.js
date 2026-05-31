/**
 * Update document meta tags for SEO
 * @param {object} config - SEO configuration
 */
export function updateSEO({
  title = 'CodeAtlas - The Complete Map of Software Development',
  description = 'Master programming languages, AI, DevOps, cybersecurity, and more. Your all-in-one hub for learning resources.',
  image = '/og-image.jpg',
  url = 'https://codeatlas.dev',
  type = 'website',
  keywords = [],
}) {
  // Update title
  document.title = title

  // Update meta tags
  const metaTags = {
    'og:title': title,
    'og:description': description,
    'og:image': image,
    'og:url': url,
    'og:type': type,
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': image,
    'twitter:card': 'summary_large_image',
    description,
    keywords: keywords.length > 0 ? keywords.join(', ') : 'programming, learning, development, AI, ML, DevOps',
  }

  for (const [key, value] of Object.entries(metaTags)) {
    let element = document.querySelector(`meta[name="${key}"], meta[property="${key}"]`)

    if (!element) {
      element = document.createElement('meta')
      const isProperty = key.startsWith('og:') || key.startsWith('twitter:')
      if (isProperty) {
        element.setAttribute('property', key)
      } else {
        element.setAttribute('name', key)
      }
      document.head.appendChild(element)
    }

    element.setAttribute('content', value)
  }

  // Update canonical URL
  let canonical = document.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.rel = 'canonical'
    document.head.appendChild(canonical)
  }
  canonical.href = url
}

/**
 * Create structured data (JSON-LD) for SEO
 * @param {object} data - Structured data
 */
export function setStructuredData(data) {
  let script = document.querySelector('script[type="application/ld+json"]')

  if (!script) {
    script = document.createElement('script')
    script.type = 'application/ld+json'
    document.head.appendChild(script)
  }

  script.textContent = JSON.stringify(data)
}

/**
 * Generate organization schema
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CodeAtlas',
    description: 'The Complete Map of Software Development, AI, and Technology Learning',
    url: 'https://codeatlas.dev',
    logo: 'https://codeatlas.dev/logo.png',
    sameAs: [
      'https://twitter.com/codeatlas',
      'https://github.com/codeatlas',
    ],
  }
}

/**
 * Generate article schema
 */
export function getArticleSchema({ title, description, image, datePublished, dateModified }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: [image],
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name: 'CodeAtlas',
      url: 'https://codeatlas.dev',
    },
  }
}

/**
 * Generate breadcrumb schema
 */
export function getBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://codeatlas.dev${item.url}`,
    })),
  }
}

/**
 * Use SEO hook for pages
 */
export function useSEO(config) {
  import('react').then(({ useEffect }) => {
    useEffect(() => {
      updateSEO(config)
    }, [config])
  })
}
