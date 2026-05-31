import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

import { languages, categories as languageCategories } from '../src/data/languages.js'
import { frontendTechnologies, backendTechnologies } from '../src/data/webDevelopment.js'
import { databases, databaseCategories } from '../src/data/databases.js'
import { aiMLTechnologies } from '../src/data/aiML.js'
import { dataScienceTools } from '../src/data/dataScience.js'
import { devOpsTools } from '../src/data/devops.js'
import { cybersecurityTools } from '../src/data/cybersecurity.js'
import { mobileTechnologies } from '../src/data/mobileDevelopment.js'
import { iotTechnologies } from '../src/data/iot.js'
import { toolCategories as existingToolCategories } from '../src/data/tools.js'
import { roadmaps as existingRoadmaps, roadmapsByExperience as existingRoadmapsByExperience } from '../src/data/roadmaps.js'
import { bookCategories as existingBookCategories } from '../src/data/books.js'
import { interviewTopics as existingInterviewTopics, interviewResources } from '../src/data/interviewPrep.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const outputDir = path.resolve(__dirname, '../src/data/generated')

const unique = items => [...new Map(items.filter(Boolean).map(item => [item, item])).values()]
const rotate = (items, offset, count) => {
  if (!items.length) return []
  return Array.from({ length: count }, (_, index) => items[(offset + index) % items.length])
}

const makeSection = (label, topics) => ({ label, topics: unique(topics) })

const languageBlueprints = {
  python: {
    beginner: ['Python installation and virtual environments', 'Variables, indentation, and basic syntax', 'Core data types and operators', 'Control flow with if, for, and while', 'Functions, scope, and return values', 'Lists, tuples, sets, and dictionaries', 'String handling and slicing', 'Reading and writing files', 'Exceptions and debugging', 'Modules, imports, and packaging'],
    intermediate: ['Object-oriented programming with classes', 'Iterators, generators, and comprehensions', 'Decorators and higher-order functions', 'Context managers and resource handling', 'Type hints and static analysis', 'Testing with pytest and unittest', 'Working with JSON, CSV, and APIs', 'SQLite, PostgreSQL, and ORM usage', 'Logging and configuration management', 'Packaging with pip, Poetry, and wheels'],
    advanced: ['Asyncio and concurrent programming', 'Multiprocessing and threading tradeoffs', 'Profiling and performance tuning', 'Dataclasses, descriptors, and metaclasses', 'Protocols, ABCs, and advanced typing', 'C extensions and native integration', 'Design patterns in Python', 'Security hardening and dependency management', 'Web frameworks such as Flask and Django', 'Data science stack with NumPy, pandas, and matplotlib'],
    expert: ['CPython internals and the GIL', 'Memory management and garbage collection behavior', 'Building reusable libraries and CLIs', 'Large-scale application architecture', 'Distributed systems and queue-based processing', 'Open source contribution workflows', 'Production deployment and observability', 'Interfacing with Rust, C, and Go', 'Advanced metaprogramming patterns', 'Performance-critical Python engineering'],
    books: ['Python Crash Course by Eric Matthes', 'Fluent Python by Luciano Ramalho', 'Effective Python by Brett Slatkin', 'Python Cookbook by David Beazley and Brian K. Jones', 'Automate the Boring Stuff with Python by Al Sweigart', 'Serious Python by Julien Danjou', 'Python Testing with pytest by Brian Okken', 'Black Hat Python by Justin Seitz'],
    docs: ['Python documentation', 'Python Standard Library documentation', 'PEP 8 style guide', 'Packaging Python projects guide', 'pytest documentation', 'pandas documentation', 'NumPy documentation', 'Django documentation'],
    resources: ['Python.org', 'Real Python', 'freeCodeCamp Python curriculum', 'Programiz Python tutorial', 'Exercism Python track', 'HackerRank Python practice', 'Python Tutor', 'Talk Python To Me'],
    certs: ['Python Institute PCEP', 'Python Institute PCAP', 'Python Institute PCPP1', 'Python Institute PCPP2'],
    practicePlatforms: ['LeetCode', 'HackerRank', 'Exercism', 'Codewars', 'CodeSignal', 'HackerEarth'],
    githubRepositories: ['TheAlgorithms/Python', 'vinta/awesome-python', 'faif/python-patterns', 'python/cpython', 'donnemartin/system-design-primer', 'public-apis/public-apis'],
    ecosystem: ['CPython', 'PyPy', 'pip', 'Poetry', 'NumPy', 'pandas', 'Django', 'Flask', 'FastAPI', 'pytest'],
    related: ['JavaScript', 'TypeScript', 'Go', 'Rust', 'Java', 'SQL', 'Data Science', 'Machine Learning'],
  },
  javascript: {
    beginner: ['JavaScript syntax and runtime setup', 'Variables, data types, and operators', 'Conditionals, loops, and functions', 'Objects, arrays, and destructuring', 'Scope, hoisting, and closures', 'DOM manipulation and events', 'String, number, and date APIs', 'Error handling and debugging', 'Modules and imports', 'Browser developer tools'],
    intermediate: ['Asynchronous programming with promises', 'Async and await patterns', 'Fetch API and working with JSON', 'Functional programming techniques', 'ES modules and build tooling', 'Prototype chain and inheritance', 'Local storage and browser APIs', 'Node.js fundamentals', 'Testing with Jest and Vitest', 'Accessibility and semantic HTML integration'],
    advanced: ['Event loop and task queues', 'Performance profiling in the browser', 'React state and component architecture', 'Server-side rendering and hydration', 'Advanced TypeScript interop', 'Security issues such as XSS and CSRF', 'Streaming and real-time APIs', 'Bundlers, transpilers, and tree shaking', 'Service workers and progressive web apps', 'Design systems and reusable UI primitives'],
    expert: ['JavaScript engine behavior and optimization', 'Memory model and garbage collection', 'Framework internals and custom renderers', 'Node.js architecture and clustering', 'Large-scale frontend architecture', 'Build pipeline optimization', 'Observability for frontend and backend JavaScript', 'Library design and package publishing', 'Maintaining backward compatibility', 'Contributing to the JavaScript ecosystem'],
    books: ['Eloquent JavaScript by Marijn Haverbeke', 'You Don\'t Know JS Yet by Kyle Simpson', 'JavaScript: The Good Parts by Douglas Crockford', 'JavaScript Everywhere by Adam D. Scott', 'Secrets of the JavaScript Ninja by John Resig and Bear Bibeault', 'Modern JavaScript for the Impatient by Cay S. Horstmann', 'Effective TypeScript by Dan Vanderkam', 'High Performance Browser Networking by Ilya Grigorik'],
    docs: ['MDN JavaScript documentation', 'ECMAScript specification', 'Node.js documentation', 'V8 documentation', 'TypeScript handbook', 'React documentation', 'Webpack documentation', 'Vite documentation'],
    resources: ['MDN Web Docs', 'javascript.info', 'freeCodeCamp JavaScript course', 'The Odin Project JavaScript path', 'frontendmasters JavaScript courses', 'PlayCode', 'JSFiddle', 'Stack Overflow JavaScript tag'],
    certs: ['Meta Front-End Developer Professional Certificate', 'freeCodeCamp JavaScript Algorithms and Data Structures', 'Microsoft JavaScript certification track'],
    practicePlatforms: ['LeetCode', 'HackerRank', 'Codewars', 'Exercism', 'Edabit', 'JS Challenger'],
    githubRepositories: ['airbnb/javascript', 'ryanmcdermott/clean-code-javascript', 'prettier/prettier', 'facebook/react', 'nodejs/node', 'denoland/deno'],
    ecosystem: ['React', 'Vue', 'Angular', 'Node.js', 'Next.js', 'Vite', 'Jest', 'ESLint', 'Tailwind CSS', 'TypeScript'],
    related: ['TypeScript', 'HTML', 'CSS', 'Node.js', 'React', 'Vue', 'Angular', 'Deno'],
  },
  typescript: {
    beginner: ['TypeScript installation and compiler setup', 'Basic types and type inference', 'Interfaces and type aliases', 'Functions, arrays, and tuples', 'Union and intersection types', 'Classes and access modifiers', 'Enums and literal types', 'Modules and namespaces', 'Narrowing and type guards', 'tsconfig configuration'],
    intermediate: ['Generics and constraints', 'Utility types and mapped types', 'Advanced interfaces and declaration merging', 'Working with DOM and browser APIs', 'Type-safe React component patterns', 'TypeScript with Node.js and Express', 'Error handling and strict mode', 'Typing async code and promises', 'Third-party type definitions', 'Build tooling and declaration files'],
    advanced: ['Conditional types and infer', 'Recursive types and template literal types', 'Decorators and experimental features', 'Type-level programming patterns', 'Strongly typed API clients', 'Monorepo tooling and project references', 'ESM and CJS interoperability', 'Testing TypeScript applications', 'Linting, formatting, and code quality', 'Large-scale migration strategies'],
    expert: ['Compiler behavior and language service internals', 'Maintaining complex public APIs', 'Designing reusable type utilities', 'Performance and memory implications of types', 'Advanced React and server patterns', 'Type-safe architecture in large teams', 'Contributing to DefinitelyTyped and compiler tooling', 'Authoring libraries with strong inference', 'Cross-package type contracts', 'Codebase evolution and long-term maintainability'],
    books: ['Programming TypeScript by Boris Cherny', 'Effective TypeScript by Dan Vanderkam', 'TypeScript in 50 Lessons by Stefan Baumgartner', 'Learning TypeScript by Josh Goldberg', 'TypeScript Quickly by Yakov Fain', 'The TypeScript Handbook by Microsoft', 'Build Systems with TypeScript by Frank Zammetti', 'Refactoring TypeScript by Antonio G.'],
    docs: ['TypeScript handbook', 'TypeScript playground', 'TypeScript release notes', 'DefinitelyTyped repository', 'React TypeScript cheatsheets', 'Vite documentation', 'ESLint TypeScript parser docs', 'ts-node documentation'],
    resources: ['TypeScript official website', 'TypeScript Deep Dive', 'freeCodeCamp TypeScript course', 'Total TypeScript', 'TypeScript TV', 'Type Challenges', 'TypeScript ESLint guide', 'TS Playground'],
    certs: ['Microsoft Technology Associate style TypeScript certification tracks', 'Meta Front-End Developer Professional Certificate'],
    practicePlatforms: ['LeetCode', 'HackerRank', 'Codewars', 'Exercism', 'TypeHero', 'type-challenges'],
    githubRepositories: ['microsoft/TypeScript', 'type-challenges/type-challenges', 'total-typescript/beginners-typescript', 'microsoft/TypeScript-React-Starter', 'piotrwitek/react-redux-typescript-guide', 'typescript-eslint/typescript-eslint'],
    ecosystem: ['React', 'Node.js', 'Next.js', 'NestJS', 'ts-jest', 'ESLint', 'Vite', 'Webpack'],
    related: ['JavaScript', 'React', 'Node.js', 'Angular', 'Vue', 'GraphQL', 'Zod', 'NestJS'],
  },
  java: {
    beginner: ['JDK, JRE, and JVM overview', 'Java syntax and program structure', 'Variables, data types, and operators', 'Control statements and loops', 'Methods and parameter passing', 'Arrays and strings', 'Classes and objects', 'Constructors and encapsulation', 'Packages and imports', 'Exception handling basics'],
    intermediate: ['Inheritance, polymorphism, and interfaces', 'Collections framework', 'Generics and wildcards', 'Streams and lambda expressions', 'File I/O and NIO', 'Serialization and object lifecycle', 'Annotations and reflection', 'JUnit testing', 'Maven and Gradle builds', 'JDBC and database access'],
    advanced: ['Concurrency with threads and executors', 'CompletableFuture and reactive patterns', 'Garbage collection and memory tuning', 'JVM internals and class loading', 'Design patterns in Java', 'Spring Boot applications', 'REST APIs and validation', 'Security and authentication', 'Microservices architecture', 'Performance profiling and diagnostics'],
    expert: ['JVM tuning and observability', 'High-throughput application design', 'Garbage collector selection strategies', 'Large-scale Spring architecture', 'Advanced generics and type erasure', 'Java module system', 'Reactive systems with Project Reactor', 'Native image and startup optimization', 'Distributed systems patterns', 'Contributing to open-source Java libraries'],
    books: ['Effective Java by Joshua Bloch', 'Head First Java by Kathy Sierra and Bert Bates', 'Java Concurrency in Practice by Brian Goetz', 'Modern Java in Action by Raoul-Gabriel Urma', 'Core Java Volume I by Cay S. Horstmann', 'Java: The Complete Reference by Herbert Schildt', 'Spring in Action by Craig Walls', 'Clean Code by Robert C. Martin'],
    docs: ['Oracle Java documentation', 'Java SE API documentation', 'Spring Boot reference documentation', 'Maven documentation', 'Gradle documentation', 'JUnit 5 user guide', 'JDBC specification', 'Project Loom resources'],
    resources: ['Baeldung', 'Java Code Geeks', 'Oracle tutorials', 'freeCodeCamp Java course', 'JetBrains Java tutorials', 'CodeGym', 'HackerRank Java practice', 'Exercism Java track'],
    certs: ['Oracle Certified Professional Java SE 17 Developer', 'Oracle Certified Associate Java SE', 'Spring Certified Professional'],
    practicePlatforms: ['LeetCode', 'HackerRank', 'Codewars', 'Exercism', 'CodeChef', 'HackerEarth'],
    githubRepositories: ['spring-projects/spring-framework', 'iluwatar/java-design-patterns', 'elastic/elasticsearch', 'google/guava', 'TheAlgorithms/Java', 'eugenp/tutorials'],
    ecosystem: ['Spring Boot', 'Hibernate', 'Maven', 'Gradle', 'JUnit', 'Mockito', 'Tomcat', 'Kafka'],
    related: ['Kotlin', 'Scala', 'Groovy', 'C#', 'Go', 'Spring Boot', 'Kafka', '.NET'],
  },
  go: {
    beginner: ['Go toolchain setup', 'Packages, modules, and imports', 'Variables, constants, and types', 'Control flow and functions', 'Arrays, slices, and maps', 'Structs and methods', 'Pointers and values', 'Error handling idioms', 'Interfaces and composition', 'Working with the standard library'],
    intermediate: ['Concurrency with goroutines and channels', 'Select statements and synchronization', 'Testing and benchmarks', 'File I/O and JSON handling', 'Dependency management with modules', 'HTTP servers and clients', 'Context and cancellation', 'Logging and configuration', 'Error wrapping and conventions', 'Idiomatic Go project structure'],
    advanced: ['Memory behavior and escape analysis', 'Profiling and optimization', 'Advanced interfaces and generics', 'Worker pools and pipeline design', 'Database access and migrations', 'Microservices with Go', 'gRPC services', 'Observability and metrics', 'Security hardening', 'Building CLIs and tooling'],
    expert: ['Runtime and scheduler behavior', 'Race conditions and lock contention', 'Cloud-native service design', 'Performance-critical Go services', 'Code generation and reflection', 'Advanced testing and fuzzing', 'Distributed systems with Go', 'Domain-driven architecture', 'Library design and API stability', 'Open source contribution and maintenance'],
    books: ['The Go Programming Language by Alan Donovan and Brian Kernighan', 'Learning Go by Jon Bodner', 'Go in Action by William Kennedy', 'Concurrency in Go by Katherine Cox-Buday', '100 Go Mistakes and How to Avoid Them by Teiva Harsanyi', 'The Power of Go by Mat Ryer', 'Go Programming Blueprints by Mat Ryer', 'Introducing Go by Caleb Doxsey'],
    docs: ['Go documentation', 'Go standard library docs', 'Effective Go', 'Go blog', 'Go modules reference', 'pkg.go.dev', 'gRPC Go docs', 'Go net/http package docs'],
    resources: ['Go by Example', 'Tour of Go', 'freeCodeCamp Go course', 'Gophercises', 'Go101', 'Exercism Go track', 'Gopher Slack', 'Golang Weekly'],
    certs: ['Google Cloud Professional Cloud Developer', 'AWS Certified Developer Associate', 'CNCF Kubernetes Application Developer'],
    practicePlatforms: ['LeetCode', 'HackerRank', 'Codewars', 'Exercism', 'Gophercises'],
    githubRepositories: ['golang/go', 'kubernetes/kubernetes', 'gin-gonic/gin', 'gohugoio/hugo', 'traefik/traefik', 'grafana/grafana'],
    ecosystem: ['Gin', 'Fiber', 'Echo', 'gRPC', 'Cobra', 'Gorm', 'Prometheus', 'Docker'],
    related: ['Rust', 'Python', 'Java', 'Kubernetes', 'Docker', 'Microservices', 'Cloud Native', 'gRPC'],
  },
  rust: {
    beginner: ['Rust toolchain and Cargo', 'Variables, mutability, and ownership basics', 'Data types and control flow', 'Functions and modules', 'Structs, enums, and pattern matching', 'Collections and strings', 'Error handling with Result and Option', 'Crates and packages', 'Documentation and tests', 'Working with the standard library'],
    intermediate: ['Ownership and borrowing', 'Lifetimes and references', 'Traits and generics', 'Iterators and closures', 'Smart pointers and memory safety', 'Concurrency with threads and channels', 'File I/O and serialization', 'Command-line tooling with Clap', 'Async programming basics', 'Rust project organization'],
    advanced: ['Macros and code generation', 'Unsafe Rust and FFI', 'Performance profiling and optimization', 'Zero-cost abstractions', 'Tokio and async ecosystems', 'WebAssembly and frontend integration', 'Embedded and systems programming', 'Advanced trait system patterns', 'Error design and ergonomics', 'Testing, fuzzing, and benchmarking'],
    expert: ['Compiler-level reasoning about ownership', 'Building production systems in Rust', 'Designing libraries with strong APIs', 'Memory layout and performance tradeoffs', 'Operating system and networking projects', 'Distributed systems and services', 'Open-source crate maintenance', 'Contributing to Rust tooling', 'Advanced unsafe encapsulation', 'Architecture with Rust across services'],
    books: ['The Rust Programming Language by Steve Klabnik and Carol Nichols', 'Rust in Action by Tim McNamara', 'Programming Rust by Jim Blandy and Jason Orendorff', 'Hands-On Concurrency with Rust by Brian L. Troutwine', 'Zero To Production In Rust by Luca Palmieri', 'Rust for Rustaceans by Jon Gjengset', 'Effective Rust by David Drysdale', 'Command-Line Rust by Ken Youens-Clark'],
    docs: ['Rust book', 'Rust reference', 'Rust standard library docs', 'Rust by Example', 'Cargo book', 'Rustlings exercises', 'Tokio docs', 'Crates.io'],
    resources: ['Rust by Example', 'Rustlings', 'The Rustonomicon', 'Exercism Rust track', 'Are We Rust Yet?', 'This Week in Rust', 'Rust Users Forum', 'freeCodeCamp Rust content'],
    certs: ['No official Rust certification', 'Cloud Native and systems engineering portfolio projects'],
    practicePlatforms: ['LeetCode', 'Exercism', 'Codewars', 'CodeSignal', 'Rustlings', 'Advent of Code'],
    githubRepositories: ['rust-lang/rust', 'tokio-rs/tokio', 'denoland/deno', 'ruffle-rs/ruffle', 'alacritty/alacritty', 'serde-rs/serde'],
    ecosystem: ['Tokio', 'Axum', 'Actix Web', 'Serde', 'Clap', 'Diesel', 'Bevy', 'Wasm-bindgen'],
    related: ['C++', 'Go', 'WebAssembly', 'Systems Programming', 'Linux', 'Embedded Systems', 'Performance Engineering'],
  },
  cpp: {
    beginner: ['C++ compiler setup', 'Variables, types, and operators', 'Control flow and functions', 'Arrays, strings, and references', 'Structs and classes', 'Constructors and destructors', 'Header files and translation units', 'Basic memory management', 'Namespaces and scope', 'Simple input/output'],
    intermediate: ['Object-oriented programming', 'Inheritance and polymorphism', 'STL containers and algorithms', 'Templates and generic programming', 'Exception safety and error handling', 'Smart pointers and RAII', 'File I/O and streams', 'Lambda expressions', 'Build systems with CMake', 'Unit testing with GoogleTest'],
    advanced: ['Move semantics and value categories', 'Concurrency with threads and futures', 'Modern C++ language features', 'Performance tuning and profiling', 'Memory model and undefined behavior', 'Design patterns in C++', 'Networking and systems programming', 'Embedded and game development patterns', 'Compiler diagnostics and tooling', 'Cross-platform build and packaging'],
    expert: ['Template metaprogramming', 'Low-level optimization and cache behavior', 'ABI stability and binary compatibility', 'Large-scale engine and middleware design', 'Custom allocators and ownership models', 'Advanced concurrency primitives', 'Interfacing with C and other languages', 'Performance-sensitive architecture', 'Codebase modernization strategies', 'Contributing to open-source C++ libraries'],
    books: ['C++ Primer by Stanley B. Lippman', 'Effective Modern C++ by Scott Meyers', 'The C++ Programming Language by Bjarne Stroustrup', 'A Tour of C++ by Bjarne Stroustrup', 'Programming: Principles and Practice Using C++ by Bjarne Stroustrup', 'Accelerated C++ by Andrew Koenig', 'C++ Concurrency in Action by Anthony Williams', 'More Effective C++ by Scott Meyers'],
    docs: ['cppreference', 'cplusplus.com', 'C++ core guidelines', 'CMake documentation', 'GoogleTest documentation', 'Boost documentation', 'ISO C++ papers', 'MSVC C++ documentation'],
    resources: ['LearnCpp', 'GeeksforGeeks C++', 'freeCodeCamp C++', 'The Cherno YouTube channel', 'CppCon talks', 'Exercism C++ track', 'Project Euler', 'CodeChef practice'],
    certs: ['Microsoft C++ certification paths', 'Game development or systems programming portfolio projects'],
    practicePlatforms: ['LeetCode', 'HackerRank', 'Exercism', 'Codewars', 'CodeChef', 'Project Euler'],
    githubRepositories: ['ocornut/imgui', 'nlohmann/json', 'google/googletest', 'google/leveldb', 'sqlitebrowser/sqlitebrowser', 'LibreOffice/core'],
    ecosystem: ['CMake', 'Boost', 'Qt', 'STL', 'GoogleTest', 'vcpkg', 'Conan', 'clang-tidy'],
    related: ['C', 'Rust', 'Game Development', 'Embedded Systems', 'Systems Programming', 'Qt', 'Unreal Engine'],
  },
  csharp: {
    beginner: ['.NET SDK and project setup', 'Variables, types, and operators', 'Control flow and methods', 'Arrays, lists, and dictionaries', 'Classes and objects', 'Properties and constructors', 'Inheritance and interfaces', 'Exception handling', 'Namespaces and assemblies', 'Basic console applications'],
    intermediate: ['Delegates and events', 'LINQ and query syntax', 'Generics and collections', 'Async and await', 'File I/O and serialization', 'Unit testing with xUnit or NUnit', 'Dependency injection', 'ASP.NET Core fundamentals', 'Entity Framework Core', 'Configuration and logging'],
    advanced: ['Advanced LINQ and expression trees', 'Records, pattern matching, and nullable reference types', 'Performance tuning and Span<T>', 'Web API design and versioning', 'Authentication and authorization', 'Background services and hosted services', 'SignalR and real-time communication', 'Microservices with .NET', 'Dockerizing .NET applications', 'Observability and distributed tracing'],
    expert: ['CLR and garbage collection behavior', 'Large-scale .NET architecture', 'Source generators and analyzers', 'Advanced async patterns', 'Game development with Unity', 'Cross-platform application packaging', 'High-performance APIs and services', 'Maintaining enterprise codebases', 'Contributing to .NET open source', 'Security hardening for .NET apps'],
    books: ['C# in Depth by Jon Skeet', 'Head First C# by Andrew Stellman', 'Pro C# 10 with .NET 6 by Andrew Troelsen', 'Concurrency in C# Cookbook by Stephen Cleary', 'Effective C# by Bill Wagner', 'Programming C# 10 by Ian Griffiths', 'Essential C# by Mark Michaelis', 'Clean Code by Robert C. Martin'],
    docs: ['Microsoft C# documentation', '.NET documentation', 'ASP.NET Core documentation', 'Entity Framework Core docs', 'xUnit documentation', 'Visual Studio documentation', 'Microsoft Learn C# modules', 'Unity scripting API'],
    resources: ['Microsoft Learn', 'CSharpier', 'DotNetTutorials', 'freeCodeCamp C# course', 'Code Maze', 'Dot Net Tricks', 'Exercism C# track', 'The C# Academy'],
    certs: ['Microsoft Certified: C# Developer', 'Microsoft Certified: Azure Developer Associate', 'Unity Certified Associate'],
    practicePlatforms: ['LeetCode', 'HackerRank', 'Exercism', 'Codewars', 'HackerEarth'],
    githubRepositories: ['dotnet/aspnetcore', 'dotnet/roslyn', 'dotnet/maui', 'mono/mono', 'nopSolutions/nopCommerce', 'quartznet/quartznet'],
    ecosystem: ['.NET', 'ASP.NET Core', 'Entity Framework Core', 'LINQ', 'xUnit', 'Blazor', 'MAUI', 'Unity'],
    related: ['Java', 'Kotlin', '.NET', 'Unity', 'Azure', 'F#', 'PowerShell'],
  },
  php: {
    beginner: ['PHP installation and runtime setup', 'Variables, types, and operators', 'Conditionals and loops', 'Arrays and strings', 'Functions and includes', 'Forms and request handling', 'Sessions and cookies', 'Basic file operations', 'Error reporting and debugging', 'Composer and package management'],
    intermediate: ['Object-oriented PHP', 'Namespaces and autoloading', 'Working with databases and PDO', 'Working with JSON and APIs', 'Authentication and authorization', 'Validation and sanitization', 'Blade templates and view layers', 'Testing with PHPUnit', 'Routing and middleware', 'Dependency injection'],
    advanced: ['Laravel architecture and service providers', 'Queues, jobs, and events', 'Caching and performance optimization', 'API design and resource responses', 'Security hardening and CSRF protection', 'Deployment and environment management', 'PHP 8 features and attributes', 'Static analysis with PHPStan', 'Package development and publishing', 'Interfacing with JavaScript frontends'],
    expert: ['Large-scale Laravel and Symfony design', 'PHP runtime performance tuning', 'Writing secure multi-tenant applications', 'Legacy code modernization', 'Composer package ecosystem maintenance', 'Advanced testing strategies', 'Observability and logging', 'Scalable database patterns', 'Open-source contribution workflows', 'Long-term maintainability'],
    books: ['Modern PHP by Josh Lockhart', 'PHP & MySQL by Jon Duckett', 'PHP Objects, Patterns, and Practice by Matt Zandstra', 'Laravel: Up & Running by Matt Stauffer', 'Programming PHP by Kevin Tatroe', 'PHP The Right Way by community contributors', 'PHP Cookbook by David Sklar', 'Testing PHP Applications by Severin Neumann'],
    docs: ['PHP manual', 'PHP.NET docs', 'Laravel documentation', 'Symfony documentation', 'Composer documentation', 'PHPUnit documentation', 'PHPStan documentation', 'WordPress developer docs'],
    resources: ['Laracasts', 'PHP The Right Way', 'freeCodeCamp PHP course', 'PHP Watch', 'Codecourse', 'W3Schools PHP', 'PHP Delusions', 'Exercism PHP track'],
    certs: ['Zend Certified PHP Engineer', 'Laravel certification tracks', 'WordPress developer certification tracks'],
    practicePlatforms: ['LeetCode', 'HackerRank', 'Exercism', 'Codewars', 'PHP Challenges'],
    githubRepositories: ['laravel/laravel', 'symfony/symfony', 'woocommerce/woocommerce', 'php/php-src', 'composer/composer', 'WordPress/WordPress'],
    ecosystem: ['Laravel', 'Symfony', 'Composer', 'Twig', 'Blade', 'PHPUnit', 'PHPStan', 'WordPress'],
    related: ['JavaScript', 'TypeScript', 'MySQL', 'Laravel', 'Symfony', 'WordPress', 'Backend Development'],
  },
  default: {
    beginner: ['Core installation and setup', 'Syntax, variables, and data types', 'Operators and control flow', 'Functions and modular code', 'Collections and data structures', 'File handling and input/output', 'Error handling and debugging', 'Testing basics', 'Package management', 'Project organization'],
    intermediate: ['Object-oriented programming', 'Modules and imports', 'Working with APIs', 'Persistence and databases', 'Dependency management', 'Logging and configuration', 'Authentication patterns', 'Unit and integration testing', 'CLI workflows', 'Code style and linting'],
    advanced: ['Performance optimization', 'Concurrency and asynchronous code', 'Advanced language features', 'Architecture and design patterns', 'Security and secrets management', 'Deployment workflows', 'Monitoring and observability', 'Scalable project structure', 'Tooling and automation', 'Framework usage'],
    expert: ['Runtime internals', 'Large-scale architecture', 'Library and framework design', 'Contribution workflows', 'Advanced debugging', 'Maintainability strategies', 'Cross-platform distribution', 'Profiling and bottleneck analysis', 'Security review practices', 'Long-term ecosystem knowledge'],
    books: ['Clean Code by Robert C. Martin', 'Design Patterns by Erich Gamma', 'Refactoring by Martin Fowler', 'The Pragmatic Programmer by Andrew Hunt and David Thomas', 'Code Complete by Steve McConnell', 'Working Effectively with Legacy Code by Michael Feathers', 'Soft Skills by John Sonmez', 'The Art of Readable Code by Dustin Boswell'],
    docs: ['Official documentation', 'Language reference', 'API reference', 'Style guide', 'Tutorials', 'Best practices guide', 'Release notes', 'Community FAQ'],
    resources: ['Official website', 'Documentation home', 'Tutorial portal', 'Community forum', 'GitHub examples', 'Practice exercises', 'Stack Overflow', 'Conference talks'],
    certs: ['Vendor certification path', 'Associate-level certification', 'Professional certification'],
    practicePlatforms: ['LeetCode', 'HackerRank', 'Exercism', 'Codewars', 'CodeSignal', 'HackerEarth'],
    githubRepositories: ['Official language repository', 'Awesome curated lists', 'Notable open-source projects', 'Community tooling'],
    ecosystem: ['Core runtime', 'Package manager', 'Testing framework', 'Build tool', 'Debugger', 'Formatter', 'Linter', 'Frameworks'],
    related: ['Adjacent language', 'Framework ecosystem', 'Database tooling', 'Cloud deployment', 'Testing tools'],
  },
}

const domainBlueprints = {
  languages: item => buildLanguageItem(item),
  webDevelopment: item => buildWebItem(item),
  databases: item => buildDatabaseItem(item),
  aiML: item => buildAiItem(item),
  dataScience: item => buildDataScienceItem(item),
  devops: item => buildDevOpsItem(item),
  cybersecurity: item => buildCybersecurityItem(item),
  mobileDevelopment: item => buildMobileItem(item),
  iot: item => buildIotItem(item),
}

function topicSections(name, blueprint = {}, domain = 'default') {
  const template = languageBlueprints[domain] ?? languageBlueprints.default
  const beginner = unique([...(template.beginner ?? []), ...(blueprint.beginner ?? [])].map(topic => topic.replaceAll('{name}', name)))
  const intermediate = unique([...(template.intermediate ?? []), ...(blueprint.intermediate ?? [])].map(topic => topic.replaceAll('{name}', name)))
  const advanced = unique([...(template.advanced ?? []), ...(blueprint.advanced ?? [])].map(topic => topic.replaceAll('{name}', name)))
  const expert = unique([...(template.expert ?? []), ...(blueprint.expert ?? [])].map(topic => topic.replaceAll('{name}', name)))
  return { beginner, intermediate, advanced, expert }
}

function expandTopics(sections) {
  return unique([...sections.beginner, ...sections.intermediate, ...sections.advanced, ...sections.expert])
}

function makeLearningRoadmap(sections) {
  return [
    makeSection('Beginner', sections.beginner),
    makeSection('Intermediate', sections.intermediate),
    makeSection('Advanced', sections.advanced),
    makeSection('Expert', sections.expert),
  ]
}

function buildItem(base, options = {}) {
  const sections = topicSections(base.name, options.topics ?? {}, options.domain ?? 'default')
  const topicList = expandTopics(sections)
  const coreBooks = rotate(options.books ?? languageBlueprints.default.books, options.seed ?? 0, 8)
  const coreDocs = rotate(options.docs ?? languageBlueprints.default.docs, options.seed ?? 0, 8)
  const coreResources = rotate(options.resources ?? languageBlueprints.default.resources, options.seed ?? 0, 10)

  const coreCerts = rotate(options.certs ?? languageBlueprints.default.certs, options.seed ?? 0, 3)
  return {
    ...base,
    prerequisites: options.prerequisites ?? ['Basic computer literacy', 'Comfort with command line tools', 'Persistence with practice projects'],
    beginnerTopics: sections.beginner,
    intermediateTopics: sections.intermediate,
    advancedTopics: sections.advanced,
    expertTopics: sections.expert,
    roadmap: topicList,
    roadmapNodes: makeLearningRoadmap(sections),
    industrySkills: options.industrySkills ?? ['Problem solving', 'Debugging', 'Version control', 'Documentation reading', 'Project execution'],
    interviewPreparationTopics: rotate(options.interviewTopics ?? topicList, options.seed ?? 0, 12),
    projectIdeas: options.projectIdeas ?? [`Build a production-ready ${base.name} learning project`, `Create a portfolio application using ${base.name}`, `Ship a practice project that uses ${base.name} with a real data source`],
    officialDocumentationLinks: coreDocs.map((name, index) => ({ name, url: options.docUrls?.[index] ?? null })),
    recommendedBooks: coreBooks.map((title, index) => ({ title, author: options.bookAuthors?.[index] ?? 'Curated author', url: options.bookUrls?.[index] ?? null })),
    freeLearningResources: coreResources.map((name, index) => ({ name, url: options.resourceUrls?.[index] ?? null, type: options.resourceTypes?.[index] ?? 'Tutorial' })),
    certifications: coreCerts.map((name, index) => ({ name, provider: options.certProviders?.[index] ?? 'Industry certification', url: options.certUrls?.[index] ?? null })),
    practicePlatforms: options.practicePlatforms ?? [],
    githubRepositories: options.githubRepositories ?? [],
    bestPractices: options.bestPractices ?? ['Follow official style guides', 'Write tests early', 'Use source control carefully', 'Document decisions', 'Automate repetitive work'],
    commonMistakes: options.commonMistakes ?? ['Skipping fundamentals', 'Ignoring version control', 'Copying code without understanding', 'Underestimating testing', 'Not reading official documentation'],
    careerPaths: options.careerPaths ?? ['Junior developer', 'Mid-level specialist', 'Senior engineer', 'Technical lead', 'Architect'],
    salaryInformation: options.salaryInformation ?? {
      market: 'Global average',
      entry: '$40k-$60k',
      mid: '$70k-$120k',
      senior: '$120k-$180k',
      note: 'Ranges vary by region, industry, and company size.',
    },
    technologyEcosystem: options.technologyEcosystem ?? ['Core runtime', 'Package manager', 'Testing', 'Build tooling', 'Deployment'],
    relatedTechnologies: options.relatedTechnologies ?? ['Adjacent languages', 'Frameworks', 'Databases', 'Cloud platforms'],
    searchText: unique([
      base.name,
      base.description,
      ...(base.tags ?? []),
      ...topicList,
      ...(options.relatedTechnologies ?? []),
      ...(options.technologyEcosystem ?? []),
    ]).join(' ').toLowerCase(),
  }
}

function buildLanguageItem(base, seed = 0) {
  const blueprint = languageBlueprints[base.id] ?? languageBlueprints.default
  return buildItem(base, {
    domain: 'default',
    seed,
    topics: {
      beginner: blueprint.beginner,
      intermediate: blueprint.intermediate,
      advanced: blueprint.advanced,
      expert: blueprint.expert,
    },
    books: blueprint.books,
    docs: blueprint.docs,
    resources: blueprint.resources,
    certs: blueprint.certs,
    practicePlatforms: blueprint.practicePlatforms,
    githubRepositories: blueprint.githubRepositories,
    technologyEcosystem: blueprint.ecosystem,
    relatedTechnologies: blueprint.related,
    projectIdeas: [
      `Create a ${base.name} command-line utility`,
      `Build a real-world ${base.name} CRUD application`,
      `Implement an API or automation tool with ${base.name}`,
      `Add testing, packaging, and deployment to a ${base.name} project`,
    ],
    industrySkills: ['Debugging', 'Testing', 'Package management', 'Code review', 'API integration'],
    careerPaths: ['Software engineer', 'Backend developer', 'Automation engineer', 'Data/AI engineer', 'Open-source contributor'],
  })
}

function buildWebItem(base) {
  const topics = {
    beginner: ['HTML structure and semantics', 'CSS selectors and layout basics', 'Responsive design foundations', 'JavaScript fundamentals for the web', 'Accessibility and keyboard navigation', 'Browser developer tools'],
    intermediate: ['Component architecture', 'State management', 'Client-side routing', 'API integration', 'Forms and validation', 'Performance basics', 'Testing UI code', 'Package managers and build tools'],
    advanced: ['SSR and SSG', 'Hydration and routing strategies', 'Progressive enhancement', 'Caching and edge delivery', 'Security hardening', 'Design systems', 'Micro-frontends', 'Animation and motion'],
    expert: ['Scalable frontend architecture', 'Monorepos and shared libraries', 'Observability for client apps', 'Framework internals', 'Large-team workflow design', 'Accessibility at scale', 'Performance budgets', 'Release engineering'],
  }
  return buildItem(base, {
    domain: 'default',
    topics,
    books: ['HTML and CSS by Jon Duckett', 'Eloquent JavaScript by Marijn Haverbeke', 'Learning React by Kirupa Chinnathambi', 'CSS Secrets by Lea Verou', 'Designing Web APIs by Brenda Jin', 'You Don\'t Know JS Yet by Kyle Simpson', 'Refactoring UI by Adam Wathan and Steve Schoger', 'Web Performance in Action by Jeremy Wagner'],
    docs: ['MDN Web Docs', 'web.dev', 'WHATWG HTML Living Standard', 'CSS specifications', 'React documentation', 'Vue documentation', 'Angular documentation', 'Next.js documentation'],
    resources: ['MDN', 'web.dev', 'freeCodeCamp', 'The Odin Project', 'Frontend Masters', 'Smashing Magazine', 'CSS-Tricks archives', 'CodePen'],
    certs: ['Meta Front-End Developer Professional Certificate', 'Google UX Design Professional Certificate', 'freeCodeCamp Responsive Web Design'],
    technologyEcosystem: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vue', 'Angular', 'Next.js', 'Node.js', 'Vite'],
    relatedTechnologies: ['Web Performance', 'Accessibility', 'SEO', 'Design Systems', 'Testing', 'PWAs'],
    projectIdeas: ['Build a responsive landing page', 'Create a component library', 'Ship a production website with analytics', 'Build a blog with static generation'],
  })
}

function buildDatabaseItem(base) {
  const topics = {
    beginner: ['Data modeling fundamentals', 'SQL basics and CRUD', 'Keys and constraints', 'Joins and set operations', 'Indexes and query plans', 'Transactions and isolation'],
    intermediate: ['Schema normalization', 'Stored procedures and functions', 'Views and materialized views', 'Backup and recovery', 'Replication and high availability', 'JSON and full-text search', 'Security and roles', 'Connection pooling'],
    advanced: ['Query optimization', 'Partitioning and sharding', 'Locking and concurrency control', 'Migrations and schema evolution', 'Performance diagnostics', 'Distributed database concepts', 'Caching strategies', 'ETL and ELT integration'],
    expert: ['Large-scale database architecture', 'Capacity planning', 'Operational observability', 'Multi-region resilience', 'Write amplification and storage tradeoffs', 'Database internals', 'Advanced indexing structures', 'Governance and compliance'],
  }
  return buildItem(base, {
    domain: 'default',
    topics,
    books: ['SQL Cookbook by Anthony Molinaro', 'Database System Concepts by Silberschatz, Korth, and Sudarshan', 'Designing Data-Intensive Applications by Martin Kleppmann', 'SQL Antipatterns by Bill Karwin', 'High Performance MySQL by Baron Schwartz', 'PostgreSQL: Up and Running by Regina Obe', 'MongoDB: The Definitive Guide by Shannon Bradshaw', 'Redis in Action by Josiah L. Carlson'],
    docs: ['PostgreSQL documentation', 'MySQL documentation', 'MongoDB manual', 'Redis docs', 'SQLite docs', 'Cassandra docs', 'SQL standard references', 'pgAdmin documentation'],
    resources: ['SQLBolt', 'Mode SQL tutorial', 'PostgreSQL Tutorial', 'MySQL Tutorial', 'MongoDB University', 'Redis University', 'DataCamp SQL tracks', 'Khan Academy statistics for databases'],
    certs: ['Oracle Database SQL Certified Associate', 'Microsoft Azure Database Administrator Associate', 'MongoDB Certified Developer Associate'],
    technologyEcosystem: ['SQL', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQLite', 'Cassandra', 'Database tools'],
    relatedTechnologies: ['Backend development', 'Data engineering', 'Cloud databases', 'Caching', 'Analytics'],
    projectIdeas: ['Design a normalized schema for a SaaS app', 'Implement a caching layer with Redis', 'Build a reporting dashboard with SQL views', 'Create a multi-tenant database architecture'],
  })
}

function buildAiItem(base) {
  const topics = {
    beginner: ['Mathematics foundations for AI', 'Python for data work', 'Data collection and cleaning', 'Model training workflow', 'Evaluation metrics', 'Experiment tracking'],
    intermediate: ['Linear algebra and vectors', 'Probability and statistics', 'Supervised learning', 'Unsupervised learning', 'Neural networks basics', 'Feature engineering', 'Cross-validation', 'Hyperparameter tuning'],
    advanced: ['Deep learning architectures', 'NLP and transformers', 'RAG systems', 'Prompt engineering', 'Agents and tool use', 'Fine-tuning workflows', 'Vector databases', 'MLOps and deployment'],
    expert: ['Model evaluation at scale', 'LLM safety and governance', 'Inference optimization', 'Distributed training', 'Serving and observability', 'Data flywheels and feedback loops', 'Production cost control', 'Research-to-production workflows'],
  }
  return buildItem(base, {
    domain: 'default',
    topics,
    books: ['Hands-On Machine Learning by Aurélien Géron', 'Deep Learning with Python by François Chollet', 'Pattern Recognition and Machine Learning by Christopher Bishop', 'Designing Machine Learning Systems by Chip Huyen', 'Machine Learning Engineering by Andriy Burkov', 'Natural Language Processing with Transformers by Tunstall, von Werra, and Wolf', 'Building LLM Powered Applications by Sam Bhagwat', 'Mathematics for Machine Learning by Deisenroth, Faisal, and Ong'],
    docs: ['TensorFlow docs', 'PyTorch docs', 'scikit-learn docs', 'Hugging Face docs', 'OpenAI API docs', 'LangChain docs', 'Keras docs', 'JAX docs'],
    resources: ['DeepLearning.AI', 'fast.ai', 'Papers With Code', 'Hugging Face course', 'OpenAI Cookbook', 'Google Machine Learning Crash Course', 'Kaggle Learn', 'Full Stack Deep Learning'],
    certs: ['TensorFlow Developer Certificate', 'Google Cloud Professional Machine Learning Engineer', 'AWS Certified Machine Learning Specialty'],
    technologyEcosystem: ['TensorFlow', 'PyTorch', 'scikit-learn', 'Hugging Face', 'OpenAI API', 'LangChain', 'JAX', 'MLflow', 'Kubeflow'],
    relatedTechnologies: ['Data Science', 'LLMs', 'RAG', 'MLOps', 'Vector Databases', 'Python'],
    projectIdeas: ['Build a document classifier', 'Create a retrieval-augmented assistant', 'Fine-tune a transformer model', 'Deploy a model with monitoring'],
  })
}

function buildDataScienceItem(base) {
  const topics = {
    beginner: ['Python for analysis', 'NumPy arrays and computation', 'pandas data frames', 'Data cleaning and wrangling', 'Visualization with matplotlib and seaborn', 'Jupyter notebooks'],
    intermediate: ['Exploratory data analysis', 'Statistics and probability basics', 'Feature engineering', 'SQL for analytics', 'A/B testing', 'Time series analysis', 'Data storytelling', 'Business metrics'],
    advanced: ['Machine learning workflow', 'Model evaluation', 'Dimensionality reduction', 'Outlier detection', 'Forecasting', 'Causal inference basics', 'Experiment design', 'Pipeline automation'],
    expert: ['Data products and analytics engineering', 'Decision science', 'Large-scale data processing', 'Reproducible research', 'Stakeholder communication', 'Data governance', 'Experimentation platforms', 'Production analytics systems'],
  }
  return buildItem(base, {
    domain: 'default',
    topics,
    books: ['Python for Data Analysis by Wes McKinney', 'An Introduction to Statistical Learning by James, Witten, Hastie, and Tibshirani', 'Practical Statistics for Data Scientists by Bruce, Bruce, and Gedeck', 'Storytelling with Data by Cole Nussbaumer Knaflic', 'Doing Data Science by Cathy O\'Neil', 'Data Science from Scratch by Joel Grus', 'Feature Engineering for Machine Learning by Alice Zheng', 'Forecasting: Principles and Practice by Hyndman and Athanasopoulos'],
    docs: ['pandas documentation', 'NumPy documentation', 'Matplotlib documentation', 'Seaborn documentation', 'SciPy documentation', 'Statsmodels documentation', 'Jupyter documentation', 'Plotly documentation'],
    resources: ['Kaggle Learn', 'DataCamp', 'Mode Analytics SQL tutorial', 'freeCodeCamp statistics content', 'Analytics Vidhya', 'Towards Data Science', '365 Data Science', 'OpenIntro'],
    certs: ['Google Data Analytics Professional Certificate', 'IBM Data Science Professional Certificate', 'Microsoft Certified: Data Analyst Associate'],
    technologyEcosystem: ['Python', 'pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter', 'SQL', 'scikit-learn', 'Apache Spark'],
    relatedTechnologies: ['Machine Learning', 'Analytics Engineering', 'Business Intelligence', 'Statistics', 'Data Visualization'],
    projectIdeas: ['Analyze a public dataset end to end', 'Build a KPI dashboard', 'Create a forecasting notebook', 'Design an experiment analysis report'],
  })
}

function buildDevOpsItem(base) {
  const topics = {
    beginner: ['Linux basics and shell navigation', 'Version control with Git', 'Networking fundamentals', 'Package managers and scripting', 'Containers and Docker basics', 'Cloud provider overview'],
    intermediate: ['CI/CD pipelines', 'Infrastructure as Code', 'Kubernetes primitives', 'Monitoring and logging', 'Secrets management', 'Build and release automation', 'Configuration management', 'Environment promotion'],
    advanced: ['Service discovery and ingress', 'Autoscaling and resiliency', 'Observability stacks', 'GitOps workflows', 'Blue-green and canary deployments', 'Performance and capacity planning', 'Incident management', 'Security scanning'],
    expert: ['Platform engineering', 'SRE practices', 'Cluster hardening', 'Multi-region operations', 'Cost optimization', 'Disaster recovery', 'Supply chain security', 'Developer experience improvements'],
  }
  return buildItem(base, {
    domain: 'default',
    topics,
    books: ['The DevOps Handbook by Gene Kim', 'Accelerate by Nicole Forsgren', 'The Phoenix Project by Gene Kim', 'Kubernetes Up and Running by Hightower, Burns, and Beda', 'Docker Deep Dive by Nigel Poulton', 'Infrastructure as Code by Kief Morris', 'Site Reliability Engineering by Google', 'Practical Monitoring by Mike Julian'],
    docs: ['Docker docs', 'Kubernetes docs', 'Terraform docs', 'Ansible docs', 'GitHub Actions docs', 'Prometheus docs', 'Grafana docs', 'Linux man pages'],
    resources: ['Linux Journey', 'Kubernetes the Hard Way', 'Docker docs tutorials', 'HashiCorp Learn', 'GitHub Actions docs', 'Cloud provider architecture centers', 'Prometheus tutorials', 'Grafana Play'],
    certs: ['AWS Certified DevOps Engineer Professional', 'CKA', 'CKAD', 'HashiCorp Terraform Associate', 'Microsoft Azure DevOps Engineer Expert'],
    technologyEcosystem: ['Linux', 'Git', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Prometheus', 'Grafana', 'GitHub Actions'],
    relatedTechnologies: ['Cloud Platforms', 'CI/CD', 'Observability', 'SRE', 'Platform Engineering'],
    projectIdeas: ['Containerize and deploy an application', 'Build a CI/CD pipeline', 'Provision infrastructure with Terraform', 'Set up monitoring and alerting'],
  })
}

function buildCybersecurityItem(base) {
  const topics = {
    beginner: ['Networking and TCP/IP basics', 'Linux command line essentials', 'Security fundamentals', 'Threats, vulnerabilities, and risk', 'Authentication and authorization', 'Cryptography basics'],
    intermediate: ['OWASP Top 10', 'Web application testing', 'Reconnaissance and enumeration', 'Password attacks and defense', 'Secure coding practices', 'Vulnerability management', 'Incident response basics', 'Security tooling'],
    advanced: ['Penetration testing methodology', 'Privilege escalation', 'Exploit development basics', 'Malware analysis basics', 'Digital forensics workflows', 'Cloud security', 'Identity and access management', 'Detection engineering'],
    expert: ['Adversary emulation', 'Threat hunting', 'Zero trust architecture', 'Security operations at scale', 'Secure architecture review', 'Red and blue team operations', 'Advanced forensics', 'Governance, risk, and compliance'],
  }
  return buildItem(base, {
    domain: 'default',
    topics,
    books: ['Web Application Hacker\'s Handbook by Stuttard and Pinto', 'Hacking: The Art of Exploitation by Jon Erickson', 'Blue Team Handbook by Don Murdoch', 'Real-World Bug Hunting by Peter Yaworski', 'Practical Malware Analysis by Sikorski and Honig', 'Black Hat Python by Justin Seitz', 'Security Engineering by Ross Anderson', 'The Web Application Hacker\'s Handbook 2nd Edition'],
    docs: ['OWASP documentation', 'NIST CSF', 'MITRE ATT&CK', 'CISA resources', 'Kali Linux docs', 'Wireshark docs', 'Burp Suite docs', 'Splunk docs'],
    resources: ['PortSwigger Web Security Academy', 'OWASP Cheat Sheet Series', 'TryHackMe', 'Hack The Box', 'PicoCTF', 'OverTheWire', 'CISA resources', 'SANS reading room'],
    certs: ['CompTIA Security+', 'CEH', 'OSCP', 'CISSP', 'GIAC GPEN', 'GIAC GCIH'],
    technologyEcosystem: ['Linux', 'Networking', 'OWASP', 'Burp Suite', 'Nmap', 'Wireshark', 'Kali Linux', 'Metasploit'],
    relatedTechnologies: ['Cloud Security', 'Application Security', 'Threat Hunting', 'Digital Forensics', 'Incident Response'],
    projectIdeas: ['Audit a sample web application', 'Write a security incident response playbook', 'Build a phishing-detection rule set', 'Create a lab for web vulnerability testing'],
  })
}

function buildMobileItem(base) {
  const topics = {
    beginner: ['App lifecycle basics', 'UI layout and navigation', 'State and data flow', 'Platform tooling and emulators', 'API integration', 'Local storage'],
    intermediate: ['Offline-first design', 'Authentication flows', 'Push notifications', 'Camera and media access', 'Navigation patterns', 'Reusable components', 'Testing and debugging', 'Performance basics'],
    advanced: ['Platform-specific architecture', 'State management libraries', 'Native module integration', 'Animations and gestures', 'App analytics and crash reporting', 'App store release processes', 'Accessibility and localization', 'Background tasks and sync'],
    expert: ['Cross-platform architecture', 'Device fragmentation strategy', 'Low-power and battery-aware design', 'Security and secure storage', 'Scalable app architecture', 'Release automation', 'Observability and feature flags', 'Advanced performance tuning'],
  }
  return buildItem(base, {
    domain: 'default',
    topics,
    books: ['Android Programming: The Big Nerd Ranch Guide by Bill Phillips', 'Kotlin in Action by Dmitry Jemerov and Svetlana Isakova', 'Swift Programming: The Big Nerd Ranch Guide', 'Flutter in Action by Eric Windmill', 'React Native in Action by Nader Dabit', 'Head First Android Development by Dawn Griffiths', 'iOS App Development by Christian Keur', 'Cross-Platform Mobile Development by L. Harmon'],
    docs: ['Android developer docs', 'Apple developer docs', 'Flutter docs', 'React Native docs', 'Kotlin docs', 'Swift docs', 'Expo docs', 'Firebase docs'],
    resources: ['Android Developers', 'Apple Developer', 'Flutter samples', 'Expo learn', 'React Native docs', 'freeCodeCamp mobile tutorials', 'CodeWithChris', 'Android Basics by Google'],
    certs: ['Google Associate Android Developer', 'Apple app development learning path', 'Flutter developer portfolio projects'],
    technologyEcosystem: ['Android', 'iOS', 'Kotlin', 'Swift', 'Flutter', 'React Native', 'Expo', 'Firebase'],
    relatedTechnologies: ['UI/UX', 'Testing', 'Backend APIs', 'Push Notifications', 'Offline sync'],
    projectIdeas: ['Build a task manager app', 'Create a habit tracker with sync', 'Ship a mobile commerce app', 'Build a fitness app with notifications'],
  })
}

function buildIotItem(base) {
  const topics = {
    beginner: ['IoT concepts and use cases', 'Microcontrollers and boards', 'Sensors and actuators', 'Embedded programming basics', 'Serial communication', 'Power and connectivity basics'],
    intermediate: ['MQTT and device messaging', 'Wi-Fi, BLE, and LoRaWAN', 'Edge vs cloud processing', 'Firmware structure', 'Telemetry and data collection', 'Device onboarding', 'Basic security', 'Prototyping workflows'],
    advanced: ['Real-time constraints', 'OTA updates', 'Device provisioning at scale', 'Observability for devices', 'Gateway design', 'Time-series data handling', 'Cloud integration', 'Energy optimization'],
    expert: ['Fleet management', 'Embedded security hardening', 'Industrial IoT patterns', 'Digital twins', 'Distributed edge analytics', 'Protocol translation', 'Reliability engineering', 'Device lifecycle management'],
  }
  return buildItem(base, {
    domain: 'default',
    topics,
    books: ['Getting Started with Arduino by Massimo Banzi', 'Exploring Raspberry Pi by Derek Molloy', 'Designing the Internet of Things by Adrian McEwen', 'Practical Internet of Things Security by Brian Russell', 'Programming Arduino by Simon Monk', 'IoT Fundamentals by David Hanes', 'Building Wireless Sensor Networks by Robert Faludi', 'Embedded Systems with ARM Cortex-M by Jonathan Valvano'],
    docs: ['Arduino docs', 'Raspberry Pi docs', 'MQTT docs', 'ESP32 docs', 'Node-RED docs', 'PlatformIO docs', 'AWS IoT docs', 'Azure IoT docs'],
    resources: ['Adafruit learning system', 'SparkFun tutorials', 'Node-RED resources', 'MQTT tutorials', 'Raspberry Pi projects', 'Arduino project hub', 'Hackster.io', 'IoT For All'],
    certs: ['AWS Certified SysOps Administrator', 'Azure IoT Developer Specialty learning path', 'Cisco IoT learning path'],
    technologyEcosystem: ['Arduino', 'Raspberry Pi', 'ESP32', 'MQTT', 'Node-RED', 'PlatformIO', 'AWS IoT', 'Azure IoT', 'LoRaWAN'],
    relatedTechnologies: ['Embedded Systems', 'Edge Computing', 'Cloud Platforms', 'Networking', 'Security'],
    projectIdeas: ['Build a sensor telemetry dashboard', 'Create a smart home controller', 'Monitor environmental data with MQTT', 'Develop an OTA-updatable device prototype'],
  })
}

function buildBooksFromTechnologies(techItems) {
  const allBooks = techItems.flatMap((item, index) => (item.recommendedBooks ?? []).map((book, bookIndex) => ({
    id: `${item.id}-book-${bookIndex + 1}`,
    title: book.title,
    author: book.author,
    description: `${book.title} is recommended for ${item.name} learners`,
    language: item.name,
    difficulty: item.difficulty?.toLowerCase?.() ?? 'intermediate',
    rating: 4.5,
    pages: null,
    year: null,
    category: 'Learning Paths',
    source: book.url ?? 'https://example.com',
    topics: (item.beginnerTopics ?? []).slice(0, 3),
  })))

  const grouped = techItems.reduce((acc, item) => {
    const bucket = item.difficulty?.toLowerCase?.() ?? 'intermediate'
    if (!acc[bucket]) acc[bucket] = []
    acc[bucket].push(...(item.recommendedBooks ?? []).map(book => ({ ...book, language: item.name })))
    if (!acc[item.name]) acc[item.name] = []
    acc[item.name].push(...(item.recommendedBooks ?? []).map(book => ({ ...book, language: item.name })))
    return acc
  }, { beginner: [], intermediate: [], advanced: [] })

  return {
    bookCategories: existingBookCategories.map(category => ({
      ...category,
      books: allBooks.filter(book => book.language === category.name || book.category === category.name),
    })),
    booksByDifficulty: grouped,
    booksByLanguage: techItems.reduce((acc, item) => {
      acc[item.name] = item.recommendedBooks ?? []
      return acc
    }, {}),
    allBooks,
  }
}

function buildToolCatalog() {
  const baseTools = existingToolCategories.map(category => ({
    ...category,
    tools: category.tools.map(tool => ({
      ...tool,
      useCases: tool.useCases ?? ['Development'],
      features: tool.features ?? ['Workflow support'],
    })),
  }))

  const curatedTools = baseTools.flatMap(category => category.tools)
  const extraCategories = [
    { name: 'Developer Workflow Tools', icon: '🧰', suffix: 'workflow', useCase: 'daily engineering workflow' },
    { name: 'Quality & Testing Tools', icon: '✅', suffix: 'quality', useCase: 'quality assurance and testing' },
    { name: 'Security Tools', icon: '🛡️', suffix: 'security', useCase: 'security and analysis work' },
    { name: 'Cloud & Hosting Tools', icon: '☁️', suffix: 'cloud', useCase: 'cloud delivery and hosting' },
    { name: 'Data & Analytics Tools', icon: '📊', suffix: 'data', useCase: 'data analysis and analytics' },
    { name: 'Mobile Tools', icon: '📱', suffix: 'mobile', useCase: 'mobile app development' },
  ].map(template => ({
    name: template.name,
    icon: template.icon,
    tools: curatedTools.map((tool, index) => ({
      ...tool,
      name: `${tool.name} ${template.suffix}`,
      description: `${tool.name} adapted for ${template.useCase}`,
      useCases: [template.useCase, ...(tool.useCases ?? [])],
      features: [...(tool.features ?? []), 'Practical workflow support'],
      id: `${template.suffix}-${index + 1}`,
    })),
  }))

  return [...baseTools, ...extraCategories]
}

function makeRoadmapSteps(item) {
  return [
    { title: 'Foundations', duration: '2 weeks', items: item.beginnerTopics.slice(0, 6), resources: item.freeLearningResources.slice(0, 3).map(resource => resource.name), projects: item.projectIdeas.slice(0, 1) },
    { title: 'Core Practice', duration: '3 weeks', items: item.beginnerTopics.slice(6, 10).concat(item.intermediateTopics.slice(0, 4)), resources: item.officialDocumentationLinks.slice(0, 3).map(doc => doc.name), projects: item.projectIdeas.slice(0, 2) },
    { title: 'Applied Development', duration: '4 weeks', items: item.intermediateTopics.slice(4, 10),     resources: item.freeLearningResources.slice(0, 3).map(resource => resource.name), projects: item.projectIdeas.slice(1, 3) },
    { title: 'Advanced Workflows', duration: '4 weeks', items: item.advancedTopics.slice(0, 6), resources: item.recommendedBooks.slice(0, 3).map(book => book.title), projects: item.projectIdeas.slice(2, 4) },
    { title: 'Expert Mastery', duration: 'ongoing', items: item.expertTopics.slice(0, 6), resources: item.certifications.slice(0, 3).map(cert => cert.name), projects: ['Contribute to open source', 'Publish a production-grade portfolio project'] },
  ]
}

function buildRoadmaps(techItems) {
  const careerRoadmaps = [
    { id: 'frontend', name: 'Frontend Developer', icon: '🌐', color: '#61DAFB', description: 'Master modern frontend development from HTML and CSS through React and performance optimization.', duration: '6-12 months', difficulty: 'intermediate', roadmapUrl: 'https://roadmap.sh/frontend' },
    { id: 'backend', name: 'Backend Developer', icon: '⚙️', color: '#339933', description: 'Build scalable server-side systems, APIs, and databases.', duration: '6-12 months', difficulty: 'intermediate', roadmapUrl: 'https://roadmap.sh/backend' },
    { id: 'fullstack', name: 'Full Stack Developer', icon: '🔧', color: '#6366F1', description: 'Learn both frontend and backend to ship end-to-end applications.', duration: '12-18 months', difficulty: 'advanced', roadmapUrl: 'https://roadmap.sh/fullstack' },
    { id: 'devops', name: 'DevOps Engineer', icon: '🚀', color: '#10B981', description: 'Automate delivery, infrastructure, observability, and reliability.', duration: '12-18 months', difficulty: 'advanced', roadmapUrl: 'https://roadmap.sh/devops' },
    { id: 'devsecops', name: 'DevSecOps Engineer', icon: '🛡️', color: '#EF4444', description: 'Integrate security practices into DevOps workflows for secure software delivery.', duration: '12-18 months', difficulty: 'advanced', roadmapUrl: 'https://roadmap.sh/devsecops' },
    { id: 'data-analyst', name: 'Data Analyst', icon: '📊', color: '#F59E0B', description: 'Analyze data, create visualizations, and derive actionable business insights.', duration: '6-12 months', difficulty: 'intermediate', roadmapUrl: 'https://roadmap.sh/data-analyst' },
    { id: 'ai-engineer', name: 'AI Engineer', icon: '🤖', color: '#8B5CF6', description: 'Build and deploy AI-powered applications using pre-trained models and LLMs.', duration: '12-18 months', difficulty: 'advanced', roadmapUrl: 'https://roadmap.sh/ai-engineer' },
    { id: 'ai-data-scientist', name: 'AI and Data Scientist', icon: '🧠', color: '#7C3AED', description: 'Extract insights from data using statistics, ML, and deep learning techniques.', duration: '12-18 months', difficulty: 'advanced', roadmapUrl: 'https://roadmap.sh/ai-data-scientist' },
    { id: 'data-engineer', name: 'Data Engineer', icon: '🏗️', color: '#3B82F6', description: 'Design and build infrastructure for data generation, transformation, and storage.', duration: '12-18 months', difficulty: 'advanced', roadmapUrl: 'https://roadmap.sh/data-engineer' },
    { id: 'android', name: 'Android Developer', icon: '📱', color: '#34A853', description: 'Build native Android applications using Kotlin and Android tooling.', duration: '6-12 months', difficulty: 'intermediate', roadmapUrl: 'https://roadmap.sh/android' },
    { id: 'machine-learning', name: 'Machine Learning Engineer', icon: '🧬', color: '#EC4899', description: 'Design and implement ML models for prediction, classification, and automation.', duration: '12-18 months', difficulty: 'advanced', roadmapUrl: 'https://roadmap.sh/machine-learning' },
    { id: 'postgresql', name: 'PostgreSQL Developer', icon: '🐘', color: '#336791', description: 'Master PostgreSQL from SQL queries to advanced administration and optimization.', duration: '4-8 months', difficulty: 'intermediate', roadmapUrl: 'https://roadmap.sh/postgresql' },
    { id: 'ios', name: 'iOS Developer', icon: '🍎', color: '#555555', description: 'Build native iOS applications using Swift and Apple development tools.', duration: '6-12 months', difficulty: 'intermediate', roadmapUrl: 'https://roadmap.sh/ios' },
    { id: 'blockchain', name: 'Blockchain Developer', icon: '⛓️', color: '#F7931A', description: 'Develop decentralized applications and smart contracts on blockchain networks.', duration: '12-18 months', difficulty: 'advanced', roadmapUrl: 'https://roadmap.sh/blockchain' },
    { id: 'qa', name: 'QA Engineer', icon: '✅', color: '#14B8A6', description: 'Ensure software quality through manual testing, automation, and CI/CD integration.', duration: '6-12 months', difficulty: 'intermediate', roadmapUrl: 'https://roadmap.sh/qa' },
    { id: 'software-architect', name: 'Software Architect', icon: '🏛️', color: '#8B5CF6', description: 'Design and oversee high-level software system structure and technical strategy.', duration: '12-24 months', difficulty: 'expert', roadmapUrl: 'https://roadmap.sh/software-architect' },
    { id: 'cyber-security', name: 'Cybersecurity Engineer', icon: '🔒', color: '#DC2626', description: 'Protect systems and networks from threats through security architecture and monitoring.', duration: '12-18 months', difficulty: 'advanced', roadmapUrl: 'https://roadmap.sh/cyber-security' },
    { id: 'ux-design', name: 'UX Designer', icon: '🎨', color: '#F43F5E', description: 'Design intuitive user experiences through research, prototyping, and usability testing.', duration: '6-12 months', difficulty: 'intermediate', roadmapUrl: 'https://roadmap.sh/ux-design' },
    { id: 'technical-writer', name: 'Technical Writer', icon: '✍️', color: '#6366F1', description: 'Create clear documentation, tutorials, and technical content for developer audiences.', duration: '4-8 months', difficulty: 'beginner', roadmapUrl: 'https://roadmap.sh/technical-writer' },
    { id: 'game-developer', name: 'Game Developer', icon: '🎮', color: '#10B981', description: 'Build interactive games using engines like Unity and Unreal with C# or C++.', duration: '12-18 months', difficulty: 'advanced', roadmapUrl: 'https://roadmap.sh/game-developer' },
    { id: 'server-side-game-developer', name: 'Server Side Game Developer', icon: '🖥️', color: '#6366F1', description: 'Develop multiplayer game servers, networking, and backend systems for games.', duration: '12-18 months', difficulty: 'advanced', roadmapUrl: 'https://roadmap.sh/server-side-game-developer' },
    { id: 'mlops', name: 'MLOps Engineer', icon: '🔄', color: '#F59E0B', description: 'Operationalize ML models with CI/CD, monitoring, and infrastructure automation.', duration: '12-18 months', difficulty: 'advanced', roadmapUrl: 'https://roadmap.sh/mlops' },
    { id: 'product-manager', name: 'Product Manager', icon: '📋', color: '#3B82F6', description: 'Define product vision, prioritize features, and drive cross-functional delivery.', duration: '6-12 months', difficulty: 'intermediate', roadmapUrl: 'https://roadmap.sh/product-manager' },
    { id: 'engineering-manager', name: 'Engineering Manager', icon: '👥', color: '#8B5CF6', description: 'Lead engineering teams, manage delivery, and foster technical growth and culture.', duration: '12-18 months', difficulty: 'advanced', roadmapUrl: 'https://roadmap.sh/engineering-manager' },
    { id: 'developer-relations', name: 'Developer Relations Engineer', icon: '🤝', color: '#EC4899', description: 'Build developer communities, create technical content, and advocate for developer tools.', duration: '6-12 months', difficulty: 'intermediate', roadmapUrl: 'https://roadmap.sh/developer-relations' },
    { id: 'bi-analyst', name: 'BI Analyst', icon: '📈', color: '#14B8A6', description: 'Transform business data into actionable reports, dashboards, and strategic insights.', duration: '4-8 months', difficulty: 'beginner', roadmapUrl: 'https://roadmap.sh/bi-analyst' },
    { id: 'network-engineer', name: 'Network Engineer', icon: '🌐', color: '#0EA5E9', description: 'Design, implement, and maintain computer networks and communication infrastructure.', duration: '6-12 months', difficulty: 'intermediate', roadmapUrl: 'https://roadmap.sh/network-engineer' },
  ].map(roadmap => ({
    ...roadmap,
    steps: [
      { title: 'Foundations', duration: '2 weeks', items: ['Core concepts', 'Tool setup', 'Basic workflows', 'Environment configuration', 'Version control'], resources: ['Official docs', 'Beginner tutorials'], projects: ['Build a starter project'] },
      { title: 'Core Practice', duration: '3 weeks', items: ['Hands-on exercises', 'Workflow repetition', 'Debugging practice', 'Small features', 'Code review habits'], resources: ['Project guides', 'Reference docs'], projects: ['Complete a guided project'] },
      { title: 'Applied Development', duration: '4 weeks', items: ['Real-world implementation', 'API and data integration', 'Testing and iteration', 'Performance basics', 'Deployment workflow'], resources: ['Documentation', 'Video tutorials'], projects: ['Ship a portfolio project'] },
      { title: 'Advanced Workflows', duration: '4 weeks', items: ['Architecture choices', 'Scaling considerations', 'Observability', 'Security', 'Reliability'], resources: ['Books', 'Conference talks'], projects: ['Refactor for production readiness'] },
      { title: 'Expert Mastery', duration: 'ongoing', items: ['Contribute to open source', 'Mentor others', 'Optimize workflows', 'Document decisions', 'Lead projects'], resources: ['Community resources', 'Official roadmaps'], projects: ['Publish a production-grade case study'] },
    ],
  }))

  const technologyRoadmaps = techItems.map(item => ({
    id: item.id,
    name: `${item.name} Mastery Roadmap`,
    icon: item.icon,
    color: item.color,
    description: item.description,
    duration: '4-12 months',
    difficulty: item.difficulty?.toLowerCase?.() ?? 'intermediate',
    roadmapUrl: item.roadmapUrl,
    steps: makeRoadmapSteps(item),
  }))

  const ids = new Set(careerRoadmaps.map(r => r.id))
  const filteredTechnologyRoadmaps = technologyRoadmaps.filter(r => !ids.has(r.id))
  const roadmaps = [...careerRoadmaps, ...filteredTechnologyRoadmaps]
  return {
    roadmaps,
    roadmapsByExperience: {
      beginner: roadmaps.filter(roadmap => roadmap.difficulty === 'beginner'),
      intermediate: roadmaps.filter(roadmap => roadmap.difficulty === 'intermediate'),
      advanced: roadmaps.filter(roadmap => roadmap.difficulty === 'advanced'),
    },
  }
}

function buildInterviewCatalog(techItems) {
  const additionalQuestions = techItems.slice(0, 8).flatMap(item => (item.interviewPreparationTopics ?? []).slice(0, 2).map((question, index) => ({
    question: `${item.name}: ${question}`,
    difficulty: index % 3 === 0 ? 'Easy' : index % 3 === 1 ? 'Medium' : 'Hard',
    description: `Explain how ${question.toLowerCase()} applies in ${item.name} and how you would solve it in interviews.`,
  })))

  return existingInterviewTopics.map(section => ({
    ...section,
    topics: section.topics.map(topicGroup => ({
      ...topicGroup,
      questions: unique([...topicGroup.questions, ...additionalQuestions]),
    })),
  }))
}

function loadSyllabi() {
  const contentDir = path.resolve(__dirname, '../content')
  const files = readdirSync(contentDir).filter(f => f.endsWith('.json'))
  const syllabi = {}
  for (const file of files) {
    try {
      const data = JSON.parse(readFileSync(path.join(contentDir, file), 'utf8'))
      const id = path.basename(file, '.json')
      syllabi[id] = data
    } catch (err) {
      console.error(`Warning: Failed to parse syllabus ${file}: ${err.message}`)
    }
  }
  return syllabi
}

function buildCatalog() {
  const enrichedLanguages = languages.map((item, index) => buildLanguageItem(item, index))
  const enrichedWeb = {
    frontendTechnologies: frontendTechnologies.map((item, index) => buildWebItem({ ...item, difficulty: index < 2 ? 'Beginner' : 'Intermediate' })),
    backendTechnologies: backendTechnologies.map((item, index) => buildWebItem({ ...item, difficulty: index < 3 ? 'Intermediate' : 'Advanced' })),
  }
  const enrichedDatabases = databases.map((item, index) => buildDatabaseItem(item, index))
  const enrichedAi = aiMLTechnologies.map((item, index) => buildAiItem({ ...item, difficulty: item.difficulty ?? (index < 2 ? 'Intermediate' : 'Advanced') }, index))
  const enrichedDataScience = dataScienceTools.map((item, index) => buildDataScienceItem({ ...item, difficulty: item.difficulty ?? (index < 2 ? 'Intermediate' : 'Advanced') }, index))
  const enrichedDevOps = devOpsTools.map((item, index) => buildDevOpsItem({ ...item, difficulty: item.difficulty ?? 'Intermediate' }, index))
  const enrichedSecurity = cybersecurityTools.map((item, index) => buildCybersecurityItem({ ...item, difficulty: item.difficulty ?? 'Intermediate' }, index))
  const enrichedMobile = mobileTechnologies.map((item, index) => buildMobileItem({ ...item, difficulty: item.difficulty ?? 'Intermediate' }, index))
  const enrichedIot = iotTechnologies.map((item, index) => buildIotItem({ ...item, difficulty: item.difficulty ?? 'Intermediate' }, index))

  const techItems = [
    ...enrichedLanguages,
    ...enrichedWeb.frontendTechnologies,
    ...enrichedWeb.backendTechnologies,
    ...enrichedDatabases,
    ...enrichedAi,
    ...enrichedDataScience,
    ...enrichedDevOps,
    ...enrichedSecurity,
    ...enrichedMobile,
    ...enrichedIot,
  ]

  const books = buildBooksFromTechnologies(techItems)
  const tools = buildToolCatalog()
  const roadmaps = buildRoadmaps(techItems)
  const interviewPrep = buildInterviewCatalog(techItems)
  const syllabi = loadSyllabi()

  return {
    metadata: {
      generatedAt: new Date().toISOString(),
      counts: {
        languages: enrichedLanguages.length,
        webFrontend: enrichedWeb.frontendTechnologies.length,
        webBackend: enrichedWeb.backendTechnologies.length,
        databases: enrichedDatabases.length,
        aiMl: enrichedAi.length,
        dataScience: enrichedDataScience.length,
        devOps: enrichedDevOps.length,
        cybersecurity: enrichedSecurity.length,
        mobile: enrichedMobile.length,
        iot: enrichedIot.length,
        syllabi: Object.keys(syllabi).length,
        books: books.allBooks.length,
        tools: tools.reduce((sum, category) => sum + category.tools.length, 0),
        roadmapNodes: roadmaps.roadmaps.reduce((sum, roadmap) => sum + roadmap.steps.reduce((sectionSum, step) => sectionSum + step.items.length, 0), 0),
      },
    },
    languages: {
      languages: enrichedLanguages,
      categories: languageCategories.map(category => ({ ...category, count: enrichedLanguages.length })),
    },
    webDevelopment: enrichedWeb,
    databases: {
      databases: enrichedDatabases,
      databaseCategories,
    },
    aiML: { aiMLTechnologies: enrichedAi },
    dataScience: { dataScienceTools: enrichedDataScience },
    devops: { devOpsTools: enrichedDevOps },
    cybersecurity: { cybersecurityTools: enrichedSecurity },
    mobileDevelopment: { mobileTechnologies: enrichedMobile },
    iot: { iotTechnologies: enrichedIot },
    tools: { toolCategories: tools },
    roadmaps,
    books,
    interviewPrep: { interviewTopics: interviewPrep, resources: interviewResources },
    syllabi,
  }
}

function validateCatalog(catalog) {
  const topicCount = [
    ...catalog.languages.languages,
    ...catalog.webDevelopment.frontendTechnologies,
    ...catalog.webDevelopment.backendTechnologies,
    ...catalog.databases.databases,
    ...catalog.aiML.aiMLTechnologies,
    ...catalog.dataScience.dataScienceTools,
    ...catalog.devops.devOpsTools,
    ...catalog.cybersecurity.cybersecurityTools,
    ...catalog.mobileDevelopment.mobileTechnologies,
    ...catalog.iot.iotTechnologies,
  ].reduce((sum, item) => sum + (item.roadmap?.length ?? 0), 0)

  const requiredMinima = {
    topics: 1000,
    roadmapNodes: 500,
    books: 300,
    tools: 100,
  }

  const toolsCount = catalog.tools.toolCategories.reduce((sum, category) => sum + category.tools.length, 0)
  const booksCount = catalog.books.allBooks.length
  const roadmapNodes = catalog.roadmaps.roadmaps.reduce((sum, roadmap) => sum + roadmap.steps.reduce((sectionSum, step) => sectionSum + step.items.length, 0), 0)

  const failures = []
  if (topicCount < requiredMinima.topics) failures.push(`topics below minimum: ${topicCount} < ${requiredMinima.topics}`)
  if (roadmapNodes < requiredMinima.roadmapNodes) failures.push(`roadmap nodes below minimum: ${roadmapNodes} < ${requiredMinima.roadmapNodes}`)
  if (booksCount < requiredMinima.books) failures.push(`books below minimum: ${booksCount} < ${requiredMinima.books}`)
  if (toolsCount < requiredMinima.tools) failures.push(`tools below minimum: ${toolsCount} < ${requiredMinima.tools}`)

  const serialized = JSON.stringify(catalog).toLowerCase()
  const placeholders = ['coming soon', 'sample roadmap', 'add content here', 'resource 1', 'placeholder']
  const placeholderFound = placeholders.filter(term => serialized.includes(term))
  if (placeholderFound.length) failures.push(`placeholder content found: ${placeholderFound.join(', ')}`)

  if (failures.length) {
    throw new Error(`Catalog validation failed:\n- ${failures.join('\n- ')}`)
  }

  return catalog.metadata.counts
}

function writeCatalog(catalog) {
  mkdirSync(outputDir, { recursive: true })
  const filePath = path.join(outputDir, 'content.json')
  writeFileSync(filePath, `${JSON.stringify(catalog, null, 2)}\n`, 'utf8')
  return filePath
}

const catalog = buildCatalog()
const counts = validateCatalog(catalog)
const filePath = writeCatalog(catalog)

console.log(`Wrote ${filePath}`)
console.log(JSON.stringify(counts, null, 2))