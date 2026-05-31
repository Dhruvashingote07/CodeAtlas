import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { categories, frontendTechnologies, backendTechnologies, toolCategories, roadmaps, bookCategories } from '../data/catalog'
import SectionHeader from '../components/SectionHeader'
import TechnologyCard from '../components/TechnologyCard'
import HelmetMeta from '../components/seo/HelmetMeta'
import JsonLd from '../components/seo/JsonLd'
import { getHomeMeta } from '../seo/metadata'
import { getOrganizationSchema, getWebsiteSchema } from '../seo/structuredData'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.5 },
}

export default function HomePage() {
  const featuredTechs = [...frontendTechnologies.slice(0, 3), ...backendTechnologies.slice(0, 3)]
  const featuredRoadmaps = roadmaps.slice(0, 4)
  const featuredTools = toolCategories.flatMap(c => c.tools).slice(0, 8)
  const featuredBooks = bookCategories.flatMap(c => c.books).slice(0, 6)

  const homeMeta = getHomeMeta()

  return (
    <div>
      <HelmetMeta {...homeMeta} />
      <JsonLd schema={getOrganizationSchema()} />
      <JsonLd schema={getWebsiteSchema()} />
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-950 dark:via-gray-950 dark:to-primary-950/20" />
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <motion.div className="text-center max-w-4xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
              Your Complete Developer Learning Platform
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight">
              The Complete Map of{' '}
              <span className="gradient-text">Software Development</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Master programming languages, AI, DevOps, cybersecurity, and more. Your all-in-one hub for learning, resources, and career growth.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/languages" className="btn-primary text-lg px-8">
                Start Learning
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </Link>
              <Link to="/roadmaps" className="btn-ghost text-lg">
                Explore Roadmaps
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Explore Categories"
            subtitle="Dive into any technology stack and start your learning journey"
            action={<Link to="/languages" className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline">View all →</Link>}
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {categories.map((cat, i) => (
              <motion.div key={cat.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                <Link to={`/${cat.id}`} className="card p-4 text-center group hover:-translate-y-1 block">
                  <span className="text-3xl block mb-2">{cat.icon}</span>
                  <h3 className="font-medium text-sm text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{cat.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{cat.count} technologies</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Technologies */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Popular Technologies"
            subtitle="Start with the most in-demand languages and frameworks"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTechs.map((tech, i) => (
              <TechnologyCard key={tech.id} item={tech} basePath="web-development" index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Learning Roadmaps */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Learning Roadmaps"
            subtitle="Follow structured paths to master any tech domain"
            action={<Link to="/roadmaps" className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline">All roadmaps →</Link>}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredRoadmaps.map((rm, i) => (
              <motion.div key={rm.id} {...fadeUp} transition={{ delay: i * 0.1 }}>
                <Link to={`/roadmaps/${rm.id}`} className="card p-6 block h-full hover:-translate-y-1">
                  <span className="text-3xl mb-3 block">{rm.icon}</span>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{rm.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{rm.description}</p>
                  <div className="mt-4 flex items-center gap-1 text-sm text-primary-600 dark:text-primary-400 font-medium">
                    {rm.steps.length} steps <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Developer Tools */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Top Developer Tools"
            subtitle="Discover the best tools for coding, design, DevOps, and more"
            action={<Link to="/tools" className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline">All tools →</Link>}
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {featuredTools.map((tool, i) => (
              <motion.a key={tool.name} href={tool.url} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="card p-4 flex items-center gap-3 hover:-translate-y-1">
                <span className="text-2xl">{tool.icon}</span>
                <div>
                  <h3 className="font-medium text-sm text-gray-900 dark:text-white">{tool.name}</h3>
                  <p className="text-xs text-gray-500 line-clamp-1">{tool.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Trending AI */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Trending AI Technologies"
            subtitle="Stay ahead with the latest in artificial intelligence and machine learning"
            action={<Link to="/ai-ml" className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline">Explore AI →</Link>}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {['AI Fundamentals', 'Generative AI', 'Prompt Engineering', 'LLMs', 'TensorFlow', 'PyTorch'].map((item, i) => (
              <motion.div key={item} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Link to="/ai-ml" className="card p-5 flex items-center gap-4 hover:-translate-y-1">
                  <span className="text-2xl">🤖</span>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">{item}</h3>
                    <p className="text-sm text-gray-500">Comprehensive learning resources</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Books */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Books & Documentation"
            subtitle="Curated book collection from official sources"
            action={<Link to="/books" className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline">Browse library →</Link>}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredBooks.map((book, i) => (
              <motion.div key={book.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="card p-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center text-white text-lg font-bold shrink-0">
                    {book.title.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-medium text-gray-900 dark:text-white line-clamp-1">{book.title}</h3>
                    <p className="text-sm text-gray-500">{book.author}</p>
                    <p className="text-xs text-gray-400 mt-1 line-clamp-2">{book.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-8 md:p-12 bg-gradient-to-br from-primary-600 to-accent-600 text-white text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Your Learning Journey?</h2>
              <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
                Join thousands of developers mastering new technologies. CodeAtlas is your complete map to the world of software development.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/languages" className="inline-flex items-center px-8 py-3 bg-white text-primary-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                  Get Started Free
                </Link>
                <Link to="/roadmaps" className="inline-flex items-center px-8 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20">
                  View Roadmaps
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Stay Updated</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Get the latest tech resources and learning paths delivered to your inbox.</p>
            <form className="mt-6 flex gap-3" onSubmit={e => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" />
              <button type="submit" className="btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
