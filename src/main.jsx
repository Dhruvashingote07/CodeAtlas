import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from './context/ThemeContext'
import { BookmarkProvider } from './context/BookmarkContext'
import { SearchProvider } from './context/SearchContext'
import Analytics from './components/Analytics'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <BrowserRouter>
      <Analytics />
      <ThemeProvider>
        <BookmarkProvider>
          <SearchProvider>
            <App />
          </SearchProvider>
        </BookmarkProvider>
      </ThemeProvider>
    </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
)
