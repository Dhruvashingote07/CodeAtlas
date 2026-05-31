import { useState } from 'react'
import { motion } from 'framer-motion'
import { toolCategories } from '../data/catalog'
import SectionHeader from '../components/SectionHeader'

export default function ToolsPage() {
  const [activeCategory, setActiveCategory] = useState(toolCategories[0]?.name)

  const activeTools = toolCategories.find(c => c.name === activeCategory)?.tools || []

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SectionHeader title="Developer Tools" subtitle="Curated directory of the best tools for developers" />

      <div className="flex flex-wrap gap-2 mb-8">
        {toolCategories.map(cat => (
          <button
            key={cat.name}
            onClick={() => setActiveCategory(cat.name)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              activeCategory === cat.name
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeTools.map((tool, i) => (
          <motion.a
            key={tool.name}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="card p-5 block hover:-translate-y-1"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">{tool.icon}</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{tool.name}</h3>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{tool.description}</p>
            <div className="space-y-2">
              <div>
                <span className="text-xs font-medium text-gray-500 uppercase">Features</span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {tool.features.map(f => <span key={f} className="text-xs px-2 py-0.5 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full">{f}</span>)}
                </div>
              </div>
              <div>
                <span className="text-xs font-medium text-gray-500 uppercase">Use Cases</span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {tool.useCases.map(u => <span key={u} className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full">{u}</span>)}
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  )
}
