import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '../components/ui';

const cheatSheetItems = [
  { id: 'python', name: 'Python', icon: '🐍', color: '#3776AB', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Beginner', description: 'A high-level, general-purpose programming language known for its readability and versatility.', topics: ['Overview', 'Setup & Installation', 'Syntax Basics', 'Data Types', 'Control Flow', 'Functions', 'OOP', 'Modules', 'File I/O', 'Error Handling', 'Libraries'], roadmapUrl: 'https://roadmap.sh/python', cheatSheets: [{ name: 'Python Cheat Sheets', url: 'https://cheatography.com/tag/python/' }] },
  { id: 'javascript', name: 'JavaScript', icon: '🟨', color: '#F7DF1E', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Beginner', description: 'The language of the web — powering interactive websites, server-side apps, mobile apps, and desktop software.', topics: ['Overview', 'Setup & Tools', 'Syntax & Types', 'DOM & Events', 'Functions & Scope', 'Objects & Arrays', 'Async JS', 'ES6+ Features', 'Modules', 'Error Handling', 'Libraries'], roadmapUrl: 'https://roadmap.sh/javascript', cheatSheets: [{ name: 'JavaScript Cheat Sheets', url: 'https://cheatography.com/tag/javascript/' }] },
  { id: 'typescript', name: 'TypeScript', icon: '🔷', color: '#3178C6', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Intermediate', description: 'A typed superset of JavaScript that compiles to plain JavaScript. Adds static typing for better tooling and scale.', topics: ['Overview', 'Setup & Config', 'Basic Types', 'Interfaces', 'Generics', 'Enums', 'Type Guards', 'Modules', 'Advanced Types', 'Tooling', 'Migration'], roadmapUrl: 'https://roadmap.sh/typescript', cheatSheets: [{ name: 'TypeScript Cheat Sheets', url: 'https://cheatography.com/tag/typescript/' }] },
  { id: 'java', name: 'Java', icon: '☕', color: '#ED8B00', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Intermediate', description: 'A class-based, object-oriented language designed for platform independence via the JVM. Powers enterprise and Android apps.', topics: ['Overview', 'JDK Setup', 'Syntax & Types', 'OOP Concepts', 'Collections', 'Exceptions', 'I/O', 'Generics', 'Lambda & Streams', 'Concurrency', 'Testing'], roadmapUrl: 'https://roadmap.sh/java', cheatSheets: [{ name: 'Java Cheat Sheets', url: 'https://cheatography.com/tag/java/' }] },
  { id: 'go', name: 'Go', icon: '🔵', color: '#00ADD8', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Intermediate', description: 'A statically typed, compiled language designed for simplicity, concurrency, and scalability. Built by Google.', topics: ['Overview', 'Setup & Tooling', 'Variables & Types', 'Control Flow', 'Functions', 'Structs & Interfaces', 'Pointers', 'Concurrency', 'Testing', 'Packages', 'Standard Library'], roadmapUrl: 'https://roadmap.sh/golang', cheatSheets: [{ name: 'Go Cheat Sheets', url: 'https://cheatography.com/tag/go/' }] },
  { id: 'rust', name: 'Rust', icon: '🦀', color: '#DEA584', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Advanced', description: 'A systems programming language focused on safety, speed, and concurrency. Memory-safe without a garbage collector.', topics: ['Overview', 'Setup & Cargo', 'Variables & Ownership', 'Types & Traits', 'Lifetimes', 'Error Handling', 'Structs & Enums', 'Pattern Matching', 'Concurrency', 'Unsafe Rust', 'Testing'], roadmapUrl: 'https://roadmap.sh/rust', cheatSheets: [{ name: 'Rust Cheat Sheets', url: 'https://cheatography.com/tag/rust/' }] },
  { id: 'cpp', name: 'C++', icon: '⚙️', color: '#00599C', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Advanced', description: 'A powerful systems programming language that extends C with object-oriented features. Used in game dev, engines, and more.', topics: ['Overview', 'Setup & Compilers', 'Variables & Types', 'Control Flow', 'Functions', 'Classes & OOP', 'STL Containers', 'Templates', 'Memory Management', 'Concurrency', 'Modern C++'], roadmapUrl: 'https://roadmap.sh/cpp', cheatSheets: [{ name: 'C++ Cheat Sheets', url: 'https://cheatography.com/tag/c-plus-plus/' }] },
  { id: 'csharp', name: 'C#', icon: '🟣', color: '#512BD4', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Intermediate', description: 'A modern, object-oriented language by Microsoft. Used for Windows apps, game dev with Unity, and enterprise backends.', topics: ['Overview', '.NET Setup', 'Syntax & Types', 'OOP', 'LINQ', 'Async/Await', 'Generics', 'Delegates', 'File I/O', 'Testing', 'ASP.NET Core'], roadmapUrl: 'https://roadmap.sh/csharp', cheatSheets: [{ name: 'C# Cheat Sheets', url: 'https://cheatography.com/tag/c-sharp/' }] },
  { id: 'php', name: 'PHP', icon: '🐘', color: '#777BB4', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Beginner', description: 'A widely-used server-side scripting language designed for web development. Powers WordPress, Laravel, and more.', topics: ['Overview', 'Setup & Config', 'Syntax & Types', 'Arrays & Strings', 'Functions', 'OOP in PHP', 'Forms & Sessions', 'Database Access', 'Error Handling', 'Composer', 'Security'], roadmapUrl: 'https://roadmap.sh/php', cheatSheets: [{ name: 'PHP Cheat Sheets', url: 'https://cheatography.com/tag/php/' }] },
  { id: 'kotlin', name: 'Kotlin', icon: '🟣', color: '#7F52FF', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Intermediate', description: 'A modern, concise JVM language. Official language for Android development with full Java interop and coroutines.', topics: ['Overview', 'Setup & Tooling', 'Syntax & Types', 'Functions & Lambdas', 'Classes & OOP', 'Null Safety', 'Extensions', 'Coroutines', 'Collections', 'Testing', 'Android'], roadmapUrl: 'https://roadmap.sh/kotlin', cheatSheets: [{ name: 'Kotlin Cheat Sheets', url: 'https://cheatography.com/tag/kotlin/' }] },
  { id: 'swift', name: 'Swift', icon: '🟠', color: '#F05138', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Intermediate', description: 'A powerful and intuitive language for iOS, iPadOS, macOS, tvOS, and watchOS development. Safe, fast, and expressive.', topics: ['Overview', 'Setup & Xcode', 'Syntax & Types', 'Control Flow', 'Functions & Closures', 'Classes & Structs', 'Protocols & Extensions', 'Error Handling', 'Optionals', 'Concurrency', 'SwiftUI'], roadmapUrl: 'https://roadmap.sh/swift', cheatSheets: [{ name: 'Swift Cheat Sheets', url: 'https://cheatography.com/tag/swift/' }] },
  { id: 'c', name: 'C', icon: '🔧', color: '#555555', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Advanced', description: 'A general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion.', topics: ['Overview', 'Setup & Compilers', 'Data Types', 'Operators', 'Control Flow', 'Functions', 'Pointers', 'Arrays & Strings', 'Structures', 'File I/O', 'Memory Management'], roadmapUrl: 'https://roadmap.sh/c', cheatSheets: [{ name: 'C Cheat Sheets', url: 'https://cheatography.com/tag/c/' }] },
  { id: 'ruby', name: 'Ruby', icon: '💎', color: '#CC342D', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Intermediate', description: 'A dynamic, open-source programming language focused on simplicity and productivity. Elegant syntax, natural to read and write.', topics: ['Overview', 'Setup & IRB', 'Syntax & Types', 'Control Flow', 'Methods & Blocks', 'Classes & Modules', 'Mixins', 'Enumerable', 'File I/O', 'Gems & Bundler', 'Testing'], roadmapUrl: 'https://roadmap.sh/ruby', cheatSheets: [{ name: 'Ruby Cheat Sheets', url: 'https://cheatography.com/tag/ruby/' }] },
  { id: 'r', name: 'R', icon: '📊', color: '#276DC3', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Intermediate', description: 'A language and environment for statistical computing and graphics. Widely used among statisticians and data miners.', topics: ['Overview', 'Setup & RStudio', 'Data Types', 'Vectors & Matrices', 'Data Frames', 'Lists', 'Control Flow', 'Functions', 'ggplot2', 'Statistics', 'Packages'], roadmapUrl: 'https://roadmap.sh/r', cheatSheets: [{ name: 'R Cheat Sheets', url: 'https://cheatography.com/tag/r/' }] },
  { id: 'dart', name: 'Dart', icon: '🎯', color: '#0175C2', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Intermediate', description: 'A client-optimized language for fast apps on any platform. The language behind Flutter for mobile, web, and desktop.', topics: ['Overview', 'Setup & Tooling', 'Syntax & Types', 'Functions', 'Classes & Objects', 'Generics', 'Async & Futures', 'Streams', 'Collections', 'Null Safety', 'Packages'], roadmapUrl: 'https://dart.dev/guides', cheatSheets: [{ name: 'Dart Cheat Sheets', url: 'https://cheatography.com/tag/dart/' }] },
  { id: 'scala', name: 'Scala', icon: '🔴', color: '#DC322F', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Advanced', description: 'A language that combines object-oriented and functional programming. Runs on the JVM and interoperates seamlessly with Java.', topics: ['Overview', 'Setup & SBT', 'Syntax & Types', 'Classes & Objects', 'Traits', 'Pattern Matching', 'Collections', 'Functional Programming', 'Implicits', 'Concurrency', 'Akka'], roadmapUrl: 'https://docs.scala-lang.org/', cheatSheets: [{ name: 'Scala Cheat Sheets', url: 'https://cheatography.com/tag/scala/' }] },
  { id: 'julia', name: 'Julia', icon: '🟣', color: '#9558B2', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Intermediate', description: 'A high-level, high-performance dynamic language for numerical computing. Combines the speed of C with the ease of Python.', topics: ['Overview', 'Setup & REPL', 'Syntax & Types', 'Functions', 'Multiple Dispatch', 'Arrays & Matrices', 'Control Flow', 'I/O', 'Plotting', 'Packages', 'Performance'], roadmapUrl: 'https://docs.julialang.org/', cheatSheets: [{ name: 'Julia Cheat Sheets', url: 'https://cheatography.com/tag/julia/' }] },
  { id: 'elixir', name: 'Elixir', icon: '💧', color: '#4E2A8E', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Advanced', description: 'A dynamic, functional language built on the Erlang VM. Designed for building scalable and maintainable applications.', topics: ['Overview', 'Setup & Mix', 'Syntax & Types', 'Pattern Matching', 'Functions & Modules', 'Pipe Operator', 'Enum & Stream', 'OTP & GenServer', 'Phoenix', 'Ecto', 'Testing'], roadmapUrl: 'https://elixir-lang.org/docs.html', cheatSheets: [{ name: 'Elixir Cheat Sheets', url: 'https://cheatography.com/tag/elixir/' }] },
  { id: 'haskell', name: 'Haskell', icon: 'λ', color: '#5D4F85', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Advanced', description: 'A purely functional programming language with strong static typing and lazy evaluation. The gold standard for functional programming.', topics: ['Overview', 'Setup & GHC', 'Syntax & Types', 'Functions', 'Pattern Matching', 'Type Classes', 'Monads', 'IO', 'Recursion', 'Data Structures', 'Testing'], roadmapUrl: 'https://www.haskell.org/documentation/', cheatSheets: [{ name: 'Haskell Cheat Sheets', url: 'https://cheatography.com/tag/haskell/' }] },
  { id: 'assembly', name: 'Assembly', icon: '⚡', color: '#6E4C13', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Advanced', description: 'The lowest-level human-readable programming language. Directly represents machine code instructions for a specific CPU architecture.', topics: ['Overview', 'Registers', 'Instructions', 'Addressing Modes', 'Data Movement', 'Arithmetic', 'Control Flow', 'Stack & Procedures', 'Interrupts', 'Macros', 'Linking'], roadmapUrl: 'https://www.tutorialspoint.com/assembly_programming/index.htm', cheatSheets: [{ name: 'Assembly Cheat Sheets', url: 'https://cheatography.com/tag/assembly/' }] },
  { id: 'objective-c', name: 'Objective-C', icon: '🍎', color: '#438EFF', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Advanced', description: 'An object-oriented language that adds Smalltalk-style messaging to C. Used primarily for macOS and iOS development before Swift.', topics: ['Overview', 'Setup & Xcode', 'Syntax & Types', 'Classes & Objects', 'Methods & Messaging', 'Properties', 'Protocols', 'Categories', 'Memory Management', 'Foundation', 'iOS Development'], roadmapUrl: 'https://developer.apple.com/documentation/objectivec', cheatSheets: [{ name: 'Objective-C Cheat Sheets', url: 'https://cheatography.com/tag/objective-c/' }] },
  { id: 'fortran', name: 'Fortran', icon: '📐', color: '#734F96', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Intermediate', description: 'A general-purpose, compiled imperative programming language especially suited for numeric computation and scientific computing.', topics: ['Overview', 'Setup & Compilers', 'Syntax & Types', 'Control Flow', 'Arrays', 'Functions & Subroutines', 'Modules', 'I/O', 'File Handling', 'Modern Fortran', 'Parallel Computing'], roadmapUrl: 'https://fortran-lang.org/learn/', cheatSheets: [{ name: 'Fortran Cheat Sheets', url: 'https://cheatography.com/tag/fortran/' }] },
  { id: 'cobol', name: 'COBOL', icon: '📋', color: '#005CA5', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Intermediate', description: 'A compiled English-like programming language designed for business use. Still widely used in financial and government systems.', topics: ['Overview', 'Program Structure', 'Data Division', 'Procedure Division', 'Variables', 'Control Flow', 'File Handling', 'Tables', 'String Operations', 'Subprograms', 'Sorting'], roadmapUrl: 'https://www.ibm.com/docs/en/cobol-zos', cheatSheets: [{ name: 'COBOL Cheat Sheets', url: 'https://cheatography.com/tag/cobol/' }] },
  { id: 'ada', name: 'Ada', icon: '🛡️', color: '#02A88D', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Advanced', description: 'A structured, statically typed programming language designed for safety-critical and real-time systems. Used in aerospace and defense.', topics: ['Overview', 'Setup & GNAT', 'Syntax & Types', 'Control Flow', 'Packages', 'Tasks & Rendezvous', 'Protected Objects', 'Generics', 'Exceptions', 'I/O', 'Real-Time Systems'], roadmapUrl: 'https://learn.adacore.com/', cheatSheets: [{ name: 'Ada Cheat Sheets', url: 'https://cheatography.com/tag/ada/' }] },
  { id: 'fsharp', name: 'F#', icon: '🔷', color: '#378BBA', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Advanced', description: 'A functional-first programming language on .NET. Combines functional, object-oriented, and imperative programming paradigms.', topics: ['Overview', 'Setup & .NET', 'Syntax & Types', 'Functions', 'Pattern Matching', 'Discriminated Unions', 'Records', 'Collections', 'Async & Tasks', 'Type Providers', 'Testing'], roadmapUrl: 'https://fsharp.org/learn/', cheatSheets: [{ name: 'F# Cheat Sheets', url: 'https://cheatography.com/tag/f-sharp/' }] },
  { id: 'd', name: 'D', icon: '🔶', color: '#BA595E', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Advanced', description: 'A systems programming language with C-like syntax and static typing. Combines efficiency with high-level features like garbage collection.', topics: ['Overview', 'Setup & DMD', 'Syntax & Types', 'Functions', 'Arrays & Slices', 'Classes & Structs', 'Templates', 'Ranges & Algorithms', 'Concurrency', 'Metaprogramming', 'Standard Library'], roadmapUrl: 'https://dlang.org/', cheatSheets: [{ name: 'D Cheat Sheets', url: 'https://cheatography.com/tag/d/' }] },
  { id: 'nim', name: 'Nim', icon: '💛', color: '#FFC200', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Advanced', description: 'A statically typed compiled language that combines successful concepts from mature languages like Python, Ada, and Modula.', topics: ['Overview', 'Setup & Nimble', 'Syntax & Types', 'Control Flow', 'Procedures', 'Object-Oriented', 'Generics', 'Macros', 'Concurrency', 'FFI', 'Async'], roadmapUrl: 'https://nim-lang.org/documentation.html', cheatSheets: [{ name: 'Nim Cheat Sheets', url: 'https://cheatography.com/tag/nim/' }] },
  { id: 'matlab', name: 'MATLAB', icon: '📉', color: '#E16737', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Intermediate', description: 'A proprietary programming language and numeric computing environment for matrix manipulations, algorithms, and data visualization.', topics: ['Overview', 'Setup & Interface', 'Variables & Types', 'Matrices & Arrays', 'Control Flow', 'Functions', 'Plotting', 'Data Analysis', 'Simulink', 'Toolboxes', 'Performance'], roadmapUrl: 'https://www.mathworks.com/help/matlab/', cheatSheets: [{ name: 'MATLAB Cheat Sheets', url: 'https://cheatography.com/tag/matlab/' }] },
  { id: 'sas', name: 'SAS', icon: '📊', color: '#0E6EB0', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Intermediate', description: 'A statistical software suite used for data management, advanced analytics, multivariate analysis, and predictive modeling.', topics: ['Overview', 'Setup & Interface', 'DATA Step', 'PROC Step', 'Variables & Formats', 'Data Manipulation', 'Statistical Procedures', 'Macros', 'SQL in SAS', 'ODS', 'Graphics'], roadmapUrl: 'https://documentation.sas.com/', cheatSheets: [{ name: 'SAS Cheat Sheets', url: 'https://cheatography.com/tag/sas/' }] },
  { id: 'bash', name: 'Bash', icon: '🐚', color: '#4EAA25', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Beginner', description: 'A Unix shell and command language. The most common shell on Linux and macOS for scripting and system administration.', topics: ['Overview', 'Basic Commands', 'Variables', 'Quoting', 'Control Flow', 'Loops', 'Functions', 'File Operations', 'Pipes & Redirection', 'Job Control', 'Scripting'], roadmapUrl: 'https://roadmap.sh/bash', cheatSheets: [{ name: 'Bash Cheat Sheets', url: 'https://cheatography.com/tag/bash/' }] },
  { id: 'powershell', name: 'PowerShell', icon: '🟦', color: '#012456', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Intermediate', description: 'A task automation and configuration management framework from Microsoft. Consists of a command-line shell and scripting language.', topics: ['Overview', 'Setup & Console', 'Cmdlets', 'Aliases', 'Variables & Objects', 'Pipelines', 'Control Flow', 'Functions & Modules', 'Remoting', 'File System', 'Error Handling'], roadmapUrl: 'https://learn.microsoft.com/en-us/powershell/', cheatSheets: [{ name: 'PowerShell Cheat Sheets', url: 'https://cheatography.com/tag/powershell/' }] },
  { id: 'groovy', name: 'Groovy', icon: '🟢', color: '#4298B8', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Intermediate', description: 'An object-oriented programming language for the Java platform. A dynamic language with features similar to Python, Ruby, and Smalltalk.', topics: ['Overview', 'Setup & Grails', 'Syntax & Types', 'Closures', 'Collections', 'GDK', 'Builders', 'Metaprogramming', 'DSLs', 'Testing', 'Gradle Integration'], roadmapUrl: 'https://groovy-lang.org/documentation.html', cheatSheets: [{ name: 'Groovy Cheat Sheets', url: 'https://cheatography.com/tag/groovy/' }] },
  { id: 'lua', name: 'Lua', icon: '🌙', color: '#000080', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Intermediate', description: 'A lightweight, high-level, multi-paradigm programming language designed primarily for embedded use in applications.', topics: ['Overview', 'Setup & Interpreter', 'Syntax & Types', 'Control Flow', 'Functions', 'Tables', 'Metatables', 'Coroutines', 'I/O', 'Modules & Packages', 'C API'], roadmapUrl: 'https://www.lua.org/docs.html', cheatSheets: [{ name: 'Lua Cheat Sheets', url: 'https://cheatography.com/tag/lua/' }] },
  { id: 'tcl', name: 'Tcl', icon: '🔷', color: '#E4CC8B', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Intermediate', description: 'A high-level, general-purpose, interpreted, dynamic programming language. Often paired with Tk for GUI applications.', topics: ['Overview', 'Setup & Shell', 'Syntax & Variables', 'Lists & Strings', 'Control Flow', 'Procedures', 'File I/O', 'Regular Expressions', 'Tk Toolkit', 'Packages', 'Event Loop'], roadmapUrl: 'https://www.tcl.tk/doc/', cheatSheets: [{ name: 'Tcl Cheat Sheets', url: 'https://cheatography.com/tag/tcl/' }] },
  { id: 'prolog', name: 'Prolog', icon: '🧩', color: '#E61B24', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Advanced', description: 'A logic programming language associated with artificial intelligence and computational linguistics. Uses declarative programming paradigm.', topics: ['Overview', 'Setup & GNU Prolog', 'Facts & Rules', 'Queries', 'Recursion', 'Lists', 'Operators', 'Cut & Fail', 'Dynamic Predicates', 'Constraint Logic', 'DCG'], roadmapUrl: 'https://www.swi-prolog.org/pldoc/', cheatSheets: [{ name: 'Prolog Cheat Sheets', url: 'https://cheatography.com/tag/prolog/' }] },
  { id: 'lisp', name: 'Lisp', icon: '🧵', color: '#3FB68B', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Advanced', description: 'A family of programming languages with a fully parenthesized prefix notation. Known for symbolic computation and metaprogramming.', topics: ['Overview', 'Setup & SBCL', 'Syntax & S-Expressions', 'Functions', 'Variables & Binding', 'Lists & Cons Cells', 'Macros', 'Recursion', 'I/O', 'CLOS', 'Packages'], roadmapUrl: 'https://lisp-lang.org/learn/', cheatSheets: [{ name: 'Lisp Cheat Sheets', url: 'https://cheatography.com/tag/lisp/' }] },
  { id: 'scheme', name: 'Scheme', icon: '🎓', color: '#1E3A5F', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Advanced', description: 'A minimalist dialect of Lisp. Used extensively in computer science education for teaching functional programming concepts.', topics: ['Overview', 'Setup & Racket', 'Syntax & S-Expressions', 'Functions & Lambdas', 'Lists', 'Recursion', 'Tail Call Optimization', 'Continuations', 'Macros', 'I/O', 'SRFI'], roadmapUrl: 'https://www.scheme.com/tspl4/', cheatSheets: [{ name: 'Scheme Cheat Sheets', url: 'https://cheatography.com/tag/scheme/' }] },
  { id: 'crystal', name: 'Crystal', icon: '💎', color: '#000000', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Intermediate', description: 'A general-purpose, object-oriented programming language with Ruby-like syntax that compiles to efficient native code.', topics: ['Overview', 'Setup & Tooling', 'Syntax & Types', 'Control Flow', 'Functions & Blocks', 'Classes & Structs', 'Modules', 'Generics', 'Macros', 'Concurrency', 'Standard Library'], roadmapUrl: 'https://crystal-lang.org/reference/', cheatSheets: [{ name: 'Crystal Cheat Sheets', url: 'https://cheatography.com/tag/crystal/' }] },
  { id: 'ocaml', name: 'OCaml', icon: '🐪', color: '#EC6813', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Advanced', description: 'An industrial-strength functional programming language with an emphasis on expressiveness and safety. Supports functional, imperative, and OOP.', topics: ['Overview', 'Setup & OPAM', 'Syntax & Types', 'Functions', 'Pattern Matching', 'Variants', 'Lists & Options', 'Modules & Functors', 'Imperative Features', 'OOP', 'Concurrency'], roadmapUrl: 'https://ocaml.org/docs/', cheatSheets: [{ name: 'OCaml Cheat Sheets', url: 'https://cheatography.com/tag/ocaml/' }] },
  { id: 'erlang', name: 'Erlang', icon: '📞', color: '#A90533', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Advanced', description: 'A general-purpose, concurrent, functional programming language designed for building scalable and fault-tolerant systems.', topics: ['Overview', 'Setup & Shell', 'Syntax & Types', 'Pattern Matching', 'Functions', 'Lists & Recursion', 'Concurrency', 'OTP', 'GenServer', 'Supervisors', 'Error Handling'], roadmapUrl: 'https://www.erlang.org/docs', cheatSheets: [{ name: 'Erlang Cheat Sheets', url: 'https://cheatography.com/tag/erlang/' }] },
  { id: 'clojure', name: 'Clojure', icon: '🌀', color: '#5881D8', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Advanced', description: 'A modern, functional dialect of Lisp on the JVM. Designed for concurrency, with immutable data structures and software transactional memory.', topics: ['Overview', 'Setup & Leiningen', 'Syntax & Forms', 'Functions', 'Data Structures', 'Macros', 'Concurrency', 'STM', 'Java Interop', 'Sequences', 'Namespace'], roadmapUrl: 'https://clojure.org/guides/getting_started', cheatSheets: [{ name: 'Clojure Cheat Sheets', url: 'https://cheatography.com/tag/clojure/' }] },
  { id: 'smalltalk', name: 'Smalltalk', icon: '🟦', color: '#8B0000', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Advanced', description: 'A purely object-oriented programming language where everything is an object. Highly influential on modern OOP languages.', topics: ['Overview', 'Setup & Pharo', 'Syntax & Messages', 'Classes & Objects', 'Inheritance', 'Collections', 'Streams', 'Blocks & Closures', 'Exceptions', 'MVC', 'Refactoring'], roadmapUrl: 'https://pharo.org/documentation', cheatSheets: [{ name: 'Smalltalk Cheat Sheets', url: 'https://cheatography.com/tag/smalltalk/' }] },
  { id: 'apex', name: 'Apex', icon: '⚡', color: '#00A1E0', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Intermediate', description: 'A strongly typed, object-oriented programming language used on the Salesforce platform for custom business logic.', topics: ['Overview', 'Setup & Salesforce', 'Syntax & Types', 'sObjects', 'SOQL & SOSL', 'DML', 'Triggers', 'Classes & Interfaces', 'Testing', 'Governor Limits', 'Batch Processing'], roadmapUrl: 'https://developer.salesforce.com/docs/apex', cheatSheets: [{ name: 'Apex Cheat Sheets', url: 'https://cheatography.com/tag/apex/' }] },
  { id: 'solidity', name: 'Solidity', icon: '🔗', color: '#363636', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Advanced', description: 'A contract-oriented, high-level language for implementing smart contracts on the Ethereum blockchain.', topics: ['Overview', 'Setup & Remix', 'Contract Structure', 'Types & Variables', 'Functions & Modifiers', 'Events', 'Inheritance', 'Libraries', 'Mapping & Arrays', 'Security', 'Gas Optimization'], roadmapUrl: 'https://docs.soliditylang.org/', cheatSheets: [{ name: 'Solidity Cheat Sheets', url: 'https://cheatography.com/tag/solidity/' }] },
  { id: 'abap', name: 'ABAP', icon: '🟦', color: '#E8720A', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Advanced', description: 'A high-level programming language created by SAP for developing business applications on the SAP NetWeaver platform.', topics: ['Overview', 'Setup & ABAP Workbench', 'Syntax & Types', 'Data Dictionary', 'Internal Tables', 'Open SQL', 'Modularization', 'Classes & Objects', 'ALV Reports', 'BDC', 'Enhancements'], roadmapUrl: 'https://help.sap.com/doc/abapdocu', cheatSheets: [{ name: 'ABAP Cheat Sheets', url: 'https://cheatography.com/tag/abap/' }] },
  { id: 'visual-basic', name: 'Visual Basic', icon: '🟣', color: '#945DB7', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Beginner', description: 'A simple, event-driven programming language from Microsoft. Designed for beginners and rapid application development on .NET.', topics: ['Overview', 'Setup & IDE', 'Syntax & Types', 'Control Flow', 'Arrays & Collections', 'Procedures & Functions', 'Classes & Objects', 'Windows Forms', 'File I/O', 'Database Access', 'Error Handling'], roadmapUrl: 'https://learn.microsoft.com/en-us/dotnet/visual-basic/', cheatSheets: [{ name: 'Visual Basic Cheat Sheets', url: 'https://cheatography.com/tag/visual-basic/' }] },
  { id: 'perl', name: 'Perl', icon: '🐪', color: '#39457E', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Intermediate', description: 'A highly capable, feature-rich programming language known for text processing, system administration, and web development.', topics: ['Overview', 'Setup & CPAN', 'Syntax & Types', 'Control Flow', 'Regular Expressions', 'Subroutines', 'File Operations', 'Modules & Packages', 'OOP in Perl', 'Database Integration', 'CGI'], roadmapUrl: 'https://perldoc.perl.org/', cheatSheets: [{ name: 'Perl Cheat Sheets', url: 'https://cheatography.com/tag/perl/' }] },
  { id: 'racket', name: 'Racket', icon: '🎗️', color: '#3C5E9C', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Intermediate', description: 'A general-purpose, multi-paradigm programming language in the Lisp/Scheme family. Used for scripting, education, and research.', topics: ['Overview', 'Setup & DrRacket', 'Syntax & Expressions', 'Functions', 'Lists & Pairs', 'Recursion', 'Macros', 'Contracts', 'Units & Classes', 'GUI Programming', 'Libraries'], roadmapUrl: 'https://docs.racket-lang.org/', cheatSheets: [{ name: 'Racket Cheat Sheets', url: 'https://cheatography.com/tag/racket/' }] },
  { id: 'zig', name: 'Zig', icon: '⚡', color: '#F7A41D', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Advanced', description: 'A general-purpose programming language and toolchain for maintaining robust, optimal, and reusable software.', topics: ['Overview', 'Setup & Build System', 'Syntax & Types', 'Control Flow', 'Functions', 'Comptime', 'Pointers & Slices', 'Memory Allocators', 'Error Handling', 'Testing', 'Cross-compilation'], roadmapUrl: 'https://ziglang.org/documentation/master/', cheatSheets: [{ name: 'Zig Cheat Sheets', url: 'https://cheatography.com/tag/zig/' }] },
  { id: 'sql', name: 'SQL', icon: '🗃️', color: '#4479A1', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Beginner', description: 'A domain-specific language for managing and querying relational databases. The standard language for database interaction.', topics: ['Overview', 'Database Setup', 'SELECT Queries', 'WHERE & Filtering', 'JOINs', 'GROUP BY & Aggregation', 'Subqueries', 'INSERT/UPDATE/DELETE', 'CREATE & ALTER', 'Indexes', 'Transactions'], roadmapUrl: 'https://roadmap.sh/sql', cheatSheets: [{ name: 'SQL Cheat Sheets', url: 'https://cheatography.com/tag/sql/' }] },
  { id: 'graphql', name: 'GraphQL', icon: '◻️', color: '#E535AB', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Intermediate', description: 'A query language for APIs and a runtime for executing those queries. Provides a complete description of the data in your API.', topics: ['Overview', 'Setup & Schema', 'Queries & Mutations', 'Schemas & Types', 'Resolvers', 'Arguments & Variables', 'Fragments', 'Mutations & Subscriptions', 'Authentication', 'Caching', 'Tooling'], roadmapUrl: 'https://graphql.org/learn/', cheatSheets: [{ name: 'GraphQL Cheat Sheets', url: 'https://cheatography.com/tag/graphql/' }] },
  { id: 'html', name: 'HTML', icon: '🟧', color: '#E34F26', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Beginner', description: 'The standard markup language for creating web pages. Defines structure and content of web documents.', topics: ['Basics & Structure', 'Text & Links', 'Images & Media', 'Forms & Input', 'Tables', 'Semantic HTML', 'SEO Basics', 'Accessibility'], roadmapUrl: 'https://roadmap.sh/html', cheatSheets: [{ name: 'HTML Cheat Sheets', url: 'https://cheatography.com/tag/html/' }] },
  { id: 'css', name: 'CSS', icon: '🔵', color: '#1572B6', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Beginner', description: 'Cascading Style Sheets for styling web pages. Controls layout, colors, fonts, and responsive design.', topics: ['Selectors', 'Box Model', 'Layout (Flex/Grid)', 'Typography', 'Colors & Backgrounds', 'Animations', 'Responsive Design', 'Preprocessors'], roadmapUrl: 'https://roadmap.sh/css', cheatSheets: [{ name: 'CSS Cheat Sheets', url: 'https://cheatography.com/tag/css/' }] },
  { id: 'latex', name: 'LaTeX', icon: '📄', color: '#008080', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Intermediate', description: 'A high-quality typesetting system for technical and scientific documentation. The de facto standard for academic publishing.', topics: ['Overview', 'Setup & Distribution', 'Document Structure', 'Text Formatting', 'Math Mode', 'Figures & Tables', 'Bibliography', 'Cross-referencing', 'Packages', 'Beamer', 'Troubleshooting'], roadmapUrl: 'https://www.latex-project.org/help/', cheatSheets: [{ name: 'LaTeX Cheat Sheets', url: 'https://cheatography.com/tag/latex/' }] },
  { id: 'markdown', name: 'Markdown', icon: '📝', color: '#083FA1', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Beginner', description: 'A lightweight markup language for creating formatted text using a plain-text editor. Used extensively on GitHub and in documentation.', topics: ['Overview', 'Headers', 'Text Formatting', 'Lists', 'Links & Images', 'Code Blocks', 'Tables', 'Blockquotes', 'Horizontal Rules', 'GFM Extensions', 'Front Matter'], roadmapUrl: 'https://www.markdownguide.org/', cheatSheets: [{ name: 'Markdown Cheat Sheets', url: 'https://cheatography.com/tag/markdown/' }] },
  { id: 'yaml', name: 'YAML', icon: '📋', color: '#CB171E', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Beginner', description: 'A human-readable data serialization language commonly used for configuration files, CI/CD pipelines, and data exchange.', topics: ['Overview', 'Basic Syntax', 'Scalars & Strings', 'Lists & Arrays', 'Dictionaries & Mappings', 'Nested Structures', 'Anchors & Aliases', 'Multi-line Strings', 'Comments', 'Validation', 'Tools'], roadmapUrl: 'https://yaml.org/', cheatSheets: [{ name: 'YAML Cheat Sheets', url: 'https://cheatography.com/tag/yaml/' }] },
  { id: 'verilog', name: 'Verilog', icon: '🔌', color: '#2C6FBB', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Advanced', description: 'A hardware description language used to model electronic systems. Supports both behavioral and structural design styles.', topics: ['Overview', 'Setup & Simulators', 'Module Structure', 'Data Types', 'Operators', 'Assignments', 'Always Blocks', 'Control Flow', 'Tasks & Functions', 'Testbenches', 'Finite State Machines'], roadmapUrl: 'https://www.chipverify.com/verilog/verilog-tutorial', cheatSheets: [{ name: 'Verilog Cheat Sheets', url: 'https://cheatography.com/tag/verilog/' }] },
  { id: 'vhdl', name: 'VHDL', icon: '🔧', color: '#1A5276', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Advanced', description: 'A hardware description language used in electronic design automation to describe digital and mixed-signal systems.', topics: ['Overview', 'Setup & Tools', 'Entity & Architecture', 'Data Types', 'Concurrent Statements', 'Sequential Statements', 'Process & Signals', 'Functions & Procedures', 'Packages', 'Testbenches', 'FSM Design'], roadmapUrl: 'https://www.ics.uci.edu/~jmoorkan/vhdlref/', cheatSheets: [{ name: 'VHDL Cheat Sheets', url: 'https://cheatography.com/tag/vhdl/' }] },
  { id: 'purescript', name: 'PureScript', icon: '✨', color: '#14161A', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Advanced', description: 'A strongly typed, purely functional programming language that compiles to JavaScript. Inspired by Haskell but targeting the web.', topics: ['Overview', 'Setup & Spago', 'Syntax & Types', 'Functions', 'Pattern Matching', 'Type Classes', 'Monads & Effects', 'Row Polymorphism', 'FFI', 'Build Tools', 'Testing'], roadmapUrl: 'https://book.purescript.org/', cheatSheets: [{ name: 'PureScript Cheat Sheets', url: 'https://cheatography.com/tag/purescript/' }] },
  { id: 'reasonml', name: 'ReasonML', icon: '🔷', color: '#DD4B39', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Advanced', description: 'A syntax and toolchain for OCaml aimed at JavaScript developers. Compiles to both JavaScript and native code via OCaml.', topics: ['Overview', 'Setup & BuckleScript', 'Syntax & Types', 'Functions', 'Pattern Matching', 'Variants', 'Records', 'Modules', 'JS Interop', 'React Bindings', 'Testing'], roadmapUrl: 'https://reasonml.github.io/docs/en/', cheatSheets: [{ name: 'ReasonML Cheat Sheets', url: 'https://cheatography.com/tag/reasonml/' }] },
  { id: 'coffeescript', name: 'CoffeeScript', icon: '☕', color: '#2F2625', category: 'languages', categoryName: 'Programming Languages', difficulty: 'Intermediate', description: 'A language that compiles to JavaScript. Syntactic sugar inspired by Ruby, Python, and Haskell, making JS more readable.', topics: ['Overview', 'Setup & Compilation', 'Syntax Basics', 'Functions', 'Classes & Inheritance', 'Splats & Destructuring', 'Comprehensions', 'Ranges & Slicing', 'Operators & Aliases', 'Embedded JS', 'Tooling'], roadmapUrl: 'https://coffeescript.org/', cheatSheets: [{ name: 'CoffeeScript Cheat Sheets', url: 'https://cheatography.com/tag/coffeescript/' }] },
];

const toolCheatSheetItems = [
  { id: 'docker', name: 'Docker', icon: '🐳', color: '#2496ED', category: 'tools', categoryName: 'Developer Tools', difficulty: 'All Levels', description: 'A platform for building, shipping, and running applications in lightweight containers.', topics: ['Images', 'Containers', 'Compose', 'Volumes', 'Networking'], cheatSheets: [{ name: 'Docker Cheat Sheet', url: 'https://cheatography.com/tag/docker/' }] },
  { id: 'kubernetes', name: 'Kubernetes', icon: '☸️', color: '#326CE5', category: 'tools', categoryName: 'Developer Tools', difficulty: 'All Levels', description: 'An orchestration platform for automating deployment, scaling, and management of containerized workloads.', topics: ['Pods', 'Deployments', 'Services', 'ConfigMaps', 'Ingress'], cheatSheets: [{ name: 'Kubernetes Cheat Sheet', url: 'https://cheatography.com/tag/kubernetes/' }] },
  { id: 'react', name: 'React', icon: '⚛️', color: '#61DAFB', category: 'tools', categoryName: 'Developer Tools', difficulty: 'All Levels', description: 'A declarative JavaScript library for building interactive user interfaces with reusable components.', topics: ['JSX', 'Hooks', 'State', 'Props', 'Routing'], cheatSheets: [{ name: 'React Cheat Sheet', url: 'https://cheatography.com/tag/react/' }] },
  { id: 'nodejs', name: 'Node.js', icon: '🟢', color: '#339933', category: 'tools', categoryName: 'Developer Tools', difficulty: 'All Levels', description: 'A JavaScript runtime for building fast server-side applications and tooling.', topics: ['Modules', 'npm', 'Async IO', 'Streams', 'Express'], cheatSheets: [{ name: 'Node.js Cheat Sheet', url: 'https://cheatography.com/tag/nodejs/' }] },
  { id: 'django', name: 'Django', icon: '🎸', color: '#092E20', category: 'tools', categoryName: 'Developer Tools', difficulty: 'All Levels', description: 'A high-level Python web framework for rapid development, clean design, and secure defaults.', topics: ['Models', 'Views', 'Templates', 'Admin', 'Forms'], cheatSheets: [{ name: 'Django Cheat Sheet', url: 'https://cheatography.com/tag/django/' }] },
  { id: 'flask', name: 'Flask', icon: '🍶', color: '#000000', category: 'tools', categoryName: 'Developer Tools', difficulty: 'All Levels', description: 'A lightweight Python microframework for simple, flexible web applications.', topics: ['Routing', 'Jinja', 'Forms', 'Blueprints', 'Extensions'], cheatSheets: [{ name: 'Flask Cheat Sheet', url: 'https://cheatography.com/tag/flask/' }] },
  { id: 'angular', name: 'Angular', icon: '🅰️', color: '#DD0031', category: 'tools', categoryName: 'Developer Tools', difficulty: 'All Levels', description: 'A TypeScript-based framework for building scalable web applications with strong tooling.', topics: ['Components', 'Services', 'Directives', 'RxJS', 'Routing'], cheatSheets: [{ name: 'Angular Cheat Sheet', url: 'https://cheatography.com/tag/angular/' }] },
  { id: 'vuejs', name: 'Vue.js', icon: '🟩', color: '#42B883', category: 'tools', categoryName: 'Developer Tools', difficulty: 'All Levels', description: 'A progressive JavaScript framework for building modern user interfaces and single-page apps.', topics: ['Reactivity', 'Components', 'Directives', 'State', 'Vue Router'], cheatSheets: [{ name: 'Vue.js Cheat Sheet', url: 'https://cheatography.com/tag/vuejs/' }] },
  { id: 'tensorflow', name: 'TensorFlow', icon: '🧠', color: '#FF6F00', category: 'tools', categoryName: 'Developer Tools', difficulty: 'All Levels', description: 'An end-to-end machine learning platform for training, deploying, and serving models.', topics: ['Tensors', 'Keras', 'Training', 'SavedModels', 'Deployment'], cheatSheets: [{ name: 'TensorFlow Cheat Sheet', url: 'https://cheatography.com/tag/tensorflow/' }] },
  { id: 'pytorch', name: 'PyTorch', icon: '🔥', color: '#EE4C2C', category: 'tools', categoryName: 'Developer Tools', difficulty: 'All Levels', description: 'A popular deep learning framework known for dynamic computation graphs and research flexibility.', topics: ['Tensors', 'Autograd', 'NN Modules', 'Training', 'Deployment'], cheatSheets: [{ name: 'PyTorch Cheat Sheet', url: 'https://cheatography.com/tag/pytorch/' }] },
  { id: 'pandas', name: 'Pandas', icon: '🐼', color: '#150458', category: 'tools', categoryName: 'Developer Tools', difficulty: 'All Levels', description: 'A data analysis library for Python with powerful Series and DataFrame workflows.', topics: ['Series', 'DataFrames', 'Filtering', 'GroupBy', 'Merge'], cheatSheets: [{ name: 'Pandas Cheat Sheet', url: 'https://cheatography.com/tag/pandas/' }] },
  { id: 'numpy', name: 'NumPy', icon: '🔢', color: '#013243', category: 'tools', categoryName: 'Developer Tools', difficulty: 'All Levels', description: 'The foundational Python library for fast numerical computing with N-dimensional arrays.', topics: ['Arrays', 'Broadcasting', 'Linear Algebra', 'Random', 'Indexing'], cheatSheets: [{ name: 'NumPy Cheat Sheet', url: 'https://cheatography.com/tag/numpy/' }] },
  { id: 'sqlalchemy', name: 'SQLAlchemy', icon: '🧪', color: '#D71F00', category: 'tools', categoryName: 'Developer Tools', difficulty: 'All Levels', description: 'A flexible SQL toolkit and ORM for Python applications.', topics: ['ORM', 'Queries', 'Models', 'Sessions', 'Relationships'], cheatSheets: [{ name: 'SQLAlchemy Cheat Sheet', url: 'https://cheatography.com/tag/sqlalchemy/' }] },
  { id: 'mongodb', name: 'MongoDB', icon: '🍃', color: '#47A248', category: 'tools', categoryName: 'Developer Tools', difficulty: 'All Levels', description: 'A document database designed for flexible schemas and scalable application development.', topics: ['Documents', 'Queries', 'Indexes', 'Aggregation', 'CRUD'], cheatSheets: [{ name: 'MongoDB Cheat Sheet', url: 'https://cheatography.com/tag/mongodb/' }] },
  { id: 'postgresql', name: 'PostgreSQL', icon: '🐘', color: '#336791', category: 'tools', categoryName: 'Developer Tools', difficulty: 'All Levels', description: 'An advanced open-source relational database known for reliability and rich SQL features.', topics: ['SQL', 'Indexes', 'CTEs', 'Transactions', 'JSON'], cheatSheets: [{ name: 'PostgreSQL Cheat Sheet', url: 'https://cheatography.com/tag/postgresql/' }] },
  { id: 'mysql', name: 'MySQL', icon: '🐬', color: '#4479A1', category: 'tools', categoryName: 'Developer Tools', difficulty: 'All Levels', description: 'A widely used relational database for web applications and backend systems.', topics: ['SQL', 'Joins', 'Indexes', 'Replication', 'Backup'], cheatSheets: [{ name: 'MySQL Cheat Sheet', url: 'https://cheatography.com/tag/mysql/' }] },
  { id: 'firebase', name: 'Firebase', icon: '🔥', color: '#FFCA28', category: 'tools', categoryName: 'Developer Tools', difficulty: 'All Levels', description: 'A backend platform for mobile and web apps with auth, database, hosting, and serverless services.', topics: ['Auth', 'Firestore', 'Hosting', 'Functions', 'Storage'], cheatSheets: [{ name: 'Firebase Cheat Sheet', url: 'https://cheatography.com/tag/firebase/' }] },
  { id: 'aws', name: 'AWS', icon: '☁️', color: '#FF9900', category: 'tools', categoryName: 'Developer Tools', difficulty: 'All Levels', description: 'Amazon Web Services provides cloud infrastructure, storage, compute, and managed services.', topics: ['EC2', 'S3', 'IAM', 'Lambda', 'Networking'], cheatSheets: [{ name: 'AWS Cheat Sheet', url: 'https://cheatography.com/tag/aws/' }] },
  { id: 'azure', name: 'Azure', icon: '☁️', color: '#0078D4', category: 'tools', categoryName: 'Developer Tools', difficulty: 'All Levels', description: 'Microsoft Azure offers cloud services for building, deploying, and managing applications.', topics: ['App Service', 'Storage', 'Functions', 'Key Vault', 'IAM'], cheatSheets: [{ name: 'Azure Cheat Sheet', url: 'https://cheatography.com/tag/azure/' }] },
  { id: 'googlecloud', name: 'Google Cloud', icon: '☁️', color: '#4285F4', category: 'tools', categoryName: 'Developer Tools', difficulty: 'All Levels', description: 'Google Cloud provides scalable infrastructure, data, and application services.', topics: ['Compute', 'Storage', 'IAM', 'Cloud Run', 'Networking'], cheatSheets: [{ name: 'Google Cloud Cheat Sheet', url: 'https://cheatography.com/tag/googlecloud' }] },
  { id: 'linux', name: 'Linux', icon: '🐧', color: '#FCC624', category: 'tools', categoryName: 'Developer Tools', difficulty: 'All Levels', description: 'A family of open-source Unix-like operating systems used across servers and desktops.', topics: ['Shell', 'Processes', 'Permissions', 'Networking', 'Package Managers'], cheatSheets: [{ name: 'Linux Cheat Sheet', url: 'https://cheatography.com/tag/linux/' }] },
  { id: 'ubuntu', name: 'Ubuntu', icon: '🟠', color: '#E95420', category: 'tools', categoryName: 'Developer Tools', difficulty: 'All Levels', description: 'A popular Linux distribution focused on usability, support, and developer workflows.', topics: ['APT', 'Systemd', 'Packages', 'Desktop', 'Terminal'], cheatSheets: [{ name: 'Ubuntu Cheat Sheet', url: 'https://cheatography.com/tag/ubuntu/' }] },
  { id: 'kali-linux', name: 'Kali Linux', icon: '🛡️', color: '#557C94', category: 'tools', categoryName: 'Developer Tools', difficulty: 'All Levels', description: 'A security-focused Linux distribution for penetration testing and digital forensics.', topics: ['Pen Testing', 'Tools', 'Networking', 'Forensics', 'Privilege Escalation'], cheatSheets: [{ name: 'Kali Linux Cheat Sheet', url: 'https://cheatography.com/tag/kali/' }] },
  { id: 'vim', name: 'Vim', icon: '✍️', color: '#019733', category: 'tools', categoryName: 'Developer Tools', difficulty: 'All Levels', description: 'A modal text editor favored for speed, keyboard workflows, and powerful customization.', topics: ['Modes', 'Editing', 'Navigation', 'Macros', 'Plugins'], cheatSheets: [{ name: 'Vim Cheat Sheet', url: 'https://cheatography.com/tag/vim/' }] },
  { id: 'emacs', name: 'Emacs', icon: '🧠', color: '#7F5AB6', category: 'tools', categoryName: 'Developer Tools', difficulty: 'All Levels', description: 'A highly extensible text editor and Lisp platform with deep customization.', topics: ['Buffers', 'Lisp', 'Keybindings', 'Customization', 'Modes'], cheatSheets: [{ name: 'Emacs Cheat Sheet', url: 'https://cheatography.com/tag/emacs/' }] },
  { id: 'vscode', name: 'VS Code', icon: '🧩', color: '#007ACC', category: 'tools', categoryName: 'Developer Tools', difficulty: 'All Levels', description: 'A fast, extensible editor with debugging, IntelliSense, and rich extension support.', topics: ['Extensions', 'Debugging', 'Tasks', 'Settings', 'Shortcuts'], cheatSheets: [{ name: 'VS Code Cheat Sheet', url: 'https://cheatography.com/tag/vscode/' }] },
  { id: 'github', name: 'GitHub', icon: '🐙', color: '#181717', category: 'tools', categoryName: 'Developer Tools', difficulty: 'All Levels', description: 'A collaboration platform for version control, code review, issues, and CI/CD.', topics: ['Repos', 'Pull Requests', 'Actions', 'Issues', 'Branches'], cheatSheets: [{ name: 'GitHub Cheat Sheet', url: 'https://cheatography.com/tag/github/' }] },
  { id: 'gitlab', name: 'GitLab', icon: '🦊', color: '#FC6D26', category: 'tools', categoryName: 'Developer Tools', difficulty: 'All Levels', description: 'A DevOps platform with source control, CI/CD, and project management.', topics: ['Repos', 'CI/CD', 'Merge Requests', 'Runners', 'Issues'], cheatSheets: [{ name: 'GitLab Cheat Sheet', url: 'https://cheatography.com/tag/gitlab/' }] },
  { id: 'jenkins', name: 'Jenkins', icon: '🟦', color: '#D33833', category: 'tools', categoryName: 'Developer Tools', difficulty: 'All Levels', description: 'An automation server for building, testing, and deploying software.', topics: ['Pipelines', 'Jobs', 'Agents', 'Plugins', 'Credentials'], cheatSheets: [{ name: 'Jenkins Cheat Sheet', url: 'https://cheatography.com/tag/jenkins/' }] },
  { id: 'terraform', name: 'Terraform', icon: '🏗️', color: '#7B42BC', category: 'tools', categoryName: 'Developer Tools', difficulty: 'All Levels', description: 'Infrastructure as code for provisioning cloud resources across providers.', topics: ['Providers', 'State', 'Modules', 'Plan/Apply', 'Variables'], cheatSheets: [{ name: 'Terraform Cheat Sheet', url: 'https://cheatography.com/tag/terraform/' }] },
  { id: 'ansible', name: 'Ansible', icon: '🤖', color: '#EE0000', category: 'tools', categoryName: 'Developer Tools', difficulty: 'All Levels', description: 'A configuration management and automation tool for servers, apps, and infrastructure.', topics: ['Playbooks', 'Inventory', 'Roles', 'Modules', 'Variables'], cheatSheets: [{ name: 'Ansible Cheat Sheet', url: 'https://cheatography.com/tag/ansible/' }] },
  { id: 'puppet', name: 'Puppet', icon: '🎭', color: '#FFAE1A', category: 'tools', categoryName: 'Developer Tools', difficulty: 'All Levels', description: 'A configuration automation tool for managing infrastructure at scale.', topics: ['Manifests', 'Modules', 'Catalogs', 'Facts', 'Resources'], cheatSheets: [{ name: 'Puppet Cheat Sheet', url: 'https://cheatography.com/tag/puppet/' }] },
  { id: 'chef', name: 'Chef', icon: '👨‍🍳', color: '#F09820', category: 'tools', categoryName: 'Developer Tools', difficulty: 'All Levels', description: 'Infrastructure automation using cookbooks, recipes, and policy-driven workflows.', topics: ['Cookbooks', 'Recipes', 'Attributes', 'Nodes', 'Resources'], cheatSheets: [{ name: 'Chef Cheat Sheet', url: 'https://cheatography.com/tag/chef' }] },
];

const allCheatSheetItems = [...cheatSheetItems, ...toolCheatSheetItems];

const categories = [
  { id: 'all', name: 'All Cheat Sheets', icon: '📋' },
  { id: 'languages', name: 'Programming Languages', icon: '💻' },
  { id: 'tools', name: 'Developer Tools', icon: '🧰' },
];

function DifficultyBadge({ difficulty }) {
  const styles = {
    Beginner: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    Intermediate: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
    Advanced: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
    'All Levels': 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
  };
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${styles[difficulty] || styles.Beginner}`}>
      {difficulty}
    </span>
  );
}

export default function CheatsheetPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedId, setExpandedId] = useState(null);

  const filtered = useMemo(() => {
    let items = allCheatSheetItems;
    if (activeCategory !== 'all') {
      items = items.filter(t => t.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter(t =>
        t.name.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.topics.some(topic => topic.toLowerCase().includes(q))
      );
    }
    return items;
  }, [activeCategory, search]);

  const toggleExpand = (id) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white dark:from-gray-950 dark:via-gray-950 dark:to-gray-900">
      <div className="sticky top-0 z-40 border-b border-gray-200/80 dark:border-gray-800/80 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid gap-4 lg:grid-cols-[1.3fr,0.7fr] lg:items-end mb-6">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent mb-2">
                Developer Cheat Sheets
              </h1>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
                Quick reference guides for languages and tools, presented as focused cards for fast scanning and direct access.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 shadow-sm">
                <div className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 mb-1">Languages</div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{cheatSheetItems.length}</div>
              </div>
              <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 shadow-sm">
                <div className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 mb-1">Tools</div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{toolCheatSheetItems.length}</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search languages, tools, topics, or keywords..."
              className="w-full px-4 py-3 pl-12 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-400"
            />
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!search && (
          <Card hover={false} className="mb-8 p-4 sm:p-5 bg-white/80 dark:bg-gray-900/80 backdrop-blur border border-gray-200 dark:border-gray-800">
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl font-medium text-sm transition-all duration-200 ${
                    activeCategory === cat.id
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/25'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {cat.icon} {cat.name}
                </button>
              ))}
            </div>
          </Card>
        )}

        <div className="mb-6 text-sm text-gray-500 dark:text-gray-400">
          {filtered.length} cheat sheet{filtered.length !== 1 ? 's' : ''} available
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((tech, i) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
            >
              <Card
                hover={false}
                className={`group relative h-full overflow-hidden border cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  expandedId === tech.id ? 'ring-2 ring-indigo-500 shadow-xl' : ''
                }`}
                onClick={() => toggleExpand(tech.id)}
                style={{ borderColor: `${tech.color}33` }}
              >
                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-transparent via-current to-transparent opacity-50" style={{ color: tech.color }} />
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full blur-3xl opacity-20" style={{ backgroundColor: tech.color }} />

                <div className="relative p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl text-2xl ring-1 ring-black/5 dark:ring-white/10" style={{ backgroundColor: `${tech.color}18` }}>
                      <span>{tech.icon}</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-gray-900 dark:text-white truncate">
                        {tech.name}
                      </h3>
                      <div className="mt-1 flex flex-wrap items-center gap-2">
                        <DifficultyBadge difficulty={tech.difficulty} />
                        <span className="text-xs text-gray-400 truncate">{tech.categoryName}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mb-4">
                    {tech.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {tech.topics.slice(0, 4).map(topic => (
                      <span
                        key={topic}
                        className="text-xs px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                    {tech.topics.length > 4 && (
                      <span className="text-xs px-2.5 py-1 rounded-full" style={{ backgroundColor: `${tech.color}14`, color: tech.color }}>
                        +{tech.topics.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Link
                      to="/languages"
                      onClick={e => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-xl transition-colors"
                      style={{ backgroundColor: `${tech.color}14`, color: tech.color }}
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Open Cheat Sheet
                    </Link>
                    {tech.roadmapUrl && (
                      <a
                        href={tech.roadmapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={e => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-200 dark:hover:bg-emerald-800/40 transition-colors"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                        Roadmap
                      </a>
                    )}
                  </div>

                  <AnimatePresence initial={false}>
                    {expandedId === tech.id && (
                      <motion.div
                        key="expanded-content"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="border-t border-gray-200 dark:border-gray-700 mt-4 pt-4 space-y-4">
                          {tech.cheatSheets && tech.cheatSheets.length > 0 && (
                            <div>
                              <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                                Cheat Sheet
                              </h4>
                              <div className="space-y-1.5">
                                {tech.cheatSheets.map((cs, i) => (
                                  <a
                                    key={i}
                                    href={cs.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={e => e.stopPropagation()}
                                    className="block text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400"
                                  >
                                    {cs.name} →
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}

                          <div>
                            <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                              Topics
                            </h4>
                            <div className="flex flex-wrap gap-1.5">
                              {tech.topics.map(topic => (
                                <span key={topic} className="text-xs px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md">
                                  {topic}
                                </span>
                              ))}
                            </div>
                          </div>

                          {tech.roadmapUrl && (
                            <a
                              href={tech.roadmapUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={e => e.stopPropagation()}
                              className="flex items-center justify-center gap-2 w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-xl transition-colors"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                              </svg>
                              View {tech.name} Roadmap
                            </a>
                          )}

                          {tech.cheatSheets?.[0]?.url && (
                            <a
                              href={tech.cheatSheets[0].url}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={e => e.stopPropagation()}
                              className="flex items-center justify-center gap-2 w-full py-2.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-xl transition-colors"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                              View {tech.name} Cheat Sheets
                            </a>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <span className="text-6xl block mb-4">🔍</span>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No cheat sheets found</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              {search ? `No results for "${search}"` : 'No languages in this category yet'}
            </p>
            {search && (
              <button
                onClick={() => setSearch('')}
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors"
              >
                Clear Search
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
