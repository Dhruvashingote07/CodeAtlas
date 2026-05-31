export const devOpsTools = [
  {
    id: 'docker', name: 'Docker', icon: '🐳', color: '#2496ED',
    description: 'Platform for developing, shipping, and running applications in containers. Provides consistency across development and production environments.',
    difficulty: 'Intermediate', popularity: 1, paradigms: ['Containerization', 'Virtualization', 'DevOps'],
    roadmapUrl: 'https://roadmap.sh/docker',
    tags: ['docker', 'containers', 'devops', 'containerization', 'microservices'],
    topics: ['Overview', 'Installation', 'Images', 'Containers', 'Dockerfile', 'Docker Compose', 'Volumes', 'Networks', 'Registry', 'Swarm', 'Security'],
    resources: [
      { name: 'Docker Docs', url: 'https://docs.docker.com', type: 'Official' },
      { name: 'Docker Playground', url: 'https://labs.play-with-docker.com', type: 'Interactive' },
      { name: 'Docker Blog', url: 'https://www.docker.com/blog/', type: 'Blog' },
    ],
    cheatSheets: [
      { name: 'Docker Cheat Sheet', url: 'https://dockerlabs.collabnix.com/docker/cheatsheet/' },
    ],
    documentation: [
      { name: 'Docker Engine', url: 'https://docs.docker.com/engine/' },
      { name: 'Docker Compose Docs', url: 'https://docs.docker.com/compose/' },
    ],
    books: [
      { title: 'Docker Deep Dive', author: 'Nigel Poulton' },
      { title: 'The Docker Book', author: 'James Turnbull' },
      { title: 'Docker in Action', author: 'Jeff Nickoloff' },
    ],
    interviewQuestions: [
      { question: 'What is a Docker container?', difficulty: 'Easy' },
      { question: 'What is the difference between an image and a container?', difficulty: 'Easy' },
      { question: 'Explain Docker Compose', difficulty: 'Medium' },
    ],
    roadmap: ['Docker Basics', 'Images & Containers', 'Dockerfile Best Practices', 'Docker Compose', 'Networking', 'Volumes', 'Swarm/Kubernetes', 'Security'],
    careerOpportunities: ['DevOps Engineer', 'Platform Engineer', 'Backend Developer', 'Cloud Engineer'],
  },
  {
    id: 'kubernetes', name: 'Kubernetes', icon: '☸️', color: '#326CE5',
    description: 'Open-source container orchestration platform for automating deployment, scaling, and management of containerized applications.',
    difficulty: 'Advanced', popularity: 2, paradigms: ['Orchestration', 'Container Management', 'Cloud Native'],
    roadmapUrl: 'https://roadmap.sh/kubernetes',
    tags: ['kubernetes', 'k8s', 'containers', 'orchestration', 'cloud-native'],
    topics: ['Overview', 'Setup', 'Pods', 'Deployments', 'Services', 'ConfigMaps', 'Volumes', 'Ingress', 'Helm', 'RBAC', 'Monitoring'],
    resources: [
      { name: 'Kubernetes Docs', url: 'https://kubernetes.io/docs/', type: 'Official' },
      { name: 'Kubernetes Playground', url: 'https://killercoda.com/playgrounds/scenario/kubernetes', type: 'Interactive' },
      { name: 'K8s GitHub', url: 'https://github.com/kubernetes/kubernetes', type: 'GitHub' },
    ],
    cheatSheets: [
      { name: 'kubectl Cheat Sheet', url: 'https://kubernetes.io/docs/reference/kubectl/cheatsheet/' },
    ],
    documentation: [
      { name: 'Kubernetes API', url: 'https://kubernetes.io/docs/concepts/overview/kubernetes-api/' },
      { name: 'K8s Reference Docs', url: 'https://kubernetes.io/docs/reference/' },
    ],
    books: [
      { title: 'Kubernetes in Action', author: 'Marko Luksa' },
      { title: 'The Kubernetes Book', author: 'Nigel Poulton' },
      { title: 'Programming Kubernetes', author: 'Michael Hausenblas & Stefan Schimanski' },
    ],
    interviewQuestions: [
      { question: 'What is a Pod?', difficulty: 'Easy' },
      { question: 'Explain Kubernetes Deployments vs StatefulSets', difficulty: 'Medium' },
      { question: 'What is etcd in Kubernetes?', difficulty: 'Hard' },
    ],
    roadmap: ['Kubernetes Basics', 'Pods & Deployments', 'Services & Networking', 'ConfigMaps & Secrets', 'Storage', 'Helm Charts', 'Monitoring & Observability', 'Production'],
    careerOpportunities: ['DevOps Engineer', 'Platform Engineer', 'Site Reliability Engineer', 'Cloud Engineer'],
  },
  {
    id: 'terraform', name: 'Terraform', icon: '🏗️', color: '#844FBA',
    description: 'Infrastructure as Code (IaC) tool for building, changing, and versioning infrastructure safely and efficiently across cloud providers.',
    difficulty: 'Advanced', popularity: 3, paradigms: ['Infrastructure as Code', 'Cloud Automation'],
    roadmapUrl: 'https://roadmap.sh/terraform',
    tags: ['terraform', 'iac', 'infrastructure', 'cloud', 'automation'],
    topics: ['Overview', 'Installation', 'HCL Basics', 'Providers', 'Resources', 'Variables', 'State Management', 'Modules', 'Workspaces', 'Remote Backend', 'Testing'],
    resources: [
      { name: 'Terraform Docs', url: 'https://developer.hashicorp.com/terraform/docs', type: 'Official' },
      { name: 'Terraform Tutorials', url: 'https://developer.hashicorp.com/terraform/tutorials', type: 'Tutorial' },
      { name: 'Terraform Registry', url: 'https://registry.terraform.io', type: 'Registry' },
    ],
    cheatSheets: [
      { name: 'Terraform Cheat Sheet', url: 'https://developer.hashicorp.com/terraform/cli/commands' },
    ],
    documentation: [
      { name: 'Terraform Registry', url: 'https://registry.terraform.io' },
      { name: 'Terraform CLI Docs', url: 'https://developer.hashicorp.com/terraform/cli' },
    ],
    books: [
      { title: 'Terraform: Up and Running', author: 'Yevgeniy Brikman' },
      { title: 'Terraform in Action', author: 'Scott Winkler' },
    ],
    interviewQuestions: [
      { question: 'What is Infrastructure as Code?', difficulty: 'Easy' },
      { question: 'What is Terraform state?', difficulty: 'Medium' },
    ],
    roadmap: ['Terraform Basics', 'HCL Syntax', 'Providers', 'State Management', 'Modules', 'Workspaces', 'CI/CD Integration', 'Advanced Patterns'],
    careerOpportunities: ['DevOps Engineer', 'Platform Engineer', 'Cloud Engineer', 'Infrastructure Engineer'],
  },
  {
    id: 'ansible', name: 'Ansible', icon: '📋', color: '#EE0000',
    description: 'Simple IT automation engine for configuration management, application deployment, and orchestration. Agentless and SSH-based.',
    difficulty: 'Intermediate', popularity: 4, paradigms: ['Configuration Management', 'Automation', 'IaC'],
    roadmapUrl: 'https://www.tutorialspoint.com/ansible/index.htm',
    tags: ['ansible', 'automation', 'configuration-management', 'iac', 'devops'],
    topics: ['Overview', 'Installation', 'Inventory', 'Playbooks', 'Modules', 'Variables', 'Templates (Jinja2)', 'Roles', 'Handlers', 'Tags', 'Vault'],
    resources: [
      { name: 'Ansible Docs', url: 'https://docs.ansible.com', type: 'Official' },
      { name: 'Ansible Galaxy', url: 'https://galaxy.ansible.com', type: 'Community' },
      { name: 'Ansible Blog', url: 'https://www.ansible.com/blog', type: 'Blog' },
    ],
    cheatSheets: [
      { name: 'Ansible Cheat Sheet', url: 'https://docs.ansible.com/ansible/latest/collections/index.html' },
    ],
    documentation: [
      { name: 'Ansible Documentation', url: 'https://docs.ansible.com/ansible/latest/' },
      { name: 'Ansible Galaxy', url: 'https://galaxy.ansible.com' },
    ],
    books: [
      { title: 'Ansible for DevOps', author: 'Jeff Geerling' },
      { title: 'Ansible: Up and Running', author: 'Lorin Hochstein' },
      { title: 'Mastering Ansible', author: 'James Freeman' },
    ],
    interviewQuestions: [
      { question: 'How does Ansible differ from Terraform?', difficulty: 'Medium' },
      { question: 'What is an Ansible Playbook?', difficulty: 'Easy' },
    ],
    roadmap: ['Ansible Basics', 'Inventory', 'Playbooks', 'Variables & Templates', 'Roles', 'Ansible Galaxy', 'Vault', 'Production'],
    careerOpportunities: ['DevOps Engineer', 'System Administrator', 'Platform Engineer', 'Automation Engineer'],
  },
  {
    id: 'jenkins', name: 'Jenkins', icon: '📦', color: '#D24939',
    description: 'Leading open-source automation server for CI/CD pipelines. Highly extensible with thousands of plugins for build, test, and deploy workflows.',
    difficulty: 'Intermediate', popularity: 5, paradigms: ['CI/CD', 'Automation Server', 'Pipeline'],
    roadmapUrl: 'https://www.jenkins.io/doc/',
    tags: ['jenkins', 'ci', 'cd', 'automation', 'pipeline'],
    topics: ['Overview', 'Installation', 'Jobs', 'Pipeline as Code', 'Declarative Pipeline', 'Scripted Pipeline', 'Plugins', 'Agents', 'Credentials', 'Test Reports', 'Integration'],
    resources: [
      { name: 'Jenkins Docs', url: 'https://www.jenkins.io/doc/', type: 'Official' },
      { name: 'Jenkins Handbook', url: 'https://www.jenkins.io/doc/book/', type: 'Documentation' },
      { name: 'Jenkins Blog', url: 'https://www.jenkins.io/blog/', type: 'Blog' },
    ],
    cheatSheets: [
      { name: 'Jenkins Pipeline Syntax', url: 'https://www.jenkins.io/doc/book/pipeline/syntax/' },
    ],
    documentation: [
      { name: 'Jenkins User Guide', url: 'https://www.jenkins.io/doc/' },
      { name: 'Jenkins Plugins', url: 'https://plugins.jenkins.io' },
    ],
    books: [
      { title: 'Jenkins: The Definitive Guide', author: 'John Ferguson Smart' },
      { title: 'Jenkins 2: Up and Running', author: 'Brent Laster' },
    ],
    interviewQuestions: [
      { question: 'What is a Jenkins Pipeline?', difficulty: 'Easy' },
      { question: 'Explain Declarative vs Scripted Pipeline', difficulty: 'Medium' },
    ],
    roadmap: ['Jenkins Basics', 'Jobs & Builds', 'Pipeline as Code', 'Declarative Pipelines', 'Plugins', 'Distributed Builds', 'Integration & Security'],
    careerOpportunities: ['DevOps Engineer', 'Build & Release Engineer', 'CI/CD Engineer'],
  },
  {
    id: 'github-actions', name: 'GitHub Actions', icon: '⚡', color: '#2088FF',
    description: 'CI/CD and automation platform built into GitHub. Define workflows with YAML to build, test, and deploy directly from your repository.',
    difficulty: 'Beginner', popularity: 6, paradigms: ['CI/CD', 'Automation', 'GitHub Integration'],
    roadmapUrl: 'https://docs.github.com/actions',
    tags: ['github-actions', 'ci', 'cd', 'automation', 'github', 'workflows'],
    topics: ['Overview', 'Workflows', 'Events', 'Jobs', 'Steps', 'Actions', 'Runners', 'Secrets', 'Matrix Builds', 'Artifacts', 'Deployment'],
    resources: [
      { name: 'GitHub Actions Docs', url: 'https://docs.github.com/actions', type: 'Official' },
      { name: 'Actions Marketplace', url: 'https://github.com/marketplace?type=actions', type: 'Marketplace' },
      { name: 'GitHub Blog - Actions', url: 'https://github.blog/category/product/actions/', type: 'Blog' },
    ],
    cheatSheets: [
      { name: 'Workflow Syntax', url: 'https://docs.github.com/actions/using-workflows/workflow-syntax-for-github-actions' },
    ],
    documentation: [
      { name: 'Actions Reference', url: 'https://docs.github.com/actions/reference' },
      { name: 'Workflow Syntax', url: 'https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions' },
    ],
    books: [
      { title: 'GitHub Actions in Action', author: 'Michael Kaufmann' },
    ],
    interviewQuestions: [
      { question: 'What is a GitHub Actions workflow?', difficulty: 'Easy' },
      { question: 'Explain matrix builds', difficulty: 'Medium' },
    ],
    roadmap: ['GitHub Actions Basics', 'Workflows & Jobs', 'Actions & Runners', 'Secrets & Environments', 'Matrix Builds', 'Deployment', 'Advanced Patterns'],
    careerOpportunities: ['DevOps Engineer', 'Software Developer', 'Platform Engineer'],
  },
  {
    id: 'prometheus', name: 'Prometheus', icon: '📊', color: '#E6522C',
    description: 'Open-source monitoring and alerting toolkit designed for reliability and scalability. Collects and stores metrics as time-series data.',
    difficulty: 'Advanced', popularity: 7, paradigms: ['Monitoring', 'Metrics', 'Observability'],
    roadmapUrl: 'https://prometheus.io/docs/',
    tags: ['prometheus', 'monitoring', 'metrics', 'alerting', 'observability'],
    topics: ['Overview', 'Installation', 'Data Model', 'Metric Types', 'PromQL', 'Exporters', 'Service Discovery', 'Alerting Rules', 'Alertmanager', 'Recording Rules', 'Storage'],
    resources: [
      { name: 'Prometheus Docs', url: 'https://prometheus.io/docs/', type: 'Official' },
      { name: 'Prometheus Playground', url: 'https://prometheus.io/docs/practices/', type: 'Tutorial' },
      { name: 'Prometheus GitHub', url: 'https://github.com/prometheus/prometheus', type: 'GitHub' },
    ],
    cheatSheets: [
      { name: 'PromQL Cheat Sheet', url: 'https://promlabs.com/promql-cheat-sheet/' },
    ],
    documentation: [
      { name: 'Prometheus Configuration', url: 'https://prometheus.io/docs/prometheus/latest/configuration/' },
      { name: 'Prometheus API Docs', url: 'https://prometheus.io/docs/prometheus/latest/querying/api/' },
    ],
    books: [
      { title: 'Prometheus: Up and Running', author: 'Brian Brazil' },
      { title: 'Practical Monitoring', author: 'Mike Julian' },
    ],
    interviewQuestions: [
      { question: 'What are the four metric types in Prometheus?', difficulty: 'Medium' },
      { question: 'What is PromQL?', difficulty: 'Medium' },
    ],
    roadmap: ['Prometheus Basics', 'Installation', 'Metric Types', 'PromQL Queries', 'Exporters', 'Alerting', 'Grafana Integration', 'Production'],
    careerOpportunities: ['DevOps Engineer', 'Site Reliability Engineer', 'Platform Engineer', 'Observability Engineer'],
  },
  {
    id: 'grafana', name: 'Grafana', icon: '📈', color: '#F46800',
    description: 'Open-source analytics and monitoring platform. Visualize metrics, logs, and traces from Prometheus, Loki, and hundreds of other data sources.',
    difficulty: 'Intermediate', popularity: 8, paradigms: ['Monitoring', 'Visualization', 'Dashboards'],
    roadmapUrl: 'https://grafana.com/docs/',
    tags: ['grafana', 'monitoring', 'dashboards', 'visualization', 'observability'],
    topics: ['Overview', 'Installation', 'Data Sources', 'Panels', 'Dashboards', 'Alerting', 'Variables', 'Annotations', 'Transformations', 'Loki', 'Tempo'],
    resources: [
      { name: 'Grafana Docs', url: 'https://grafana.com/docs/', type: 'Official' },
      { name: 'Grafana Play', url: 'https://play.grafana.org', type: 'Interactive' },
      { name: 'Grafana Blog', url: 'https://grafana.com/blog/', type: 'Blog' },
    ],
    cheatSheets: [
      { name: 'Grafana Dashboard Guide', url: 'https://grafana.com/docs/grafana/latest/dashboards/' },
    ],
    documentation: [
      { name: 'Grafana Reference', url: 'https://grafana.com/docs/grafana/latest/' },
      { name: 'Grafana Tutorials', url: 'https://grafana.com/tutorials/' },
    ],
    books: [
      { title: 'Grafana in Action', author: 'Kris Browne' },
    ],
    interviewQuestions: [
      { question: 'What data sources does Grafana support?', difficulty: 'Easy' },
      { question: 'How do you create a Grafana dashboard?', difficulty: 'Easy' },
    ],
    roadmap: ['Grafana Basics', 'Data Sources', 'Building Dashboards', 'Panels & Visualizations', 'Alerting', 'Advanced Features', 'Production Setup'],
    careerOpportunities: ['DevOps Engineer', 'Site Reliability Engineer', 'Observability Engineer', 'Platform Engineer'],
  },
  {
    id: 'elk-stack', name: 'ELK Stack', icon: '🦌', color: '#005571',
    description: 'Elasticsearch, Logstash, Kibana stack for centralized logging, search, and analysis. Elasticsearch for search, Logstash for ingestion, Kibana for visualization.',
    difficulty: 'Advanced', popularity: 9, paradigms: ['Logging', 'Search', 'Observability'],
    roadmapUrl: 'https://roadmap.sh/elasticsearch',
    tags: ['elasticsearch', 'logstash', 'kibana', 'elk', 'logging', 'search'],
    topics: ['Overview', 'Elasticsearch Setup', 'Indexing', 'Mapping', 'Search Queries', 'Aggregations', 'Logstash Pipelines', 'Kibana Dashboards', 'Beats', 'Cluster Management', 'Security'],
    resources: [
      { name: 'Elastic Docs', url: 'https://www.elastic.co/docs', type: 'Official' },
      { name: 'ELK Tutorial', url: 'https://www.elastic.co/guide/index.html', type: 'Tutorial' },
      { name: 'Elastic Blog', url: 'https://www.elastic.co/blog', type: 'Blog' },
    ],
    cheatSheets: [
      { name: 'Elasticsearch Query DSL', url: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html' },
    ],
    documentation: [
      { name: 'Elasticsearch Guide', url: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/' },
      { name: 'Elasticsearch Reference', url: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/' },
    ],
    books: [
      { title: 'Elasticsearch in Action', author: 'Madhusudhan Konda' },
      { title: 'Elasticsearch: The Definitive Guide', author: 'Clinton Gormley & Zachary Tong' },
    ],
    interviewQuestions: [
      { question: 'What is an inverted index?', difficulty: 'Medium' },
      { question: 'Explain Elasticsearch cluster architecture', difficulty: 'Hard' },
    ],
    roadmap: ['ELK Basics', 'Elasticsearch', 'Logstash Pipelines', 'Kibana Dashboards', 'Beats', 'Cluster Management', 'Production Deployment'],
    careerOpportunities: ['DevOps Engineer', 'Observability Engineer', 'Data Engineer', 'Site Reliability Engineer'],
  },
  {
    id: 'argocd', name: 'ArgoCD', icon: '🔄', color: '#EF7B4D',
    description: 'GitOps continuous delivery tool for Kubernetes. Automates application deployment and lifecycle management using Git as the single source of truth.',
    difficulty: 'Advanced', popularity: 10, paradigms: ['GitOps', 'CD', 'Kubernetes Deployment'],
    roadmapUrl: 'https://argo-cd.readthedocs.io',
    tags: ['argocd', 'gitops', 'kubernetes', 'cd', 'continuous-delivery'],
    topics: ['Overview', 'Installation', 'Applications', 'Projects', 'Sync Strategies', 'Sync Waves', 'Hooks', 'RBAC', 'SSO', 'Multi-Cluster', 'Monitoring'],
    resources: [
      { name: 'ArgoCD Docs', url: 'https://argo-cd.readthedocs.io', type: 'Official' },
      { name: 'ArgoCD Tutorials', url: 'https://argo-cd.readthedocs.io/en/stable/#getting-started', type: 'Tutorial' },
      { name: 'ArgoCD Blog', url: 'https://blog.argoproj.io/', type: 'Blog' },
    ],
    cheatSheets: [
      { name: 'ArgoCD CLI Reference', url: 'https://argo-cd.readthedocs.io/en/stable/user-guide/commands/argocd/' },
    ],
    documentation: [
      { name: 'ArgoCD User Guide', url: 'https://argo-cd.readthedocs.io/en/stable/user-guide/' },
      { name: 'ArgoCD GitHub', url: 'https://github.com/argoproj/argo-cd' },
    ],
    books: [
      { title: 'GitOps with ArgoCD', author: 'Eduardo Gonzalez' },
    ],
    interviewQuestions: [
      { question: 'What is GitOps?', difficulty: 'Medium' },
      { question: 'How does ArgoCD sync work?', difficulty: 'Hard' },
    ],
    roadmap: ['GitOps Concepts', 'ArgoCD Basics', 'Application Management', 'Sync Strategies', 'Projects & RBAC', 'Multi-Cluster', 'CI/CD Integration'],
    careerOpportunities: ['DevOps Engineer', 'Platform Engineer', 'Site Reliability Engineer', 'Cloud Engineer'],
  },
]
