import { useEffect, useState, useCallback, useRef } from 'react'
import { useSearchParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Fuse from 'fuse.js'
import { getSearchableContent } from '../content/loaders/contentLoader'
import HelmetMeta from '../components/seo/HelmetMeta'
import { getSearchMeta } from '../seo/metadata'

const SEARCH_OPTIONS = {
  keys: [
    { name: 'searchText', weight: 3 },
    { name: 'name', weight: 5 },
    { name: 'description', weight: 2 },
    { name: 'tags', weight: 2 },
    { name: 'author', weight: 1 },
    { name: 'difficulty', weight: 1 },
  ],
  threshold: 0.4,
  distance: 100,
  minMatchCharLength: 2,
  shouldSort: true,
  includeScore: true,
}

let fuseInstance = null
function getFuse() {
  if (!fuseInstance) fuseInstance = new Fuse(getSearchableContent(), SEARCH_OPTIONS)
  return fuseInstance
}

const TYPE_ICONS = {
  technology: '💻', book: '📚', tool: '🔧',
}

const TYPE_LABELS = {
  technology: 'Technology', book: 'Book', tool: 'Tool',
}

export default function SearchPage() {
  const [searchParams] = useSearchParams()
  const initialQuery = searchParams.get('q') || ''
  const navigate = useNavigate()
  const [query, setQuery] = useState(initialQuery)
  const [results, setResults] = useState([])
  const [typeFilter, setTypeFilter] = useState('all')
  const [isSearching, setIsSearching] = useState(false)
  const [hasSearched, setHasSearched] = useState(!!initialQuery)
  const debounceRef = useRef(null)

  const performSearch = useCallback((q, filter) => {
    if (!q || q.trim().length < 2) {
      setResults([])
      setIsSearching(false)
      return
    }
    const trimmed = q.trim()
    const fuse = getFuse()
    let raw = fuse.search(trimmed).map(r => r.item)
    if (filter && filter !== 'all') raw = raw.filter(r => r.type === filter)
    setResults(raw.slice(0, 48))
    setIsSearching(false)
    setHasSearched(true)
  }, [])

  const handleInput = useCallback((value) => {
    setQuery(value)
    if (value.length < 2) {
      setResults([])
      setHasSearched(false)
      return
    }
    setIsSearching(true)
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => performSearch(value, typeFilter), 200)
    const params = new URLSearchParams()
    if (value) params.set('q', value)
    navigate(`/search?${params.toString()}`, { replace: true })
  }, [typeFilter, performSearch, navigate])

  const handleFilterChange = useCallback((filter) => {
    setTypeFilter(filter)
    if (query.length >= 2) performSearch(query, filter)
  }, [query, performSearch])

  useEffect(() => {
    if (initialQuery) performSearch(initialQuery, 'all')
    return () => { if (debounceRef.current) clearTimeout(debounceRef.current) }
  }, [initialQuery, performSearch])

  const types = ['all', 'technology', 'book', 'tool']

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <HelmetMeta {...getSearchMeta(query || 'search')} />

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Search</h1>
        <div className="relative max-w-2xl">
          <input
            type="text"
            value={query}
            onChange={e => handleInput(e.target.value)}
            placeholder="Search technologies, books, tools..."
            className="w-full px-4 py-3 pl-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900 dark:text-white"
            autoFocus
          />
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {query.length >= 2 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {types.map(t => (
            <button
              key={t}
              onClick={() => handleFilterChange(t)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors capitalize ${
                typeFilter === t
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {t === 'all' ? 'All' : TYPE_LABELS[t] || t}
            </button>
          ))}
        </div>
      )}

      {isSearching && (
        <div className="text-center py-12">
          <p className="text-gray-500">Searching...</p>
        </div>
      )}

      {!isSearching && hasSearched && results.length === 0 && (
        <div className="text-center py-20">
          <p className="text-lg text-gray-500 mb-2">No results found</p>
          <p className="text-sm text-gray-400">Try a different search term or remove filters.</p>
        </div>
      )}

      {!isSearching && results.length > 0 && (
        <>
          <p className="text-sm text-gray-500 mb-4">{results.length} results for "{query}"</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {results.map((item, i) => (
              <motion.div
                key={`${item.type}-${item.id || item.name}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
              >
                <Link
                  to={item.url || `/${item.category}/${item.id}`}
                  className="card p-4 flex items-center gap-3 hover:-translate-y-0.5 block"
                >
                  <span className="text-2xl">{item.icon || TYPE_ICONS[item.type]}</span>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">{item.name}</h3>
                    <p className="text-sm text-gray-500 line-clamp-1">{item.description || ''}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-primary-600 dark:text-primary-400 capitalize">{TYPE_LABELS[item.type] || item.type}</span>
                      {item.difficulty && (
                        <span className={`text-xs px-1.5 py-0.5 rounded ${
                          item.difficulty === 'Beginner' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                          item.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                          item.difficulty === 'Advanced' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' : ''
                        }`}>{item.difficulty}</span>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </>
      )}

      {!hasSearched && query.length < 2 && (
        <div className="text-center py-20">
          <p className="text-gray-500">Type at least 2 characters to search across technologies, books, and tools.</p>
        </div>
      )}
    </div>
  )
}
