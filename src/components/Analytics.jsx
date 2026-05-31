import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || ''
const CLARITY_PROJECT_ID = import.meta.env.VITE_CLARITY_PROJECT_ID || ''

function initGA() {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined' || window.gaInitialized) return
  window.gaInitialized = true
  const script = document.createElement('script')
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  script.async = true
  document.head.appendChild(script)
  window.dataLayer = window.dataLayer || []
  function gtag(){window.dataLayer.push(arguments)}
  gtag('js', new Date())
  gtag('config', GA_MEASUREMENT_ID, { send_page_view: false })
}

function initClarity() {
  if (!CLARITY_PROJECT_ID || typeof window === 'undefined' || window.clarityInitialized) return
  window.clarityInitialized = true
  const script = document.createElement('script')
  script.text = `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script","${CLARITY_PROJECT_ID}")`
  document.head.appendChild(script)
}

export default function Analytics() {
  const location = useLocation()

  useEffect(() => {
    if (!GA_MEASUREMENT_ID && !CLARITY_PROJECT_ID) return
    initGA()
    initClarity()
  }, [])

  useEffect(() => {
    if (!GA_MEASUREMENT_ID || typeof window === 'undefined') return
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_location: window.location.href,
        page_title: document.title,
      })
    }
  }, [location])

  if (!GA_MEASUREMENT_ID && !CLARITY_PROJECT_ID) return null

  return null
}
