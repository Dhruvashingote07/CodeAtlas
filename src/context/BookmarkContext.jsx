import { createContext, useContext, useState, useCallback } from 'react'

const BookmarkContext = createContext()

export function BookmarkProvider({ children }) {
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      const saved = localStorage.getItem('bookmarks')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  const toggleBookmark = useCallback((item) => {
    setBookmarks(prev => {
      const exists = prev.find(b => b.id === item.id)
      const updated = exists
        ? prev.filter(b => b.id !== item.id)
        : [...prev, { ...item, bookmarkedAt: Date.now() }]
      localStorage.setItem('bookmarks', JSON.stringify(updated))
      return updated
    })
  }, [])

  const isBookmarked = useCallback((id) => {
    return bookmarks.some(b => b.id === id)
  }, [bookmarks])

  return (
    <BookmarkContext.Provider value={{ bookmarks, toggleBookmark, isBookmarked }}>
      {children}
    </BookmarkContext.Provider>
  )
}

export const useBookmarks = () => useContext(BookmarkContext)
