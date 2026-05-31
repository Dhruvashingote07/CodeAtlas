export const cybersecurityTools = [
  {
    id: 'kali-linux', name: 'Kali Linux', icon: '🐉', color: '#557C94',
    description: 'Industry-standard Linux distribution for penetration testing and security research. Ships with 600+ pre-installed security tools.',
    difficulty: 'Advanced', popularity: 1, paradigms: ['Penetration Testing', 'Security Distribution', 'Ethical Hacking'],
    roadmapUrl: 'https://www.tutorialspoint.com/kali_linux/index.htm',
    tags: ['kali', 'linux', 'pen-testing', 'security', 'ethical-hacking'],
    topics: ['Overview', 'Installation', 'Tool Categories', 'Information Gathering', 'Vulnerability Analysis', 'Exploitation', 'Post-Exploitation', 'Password Attacks', 'Wireless Attacks', 'Forensics', 'Reporting'],
    resources: [
      { name: 'Kali Linux Docs', url: 'https://www.kali.org/docs/', type: 'Official' },
      { name: 'Kali Linux Tutorials', url: 'https://www.kali.org/tools/', type: 'Tutorial' },
      { name: 'Kali Forums', url: 'https://forums.kali.org', type: 'Community' },
    ],
    cheatSheets: [
      { name: 'Kali Cheat Sheet', url: 'https://www.kali.org/tools/' },
    ],
    documentation: [
      { name: 'Kali Tools', url: 'https://www.kali.org/tools/' },
      { name: 'Kali Linux ISO', url: 'https://www.kali.org/get-kali/' },
    ],
    books: [
      { title: 'Kali Linux Revealed', author: 'Raphael Hertzog' },
      { title: 'The Kali Linux Book', author: 'Shiva V. N. Parasram' },
      { title: 'Kali Linux: Wireless Penetration Testing', author: 'Vivek Ramachandran' },
    ],
    interviewQuestions: [
      { question: 'What is Kali Linux used for?', difficulty: 'Easy' },
      { question: 'How is Kali different from Ubuntu?', difficulty: 'Easy' },
    ],
    roadmap: ['Linux Basics', 'Kali Linux Setup', 'Information Gathering', 'Vulnerability Assessment', 'Exploitation', 'Post-Exploitation', 'Reporting', 'Certification Prep'],
    careerOpportunities: ['Penetration Tester', 'Security Analyst', 'Ethical Hacker', 'Security Consultant'],
  },
  {
    id: 'metasploit', name: 'Metasploit', icon: '💀', color: '#2B2B2B',
    description: 'Penetration testing framework for developing, testing, and executing exploits against target systems. The most widely used exploitation framework.',
    difficulty: 'Advanced', popularity: 2, paradigms: ['Exploitation', 'Penetration Testing', 'Security Framework'],
    roadmapUrl: 'https://docs.metasploit.com',
    tags: ['metasploit', 'msf', 'exploitation', 'pen-testing', 'security'],
    topics: ['Overview', 'Installation', 'MSF Console', 'Modules', 'Exploits', 'Payloads', 'Auxiliary', 'Post-Exploitation', 'Meterpreter', 'Resource Scripts', 'Database Integration'],
    resources: [
      { name: 'Metasploit Docs', url: 'https://docs.metasploit.com', type: 'Official' },
      { name: 'Metasploit Pro', url: 'https://www.rapid7.com/products/metasploit/', type: 'Commercial' },
      { name: 'Rapid7 Blog', url: 'https://blog.rapid7.com/category/metasploit/', type: 'Blog' },
    ],
    cheatSheets: [
      { name: 'Metasploit Cheat Sheet', url: 'https://www.sans.org/security-resources/sec560/misc_tools_sheet_v1.pdf' },
    ],
    documentation: [
      { name: 'Metasploit Framework', url: 'https://github.com/rapid7/metasploit-framework' },
      { name: 'Metasploit Releases', url: 'https://github.com/rapid7/metasploit-framework/releases' },
    ],
    books: [
      { title: 'Metasploit: The Penetration Tester\'s Guide', author: 'David Kennedy' },
      { title: 'Metasploit Cookbook', author: 'David Maynor' },
    ],
    interviewQuestions: [
      { question: 'What is a Meterpreter?', difficulty: 'Medium' },
      { question: 'Explain the Metasploit module structure', difficulty: 'Medium' },
    ],
    roadmap: ['Metasploit Basics', 'MSF Console', 'Exploit Modules', 'Payloads', 'Auxiliary Modules', 'Post-Exploitation', 'Custom Modules', 'Reporting'],
    careerOpportunities: ['Penetration Tester', 'Security Researcher', 'Red Team Operator', 'Security Engineer'],
  },
  {
    id: 'wireshark', name: 'Wireshark', icon: '🦈', color: '#1679A7',
    description: 'World\'s foremost network protocol analyzer. Capture and interactively browse network traffic for analysis, troubleshooting, and security investigation.',
    difficulty: 'Intermediate', popularity: 3, paradigms: ['Network Analysis', 'Packet Capture', 'Forensics'],
    roadmapUrl: 'https://www.wireshark.org/docs/',
    tags: ['wireshark', 'network', 'packet-analysis', 'protocol', 'forensics'],
    topics: ['Overview', 'Installation', 'Packet Capture', 'Display Filters', 'Capture Filters', 'Color Rules', 'Protocol Analysis', 'Follow Stream', 'Statistics', 'IO Graphs', 'TShark'],
    resources: [
      { name: 'Wireshark Docs', url: 'https://www.wireshark.org/docs/', type: 'Official' },
      { name: 'Wireshark Tutorial', url: 'https://www.wireshark.org/docs/wsug_html/', type: 'Tutorial' },
      { name: 'Wireshark Wiki', url: 'https://wiki.wireshark.org', type: 'Community' },
    ],
    cheatSheets: [
      { name: 'Wireshark Display Filters', url: 'https://www.wireshark.org/docs/dfref/' },
    ],
    documentation: [
      { name: 'Wireshark User Guide', url: 'https://www.wireshark.org/docs/wsug_html/' },
      { name: 'Wireshark Sample Captures', url: 'https://wiki.wireshark.org/SampleCaptures' },
    ],
    books: [
      { title: 'Practical Packet Analysis', author: 'Chris Sanders' },
      { title: 'The Wireshark Field Guide', author: 'Robert Shimonski' },
      { title: 'Wireshark 101', author: 'Gerald Combs' },
    ],
    interviewQuestions: [
      { question: 'What is a display filter in Wireshark?', difficulty: 'Easy' },
      { question: 'How do you capture HTTPS traffic?', difficulty: 'Hard' },
    ],
    roadmap: ['Networking Basics', 'Wireshark Setup', 'Packet Capture', 'Filtering', 'Protocol Analysis', 'Troubleshooting', 'Security Analysis', 'Performance'],
    careerOpportunities: ['Security Analyst', 'Network Engineer', 'Penetration Tester', 'Forensic Analyst'],
  },
  {
    id: 'burp-suite', name: 'Burp Suite', icon: '🕷️', color: '#FF6600',
    description: 'Integrated platform for web application security testing. Proxy, scanner, intruder, and repeater tools for comprehensive web security assessment.',
    difficulty: 'Advanced', popularity: 4, paradigms: ['Web Security', 'Penetration Testing', 'Proxy'],
    roadmapUrl: 'https://portswigger.net/burp/documentation',
    tags: ['burp-suite', 'web-security', 'proxy', 'pen-testing', 'intercept'],
    topics: ['Overview', 'Installation', 'Proxy Setup', 'Intercept', 'Repeater', 'Intruder', 'Scanner', 'Decoder', 'Comparer', 'Extensions', 'Collaborator'],
    resources: [
      { name: 'Burp Suite Docs', url: 'https://portswigger.net/burp/documentation', type: 'Official' },
      { name: 'PortSwigger Academy', url: 'https://portswigger.net/web-security', type: 'Course' },
      { name: 'Burp Extensions', url: 'https://portswigger.net/bappstore', type: 'Marketplace' },
    ],
    cheatSheets: [
      { name: 'Burp Suite Shortcuts', url: 'https://portswigger.net/burp/documentation/desktop/shortcuts' },
    ],
    documentation: [
      { name: 'Burp Suite Reference', url: 'https://portswigger.net/burp/documentation' },
      { name: 'Burp Suite API', url: 'https://portswigger.net/burp/documentation/api' },
    ],
    books: [
      { title: 'The Web Application Hacker\'s Handbook', author: 'Dafydd Stuttard' },
      { title: 'Burp Suite Cookbook', author: 'Dr. Michael S. Leon' },
    ],
    interviewQuestions: [
      { question: 'What is Burp Suite used for?', difficulty: 'Easy' },
      { question: 'Explain the Intruder tool', difficulty: 'Medium' },
    ],
    roadmap: ['Web Basics', 'Burp Suite Setup', 'Proxy & Intercept', 'Repeater & Intruder', 'Scanner', 'Extensions', 'Advanced Attacks', 'Reporting'],
    careerOpportunities: ['Web Security Tester', 'Penetration Tester', 'Security Researcher', 'AppSec Engineer'],
  },
  {
    id: 'nmap', name: 'Nmap', icon: '🗺️', color: '#0E83CD',
    description: 'Network discovery and security scanning tool. Used for port scanning, service detection, OS fingerprinting, and vulnerability detection.',
    difficulty: 'Intermediate', popularity: 5, paradigms: ['Network Scanning', 'Discovery', 'Security Assessment'],
    roadmapUrl: 'https://nmap.org/docs.html',
    tags: ['nmap', 'network', 'scanning', 'port-scan', 'discovery'],
    topics: ['Overview', 'Installation', 'Target Specification', 'Port Scanning', 'Service Detection', 'OS Detection', 'Scripting Engine (NSE)', 'Timing', 'Firewall Evasion', 'Output Formats', 'Zenmap'],
    resources: [
      { name: 'Nmap Docs', url: 'https://nmap.org/docs.html', type: 'Official' },
      { name: 'Nmap Reference Guide', url: 'https://nmap.org/book/man.html', type: 'Documentation' },
      { name: 'Nmap Changelog', url: 'https://nmap.org/changelog.html', type: 'Reference' },
    ],
    cheatSheets: [
      { name: 'Nmap Cheat Sheet', url: 'https://nmap.org/docs.html' },
    ],
    documentation: [
      { name: 'Nmap Network Scanning', url: 'https://nmap.org/book/toc.html' },
      { name: 'Nmap Install Guide', url: 'https://nmap.org/download.html' },
    ],
    books: [
      { title: 'Nmap Network Scanning', author: 'Gordon Fyodor Lyon' },
      { title: 'Nmap in the Enterprise', author: 'Angela Orebaugh' },
    ],
    interviewQuestions: [
      { question: 'What is a SYN scan?', difficulty: 'Medium' },
      { question: 'What is NSE?', difficulty: 'Medium' },
    ],
    roadmap: ['Networking Basics', 'Nmap Basics', 'Port Scanning', 'Service & OS Detection', 'NSE Scripts', 'Performance Tuning', 'Firewall Evasion', 'Reporting'],
    careerOpportunities: ['Security Analyst', 'Network Engineer', 'Penetration Tester', 'IT Security Administrator'],
  },
  {
    id: 'john-the-ripper', name: 'John the Ripper', icon: '🔑', color: '#CC0000',
    description: 'Fast password cracking tool for testing password strength. Supports hundreds of hash and cipher types, with multiple cracking modes.',
    difficulty: 'Advanced', popularity: 6, paradigms: ['Password Cracking', 'Security Testing', 'Hash Analysis'],
    roadmapUrl: 'https://www.openwall.com/john/doc/',
    tags: ['john-the-ripper', 'password-cracking', 'hash', 'security', 'audit'],
    topics: ['Overview', 'Installation', 'Hash Formats', 'Wordlist Mode', 'Incremental Mode', 'Markov Mode', 'Rules', 'Unshadow', 'Single Crack Mode', 'Performance', 'Distributed Cracking'],
    resources: [
      { name: 'John the Ripper Docs', url: 'https://www.openwall.com/john/doc/', type: 'Official' },
      { name: 'Openwall Community', url: 'https://www.openwall.com/lists/', type: 'Community' },
      { name: 'John the Ripper FAQ', url: 'https://www.openwall.com/john/doc/FAQ.shtml', type: 'Reference' },
    ],
    cheatSheets: [
      { name: 'John the Ripper Cheat Sheet', url: 'https://www.openwall.com/john/doc/EXAMPLES.shtml' },
    ],
    documentation: [
      { name: 'John the Ripper README', url: 'https://github.com/openwall/john' },
      { name: 'John GitHub', url: 'https://github.com/openwall/john' },
      { name: 'John Examples', url: 'https://www.openwall.com/john/doc/EXAMPLES.shtml' },
    ],
    books: [
      { title: 'Password Cracking with John the Ripper', author: 'Brian Wallace' },
    ],
    interviewQuestions: [
      { question: 'What is John the Ripper used for?', difficulty: 'Easy' },
      { question: 'Explain wordlist vs incremental mode', difficulty: 'Medium' },
    ],
    roadmap: ['Password Security Basics', 'John Setup', 'Hash Formats', 'Wordlist Attacks', 'Rules & Mangling', 'Incremental Mode', 'Performance Tuning', 'GPU Acceleration'],
    careerOpportunities: ['Security Auditor', 'Penetration Tester', 'Security Analyst', 'Forensic Investigator'],
  },
  {
    id: 'owasp-zap', name: 'OWASP ZAP', icon: '🔍', color: '#000000',
    description: 'Free, open-source web application security scanner maintained by OWASP. Helps find vulnerabilities in web applications during development and testing.',
    difficulty: 'Intermediate', popularity: 7, paradigms: ['Web Security', 'DAST', 'Vulnerability Scanner'],
    roadmapUrl: 'https://www.zaproxy.org/docs/',
    tags: ['owasp', 'zap', 'web-security', 'scanner', 'dast'],
    topics: ['Overview', 'Installation', 'Automated Scan', 'Manual Explore', 'Spider', 'Active Scan', 'Passive Scan', 'Alerts', 'Fuzzing', 'API Scanning', 'Authentication'],
    resources: [
      { name: 'ZAP Docs', url: 'https://www.zaproxy.org/docs/', type: 'Official' },
      { name: 'ZAP Tutorials', url: 'https://www.zaproxy.org/getting-started/', type: 'Tutorial' },
      { name: 'ZAP Blog', url: 'https://www.zaproxy.org/blog/', type: 'Blog' },
    ],
    cheatSheets: [
      { name: 'ZAP Cheat Sheet', url: 'https://www.zaproxy.org/docs/desktop/ui/tabs/' },
    ],
    documentation: [
      { name: 'ZAP User Guide', url: 'https://www.zaproxy.org/docs/desktop/' },
      { name: 'ZAP Scripts', url: 'https://github.com/zaproxy/community-scripts' },
    ],
    books: [
      { title: 'OWASP Testing Guide', author: 'OWASP Foundation' },
    ],
    interviewQuestions: [
      { question: 'What is OWASP ZAP?', difficulty: 'Easy' },
      { question: 'How is ZAP different from Burp Suite?', difficulty: 'Medium' },
    ],
    roadmap: ['Web Security Basics', 'ZAP Setup', 'Automated Scanning', 'Manual Testing', 'Advanced Scanning', 'API Security', 'CI/CD Integration', 'Reporting'],
    careerOpportunities: ['AppSec Engineer', 'Security Tester', 'DevSecOps Engineer', 'Security Analyst'],
  },
]
