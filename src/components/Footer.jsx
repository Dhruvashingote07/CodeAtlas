import { Link } from 'react-router-dom'

const footerLinks = {
  Learning: [
    { name: 'Programming Languages', path: '/languages' },
    { name: 'Web Development', path: '/web-development' },
    { name: 'Databases', path: '/databases' },
    { name: 'AI & ML', path: '/ai-ml' },
    { name: 'DevOps', path: '/devops' },
    { name: 'Cybersecurity', path: '/cybersecurity' },
  ],
  Resources: [
    { name: 'Web Resources', path: '/resources' },
    { name: 'Database Resources', path: '/resources' },
    { name: 'AI & ML Resources', path: '/resources' },
    { name: 'DevOps Resources', path: '/resources' },
    { name: 'Cybersecurity Resources', path: '/resources' },
    { name: 'Interview Prep', path: '/interview-prep' },
    { name: 'Developer Tools', path: '/tools' },
    { name: 'Books Library', path: '/books' },
    { name: 'Cheat Sheets', path: '/languages' },
  ],
  Connect: [
    { name: 'GitHub', url: 'https://github.com' },
    { name: 'Twitter', url: 'https://twitter.com' },
    { name: 'Discord', url: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="text-2xl font-bold gradient-text">CodeAtlas</Link>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              The Complete Map of Software Development, AI, and Technology Learning.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">{title}</h3>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.path ? (
                      <Link to={link.path} className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                        {link.name}
                      </Link>
                    ) : (
                      <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 space-y-3">
          <p className="text-xs text-gray-400 dark:text-gray-500 text-center">
            FAQ Sections &mdash; 42+ technologies with 8+ FAQ entries each, SEO-optimized with FAQPage schema
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 text-center">
            &copy; {new Date().getFullYear()} CodeAtlas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
