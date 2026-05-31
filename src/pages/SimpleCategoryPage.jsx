import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import HelmetMeta from '../components/seo/HelmetMeta'
import JsonLd from '../components/seo/JsonLd'
import { getBreadcrumbSchema as buildBreadcrumbSchema, buildItemListSchema } from '../seo/structuredData'

const categoryInfo = {
  'ai-ml': { title: 'Artificial Intelligence & Machine Learning', icon: '🤖', desc: 'Explore AI fundamentals, deep learning, LLMs, and ML frameworks like TensorFlow and PyTorch.', items: ['AI Fundamentals', 'Generative AI', 'Prompt Engineering', 'Large Language Models', 'Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning', 'Neural Networks', 'TensorFlow', 'PyTorch', 'LangChain', 'LlamaIndex'] },
  'data-science': { title: 'Data Science', icon: '📊', desc: 'Master data analysis, visualization, statistics, and scientific computing with Python.', items: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Statistics', 'Data Visualization', 'Data Wrangling', 'Statistical Analysis'] },
  'devops': { title: 'DevOps & Server Technologies', icon: '🛠️', desc: 'Learn CI/CD, containerization, cloud services, and infrastructure automation.', items: ['Linux', 'Docker', 'Kubernetes', 'Nginx', 'Jenkins', 'GitHub Actions', 'AWS', 'Azure', 'Google Cloud', 'Terraform', 'Ansible'] },
  'cybersecurity': { title: 'Cybersecurity', icon: '🔒', desc: 'Master ethical hacking, network security, penetration testing, and security tools.', items: ['Ethical Hacking', 'OWASP Top 10', 'Network Security', 'Penetration Testing', 'Kali Linux', 'Cryptography', 'Security Tools'] },
  'mobile-development': { title: 'Mobile Development', icon: '📱', desc: 'Build native and cross-platform mobile applications for iOS and Android.', items: ['Android', 'Kotlin', 'Swift', 'Flutter', 'React Native', 'iOS Development', 'Mobile UI/UX'] },
  'iot': { title: 'Internet of Things', icon: '🔌', desc: 'Build connected devices and IoT solutions with microcontrollers and cloud platforms.', items: ['Arduino', 'ESP32', 'Raspberry Pi', 'MQTT', 'Sensors', 'Embedded Systems', 'IoT Cloud'] },
  'databases': { title: 'Databases', icon: '🗄️', desc: 'Master SQL and NoSQL databases for modern application development.', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'SQLite', 'Cassandra', 'Firebase', 'Database Design'] },
}

export default function SimpleCategoryPage() {
  const { category } = useParams()
  const info = categoryInfo[category]

  if (!info) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Category not found</h1>
        <Link to="/" className="text-primary-600 hover:underline mt-4 inline-block">Go home</Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <HelmetMeta title={info.title} description={info.desc} canonicalUrl={`https://codeatlas.dev/${category}`} ogType="website" />
      <JsonLd schema={buildBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: info.title, path: `/${category}` },
      ])} />
      <JsonLd schema={buildItemListSchema({
        name: info.title,
        description: info.desc,
        items: info.items.map(item => ({ name: item, url: `/${category}` })),
      })} />
      <div className="mb-10">
        <span className="text-5xl">{info.icon}</span>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-4">{info.title}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">{info.desc}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {info.items.map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="card p-5 flex items-center gap-3 hover:-translate-y-1 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 font-bold">
              {item.charAt(0)}
            </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">{item}</h3>
              </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
