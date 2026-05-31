import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { allBooks } from '../data/catalog'
import { bookCategories as curatedBookCategories } from '../data/books'
import SectionHeader from '../components/SectionHeader'
import Pagination from '../components/Pagination'
import { usePagination } from '../hooks'

const ebookLibraries = [
  { name: 'Free Programming Books', url: 'https://ebookfoundation.github.io/free-programming-books-search/?sect=books&file=free-programming-books-langs.md' },
  { name: 'IT Ebooks', url: 'https://it-ebooks.dev/' },
  { name: 'Java Notes', url: 'https://it-ebooks.dev/books/programming/java-notes-for-professionals' },
  { name: 'Free Computer Books', url: 'https://freecomputerbooks.com/' },
  { name: 'KopyKitab', url: 'https://www.kopykitab.com/Computer-Science-Free-Books' },
  { name: 'E-Books Directory', url: 'https://www.e-booksdirectory.com/computer-science.php' },
]

export default function BooksPage() {
  const [activeCategory, setActiveCategory] = useState(curatedBookCategories[0]?.name)

  const combinedBooks = useMemo(() => {
    const curatedBooks = curatedBookCategories.flatMap(category => category.books || [])
    const merged = [...curatedBooks, ...allBooks]
    const seen = new Set()

    return merged.filter(book => {
      const key = (book.title || '').trim().toLowerCase()
      if (!key || seen.has(key)) return false
      seen.add(key)
      return true
    })
  }, [])

  const mostUsedBooks = useMemo(() => {
    const languageFrequency = combinedBooks.reduce((acc, book) => {
      const tech = book.language || book.framework || 'General'
      acc[tech] = (acc[tech] || 0) + 1
      return acc
    }, {})

    return [...combinedBooks]
      .sort((a, b) => {
        const aTech = a.language || a.framework || 'General'
        const bTech = b.language || b.framework || 'General'
        const aScore = (a.rating || 0) * 10 + (languageFrequency[aTech] || 0)
        const bScore = (b.rating || 0) * 10 + (languageFrequency[bTech] || 0)
        if (bScore !== aScore) return bScore - aScore
        return (a.title || '').localeCompare(b.title || '')
      })
      .slice(0, 120)
  }, [combinedBooks])

  const top500Books = useMemo(() => {
    return [...combinedBooks]
      .sort((a, b) => {
        const ratingDiff = (b.rating || 0) - (a.rating || 0)
        if (ratingDiff !== 0) return ratingDiff
        return (a.title || '').localeCompare(b.title || '')
      })
      .slice(0, 500)
  }, [combinedBooks])

  const categories = useMemo(() => {
    return [
      ...curatedBookCategories,
      { name: 'Most Used Books', icon: '🔥', books: mostUsedBooks },
      { name: 'Top 500 Books', icon: '🏆', books: top500Books },
    ]
  }, [mostUsedBooks, top500Books])

  const activeBooks = useMemo(() => {
    return categories.find(category => category.name === activeCategory)?.books || []
  }, [activeCategory, categories])

  const {
    currentPage,
    totalPages,
    currentItems,
    goToPage,
  } = usePagination(activeBooks, 12)

  useEffect(() => {
    goToPage(1)
  }, [activeCategory, goToPage])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SectionHeader title="Books Library" subtitle="Curated collection of the best programming and tech books from official sources" />

      <div className="flex flex-wrap gap-2 mb-6">
        {ebookLibraries.map(lib => (
          <a
            key={lib.name}
            href={lib.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            {lib.name}
          </a>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(cat => (
          <button
            key={cat.name}
            onClick={() => setActiveCategory(cat.name)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              activeCategory === cat.name
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {cat.name} ({cat.books?.length || 0})
          </button>
        ))}
      </div>

      {activeBooks.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentItems.map((book, i) => (
          <motion.div
            key={book.id || book.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="card p-5"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center text-white text-2xl font-bold shrink-0 shadow-lg">
                {book.title.charAt(0)}
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-gray-900 dark:text-white">{book.title}</h3>
                <p className="text-sm text-gray-500 mt-0.5">{book.author}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">{book.description}</p>
                <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 flex flex-wrap gap-2">
                  {(book.language || book.framework) && <span>{book.language || book.framework}</span>}
                  {book.difficulty && <span className="capitalize">{book.difficulty}</span>}
                  {book.rating && <span>{book.rating}/5</span>}
                </div>
                <a href={book.source} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold px-3 py-1.5 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  {book.source?.match(/\.(pdf|epub|zip)$/i) ? 'Download' : 'Access Resource'}
                </a>
              </div>
            </div>
          </motion.div>
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={goToPage}
          />
        </>
      ) : (
        <div className="card p-8 text-center text-gray-600 dark:text-gray-400">
          No books found for this category.
        </div>
      )}
    </div>
  )
}
