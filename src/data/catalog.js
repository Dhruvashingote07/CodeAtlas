import content from './generated/content.json'

export const metadata = content.metadata

export const languages = content.languages.languages
export const categories = content.languages.categories

export const frontendTechnologies = content.webDevelopment.frontendTechnologies
export const backendTechnologies = content.webDevelopment.backendTechnologies

export const databases = content.databases.databases
export const databaseCategories = content.databases.databaseCategories

export const aiMLTechnologies = content.aiML.aiMLTechnologies
export const dataScienceTools = content.dataScience.dataScienceTools
export const devOpsTools = content.devops.devOpsTools
export const cybersecurityTools = content.cybersecurity.cybersecurityTools
export const mobileTechnologies = content.mobileDevelopment.mobileTechnologies
export const iotTechnologies = content.iot.iotTechnologies

export const toolCategories = content.tools.toolCategories
export const roadmaps = content.roadmaps.roadmaps
export const roadmapsByExperience = content.roadmaps.roadmapsByExperience
export const bookCategories = content.books.bookCategories
export const booksByDifficulty = content.books.booksByDifficulty
export const booksByLanguage = content.books.booksByLanguage
export const allBooks = content.books.allBooks
export const interviewTopics = content.interviewPrep.interviewTopics
export const interviewResources = content.interviewPrep.resources
export const syllabi = content.syllabi

export const allTechnologies = [
  ...languages,
  ...frontendTechnologies,
  ...backendTechnologies,
  ...databases,
  ...aiMLTechnologies,
  ...dataScienceTools,
  ...devOpsTools,
  ...cybersecurityTools,
  ...mobileTechnologies,
  ...iotTechnologies,
]

export const allContent = [
  ...languages.map(item => ({ ...item, _type: 'language', _path: 'languages' })),
  ...frontendTechnologies.map(item => ({ ...item, _type: 'web', _path: 'web-development' })),
  ...backendTechnologies.map(item => ({ ...item, _type: 'web', _path: 'web-development' })),
  ...databases.map(item => ({ ...item, _type: 'database', _path: 'databases' })),
  ...aiMLTechnologies.map(item => ({ ...item, _type: 'ai-ml', _path: 'ai-ml' })),
  ...dataScienceTools.map(item => ({ ...item, _type: 'data-science', _path: 'data-science' })),
  ...devOpsTools.map(item => ({ ...item, _type: 'devops', _path: 'devops' })),
  ...cybersecurityTools.map(item => ({ ...item, _type: 'cybersecurity', _path: 'cybersecurity' })),
  ...mobileTechnologies.map(item => ({ ...item, _type: 'mobile', _path: 'mobile-development' })),
  ...iotTechnologies.map(item => ({ ...item, _type: 'iot', _path: 'iot' })),
  ...roadmaps.map(item => ({ ...item, _type: 'roadmap', _path: 'roadmaps' })),
  ...allBooks.map(item => ({ ...item, _type: 'book', _path: 'books', id: item.id || item.title })),
  ...toolCategories.flatMap(category => category.tools).map(item => ({ ...item, _type: 'tool', _path: 'tools', id: item.id || item.name })),
  ...interviewTopics.flatMap(section => section.topics.flatMap(topicGroup => topicGroup.questions)).map(item => ({ ...item, _type: 'interview', _path: 'interview-prep', id: item.question, icon: '💬' })),
]

export default content