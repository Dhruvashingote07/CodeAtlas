import { useState } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { languages, frontendTechnologies, backendTechnologies, databases, aiMLTechnologies, dataScienceTools, devOpsTools, cybersecurityTools, mobileTechnologies, iotTechnologies } from '../data/catalog'
import { useBookmarks } from '../context/BookmarkContext'

const allItems = [...languages, ...frontendTechnologies, ...backendTechnologies, ...databases, ...aiMLTechnologies, ...dataScienceTools, ...devOpsTools, ...cybersecurityTools, ...mobileTechnologies, ...iotTechnologies]

const resourceCategories = [
  { id: 'documentation', label: 'Documentation', icon: '📘' },
  { id: 'books', label: 'Books & Ebooks', icon: '📚' },
  { id: 'notes', label: 'Notes', icon: '📝' },
  { id: 'cheatsheets', label: 'Cheat Sheets', icon: '📋' },
  { id: 'projects', label: 'Projects', icon: '🚀' },
  { id: 'practice', label: 'Practice Exercises', icon: '🧪' },
  { id: 'interview', label: 'Interview Questions', icon: '❓' },
  { id: 'github', label: 'GitHub Repositories', icon: '🐙' },
  { id: 'certs', label: 'Certifications', icon: '🏆' },
  { id: 'latest', label: 'Latest Updates', icon: '✨' },
]

function getCategoryData(item, categoryId) {
  switch (categoryId) {
    case 'documentation': return item.documentation ?? item.officialDocumentationLinks ?? null
    case 'books': return item.books ?? item.recommendedBooks ?? null
    case 'notes': return item.resources ?? item.freeLearningResources ?? null
    case 'cheatsheets': return item.cheatSheets ?? null
    case 'projects': return item.projectIdeas ?? null
    case 'practice': return item.practicePlatforms ?? null
    case 'interview': return item.interviewQuestions ?? item.interviewPreparationTopics ?? null
    case 'github': return item.githubRepositories ?? null
    case 'certs': return item.certifications ?? null
    case 'latest': return null
    default: return null
  }
}

const platformUrls = {
  'LeetCode': 'https://leetcode.com',
  'HackerRank': 'https://hackerrank.com',
  'Codewars': 'https://codewars.com',
  'Exercism': 'https://exercism.org',
  'CodeSignal': 'https://codesignal.com',
  'HackerEarth': 'https://hackerearth.com',
  'Edabit': 'https://edabit.com',
  'JS Challenger': 'https://jschallenger.com',
  'Advent of Code': 'https://adventofcode.com',
  'Project Euler': 'https://projecteuler.net',
  'CodeChef': 'https://codechef.com',
  'PHP Challenges': 'https://phpchallenges.com',
  'TypeHero': 'https://typehero.dev',
  'type-challenges': 'https://github.com/type-challenges/type-challenges',
  'CodeGym': 'https://codegym.cc',
  'Java Code Geeks': 'https://javacodegeeks.com',
  'Baeldung': 'https://baeldung.com',
  'Laracasts': 'https://laracasts.com',
  'Codecourse': 'https://codecourse.com',
  'LearnCpp': 'https://learncpp.com',
  'CppCon talks': 'https://cppcon.org',
  'Microsoft Learn': 'https://learn.microsoft.com',
  'DotNetTutorials': 'https://dotnettutorials.net',
  'Code Maze': 'https://code-maze.com',
  'Dot Net Tricks': 'https://dotnettricks.com',
  'PHP The Right Way': 'https://phptherightway.com',
  'PHP Watch': 'https://php.watch',
  'PHP Delusions': 'https://phpdelusions.net',
  'TypeScript Deep Dive': 'https://basarat.gitbook.io/typescript',
  'Total TypeScript': 'https://totaltypescript.com',
  'TypeScript TV': 'https://typescript.tv',
  'Type Challenges': 'https://tsch.js.org',
  'TS Playground': 'https://typescriptlang.org/play',
  'Go by Example': 'https://gobyexample.com',
  'Tour of Go': 'https://go.dev/tour',
  'Go101': 'https://go101.org',
  'Gophercises': 'https://gophercises.com',
  'Gopher Slack': 'https://invite.slack.golangbridge.org',
  'Golang Weekly': 'https://golangweekly.com',
  'Rust by Example': 'https://doc.rust-lang.org/stable/rust-by-example',
  'Rustlings': 'https://rustlings.cool',
  'The Rustonomicon': 'https://doc.rust-lang.org/nomicon',
  'Are We Rust Yet?': 'https://arewerustyet.org',
  'This Week in Rust': 'https://this-week-in-rust.org',
  'Rust Users Forum': 'https://users.rust-lang.org',
  'PortSwigger Web Security Academy': 'https://portswigger.net/web-security',
  'OWASP Cheat Sheet Series': 'https://cheatsheetseries.owasp.org',
  'TryHackMe': 'https://tryhackme.com',
  'Hack The Box': 'https://hackthebox.com',
  'PicoCTF': 'https://picoctf.org',
  'OverTheWire': 'https://overthewire.org',
  'SANS reading room': 'https://sans.org/white-papers',
  'CISA resources': 'https://cisa.gov',
  'SQLBolt': 'https://sqlbolt.com',
  'Mode SQL tutorial': 'https://mode.com/sql-tutorial',
  'PostgreSQL Tutorial': 'https://postgresqltutorial.com',
  'MySQL Tutorial': 'https://mysqltutorial.org',
  'MongoDB University': 'https://university.mongodb.com',
  'Redis University': 'https://redis.io/university',
  'DataCamp SQL tracks': 'https://datacamp.com/courses/tech:sql',
  'DataCamp': 'https://datacamp.com',
  'Kaggle Learn': 'https://kaggle.com/learn',
  'Analytics Vidhya': 'https://analyticsvidhya.com',
  'Towards Data Science': 'https://towardsdatascience.com',
  '365 Data Science': 'https://365datascience.com',
  'OpenIntro': 'https://openintro.org',
  'DeepLearning.AI': 'https://deeplearning.ai',
  'fast.ai': 'https://fast.ai',
  'Papers With Code': 'https://paperswithcode.com',
  'Hugging Face course': 'https://huggingface.co/learn',
  'OpenAI Cookbook': 'https://cookbook.openai.com',
  'Full Stack Deep Learning': 'https://fullstackdeeplearning.com',
  'Google Machine Learning Crash Course': 'https://developers.google.com/machine-learning/crash-course',
  'Linux Journey': 'https://linuxjourney.com',
  'Kubernetes the Hard Way': 'https://github.com/kelseyhightower/kubernetes-the-hard-way',
  'HashiCorp Learn': 'https://learn.hashicorp.com',
  'Grafana Play': 'https://play.grafana.org',
  'iOS App Development': 'https://developer.apple.com/tutorials/app-dev-training',
  'Android Basics by Google': 'https://developer.android.com/courses/android-basics-kotlin/course',
  'Expo learn': 'https://docs.expo.dev/tutorial',
  'CodeWithChris': 'https://codewithchris.com',
  'SparkFun tutorials': 'https://learn.sparkfun.com',
  'Node-RED resources': 'https://nodered.org/docs',
  'Raspberry Pi projects': 'https://projects.raspberrypi.org',
  'Arduino project hub': 'https://projecthub.arduino.cc',
  'Hackster.io': 'https://hackster.io',
  'IoT For All': 'https://iotforall.com',
  'Adafruit learning system': 'https://learn.adafruit.com',
}

const certUrls = {
  'Python Institute PCEP': 'https://pythoninstitute.org/pcep',
  'Python Institute PCAP': 'https://pythoninstitute.org/pcap',
  'Python Institute PCPP1': 'https://pythoninstitute.org/pcpp1',
  'Python Institute PCPP2': 'https://pythoninstitute.org/pcpp2',
  'Meta Front-End Developer Professional Certificate': 'https://coursera.org/professional-certificates/meta-front-end-developer',
  'Google Cloud Professional Cloud Developer': 'https://cloud.google.com/learn/certification/cloud-developer',
  'AWS Certified Developer Associate': 'https://aws.amazon.com/certification/certified-developer-associate',
  'AWS Certified DevOps Engineer Professional': 'https://aws.amazon.com/certification/certified-devops-engineer-professional',
  'AWS Certified Machine Learning Specialty': 'https://aws.amazon.com/certification/certified-machine-learning-specialty',
  'Google Cloud Professional Machine Learning Engineer': 'https://cloud.google.com/learn/certification/machine-learning-engineer',
  'Microsoft Certified: Azure Developer Associate': 'https://learn.microsoft.com/en-us/credentials/certifications/azure-developer',
  'Microsoft Certified: Azure Database Administrator Associate': 'https://learn.microsoft.com/en-us/credentials/certifications/azure-database-administrator-associate',
  'Microsoft Certified: Data Analyst Associate': 'https://learn.microsoft.com/en-us/credentials/certifications/data-analyst-associate',
  'Microsoft Certified: C# Developer': 'https://learn.microsoft.com/en-us/credentials/certifications',
  'Microsoft C++ certification paths': 'https://learn.microsoft.com/en-us/cpp',
  'Oracle Certified Professional Java SE 17 Developer': 'https://education.oracle.com/java-se-17-developer-professional-certification',
  'Oracle Certified Associate Java SE': 'https://education.oracle.com/java-se-certification',
  'Spring Certified Professional': 'https://spring.io/security/certification',
  'CKA': 'https://cncf.io/certification/cka',
  'CKAD': 'https://cncf.io/certification/ckad',
  'HashiCorp Terraform Associate': 'https://hashicorp.com/certification/terraform-associate',
  'Microsoft Azure DevOps Engineer Expert': 'https://learn.microsoft.com/en-us/credentials/certifications/azure-devops-engineer',
  'CompTIA Security+': 'https://comptia.org/certifications/security',
  'CEH': 'https://eccouncil.org/programs/certified-ethical-hacker-ceh',
  'OSCP': 'https://offsec.com/courses/pen-200',
  'CISSP': 'https://isc2.org/Certifications/CISSP',
  'GIAC GPEN': 'https://giac.org/certifications/penetration-tester-gpen',
  'GIAC GCIH': 'https://giac.org/certifications/incident-handler-gcih',
  'Zend Certified PHP Engineer': 'https://zend.com/training/php',
  'Google Associate Android Developer': 'https://developers.google.com/certification/associate-android-developer',
  'TensorFlow Developer Certificate': 'https://tensorflow.org/certificate',
  'Google Data Analytics Professional Certificate': 'https://coursera.org/professional-certificates/google-data-analytics',
  'IBM Data Science Professional Certificate': 'https://coursera.org/professional-certificates/ibm-data-science',
  'Oracle Database SQL Certified Associate': 'https://education.oracle.com/oracle-database-sql-certified-associate',
  'MongoDB Certified Developer Associate': 'https://mongodb.com/services/education/certification',
  'Apple app development learning path': 'https://developer.apple.com/tutorials',
  'Microsoft Technology Associate style TypeScript certification tracks': 'https://learn.microsoft.com/en-us/training',
}

function getUrl(category, name) {
  if (category === 'github') {
    return `https://github.com/${name}`
  }
  if (category === 'practice') {
    return platformUrls[name] || null
  }
  if (category === 'interview') {
    return null
  }
  if (category === 'project') {
    return `https://github.com/practical-tutorials/project-based-learning`
  }
  return null
}

function CategoryContent({ item, categoryId }) {
  const data = getCategoryData(item, categoryId)

  if (!data || (Array.isArray(data) && data.length === 0)) {
    return (
      <p className="text-gray-500 dark:text-gray-400 text-sm py-4 text-center">
        No resources available yet.
      </p>
    )
  }

  switch (categoryId) {
    case 'documentation':
    case 'notes':
      return (
        <div className="space-y-2">
          {data.map((doc, i) => {
            const url = doc.url || platformUrls[doc.name]
            return url ? (
              <a key={i} href={url} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-750 transition-colors">
                <span className="font-medium text-gray-900 dark:text-white text-sm">{doc.name}</span>
                <span className="text-xs text-gray-500">{doc.type ?? 'Link'}</span>
              </a>
            ) : (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg opacity-60">
                <span className="font-medium text-gray-900 dark:text-white text-sm">{doc.name}</span>
                <span className="text-xs text-gray-500">{doc.type ?? 'Link'}</span>
              </div>
            )
          })}
        </div>
      )

    case 'books':
      return (
        <div className="space-y-2">
          {data.map((book, i) => (
            book.url ? (
              <a key={i} href={book.url} target="_blank" rel="noopener noreferrer"
                className="block p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-750 transition-colors">
                <div className="font-medium text-gray-900 dark:text-white text-sm">{book.title}</div>
                <div className="text-xs text-gray-500 mt-0.5">{book.author}</div>
              </a>
            ) : (
              <div key={i} className="block p-3 bg-gray-50 dark:bg-gray-800 rounded-lg opacity-60">
                <div className="font-medium text-gray-900 dark:text-white text-sm">{book.title}</div>
                <div className="text-xs text-gray-500 mt-0.5">{book.author}</div>
              </div>
            )
          ))}
        </div>
      )

    case 'cheatsheets':
      return (
        <div className="space-y-2">
          {data.map((cs, i) => (
            cs.url ? (
              <a key={i} href={cs.url} target="_blank" rel="noopener noreferrer"
                className="block p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-750 transition-colors text-sm font-medium text-gray-900 dark:text-white">
                {cs.name}
              </a>
            ) : (
              <div key={i} className="block p-3 bg-gray-50 dark:bg-gray-800 rounded-lg opacity-60 text-sm font-medium text-gray-900 dark:text-white">
                {cs.name}
              </div>
            )
          ))}
        </div>
      )

    case 'practice':
      return (
        <div className="flex flex-wrap gap-2">
          {data.map((item, i) => (
            <a key={i} href={getUrl('practice', item)} target="_blank" rel="noopener noreferrer"
              className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              {item}
            </a>
          ))}
        </div>
      )

    case 'github':
      return (
        <div className="flex flex-wrap gap-2">
          {data.map((item, i) => (
            <a key={i} href={getUrl('github', item)} target="_blank" rel="noopener noreferrer"
              className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              {item}
            </a>
          ))}
        </div>
      )

    case 'projects':
      return (
        <div className="space-y-2">
          {data.map((item, i) => (
            <a key={i} href="https://github.com/practical-tutorials/project-based-learning" target="_blank" rel="noopener noreferrer"
              className="block p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-750 transition-colors text-sm text-gray-700 dark:text-gray-300">
              {item}
            </a>
          ))}
        </div>
      )

    case 'interview':
      return (
        <div className="space-y-2">
          {data.map((q, i) => {
            const text = typeof q === 'string' ? q : q.question
            return (
              <div key={i}
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span className="text-sm text-gray-700 dark:text-gray-300">{text}</span>
                {q?.difficulty && (
                  <span className={`shrink-0 text-xs px-2 py-0.5 rounded-full ml-2 ${
                    q.difficulty === 'Easy' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                    q.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                    'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                  }`}>{q.difficulty}</span>
                )}
              </div>
            )
          })}
        </div>
      )

    case 'certs':
      return (
        <div className="flex flex-wrap gap-2">
          {data.map((cert, i) => {
            const url = cert.url || certUrls[cert.name]
            return url ? (
              <a key={i} href={url} target="_blank" rel="noopener noreferrer"
                className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                {cert.name}
              </a>
            ) : (
              <span key={i} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-500 rounded-lg text-sm opacity-60">
                {cert.name}
              </span>
            )
          })}
        </div>
      )

    case 'latest':
      return (
        <p className="text-gray-500 dark:text-gray-400 text-sm py-4 text-center">
          Stay tuned for the latest updates, news, and community resources.
        </p>
      )

    default:
      return null
  }
}

const SUB_PAGE_TYPES = {
  documentation: 'documentation',
  books: 'books',
  cheatsheets: 'cheatsheet',
  projects: 'projects',
  practice: 'practice',
  interview: 'interview-questions',
  certs: 'certifications',
}

export default function TechnologyPage() {
  const { slug } = useParams()
  const location = useLocation()
  const parentPath = '/' + location.pathname.split('/').filter(Boolean).slice(0, -1).join('/')
  const category = location.pathname.split('/').filter(Boolean)[0]
  const item = allItems.find(t => t.id === slug)
  const { isBookmarked, toggleBookmark } = useBookmarks()
  const [activeResource, setActiveResource] = useState('documentation')

  if (!item) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Not found</h1>
        <Link to="/" className="text-primary-600 hover:underline mt-4 inline-block">Go home</Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-4 mb-6">
          <Link to={parentPath} className="text-sm text-gray-500 hover:text-primary-600">&larr; Back</Link>
        </div>
        <div className="flex items-start gap-6 mb-8">
          <span className="text-5xl">{item.icon}</span>
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{item.name}</h1>
              <button onClick={() => toggleBookmark({ id: item.id, name: item.name, icon: item.icon })} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <svg className={`w-6 h-6 ${isBookmarked(item.id) ? 'text-primary-500 fill-primary-500' : 'text-gray-400'}`} fill={isBookmarked(item.id) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </button>
            </div>
            {item.difficulty && (
              <span className={`inline-block mt-2 text-xs font-medium px-3 py-1 rounded-full ${
                item.difficulty === 'Beginner' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                item.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
              }`}>{item.difficulty}</span>
            )}
            <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">{item.description}</p>
            {item.roadmapUrl && (
              <a
                href={item.roadmapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-sm font-medium transition-colors"
              >
                View Roadmap
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="card p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Learning Resources</h2>

            <div className="flex flex-wrap gap-2 mb-6">
              {resourceCategories.map(cat => {
                const subPageSlug = SUB_PAGE_TYPES[cat.id]
                const linkTo = subPageSlug && slug
                  ? `/${category}/${slug}/${subPageSlug}`
                  : `/resources?tab=${cat.id}`
                return (
                  <Link
                    key={cat.id}
                    to={linkTo}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
                      activeResource === cat.id
                        ? 'bg-primary-600 text-white shadow-sm'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    <span className="text-base">{cat.icon}</span>
                    <span>{cat.label}</span>
                  </Link>
                )
              })}
            </div>

            <motion.div key={activeResource} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
              <CategoryContent item={item} categoryId={activeResource} />
            </motion.div>
          </motion.div>
        </div>

        <div className="space-y-6">
          {item.careerPaths && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="card p-5">
              <h3 className="font-bold text-gray-900 dark:text-white mb-3">Career Opportunities</h3>
              <div className="flex flex-wrap gap-2">
                {item.careerPaths.map(role => (
                  <span key={role} className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full">{role}</span>
                ))}
              </div>
            </motion.div>
          )}

          {item.salaryInformation && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="card p-5">
              <h3 className="font-bold text-gray-900 dark:text-white mb-3">Salary Information</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{item.salaryInformation.note}</p>
              <div className="grid grid-cols-1 gap-2">
                {['entry', 'mid', 'senior'].map(level => (
                  <div key={level} className="rounded-lg bg-gray-50 dark:bg-gray-800 p-2.5">
                    <div className="text-xs uppercase text-gray-500">{level}</div>
                    <div className="font-semibold text-gray-900 dark:text-white">{item.salaryInformation[level]}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {item.technologyEcosystem && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="card p-5">
              <h3 className="font-bold text-gray-900 dark:text-white mb-3">Ecosystem</h3>
              <div className="flex flex-wrap gap-2">
                {item.technologyEcosystem.map(tech => (
                  <span key={tech} className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full">{tech}</span>
                ))}
              </div>
            </motion.div>
          )}

          {item.relatedTechnologies && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="card p-5">
              <h3 className="font-bold text-gray-900 dark:text-white mb-3">Related Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {item.relatedTechnologies.map(rel => (
                  <span key={rel} className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full">{rel}</span>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
