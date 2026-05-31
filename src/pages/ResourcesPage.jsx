import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, Button, Badge, SearchInput } from '../components/ui';

const resourceTabs = [
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
];

const ResourcesPage = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState(searchParams.get('tab') || 'documentation');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setActiveTab(searchParams.get('tab') || 'documentation');
  }, [searchParams]);

  const resources = {
    documentation: [
      {
        title: 'Official Documentation',
        items: [
          { name: 'MDN Web Docs', url: 'https://developer.mozilla.org', topics: 'Web technologies', icon: '🌐' },
          { name: 'Python Docs', url: 'https://python.org', topics: 'Python reference', icon: '🐍' },
          { name: 'React Docs', url: 'https://react.dev', topics: 'React framework', icon: '⚛️' },
          { name: 'Node.js Docs', url: 'https://nodejs.org', topics: 'Node.js runtime', icon: '🟢' },
          { name: 'PostgreSQL Docs', url: 'https://postgresql.org', topics: 'Database reference', icon: '🗄️' },
          { name: 'Docker Docs', url: 'https://docker.com', topics: 'Container platform', icon: '🐳' },
        ]
      }
    ],
    books: [
      {
        title: 'Best Books by Category',
        items: [
          { category: 'Python', count: 3, books: ['Python Crash Course', 'Fluent Python', 'Effective Python'] },
          { category: 'JavaScript', count: 3, books: ['Eloquent JavaScript', 'You Don\'t Know JS', 'JavaScript: The Good Parts'] },
          { category: 'Web Development', count: 7, books: ['Learning React', 'CSS Secrets', 'Web Performance in Action'] },
          { category: 'Machine Learning', count: 3, books: ['Hands-On ML', 'Deep Learning', 'NLP in Action'] },
          { category: 'DevOps', count: 4, books: ['Docker Deep Dive', 'Kubernetes in Action', 'The DevOps Handbook'] },
        ]
      }
    ],
    notes: [
      {
        title: 'Learning Platforms & Notes',
        items: [
          { name: 'freeCodeCamp', url: 'https://freecodecamp.org', topics: 'Free coding education', type: 'Interactive' },
          { name: 'Codecademy', url: 'https://codecademy.com', topics: 'Interactive coding courses', type: 'Interactive' },
          { name: 'The Odin Project', url: 'https://theodinproject.com', topics: 'Full-stack curriculum', type: 'Curriculum' },
          { name: 'Coursera', url: 'https://coursera.org', topics: 'University-level courses', type: 'Video' },
          { name: 'Udemy', url: 'https://udemy.com', topics: 'Online video courses', type: 'Video' },
          { name: 'LinkedIn Learning', url: 'https://linkedin.com/learning', topics: 'Professional skills', type: 'Video' },
        ]
      }
    ],
    cheatsheets: [
      {
        title: 'Quick Reference & Cheat Sheets',
        items: [
          { name: 'QuickRef', url: 'https://quickref.me', description: 'Community cheat sheets for every language' },
          { name: 'DevHints', url: 'https://devhints.io', description: 'Collection of cheat sheets' },
          { name: 'Cheatography', url: 'https://cheatography.com', description: 'Thousands of cheat sheets' },
          { name: 'OverAPI', url: 'https://overapi.com', description: 'All cheat sheets in one place' },
          { name: 'Big O Cheat Sheet', url: 'https://bigocheatsheet.io', description: 'Algorithm complexity reference' },
          { name: 'Flexbox Cheat Sheet', url: 'https://flexbox.malven.co', description: 'CSS flexbox visual guide' },
        ]
      }
    ],
    projects: [
      {
        title: 'Project Ideas & Build Guides',
        items: [
          { name: 'Project Based Learning', url: 'https://github.com/practical-tutorials/project-based-learning', description: 'Curated project tutorials' },
          { name: 'App Ideas Collection', url: 'https://github.com/florinpop17/app-ideas', description: 'Beginner to advanced app ideas' },
          { name: 'Build Your Own X', url: 'https://github.com/codecrafters-io/build-your-own-x', description: 'Build your own technology' },
          { name: 'Developer Portfolio', url: 'https://github.com/emmabostian/developer-portfolios', description: 'Portfolio inspiration' },
        ]
      }
    ],
    practice: [
      {
        title: 'Practice Platforms',
        items: [
          { name: 'LeetCode', url: 'https://leetcode.com', description: 'Algorithm & interview practice', difficulty: 'All Levels' },
          { name: 'HackerRank', url: 'https://hackerrank.com', description: 'Coding challenges & contests', difficulty: 'All Levels' },
          { name: 'Codewars', url: 'https://codewars.com', description: 'Language-specific kata', difficulty: 'All Levels' },
          { name: 'Exercism', url: 'https://exercism.org', description: 'Mentored coding tracks', difficulty: 'Beginner+' },
          { name: 'CodeSignal', url: 'https://codesignal.com', description: 'Skill assessment & practice', difficulty: 'All Levels' },
          { name: 'Advent of Code', url: 'https://adventofcode.com', description: 'Annual coding puzzles', difficulty: 'Intermediate+' },
        ]
      }
    ],
    interview: [
      {
        title: 'Interview Preparation',
        items: [
          { name: 'Tech Interview Handbook', url: 'https://techinterviewhandbook.org', description: 'Comprehensive interview guide' },
          { name: 'NeetCode', url: 'https://neetcode.io', description: 'Curated algorithm practice' },
          { name: 'System Design Primer', url: 'https://github.com/donnemartin/system-design-primer', description: 'System design resources' },
          { name: 'Pramp', url: 'https://pramp.com', description: 'Free mock interviews' },
          { name: 'Interviewing.io', url: 'https://interviewing.io', description: 'Anonymous practice interviews' },
          { name: 'Levels.fyi', url: 'https://levels.fyi', description: 'Salary & compensation data' },
        ]
      }
    ],
    github: [
      {
        title: 'Curated GitHub Repositories',
        items: [
          { name: 'Awesome Lists', url: 'https://github.com/sindresorhus/awesome', description: 'Curated list of awesome resources' },
          { name: 'Free Programming Books', url: 'https://github.com/EbookFoundation/free-programming-books', description: 'Freely available programming books' },
          { name: 'Public APIs', url: 'https://github.com/public-apis/public-apis', description: 'Free APIs for development' },
          { name: 'Developer Roadmap', url: 'https://github.com/kamranahmedse/developer-roadmap', description: 'Community-driven roadmaps' },
          { name: 'Design Resources', url: 'https://github.com/bradtraversy/design-resources-for-developers', description: 'Curated design resources' },
          { name: 'JavaScript Algorithms', url: 'https://github.com/trekhleb/javascript-algorithms', description: 'Algorithms in JavaScript' },
        ]
      }
    ],
    certs: [
      {
        title: 'Certification Paths',
        items: [
          { name: 'AWS Certifications', url: 'https://aws.amazon.com/certification', description: 'Cloud certification tracks', provider: 'Amazon' },
          { name: 'Microsoft Learn', url: 'https://learn.microsoft.com/en-us/training', description: 'Azure & .NET certifications', provider: 'Microsoft' },
          { name: 'Google Cloud Certifications', url: 'https://cloud.google.com/learn/certification', description: 'GCP certification paths', provider: 'Google' },
          { name: 'Linux Foundation', url: 'https://training.linuxfoundation.org/certification', description: 'Open source certifications', provider: 'Linux Foundation' },
          { name: 'CompTIA', url: 'https://comptia.org/certifications', description: 'IT & security certifications', provider: 'CompTIA' },
          { name: 'Python Institute', url: 'https://pythoninstitute.org/certification', description: 'Python certifications', provider: 'Python Institute' },
        ]
      }
    ],
    latest: [
      {
        title: 'Stay Updated',
        items: [
          { name: 'Hacker News', url: 'https://news.ycombinator.com', description: 'Tech news and discussion' },
          { name: 'Dev.to', url: 'https://dev.to', description: 'Developer articles and discussion' },
          { name: 'Changelog', url: 'https://changelog.com', description: 'Open source news podcast' },
          { name: 'TechCrunch', url: 'https://techcrunch.com', description: 'Startup and tech news' },
          { name: 'The Verge', url: 'https://theverge.com', description: 'Technology news and reviews' },
          { name: 'Ars Technica', url: 'https://arstechnica.com', description: 'In-depth tech journalism' },
        ]
      }
    ],
  };

  const stats = [
    { label: 'Official Docs', value: '12+', icon: '📘' },
    { label: 'Books & Ebooks', value: '100+', icon: '📚' },
    { label: 'Practice Platforms', value: '15+', icon: '🧪' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Complete Learning Resources</h1>
          <p className="text-xl opacity-90 mb-8">
            Everything you need to learn and master software development
          </p>
          <div className="max-w-2xl">
            <SearchInput
              value={searchTerm}
              onChange={setSearchTerm}
              placeholder="Search resources..."
              onSubmit={() => {}}
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 dark:border-gray-800 pb-4">
          {resourceTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all inline-flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="space-y-8">
          {activeTab === 'books' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
              <h2 className="text-3xl font-bold mb-6">Recommended Books by Category</h2>
              <div className="space-y-4">
                {resources.books[0].items.map((item, idx) => (
                  <Card key={idx} hover>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">{item.category}</h3>
                        <Badge variant="secondary" size="sm" className="mb-3">{item.count} books</Badge>
                        <ul className="space-y-1">
                          {item.books.map((book, idx) => (
                            <li key={idx} className="text-gray-600 dark:text-gray-400">• {book}</li>
                          ))}
                        </ul>
                      </div>
                      <a href="/books" className="text-indigo-600 hover:underline shrink-0">View All →</a>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'notes' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
              <h2 className="text-3xl font-bold mb-6">Learning Platforms & Notes</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {resources.notes[0].items.map((item, idx) => (
                  <Card key={idx} hover>
                    <Badge variant="secondary" size="sm" className="mb-2">{item.type}</Badge>
                    <h3 className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mb-2">{item.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{item.topics}</p>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline text-sm font-medium">Visit →</a>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'cheatsheets' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
              <h2 className="text-3xl font-bold mb-6">Quick Reference & Cheat Sheets</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {resources.cheatsheets[0].items.map((item, idx) => (
                  <Card key={idx} hover>
                    <h3 className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mb-2">{item.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{item.description}</p>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline text-sm font-medium">Visit →</a>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'projects' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
              <h2 className="text-3xl font-bold mb-6">Project Ideas & Build Guides</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {resources.projects[0].items.map((item, idx) => (
                  <Card key={idx} hover>
                    <h3 className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mb-2">{item.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{item.description}</p>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline text-sm font-medium">Visit →</a>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'practice' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
              <h2 className="text-3xl font-bold mb-6">Practice Platforms</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {resources.practice[0].items.map((item, idx) => (
                  <Card key={idx} hover>
                    <Badge variant="accent" size="sm" className="mb-2">{item.difficulty}</Badge>
                    <h3 className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mb-2">{item.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{item.description}</p>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline text-sm font-medium">Visit →</a>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'interview' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
              <h2 className="text-3xl font-bold mb-6">Interview Preparation</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {resources.interview[0].items.map((item, idx) => (
                  <Card key={idx} hover>
                    <h3 className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mb-2">{item.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{item.description}</p>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline text-sm font-medium">Visit →</a>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'github' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
              <h2 className="text-3xl font-bold mb-6">Curated GitHub Repositories</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {resources.github[0].items.map((item, idx) => (
                  <Card key={idx} hover>
                    <h3 className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mb-2">{item.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{item.description}</p>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline text-sm font-medium">Visit →</a>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'certs' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
              <h2 className="text-3xl font-bold mb-6">Certification Paths</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {resources.certs[0].items.map((item, idx) => (
                  <Card key={idx} hover>
                    <Badge variant="secondary" size="sm" className="mb-2">{item.provider}</Badge>
                    <h3 className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mb-2">{item.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{item.description}</p>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline text-sm font-medium">Learn More →</a>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'latest' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
              <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {resources.latest[0].items.map((item, idx) => (
                  <Card key={idx} hover>
                    <h3 className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mb-2">{item.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{item.description}</p>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline text-sm font-medium">Visit →</a>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'documentation' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
              <h2 className="text-3xl font-bold mb-6">Official Documentation</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {resources.documentation[0].items.map((item, idx) => (
                  <Card key={idx} hover>
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <h3 className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mb-2">{item.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{item.topics}</p>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline text-sm font-medium">Read Docs →</a>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-lg opacity-90 mb-6">
            Choose a path, follow a roadmap, and explore all resources available
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button variant="accent" onClick={() => window.location.href = '/roadmaps'}>View Roadmaps</Button>
            <Button variant="ghost" onClick={() => window.location.href = '/books'}>Browse Books</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
