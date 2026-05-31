import { useState, useMemo, useCallback, useRef, useEffect } from 'react'
import Fuse from 'fuse.js'
import { getSearchableContent } from '../content/loaders/contentLoader'

const SEARCH_OPTIONS = {
  keys: [
    { name: 'searchText', weight: 3 },
    { name: 'name', weight: 5 },
    { name: 'description', weight: 2 },
    { name: 'tags', weight: 2 },
    { name: 'author', weight: 1 },
  ],
  threshold: 0.4,
  distance: 100,
  minMatchCharLength: 2,
  shouldSort: true,
  includeScore: true,
}

let fuseInstance = null

function getFuse() {
  if (!fuseInstance) {
    fuseInstance = new Fuse(getSearchableContent(), SEARCH_OPTIONS)
  }
  return fuseInstance
}

export function useSearch() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [isSearching, setIsSearching] = useState(false)
  const debounceRef = useRef(null)

  const categories = useMemo(() => {
    const all = getSearchableContent()
    const cats = new Set(all.map(r => r.type))
    return ['all', ...Array.from(cats).sort()]
  }, [])

  const performSearch = useCallback((searchQuery, filter) => {
    if (!searchQuery || searchQuery.trim().length < 2) {
      setResults([])
      setIsSearching(false)
      return
    }

    const trimmed = searchQuery.trim()
    const fuse = getFuse()
    let raw = fuse.search(trimmed).map(r => r.item)

    if (filter && filter !== 'all') {
      raw = raw.filter(r => r.type === filter)
    }

    setResults(raw.slice(0, 48))
    setIsSearching(false)
  }, [])

  const search = useCallback((value) => {
    setQuery(value)
    if (value.length < 2) {
      setResults([])
      return
    }
    setIsSearching(true)
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      performSearch(value, categoryFilter)
    }, 200)
  }, [categoryFilter, performSearch])

  const filterByCategory = useCallback((cat) => {
    setCategoryFilter(cat)
    if (query.length >= 2) {
      performSearch(query, cat)
    }
  }, [query, performSearch])

  const clearSearch = useCallback(() => {
    setQuery('')
    setResults([])
    setCategoryFilter('all')
  }, [])

  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current)
    }
  }, [])

  return {
    query,
    setQuery: search,
    results,
    isSearching,
    categories,
    categoryFilter,
    filterByCategory,
    clearSearch,
  }
}

export function searchAll(query) {
  if (!query || query.trim().length < 2) return []
  const fuse = getFuse()
  return fuse.search(query.trim()).map(r => r.item).slice(0, 48)
}
