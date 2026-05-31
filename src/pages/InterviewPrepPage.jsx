import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { interviewTopics, interviewResources } from '../data/catalog'
import SectionHeader from '../components/SectionHeader'

export default function InterviewPrepPage() {
  const [activeTopic, setActiveTopic] = useState(interviewTopics[0]?.id)
  const [expandedQuestion, setExpandedQuestion] = useState(null)
  const [difficultyFilter, setDifficultyFilter] = useState('all')

  const topic = interviewTopics.find(t => t.id === activeTopic)
  const allQuestions = topic?.topics.flatMap(t => t.questions) || []
  const filteredQuestions = difficultyFilter === 'all'
    ? allQuestions
    : allQuestions.filter(q => q.difficulty.toLowerCase() === difficultyFilter)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SectionHeader title="Interview Preparation" subtitle="Practice with curated questions across topics and difficulty levels" />

      <div className="flex flex-wrap gap-2 mb-8">
        {interviewTopics.map(topic => (
          <button
            key={topic.id}
            onClick={() => { setActiveTopic(topic.id); setExpandedQuestion(null) }}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              activeTopic === topic.id
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            <span>{topic.icon}</span>
            {topic.name}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2 mb-6 flex-wrap">
        {['all', 'easy', 'medium', 'hard'].map(d => (
          <button
            key={d}
            onClick={() => setDifficultyFilter(d)}
            className={`px-3 py-1.5 text-xs font-medium rounded-full capitalize transition-colors ${
              difficultyFilter === d
                ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {d}
          </button>
        ))}
        <div className="flex-1" />
        {interviewResources?.map(resource => (
          <a
            key={resource.name}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            {resource.name}
          </a>
        ))}
      </div>

      <div className="space-y-3">
        <AnimatePresence mode="wait">
          {filteredQuestions.map((q, i) => (
            <motion.div
              key={q.question}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
              className="card"
            >
              <button
                onClick={() => setExpandedQuestion(expandedQuestion === i ? null : i)}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="font-medium text-gray-900 dark:text-white">{q.question}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    q.difficulty === 'Easy' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                    q.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                    'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                  }`}>{q.difficulty}</span>
                </div>
                <svg className={`w-5 h-5 text-gray-400 transition-transform ${expandedQuestion === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {expandedQuestion === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <div className="px-4 pb-4 border-t border-gray-100 dark:border-gray-800 pt-3">
                      <p className="text-sm text-gray-600 dark:text-gray-400">{q.description}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
