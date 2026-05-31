import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'CodeAtlas'
const SITE_URL = 'https://codeatlas.dev'

export default function HelmetMeta({
  title,
  description = 'The Complete Map of Software Development, AI, and Technology Learning. Master programming languages, AI, DevOps, cybersecurity, and more.',
  keywords = 'programming, learning, development, tutorial, AI, ML, DevOps, web development, developer tools, coding, software engineering',
  canonicalUrl,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noIndex = false,
}) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} - The Complete Map of Software Development`

  const canonical = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : SITE_URL)

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={typeof keywords === 'string' ? keywords : keywords.join(', ')} />
      <link rel="canonical" href={canonical} />
      {noIndex && <meta name="robots" content="noindex, follow" />}

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${SITE_URL}${ogImage}`} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_URL}${ogImage}`} />
      <meta name="twitter:site" content="@codeatlas" />
      <meta name="twitter:creator" content="@codeatlas" />
    </Helmet>
  )
}
