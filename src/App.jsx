import { Routes, Route } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import TechnologyPage from './pages/TechnologyPage'
import TechnologySubPage from './pages/Technology/TechnologySubPage'
import SimpleCategoryPage from './pages/SimpleCategoryPage'
import ToolsPage from './pages/ToolsPage'
import BooksPage from './pages/BooksPage'
import InterviewPrepPage from './pages/InterviewPrepPage'
import SearchPage from './pages/SearchPage'
import CheatsheetPage from './pages/CheatsheetPage'
import ResourcesPage from './pages/ResourcesPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />

          {/* Category pages with data files */}
          <Route path="/languages" element={<CategoryPage />} />
          <Route path="/languages/:slug" element={<TechnologyPage />} />
          <Route path="/languages/:slug/:contentType" element={<TechnologySubPage />} />
          <Route path="/web-development" element={<CategoryPage />} />
          <Route path="/web-development/:slug" element={<TechnologyPage />} />
          <Route path="/web-development/:slug/:contentType" element={<TechnologySubPage />} />
          <Route path="/databases" element={<CategoryPage />} />
          <Route path="/databases/:slug" element={<TechnologyPage />} />
          <Route path="/databases/:slug/:contentType" element={<TechnologySubPage />} />
          <Route path="/ai-ml" element={<CategoryPage />} />
          <Route path="/ai-ml/:slug" element={<TechnologyPage />} />
          <Route path="/ai-ml/:slug/:contentType" element={<TechnologySubPage />} />
          <Route path="/data-science" element={<CategoryPage />} />
          <Route path="/data-science/:slug" element={<TechnologyPage />} />
          <Route path="/data-science/:slug/:contentType" element={<TechnologySubPage />} />
          <Route path="/devops" element={<CategoryPage />} />
          <Route path="/devops/:slug" element={<TechnologyPage />} />
          <Route path="/devops/:slug/:contentType" element={<TechnologySubPage />} />
          <Route path="/cybersecurity" element={<CategoryPage />} />
          <Route path="/cybersecurity/:slug" element={<TechnologyPage />} />
          <Route path="/cybersecurity/:slug/:contentType" element={<TechnologySubPage />} />
          <Route path="/mobile-development" element={<CategoryPage />} />
          <Route path="/mobile-development/:slug" element={<TechnologyPage />} />
          <Route path="/mobile-development/:slug/:contentType" element={<TechnologySubPage />} />
          <Route path="/iot" element={<CategoryPage />} />
          <Route path="/iot/:slug" element={<TechnologyPage />} />
          <Route path="/iot/:slug/:contentType" element={<TechnologySubPage />} />

          {/* Special pages */}
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/interview-prep" element={<InterviewPrepPage />} />
          <Route path="/cheatsheet" element={<CheatsheetPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/search" element={<SearchPage />} />

          {/* Fallback for unknown category paths */}
          <Route path="/:category" element={<SimpleCategoryPage />} />
          <Route path="/:category/:slug/:contentType" element={<TechnologySubPage />} />

          {/* 404 Not Found */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  )
}
