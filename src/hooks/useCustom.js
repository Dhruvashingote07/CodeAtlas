import { useState, useEffect, useRef, useCallback } from 'react'

/**
 * useLocalStorage hook - Persist state in localStorage
 * @param {string} key - localStorage key
 * @param {*} initialValue - Initial value if key doesn't exist
 * @returns {[*, function]} - Current value and setter function
 */
export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = typeof window !== 'undefined' ? window.localStorage?.getItem(key) : null
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error('useLocalStorage error:', error)
      return initialValue
    }
  })

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      if (typeof window !== 'undefined') {
        window.localStorage?.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      console.error('useLocalStorage error:', error)
    }
  }

  return [storedValue, setValue]
}

/**
 * useDebounce hook - Debounce value changes
 * @param {*} value - Value to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {*} - Debounced value
 */
export function useDebounce(value, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(handler)
  }, [value, delay])

  return debouncedValue
}

/**
 * useScrollPosition hook - Track scroll position
 * @returns {object} - Current scroll position
 */
export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({
        x: window.scrollX || window.pageXOffset,
        y: window.scrollY || window.pageYOffset,
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollPosition
}

/**
 * usePrevious hook - Get previous value
 * @param {*} value - Value to track
 * @returns {*} - Previous value
 */
export function usePrevious(value) {
  const ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

/**
 * useAsync hook - Handle async operations
 * @param {function} asyncFn - Async function to execute
 * @param {boolean} immediate - Execute immediately
 * @returns {object} - Status, data, error
 */
export function useAsync(asyncFn, immediate = true) {
  const [status, setStatus] = useState('pending')
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  const execute = useCallback(async () => {
    setStatus('pending')
    setData(null)
    setError(null)
    try {
      const response = await asyncFn()
      setData(response)
      setStatus('success')
      return response
    } catch (err) {
      setError(err)
      setStatus('error')
    }
  }, [asyncFn])

  useEffect(() => {
    if (immediate) {
      execute()
    }
  }, [execute, immediate])

  return { execute, status, data, error }
}

/**
 * usePagination hook - Handle pagination logic
 * @param {array} items - Items to paginate
 * @param {number} itemsPerPage - Items per page
 * @returns {object} - Pagination state and methods
 */
export function usePagination(items = [], itemsPerPage = 10) {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(items.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = items.slice(startIndex, endIndex)

  const goToPage = (page) => {
    const pageNumber = Math.max(1, Math.min(page, totalPages))
    setCurrentPage(pageNumber)
  }

  return {
    currentPage,
    totalPages,
    currentItems,
    goToPage,
    goToNextPage: () => goToPage(currentPage + 1),
    goToPreviousPage: () => goToPage(currentPage - 1),
  }
}
