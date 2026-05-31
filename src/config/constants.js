/**
 * Design Tokens & Configuration
 * Centralized configuration for colors, spacing, typography, and other design constants
 */

export const colors = {
  // Primary
  primary: {
    50: '#eef2ff',
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1',
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81',
  },
  // Accent
  accent: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c3d66',
  },
  // Neutral
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
    950: '#030712',
  },
  // Status
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
}

export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '2.5rem',
  '3xl': '3rem',
  '4xl': '4rem',
}

export const borderRadius = {
  none: '0',
  sm: '0.125rem',
  base: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  full: '9999px',
}

export const typography = {
  fontFamily: {
    sans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    mono: '"JetBrains Mono", monospace',
  },
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }],
    sm: ['0.875rem', { lineHeight: '1.25rem' }],
    base: ['1rem', { lineHeight: '1.5rem' }],
    lg: ['1.125rem', { lineHeight: '1.75rem' }],
    xl: ['1.25rem', { lineHeight: '1.75rem' }],
    '2xl': ['1.5rem', { lineHeight: '2rem' }],
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
    '5xl': ['3rem', { lineHeight: '1' }],
    '6xl': ['3.75rem', { lineHeight: '1' }],
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
}

export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
}

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}

export const transitions = {
  fast: '150ms ease-in-out',
  base: '200ms ease-in-out',
  slow: '300ms ease-in-out',
  slowest: '500ms ease-in-out',
}

export const animations = {
  fadeIn: {
    duration: 300,
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slideUp: {
    duration: 300,
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  },
  slideDown: {
    duration: 300,
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  scaleIn: {
    duration: 200,
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },
}

export const categories = [
  { slug: 'languages', name: 'Programming Languages', icon: '💻' },
  { slug: 'web-development', name: 'Web Development', icon: '🌐' },
  { slug: 'databases', name: 'Databases', icon: '🗄️' },
  { slug: 'ai-ml', name: 'AI & Machine Learning', icon: '🤖' },
  { slug: 'data-science', name: 'Data Science', icon: '📊' },
  { slug: 'devops', name: 'DevOps', icon: '⚙️' },
  { slug: 'cybersecurity', name: 'Cybersecurity', icon: '🔒' },
  { slug: 'mobile-development', name: 'Mobile Development', icon: '📱' },
  { slug: 'iot', name: 'IoT', icon: '🔌' },
]

export const navigation = [
  { name: 'Home', path: '/' },
  { name: 'Languages', path: '/languages' },
  { name: 'Web Development', path: '/web-development' },
  { name: 'Databases', path: '/databases' },
  { name: 'AI & ML', path: '/ai-ml' },
  { name: 'Data Science', path: '/data-science' },
  { name: 'DevOps', path: '/devops' },
  { name: 'Cybersecurity', path: '/cybersecurity' },
  { name: 'Mobile Development', path: '/mobile-development' },
  { name: 'IoT', path: '/iot' },
  { name: 'Tools', path: '/tools' },
  { name: 'Books', path: '/books' },
  { name: 'Interview Prep', path: '/interview-prep' },
]

export const footerLinks = {
  Learning: [
    { name: 'Programming Languages', path: '/languages' },
    { name: 'Web Development', path: '/web-development' },
    { name: 'Databases', path: '/databases' },
    { name: 'AI & ML', path: '/ai-ml' },
    { name: 'DevOps', path: '/devops' },
  ],
  Resources: [
    { name: 'Web Resources', path: '/resources/web-development' },
    { name: 'Database Resources', path: '/resources/databases' },
    { name: 'AI & ML Resources', path: '/resources/ai-ml' },
    { name: 'DevOps Resources', path: '/resources/devops' },
    { name: 'Cybersecurity Resources', path: '/resources/cybersecurity' },
    { name: 'Interview Prep', path: '/interview-prep' },
    { name: 'Developer Tools', path: '/tools' },
    { name: 'Books Library', path: '/books' },
  ],
  Company: [
    { name: 'About', url: '#' },
    { name: 'Blog', url: '#' },
    { name: 'Privacy', url: '#' },
    { name: 'Terms', url: '#' },
  ],
  Connect: [
    { name: 'GitHub', url: 'https://github.com' },
    { name: 'Twitter', url: 'https://twitter.com' },
    { name: 'Discord', url: '#' },
  ],
}

export const siteMetadata = {
  title: 'CodeAtlas - The Complete Map of Software Development',
  description: 'Master programming languages, AI, DevOps, cybersecurity, and more. Your all-in-one hub for learning resources, developer tools, and career growth.',
  url: 'https://codeatlas.dev',
  image: '/og-image.jpg',
  author: 'CodeAtlas',
  keywords: [
    'programming',
    'learning',
    'development',
    'tutorial',
    'learning resources',
    'AI',
    'ML',
    'DevOps',
    'web development',
    'developer tools',
  ],
}

export const paginationConfig = {
  itemsPerPage: 12,
  maxVisible: 7,
}

export const animationConfig = {
  staggerContainer: {
    staggerChildren: 0.1,
    delayChildren: 0.1,
  },
  cardHover: {
    scale: 1.02,
    transition: { duration: 0.3 },
  },
}

// Structured learning resources used across navs and the Resources page
export const learningResourcesStructure = {
  categories: [
    { slug: 'web-development', title: 'Web' },
    { slug: 'databases', title: 'Database' },
    { slug: 'ai-ml', title: 'AI & ML' },
    { slug: 'devops', title: 'DevOps' },
    { slug: 'cybersecurity', title: 'Cybersecurity' },
  ],
  perLanguage: [
    'Overview',
    'Official Documentation',
    'Beginner Guide',
    'Advanced Guide',
    'Ebook/PDF Resources',
    'Interview Questions',
    'Cheat Sheets',
    'Project Ideas',
    'Best YouTube Courses',
    'Practice Platforms',
    'Documentation',
    'Books & Ebooks',
    'Video Courses',
    'Notes',
    'Cheat Sheets',
    'Projects',
    'Practice Exercises',
    'Interview Questions',
    'GitHub Repositories',
    'Certifications',
    'Latest Updates',
  ],
}
