/**
 * Truncate text with ellipsis
 * @param {string} text - Text to truncate
 * @param {number} length - Maximum length
 * @returns {string} - Truncated text
 */
export function truncateText(text, length = 100) {
  if (!text) return ''
  return text.length > length ? `${text.substring(0, length)}...` : text
}

/**
 * Format number with commas
 * @param {number} num - Number to format
 * @returns {string} - Formatted number
 */
export function formatNumber(num) {
  if (!num) return '0'
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

/**
 * Format date to readable string
 * @param {string|Date} date - Date to format
 * @returns {string} - Formatted date
 */
export function formatDate(date) {
  if (!date) return ''
  const d = new Date(date)
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

/**
 * Format time ago (e.g., "2 hours ago")
 * @param {string|Date} date - Date to format
 * @returns {string} - Time ago string
 */
export function formatTimeAgo(date) {
  const now = new Date()
  const then = new Date(date)
  const seconds = Math.floor((now - then) / 1000)

  if (seconds < 60) return 'Just now'
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`
  if (seconds < 604800) return `${Math.floor(seconds / 86400)}d ago`
  return formatDate(date)
}

/**
 * Format bytes to readable size
 * @param {number} bytes - Bytes to format
 * @returns {string} - Formatted size
 */
export function formatBytes(bytes) {
  if (!bytes) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
}

/**
 * Slugify string
 * @param {string} text - Text to slugify
 * @returns {string} - Slugified text
 */
export function slugify(text) {
  if (!text) return ''
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

/**
 * Deep clone object
 * @param {object} obj - Object to clone
 * @returns {object} - Cloned object
 */
export function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj))
}

/**
 * Merge arrays without duplicates
 * @param {...array} arrays - Arrays to merge
 * @returns {array} - Merged array without duplicates
 */
export function mergeArrays(...arrays) {
  return [...new Set(arrays.flatMap(arr => arr))]
}

/**
 * Group array by key
 * @param {array} arr - Array to group
 * @param {string} key - Key to group by
 * @returns {object} - Grouped object
 */
export function groupByKey(arr, key) {
  return arr.reduce((groups, item) => {
    const group = item[key] || 'other'
    groups[group] = groups[group] || []
    groups[group].push(item)
    return groups
  }, {})
}

/**
 * Search array of objects
 * @param {array} arr - Array to search
 * @param {string} query - Search query
 * @param {array} fields - Fields to search in
 * @returns {array} - Filtered array
 */
export function searchArray(arr, query, fields = []) {
  if (!query) return arr
  const lowerQuery = query.toLowerCase()

  return arr.filter(item => {
    if (fields.length === 0) {
      return Object.values(item).some(val =>
        String(val).toLowerCase().includes(lowerQuery)
      )
    }
    return fields.some(field =>
      String(item[field] || '').toLowerCase().includes(lowerQuery)
    )
  })
}

/**
 * Sort array of objects
 * @param {array} arr - Array to sort
 * @param {string} key - Key to sort by
 * @param {string} order - 'asc' or 'desc'
 * @returns {array} - Sorted array
 */
export function sortArray(arr, key, order = 'asc') {
  return [...arr].sort((a, b) => {
    const aVal = a[key]
    const bVal = b[key]

    if (aVal < bVal) return order === 'asc' ? -1 : 1
    if (aVal > bVal) return order === 'asc' ? 1 : -1
    return 0
  })
}

/**
 * Get random item from array
 * @param {array} arr - Array to get item from
 * @returns {*} - Random item
 */
export function getRandomItem(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return null
  return arr[Math.floor(Math.random() * arr.length)]
}

/**
 * Remove duplicates from array
 * @param {array} arr - Array to deduplicate
 * @param {string} key - Key to check for duplicates (optional)
 * @returns {array} - Array without duplicates
 */
export function removeDuplicates(arr, key = null) {
  if (!key) return [...new Set(arr)]
  const seen = new Set()
  return arr.filter(item => {
    const val = item[key]
    if (seen.has(val)) return false
    seen.add(val)
    return true
  })
}

/**
 * Check if email is valid
 * @param {string} email - Email to validate
 * @returns {boolean} - Is valid
 */
export function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

/**
 * Check if URL is valid
 * @param {string} url - URL to validate
 * @returns {boolean} - Is valid
 */
export function isValidUrl(url) {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

/**
 * Extract domain from URL
 * @param {string} url - URL to extract from
 * @returns {string} - Domain
 */
export function extractDomain(url) {
  try {
    return new URL(url).hostname
  } catch {
    return ''
  }
}
