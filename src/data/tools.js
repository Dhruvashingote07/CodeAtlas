export const toolCategories = [
  {
    name: 'AI Tools',
    tools: [
      { name: 'ChatGPT', description: 'AI chatbot by OpenAI for conversation, coding, and content generation', url: 'https://chatgpt.com', icon: '🤖', features: ['Conversational AI', 'Code Generation', 'Content Writing'], useCases: ['Coding Help', 'Writing', 'Brainstorming'] },
      { name: 'Claude', description: 'Anthropic\'s AI assistant for analysis, writing, and coding', url: 'https://claude.ai', icon: '🔮', features: ['Long Context', 'Analysis', 'Code'], useCases: ['Analysis', 'Document Review', 'Coding'] },
      { name: 'Gemini', description: 'Google\'s multimodal AI model for text, images, and code', url: 'https://gemini.google.com', icon: '✨', features: ['Multimodal', 'Code', 'Reasoning'], useCases: ['Research', 'Coding', 'Content Creation'] },
      { name: 'GitHub Copilot', description: 'AI pair programmer integrated into your editor', url: 'https://github.com/features/copilot', icon: '🧑‍💻', features: ['Code Completion', 'Chat', 'PR Summaries'], useCases: ['Coding', 'Code Review', 'Learning'] },
    ],
  },
  {
    name: 'Coding Tools',
    tools: [
      { name: 'VS Code', description: 'Popular free code editor with extensive extensions marketplace', url: 'https://code.visualstudio.com', icon: '💻', features: ['Extensions', 'Debugger', 'Git Integration'], useCases: ['Web Development', 'Any Language'] },
      { name: 'IntelliJ IDEA', description: 'Java/ Kotlin IDE with intelligent code assistance', url: 'https://www.jetbrains.com/idea/', icon: '🧠', features: ['Smart Completion', 'Refactoring', 'Profiling'], useCases: ['Java Development', 'Android'] },
      { name: 'PyCharm', description: 'Python IDE with scientific tools and web development', url: 'https://www.jetbrains.com/pycharm/', icon: '🐍', features: ['Python Debugger', 'Scientific Tools', 'VCS'], useCases: ['Python Development', 'Data Science'] },
    ],
  },
  {
    name: 'Design Tools',
    tools: [
      { name: 'Figma', description: 'Collaborative interface design tool with real-time editing', url: 'https://figma.com', icon: '🎨', features: ['Vector Editing', 'Prototyping', 'Design Systems'], useCases: ['UI Design', 'Prototyping', 'Collaboration'] },
      { name: 'Canva', description: 'Easy-to-use graphic design platform for non-designers', url: 'https://canva.com', icon: '🖼️', features: ['Templates', 'Drag & Drop', 'Brand Kit'], useCases: ['Social Media', 'Presentations', 'Marketing'] },
    ],
  },
  {
    name: 'DevOps Tools',
    tools: [
      { name: 'Docker', description: 'Containerization platform for developing and running applications', url: 'https://docker.com', icon: '🐳', features: ['Containers', 'Compose', 'Swarm'], useCases: ['Microservices', 'CI/CD', 'Dev Environments'] },
      { name: 'Kubernetes', description: 'Container orchestration platform for automated deployment and scaling', url: 'https://kubernetes.io', icon: '☸️', features: ['Orchestration', 'Auto-scaling', 'Service Discovery'], useCases: ['Container Management', 'Cloud Native'] },
      { name: 'Jenkins', description: 'Open-source automation server for CI/CD pipelines', url: 'https://jenkins.io', icon: '📦', features: ['Pipeline as Code', 'Plugins', 'Distributed Builds'], useCases: ['CI/CD', 'Automation'] },
      { name: 'GitHub Actions', description: 'CI/CD and automation platform integrated with GitHub', url: 'https://github.com/features/actions', icon: '⚡', features: ['Workflows', 'Matrix Builds', 'Marketplace'], useCases: ['CI/CD', 'Automation', 'Deployment'] },
    ],
  },
  {
    name: 'Cloud Tools',
    tools: [
      { name: 'AWS', description: 'Amazon Web Services — comprehensive cloud computing platform', url: 'https://aws.amazon.com', icon: '☁️', features: ['Compute', 'Storage', 'AI Services'], useCases: ['Cloud Hosting', 'Serverless', 'Data'] },
      { name: 'Azure', description: 'Microsoft\'s cloud platform with AI, analytics, and DevOps services', url: 'https://azure.microsoft.com', icon: '🔷', features: ['AI', 'DevOps', 'Hybrid Cloud'], useCases: ['Enterprise Cloud', 'AI/ML'] },
      { name: 'Google Cloud', description: 'Google\'s cloud suite with data analytics and ML capabilities', url: 'https://cloud.google.com', icon: '🌐', features: ['BigQuery', 'AI Platform', 'Kubernetes'], useCases: ['Data Analytics', 'AI/ML', 'Hosting'] },
    ],
  },
  {
    name: 'API & Testing Tools',
    tools: [
      { name: 'Postman', description: 'API development and testing platform', url: 'https://postman.com', icon: '📮', features: ['API Testing', 'Collections', 'Mock Servers'], useCases: ['API Development', 'Testing'] },
      { name: 'Swagger', description: 'OpenAPI specification tools for designing and documenting APIs', url: 'https://swagger.io', icon: '📄', features: ['API Design', 'Documentation', 'Code Generation'], useCases: ['API Documentation', 'Design'] },
    ],
  },
]
