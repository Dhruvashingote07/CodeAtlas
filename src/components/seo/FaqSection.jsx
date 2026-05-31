import { motion } from 'framer-motion'
import JsonLd from './JsonLd'
import { getFAQSchema } from '../../seo/structuredData'

export default function FaqSection({ questions, techName }) {
  if (!questions || questions.length === 0) return null

  const schema = getFAQSchema(questions)

  return (
    <section className="mt-8">
      <JsonLd schema={schema} />
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        Frequently Asked Questions about {techName}
      </h2>
      <div className="space-y-3">
        {questions.map((faq, i) => (
          <motion.details
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="card p-4 group cursor-pointer"
          >
            <summary className="font-medium text-gray-900 dark:text-white list-none flex items-center justify-between">
              <span>{faq.question}</span>
              <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">
              {faq.answer}
            </p>
          </motion.details>
        ))}
      </div>
    </section>
  )
}
