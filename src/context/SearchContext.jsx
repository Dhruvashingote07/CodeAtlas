import { createContext, useContext, useState, useCallback } from 'react'

const SearchContext = createContext()

export function SearchProvider({ children }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)

  const search = useCallback((searchQuery, data) => {
    setIsSearching(true)
    setQuery(searchQuery)
    if (!searchQuery.trim()) {
      setResults([])
      setIsSearching(false)
      return
    }
    const q = searchQuery.toLowerCase()
    const filtered = data.filter(item =>
      item.name?.toLowerCase().includes(q) ||
      item.description?.toLowerCase().includes(q) ||
      item.tags?.some(tag => tag.toLowerCase().includes(q)) ||
      item.category?.toLowerCase().includes(q)
    )
    setResults(filtered)
    setIsSearching(false)
  }, [])

  const clearSearch = useCallback(() => {
    setQuery('')
    setResults([])
  }, [])

  return (
    <SearchContext.Provider value={{ query, results, isSearching, search, clearSearch }}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearch = () => useContext(SearchContext)
