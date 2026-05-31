export const frontendTechnologies = [
  {
    id: 'html', name: 'HTML', icon: '🟧', color: '#E34F26',
    description: 'The standard markup language for creating web pages. Defines the structure and content of web documents.',
    roadmapUrl: 'https://roadmap.sh/html',
    topics: ['Elements', 'Attributes', 'Forms', 'Semantic HTML', 'SEO Basics', 'Accessibility'],
    resources: [
      { name: 'MDN HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', type: 'Documentation' },
      { name: 'W3Schools HTML', url: 'https://www.w3schools.com/html/', type: 'Tutorial' },
      { name: 'web.dev HTML', url: 'https://web.dev/learn/html', type: 'Tutorial' },
    ],
  },
  {
    id: 'css', name: 'CSS', icon: '🔵', color: '#1572B6',
    description: 'Cascading Style Sheets for styling web pages. Controls layout, colors, fonts, and responsive design.',
    roadmapUrl: 'https://roadmap.sh/css',
    topics: ['Selectors', 'Box Model', 'Flexbox', 'Grid', 'Animations', 'Responsive Design', 'Preprocessors'],
    resources: [
      { name: 'MDN CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', type: 'Documentation' },
      { name: 'CSS-Tricks', url: 'https://css-tricks.com', type: 'Articles' },
      { name: 'web.dev CSS', url: 'https://web.dev/learn/css', type: 'Tutorial' },
    ],
  },
  {
    id: 'react', name: 'React', icon: '⚛️', color: '#61DAFB',
    description: 'A JavaScript library for building user interfaces. Component-based, declarative, and efficient.',
    roadmapUrl: 'https://roadmap.sh/react',
    topics: ['JSX', 'Components', 'Props', 'State', 'Hooks', 'Context', 'Routing', 'Testing'],
    resources: [
      { name: 'React Docs', url: 'https://react.dev', type: 'Official' },
      { name: 'React Tutorial', url: 'https://react.dev/learn', type: 'Tutorial' },
      { name: 'Epic React', url: 'https://epicreact.dev', type: 'Course' },
    ],
  },
  {
    id: 'vue', name: 'Vue.js', icon: '💚', color: '#4FC08D',
    description: 'A progressive JavaScript framework for building UIs. Approachable, versatile, and performant.',
    roadmapUrl: 'https://roadmap.sh/vue',
    topics: ['Reactivity', 'Components', 'Directives', 'Vue Router', 'Vuex/Pinia', 'Composition API'],
    resources: [
      { name: 'Vue Docs', url: 'https://vuejs.org', type: 'Official' },
      { name: 'Vue Mastery', url: 'https://www.vuemastery.com', type: 'Course' },
      { name: 'Vue School', url: 'https://vueschool.io', type: 'Course' },
    ],
  },
  {
    id: 'angular', name: 'Angular', icon: '🔴', color: '#DD0031',
    description: 'A TypeScript-based web application framework. Full-featured platform for building scalable enterprise apps.',
    roadmapUrl: 'https://roadmap.sh/angular',
    topics: ['Components', 'Templates', 'Services', 'Routing', 'Forms', 'RxJS', 'Testing'],
    resources: [
      { name: 'Angular Docs', url: 'https://angular.dev', type: 'Official' },
      { name: 'Angular University', url: 'https://angular-university.io', type: 'Course' },
      { name: 'Angular Guide', url: 'https://guide-angular.com', type: 'Tutorial' },
    ],
  },
  {
    id: 'nextjs', name: 'Next.js', icon: '⬛', color: '#000000',
    description: 'A React framework for production. Provides SSR, static generation, API routes, and more.',
    roadmapUrl: 'https://roadmap.sh/nextjs',
    topics: ['Pages', 'Routing', 'SSR', 'SSG', 'API Routes', 'Middleware', 'App Router'],
    resources: [
      { name: 'Next.js Docs', url: 'https://nextjs.org/docs', type: 'Official' },
      { name: 'Next.js Learn', url: 'https://nextjs.org/learn', type: 'Tutorial' },
      { name: 'Vercel Templates', url: 'https://vercel.com/templates', type: 'Reference' },
    ],
  },
]

export const backendTechnologies = [
  {
    id: 'nodejs', name: 'Node.js', icon: '💚', color: '#339933',
    description: 'JavaScript runtime built on Chrome\'s V8 engine. Enables server-side JavaScript development.',
    roadmapUrl: 'https://roadmap.sh/nodejs',
    topics: ['Modules', 'NPM', 'Express', 'File System', 'Streams', 'Authentication', 'REST APIs'],
    resources: [
      { name: 'Node.js Docs', url: 'https://nodejs.org/docs/latest/api/', type: 'Official' },
      { name: 'Node.js Design Patterns', url: 'https://www.nodejsdesignpatterns.com', type: 'Book' },
      { name: 'The Art of Node', url: 'https://github.com/maxogden/art-of-node', type: 'Guide' },
    ],
  },
  {
    id: 'express', name: 'Express.js', icon: '⚡', color: '#000000',
    description: 'Fast, unopinionated, minimalist web framework for Node.js. The de facto standard for Node.js backend.',
    roadmapUrl: 'https://www.tutorialspoint.com/expressjs/index.htm',
    topics: ['Routing', 'Middleware', 'Error Handling', 'Template Engines', 'REST APIs', 'Security'],
    resources: [
      { name: 'Express Docs', url: 'https://expressjs.com', type: 'Official' },
      { name: 'Express Tutorial', url: 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs', type: 'Tutorial' },
    ],
  },
  {
    id: 'spring-boot', name: 'Spring Boot', icon: '🌱', color: '#6DB33F',
    description: 'Java-based framework for building production-ready microservices and web applications.',
    roadmapUrl: 'https://roadmap.sh/spring-boot',
    topics: ['Auto-Configuration', 'REST APIs', 'Data JPA', 'Security', 'Microservices', 'Testing'],
    resources: [
      { name: 'Spring Docs', url: 'https://spring.io/projects/spring-boot', type: 'Official' },
      { name: 'Baeldung Spring', url: 'https://www.baeldung.com/spring-boot', type: 'Tutorial' },
      { name: 'Spring Guides', url: 'https://spring.io/guides', type: 'Tutorial' },
    ],
  },
  {
    id: 'django', name: 'Django', icon: '🎸', color: '#092E20',
    description: 'High-level Python web framework that encourages rapid development and clean, pragmatic design.',
    roadmapUrl: 'https://roadmap.sh/django',
    topics: ['Models', 'Views', 'Templates', 'ORM', 'Admin', 'Authentication', 'REST Framework'],
    resources: [
      { name: 'Django Docs', url: 'https://docs.djangoproject.com', type: 'Official' },
      { name: 'Django Girls', url: 'https://tutorial.djangogirls.org', type: 'Tutorial' },
      { name: 'DRF Docs', url: 'https://www.django-rest-framework.org', type: 'Documentation' },
    ],
  },
  {
    id: 'flask', name: 'Flask', icon: '🧪', color: '#000000',
    description: 'Lightweight Python web framework with a simple but extensible core. Great for APIs and microservices.',
    roadmapUrl: 'https://www.tutorialspoint.com/flask/index.htm',
    topics: ['Routing', 'Templates', 'Requests', 'SQLAlchemy', 'Blueprints', 'Testing'],
    resources: [
      { name: 'Flask Docs', url: 'https://flask.palletsprojects.com', type: 'Official' },
      { name: 'Flask Mega-Tutorial', url: 'https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world', type: 'Tutorial' },
    ],
  },
  {
    id: 'laravel', name: 'Laravel', icon: '🔴', color: '#FF2D20',
    description: 'PHP web framework with elegant syntax. Includes ORM, routing, authentication, and more out of the box.',
    roadmapUrl: 'https://roadmap.sh/laravel',
    topics: ['Routing', 'Eloquent ORM', 'Blade Templates', 'Artisan', 'Authentication', 'Queues'],
    resources: [
      { name: 'Laravel Docs', url: 'https://laravel.com/docs', type: 'Official' },
      { name: 'Laracasts', url: 'https://laracasts.com', type: 'Course' },
      { name: 'Laravel News', url: 'https://laravel-news.com', type: 'Articles' },
    ],
  },
]
