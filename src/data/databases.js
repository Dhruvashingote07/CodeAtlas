export const databases = [
  {
    id: 'mysql', name: 'MySQL', icon: '🐬', color: '#4479A1',
    description: 'The world\'s most popular open-source relational database. Known for reliability, performance, and ease of use in web applications.',
    difficulty: 'Beginner', popularity: 1, paradigms: ['Relational', 'SQL'],
    roadmapUrl: 'https://www.tutorialspoint.com/mysql/index.htm',
    tags: ['mysql', 'sql', 'relational', 'database', 'rdbms'],
    topics: ['Overview', 'Installation', 'Data Types', 'CRUD Operations', 'Joins', 'Indexes', 'Normalization', 'Transactions', 'Stored Procedures', 'Views', 'Performance Tuning'],
    resources: [
      { name: 'MySQL Docs', url: 'https://dev.mysql.com/doc/', type: 'Official' },
      { name: 'MySQL Tutorial', url: 'https://www.mysqltutorial.org', type: 'Tutorial' },
      { name: 'PlanetMySQL', url: 'https://planet.mysql.com', type: 'Community' },
    ],
    cheatSheets: [
      { name: 'MySQL Cheat Sheet', url: 'https://quickref.me/mysql' },
    ],
    documentation: [
      { name: 'MySQL Reference Manual', url: 'https://dev.mysql.com/doc/refman/en/' },
      { name: 'MySQL Blog', url: 'https://dev.mysql.com/blog-archive/' },
    ],
    books: [
      { title: 'MySQL Cookbook', author: 'Paul DuBois' },
      { title: 'Learning MySQL', author: 'Seyed Tahaghoghi' },
    ],
    interviewQuestions: [
      { question: 'What is the difference between INNER JOIN and LEFT JOIN?', difficulty: 'Easy' },
      { question: 'Explain database normalization', difficulty: 'Medium' },
      { question: 'What are ACID properties?', difficulty: 'Medium' },
    ],
    roadmap: ['SQL Basics', 'Database Design', 'Normalization', 'Indexing & Optimization', 'Replication', 'Backup & Recovery', 'Advanced Features'],
    careerOpportunities: ['Database Administrator', 'Backend Developer', 'Data Engineer', 'DevOps Engineer'],
  },
  {
    id: 'postgresql', name: 'PostgreSQL', icon: '🐘', color: '#336791',
    description: 'Advanced open-source relational database with extensive SQL compliance and powerful features like JSON support and custom extensions.',
    difficulty: 'Intermediate', popularity: 2, paradigms: ['Relational', 'Object-Relational', 'SQL'],
    roadmapUrl: 'https://roadmap.sh/postgresql',
    tags: ['postgresql', 'postgres', 'sql', 'relational', 'advanced'],
    topics: ['Overview', 'Installation', 'Data Types', 'CRUD', 'Joins', 'Indexes', 'JSON/JSONB', 'Full-Text Search', 'Window Functions', 'CTEs', 'Extensions'],
    resources: [
      { name: 'PostgreSQL Docs', url: 'https://www.postgresql.org/docs/', type: 'Official' },
      { name: 'PostgreSQL Tutorial', url: 'https://www.postgresqltutorial.com', type: 'Tutorial' },
      { name: 'PostgreSQL Wiki', url: 'https://wiki.postgresql.org', type: 'Community' },
    ],
    cheatSheets: [
      { name: 'PostgreSQL Cheat Sheet', url: 'https://quickref.me/postgresql' },
    ],
    documentation: [
      { name: 'PostgreSQL Manual', url: 'https://www.postgresql.org/docs/current/' },
    ],
    books: [
      { title: 'PostgreSQL: Up and Running', author: 'Regina Obe' },
      { title: 'The Art of PostgreSQL', author: 'Dimitri Fontaine' },
      { title: 'PostgreSQL 14 Administration', author: 'Simon Riggs' },
    ],
    interviewQuestions: [
      { question: 'What is a CTE?', difficulty: 'Medium' },
      { question: 'Explain VACUUM in PostgreSQL', difficulty: 'Hard' },
    ],
    roadmap: ['SQL Fundamentals', 'Advanced Queries', 'Indexing Strategies', 'Performance Tuning', 'Replication', 'Backup Strategies', 'High Availability'],
    careerOpportunities: ['Database Administrator', 'Backend Developer', 'Data Engineer', 'DevOps Engineer'],
  },
  {
    id: 'mongodb', name: 'MongoDB', icon: '🍃', color: '#47A248',
    description: 'Leading NoSQL document database that stores data in flexible, JSON-like documents. Scalable and developer-friendly.',
    difficulty: 'Intermediate', popularity: 3, paradigms: ['NoSQL', 'Document-Oriented'],
    roadmapUrl: 'https://roadmap.sh/mongodb',
    tags: ['mongodb', 'mongo', 'nosql', 'document', 'database'],
    topics: ['Overview', 'Installation', 'Documents', 'CRUD', 'Aggregation Pipeline', 'Indexes', 'Replica Sets', 'Sharding', 'Schema Design', 'Transactions', 'Atlas'],
    resources: [
      { name: 'MongoDB Docs', url: 'https://www.mongodb.com/docs/', type: 'Official' },
      { name: 'MongoDB University', url: 'https://university.mongodb.com', type: 'Course' },
      { name: 'MongoDB Blog', url: 'https://www.mongodb.com/blog', type: 'Articles' },
    ],
    cheatSheets: [
      { name: 'MongoDB Cheat Sheet', url: 'https://www.mongodb.com/developer/products/mongodb/cheat-sheet/' },
    ],
    documentation: [
      { name: 'MongoDB Manual', url: 'https://www.mongodb.com/docs/manual/' },
    ],
    books: [
      { title: 'MongoDB: The Definitive Guide', author: 'Shannon Bradshaw' },
      { title: '50 Tips and Tricks for MongoDB', author: 'MongoDB Team' },
    ],
    interviewQuestions: [
      { question: 'What is a document database?', difficulty: 'Easy' },
      { question: 'Explain the aggregation pipeline', difficulty: 'Medium' },
    ],
    roadmap: ['MongoDB Basics', 'CRUD Operations', 'Aggregation Framework', 'Schema Design', 'Indexing', 'Replication', 'Sharding', 'Atlas Cloud'],
    careerOpportunities: ['Backend Developer', 'Data Engineer', 'Full Stack Developer', 'Database Administrator'],
  },
  {
    id: 'redis', name: 'Redis', icon: '🔴', color: '#DC382D',
    description: 'In-memory data structure store used as a cache, message broker, and database. Supports strings, hashes, lists, sets, and more.',
    difficulty: 'Intermediate', popularity: 4, paradigms: ['NoSQL', 'In-Memory', 'Key-Value'],
    roadmapUrl: 'https://roadmap.sh/redis',
    tags: ['redis', 'cache', 'in-memory', 'key-value', 'nosql'],
    topics: ['Overview', 'Installation', 'Strings', 'Lists', 'Sets', 'Hashes', 'Sorted Sets', 'Pub/Sub', 'Persistence', 'Clustering', 'Sentinel'],
    resources: [
      { name: 'Redis Docs', url: 'https://redis.io/docs/', type: 'Official' },
      { name: 'Redis University', url: 'https://university.redis.com', type: 'Course' },
      { name: 'Redis Blog', url: 'https://redis.io/blog/', type: 'Articles' },
    ],
    cheatSheets: [
      { name: 'Redis Cheat Sheet', url: 'https://quickref.me/redis' },
    ],
    documentation: [
      { name: 'Redis Commands', url: 'https://redis.io/commands/' },
    ],
    books: [
      { title: 'Redis in Action', author: 'Josiah L. Carlson' },
      { title: 'Redis Essentials', author: 'Maxwell Dayvson Da Silva' },
    ],
    interviewQuestions: [
      { question: 'What is Redis used for?', difficulty: 'Easy' },
      { question: 'Explain Redis persistence options', difficulty: 'Medium' },
    ],
    roadmap: ['Redis Basics', 'Data Types', 'Persistence', 'Replication', 'Clustering', 'Cache Strategies', 'Advanced Use Cases'],
    careerOpportunities: ['Backend Developer', 'DevOps Engineer', 'System Architect', 'Data Engineer'],
  },
  {
    id: 'sqlite', name: 'SQLite', icon: '📦', color: '#003B57',
    description: 'Self-contained, serverless, zero-configuration SQL database engine. Embedded directly into applications.',
    difficulty: 'Beginner', popularity: 5, paradigms: ['Relational', 'Embedded', 'SQL'],
    roadmapUrl: 'https://www.tutorialspoint.com/sqlite/index.htm',
    tags: ['sqlite', 'embedded', 'lightweight', 'sql', 'database'],
    topics: ['Overview', 'Installation', 'Data Types', 'CRUD', 'Joins', 'Indexes', 'Transactions', 'SQL Functions', 'Attach Database', 'Backup', 'Performance'],
    resources: [
      { name: 'SQLite Docs', url: 'https://www.sqlite.org/docs.html', type: 'Official' },
      { name: 'SQLite Tutorial', url: 'https://www.sqlitetutorial.net', type: 'Tutorial' },
      { name: 'DB Browser for SQLite', url: 'https://sqlitebrowser.org', type: 'Tool' },
    ],
    cheatSheets: [
      { name: 'SQLite Cheat Sheet', url: 'https://quickref.me/sqlite' },
    ],
    documentation: [
      { name: 'SQLite Reference', url: 'https://www.sqlite.org/lang.html' },
    ],
    books: [
      { title: 'Using SQLite', author: 'Jay A. Kreibich' },
    ],
    interviewQuestions: [
      { question: 'What makes SQLite different from other SQL databases?', difficulty: 'Easy' },
    ],
    roadmap: ['SQLite Basics', 'SQL Queries', 'Indexing', 'Transactions', 'Performance', 'Embedding'],
    careerOpportunities: ['Mobile Developer', 'Embedded Developer', 'Full Stack Developer'],
  },
  {
    id: 'cassandra', name: 'Cassandra', icon: '🐦', color: '#1287B1',
    description: 'Highly scalable NoSQL database designed for handling large amounts of data across servers with no single point of failure.',
    difficulty: 'Advanced', popularity: 6, paradigms: ['NoSQL', 'Wide-Column', 'Distributed'],
    roadmapUrl: 'https://www.tutorialspoint.com/cassandra/index.htm',
    tags: ['cassandra', 'nosql', 'distributed', 'wide-column', 'scalable'],
    topics: ['Overview', 'Installation', 'Data Model', 'CQL', 'Partitioning', 'Replication', 'Consistency', 'Tunable Consistency', 'Compaction', 'Tombstones', 'Monitoring'],
    resources: [
      { name: 'Cassandra Docs', url: 'https://cassandra.apache.org/doc/latest/', type: 'Official' },
      { name: 'DataStax Academy', url: 'https://www.datastax.com/learn', type: 'Course' },
    ],
    cheatSheets: [
      { name: 'CQL Cheat Sheet', url: 'https://cassandra.apache.org/doc/latest/cassandra/cql/' },
    ],
    documentation: [
      { name: 'Cassandra CQL Reference', url: 'https://cassandra.apache.org/doc/latest/cassandra/cql/' },
      { name: 'Cassandra Architecture', url: 'https://cassandra.apache.org/doc/latest/cassandra/architecture/' },
    ],
    books: [
      { title: 'Cassandra: The Definitive Guide', author: 'Jeff Carpenter' },
    ],
    interviewQuestions: [
      { question: 'What is a wide-column database?', difficulty: 'Medium' },
      { question: 'Explain tunable consistency in Cassandra', difficulty: 'Hard' },
    ],
    roadmap: ['Cassandra Basics', 'Data Modeling', 'CQL', 'Partitioning', 'Replication', 'Operations', 'Performance Tuning'],
    careerOpportunities: ['Data Engineer', 'Database Administrator', 'Backend Engineer', 'DevOps Engineer'],
  },
  {
    id: 'firebase', name: 'Firebase', icon: '🔥', color: '#FFCA28',
    description: 'Google\'s app development platform with NoSQL database, authentication, hosting, serverless functions, and more.',
    difficulty: 'Beginner', popularity: 7, paradigms: ['NoSQL', 'Document', 'Backend-as-a-Service'],
    roadmapUrl: 'https://www.tutorialspoint.com/firebase/index.htm',
    tags: ['firebase', 'nosql', 'baas', 'google', 'realtime'],
    topics: ['Overview', 'Firestore', 'Realtime Database', 'Authentication', 'Storage', 'Hosting', 'Cloud Functions', 'Security Rules', 'Analytics', 'Push Notifications', 'Emulator'],
    resources: [
      { name: 'Firebase Docs', url: 'https://firebase.google.com/docs', type: 'Official' },
      { name: 'Firebase YouTube', url: 'https://www.youtube.com/user/Firebase', type: 'Video' },
      { name: 'Firebase Blog', url: 'https://firebase.googleblog.com', type: 'Blog' },
    ],
    cheatSheets: [
      { name: 'Firebase Cheat Sheet', url: 'https://firebase.google.com/docs/firestore/query-data/queries' },
    ],
    documentation: [
      { name: 'Firestore Docs', url: 'https://firebase.google.com/docs/firestore' },
    ],
    books: [
      { title: 'Firebase for Web Developers', author: 'Ashok Kumar' },
    ],
    interviewQuestions: [
      { question: 'What is Firebase Firestore?', difficulty: 'Easy' },
      { question: 'How does Firebase Realtime DB differ from Firestore?', difficulty: 'Medium' },
    ],
    roadmap: ['Firebase Basics', 'Firestore Database', 'Authentication', 'Storage', 'Cloud Functions', 'Security Rules', 'Production Deployment'],
    careerOpportunities: ['Full Stack Developer', 'Mobile Developer', 'Backend Developer'],
  },
  {
    id: 'mariadb', name: 'MariaDB', icon: '🔶', color: '#003545',
    description: 'Community-developed fork of MySQL with enhanced performance, new storage engines, and better licensing. Drop-in MySQL replacement.',
    difficulty: 'Beginner', popularity: 8, paradigms: ['Relational', 'SQL'],
    roadmapUrl: 'https://www.tutorialspoint.com/mariadb/index.htm',
    tags: ['mariadb', 'mysql', 'sql', 'relational', 'open-source'],
    topics: ['Overview', 'Installation', 'Migration from MySQL', 'Storage Engines', 'CRUD', 'Joins', 'Indexes', 'JSON Support', 'Sequences', 'Dynamic Columns', 'Replication'],
    resources: [
      { name: 'MariaDB Docs', url: 'https://mariadb.com/docs/', type: 'Official' },
      { name: 'MariaDB Knowledge Base', url: 'https://mariadb.com/kb/en/', type: 'Documentation' },
    ],
    cheatSheets: [
      { name: 'MariaDB Cheat Sheet', url: 'https://quickref.me/mariadb' },
    ],
    documentation: [
      { name: 'MariaDB Knowledge Base', url: 'https://mariadb.com/kb/en/' },
      { name: 'MariaDB Server Docs', url: 'https://mariadb.com/docs/server/' },
    ],
    books: [
      { title: 'MariaDB High Performance', author: 'Pierre MAVRO' },
    ],
    interviewQuestions: [
      { question: 'How is MariaDB different from MySQL?', difficulty: 'Easy' },
    ],
    roadmap: ['MariaDB Basics', 'Migration', 'Query Optimization', 'Replication', 'Galera Cluster', 'Backup & Recovery'],
    careerOpportunities: ['Database Administrator', 'Backend Developer', 'DevOps Engineer'],
  },
]

export const databaseCategories = [
  { id: 'relational', name: 'Relational Databases', icon: '🗄️', count: 0 },
  { id: 'nosql', name: 'NoSQL Databases', icon: '📦', count: 0 },
  { id: 'in-memory', name: 'In-Memory & Cache', icon: '⚡', count: 0 },
]
