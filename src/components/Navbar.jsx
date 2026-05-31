import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { motion, AnimatePresence } from 'framer-motion'

const primaryNavItems = [
  { name: 'Web', path: '/web-development' },
  { name: 'Databases', path: '/databases' },
  { name: 'AI & ML', path: '/ai-ml' },
  { name: 'DevOps', path: '/devops' },
  { name: 'Cybersecurity', path: '/cybersecurity' },
  { name: 'IoT', path: '/iot' },
  { name: 'Mobile', path: '/mobile-development' },
  { name: 'Books', path: '/books' },
  { name: 'CheatSheet', path: '/cheatsheet' },
  { name: 'Resources', path: '/resources' },
  { name: 'Interview Prep', path: '/interview-prep' },
  { name: 'Roadmaps', path: '/roadmaps' },
  { name: 'Tools', path: '/tools' },
]

const languageResources = [
  { name: 'All Languages', to: '/languages', icon: '💻' },
  { name: 'Documentation', to: { pathname: '/resources', search: '?tab=documentation' }, icon: '📘' },
  { name: 'Books & Ebooks', to: '/books', icon: '📚' },
  { name: 'Notes', to: { pathname: '/resources', search: '?tab=notes' }, icon: '📝' },
  { name: 'Cheat Sheets', to: { pathname: '/resources', search: '?tab=cheatsheets' }, icon: '📋' },
  { name: 'Projects', to: { pathname: '/resources', search: '?tab=projects' }, icon: '🚀' },
  { name: 'Practice Exercises', to: { pathname: '/resources', search: '?tab=practice' }, icon: '🧪' },
  { name: 'Interview Questions', to: { pathname: '/resources', search: '?tab=interview' }, icon: '❓' },
  { name: 'GitHub Repositories', to: { pathname: '/resources', search: '?tab=github' }, icon: '🐙' },
  { name: 'Certifications', to: { pathname: '/resources', search: '?tab=certs' }, icon: '🏆' },
  { name: 'Latest Updates', to: { pathname: '/resources', search: '?tab=latest' }, icon: '✨' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)
  const { darkMode, toggleTheme } = useTheme()
  const navigate = useNavigate()
  const languageMenuRef = useRef(null)
  const scrollRef = useRef(null)

  const checkScroll = useCallback(() => {
    const el = scrollRef.current
    if (el) {
      setCanScrollLeft(el.scrollLeft > 4)
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)
    }
  }, [])

  const scrollNav = useCallback((dir) => {
    const el = scrollRef.current
    if (el) {
      el.scrollBy({ left: dir === 'left' ? -240 : 240, behavior: 'smooth' })
    }
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`)
      setSearchQuery('')
    }
  }

  const closeMenus = () => setOpenMenu(null)

  useEffect(() => {
    checkScroll()
    const el = scrollRef.current
    if (el) {
      el.addEventListener('scroll', checkScroll)
      window.addEventListener('resize', checkScroll)
      return () => {
        el.removeEventListener('scroll', checkScroll)
        window.removeEventListener('resize', checkScroll)
      }
    }
  }, [checkScroll])

  useEffect(() => {
    if (openMenu !== 'languages') {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpenMenu(null)
      }
    }

    const handleOutsideInteraction = (event) => {
      const clickedScrollbar = event.clientX >= document.documentElement.clientWidth || event.clientY >= document.documentElement.clientHeight

      if (clickedScrollbar) {
        return
      }

      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target)) {
        setOpenMenu(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    document.addEventListener('pointerdown', handleOutsideInteraction)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('pointerdown', handleOutsideInteraction)
    }
  }, [openMenu])

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold gradient-text">CodeAtlas</span>
          </Link>

          <div className="hidden lg:flex items-center gap-1 min-w-0">
            <div ref={languageMenuRef} className="relative shrink-0">
              <button
                type="button"
                onClick={() => setOpenMenu(openMenu === 'languages' ? null : 'languages')}
                className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors inline-flex items-center gap-1"
                aria-haspopup="menu"
                aria-expanded={openMenu === 'languages'}
              >
                Languages
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {openMenu === 'languages' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 top-full mt-2 w-[340px] rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-2xl shadow-black/10 dark:shadow-black/40 overflow-hidden"
                  >
                    <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-800">
                      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                        Learning Resources
                      </div>
                      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                        Guides, docs, cheat sheets, books, and practice links.
                      </p>
                    </div>
                    <div className="relative">
                      <div className="p-2 pr-3 grid gap-1 max-h-[60vh] overflow-y-auto overscroll-contain">
                      {languageResources.map(item => (
                        <Link
                          key={item.name}
                          to={item.to}
                          onClick={() => setOpenMenu(null)}
                          className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        >
                          <span className="text-base">{item.icon}</span>
                          <span className="font-medium">{item.name}</span>
                        </Link>
                      ))}
                      </div>
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white via-white/90 to-transparent dark:from-gray-900 dark:via-gray-900/90" />
                      <div className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-gray-200/80 dark:border-gray-700/80 bg-white/90 dark:bg-gray-900/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
                        Scroll for more
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative flex-1 min-w-0 group">
              {canScrollLeft && (
                <button
                  type="button"
                  onClick={() => scrollNav('left')}
                  className="scroll-button left-0 ml-0.5"
                  aria-label="Scroll left"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                </button>
              )}
              <div
                ref={scrollRef}
                onScroll={checkScroll}
                className="flex items-center gap-1 scrollbar-horizontal"
              >
              {primaryNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenus}
                  className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors shrink-0"
                >
                  {item.name}
                </Link>
              ))}
              </div>
              {canScrollRight && (
                <button
                  type="button"
                  onClick={() => scrollNav('right')}
                  className="scroll-button right-0 mr-0.5"
                  aria-label="Scroll right"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <form onSubmit={handleSearch} className="hidden sm:block relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-48 lg:w-64 pl-9 pr-3 py-2 text-sm bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <svg className="absolute left-2.5 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </form>

            <button onClick={toggleTheme} className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" aria-label="Toggle theme">
              {darkMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}
            </button>

            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" aria-label="Menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-200 dark:border-gray-800"
          >
            <div className="px-4 py-3 space-y-1">
              <form onSubmit={handleSearch} className="sm:hidden mb-3">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </form>
              <div className="px-3 pt-2 pb-1 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                Learning Resources
              </div>
              {languageResources.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  onClick={() => { setIsOpen(false); closeMenus(); }}
                  className="block px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.name}
                </Link>
              ))}

              <div className="px-3 pt-4 pb-1 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                Explore
              </div>
              {primaryNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => { setIsOpen(false); closeMenus(); }}
                  className="block px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
