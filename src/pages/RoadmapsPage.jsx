import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { roadmaps } from '../data/catalog'
import SectionHeader from '../components/SectionHeader'

function ExternalLinkIcon() {
  return (
    <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

export default function RoadmapsPage() {
  const { slug } = useParams()

  if (slug) {
    const roadmap = roadmaps.find(r => r.id === slug)
    if (!roadmap) return <div className="max-w-7xl mx-auto px-4 py-20 text-center text-gray-500">Roadmap not found</div>

    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/roadmaps" className="text-sm text-gray-500 hover:text-primary-600">&larr; All Roadmaps</Link>
        <div className="mt-6 flex items-start justify-between gap-4">
          <div>
            <span className="text-5xl">{roadmap.icon}</span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-4">{roadmap.name}</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">{roadmap.description}</p>
          </div>
          {roadmap.roadmapUrl && (
            <a
              href={roadmap.roadmapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center px-4 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-sm font-medium transition-colors shrink-0"
            >
              View on roadmap.sh
              <ExternalLinkIcon />
            </a>
          )}
        </div>
        {roadmap.roadmapUrl && (
          <a
            href={roadmap.roadmapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden mt-4 inline-flex items-center px-4 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            View full roadmap on roadmap.sh
            <ExternalLinkIcon />
          </a>
        )}
        <div className="mt-10 space-y-8">
          {roadmap.steps.map((step, i) => (
            <motion.div key={step.title} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="relative">
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-lg shrink-0">
                    {i + 1}
                  </div>
                  {i < roadmap.steps.length - 1 && <div className="w-0.5 flex-1 bg-primary-200 dark:bg-primary-800 mt-2" />}
                </div>
                <div className="pb-8 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {step.items.map(item => (
                      <a
                        key={item}
                        href={roadmap.roadmapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SectionHeader title="Learning Roadmaps" subtitle="Structured paths to master any technology domain" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {roadmaps.map((rm, i) => (
          <motion.div key={rm.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
            <Link to={`/roadmaps/${rm.id}`} className="card p-6 block h-full hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{rm.icon}</span>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{rm.name}</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{rm.description}</p>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-primary-600 dark:text-primary-400 font-medium">{rm.steps.length} steps</span>
                {rm.roadmapUrl && (
                  <span className="text-gray-400 dark:text-gray-500 flex items-center gap-1">
                    roadmap.sh <ExternalLinkIcon />
                  </span>
                )}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
