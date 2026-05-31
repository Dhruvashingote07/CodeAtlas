import { useLocation, Link } from 'react-router-dom'
import { languages, categories, frontendTechnologies, backendTechnologies, databases, aiMLTechnologies, dataScienceTools, devOpsTools, cybersecurityTools, mobileTechnologies, iotTechnologies } from '../data/catalog'
import SectionHeader from '../components/SectionHeader'
import TechnologyCard from '../components/TechnologyCard'

const categoryData = {
  languages: { items: languages, title: 'Programming Languages', desc: 'Master any programming language with comprehensive guides, cheat sheets, and resources.' },
  'web-development': { items: [...frontendTechnologies, ...backendTechnologies], title: 'Web Development', desc: 'Frontend and backend technologies for building modern web applications.' },
  databases: { items: databases, title: 'Databases', desc: 'Master SQL and NoSQL databases for modern application development.' },
  'ai-ml': { items: aiMLTechnologies, title: 'Artificial Intelligence & Machine Learning', desc: 'Explore AI fundamentals, deep learning, LLMs, and ML frameworks.' },
  'data-science': { items: dataScienceTools, title: 'Data Science', desc: 'Master data analysis, visualization, statistics, and scientific computing.' },
  devops: { items: devOpsTools, title: 'DevOps', desc: 'Learn CI/CD, containerization, cloud services, and infrastructure automation.' },
  cybersecurity: { items: cybersecurityTools, title: 'Cybersecurity', desc: 'Master ethical hacking, network security, and penetration testing.' },
  'mobile-development': { items: mobileTechnologies, title: 'Mobile Development', desc: 'Build native and cross-platform mobile applications for iOS and Android.' },
  iot: { items: iotTechnologies, title: 'Internet of Things', desc: 'Build connected devices and IoT solutions with microcontrollers and cloud platforms.' },
}

export default function CategoryPage() {
  const { pathname } = useLocation()
  const category = pathname.replace(/^\//, '').split('/')[0]
  const data = categoryData[category]

  if (!data) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Category not found</h1>
        <Link to="/" className="text-primary-600 hover:underline mt-4 inline-block">Go home</Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SectionHeader title={data.title} subtitle={data.desc} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.items.map((item, i) => (
          <TechnologyCard key={item.id} item={item} basePath={category} index={i} />
        ))}
      </div>
    </div>
  )
}
