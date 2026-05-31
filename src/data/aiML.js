export const aiMLTechnologies = [
  {
    id: 'tensorflow', name: 'TensorFlow', icon: '🧠', color: '#FF6F00',
    description: 'Google\'s open-source machine learning platform for building and deploying ML models. Supports deep learning, neural networks, and production MLOps.',
    difficulty: 'Advanced', popularity: 1, paradigms: ['Deep Learning', 'Neural Networks', 'ML Framework'],
    roadmapUrl: 'https://www.tensorflow.org/learn',
    tags: ['tensorflow', 'tf', 'deep-learning', 'neural-networks', 'ml', 'google'],
    topics: ['Overview', 'Installation', 'Tensors', 'Keras API', 'Sequential Model', 'Functional API', 'Callbacks', 'Custom Training', 'TF Data', 'Saving/Loading', 'TF Serving'],
    resources: [
      { name: 'TensorFlow Docs', url: 'https://www.tensorflow.org/learn', type: 'Official' },
      { name: 'TensorFlow Tutorials', url: 'https://www.tensorflow.org/tutorials', type: 'Tutorial' },
      { name: 'TensorFlow Blog', url: 'https://blog.tensorflow.org', type: 'Blog' },
    ],
    cheatSheets: [
      { name: 'TensorFlow Cheat Sheet', url: 'https://quickref.me/tensorflow' },
    ],
    documentation: [
      { name: 'TensorFlow API', url: 'https://www.tensorflow.org/api_docs' },
      { name: 'TensorFlow Guide', url: 'https://www.tensorflow.org/guide' },
    ],
    books: [
      { title: 'Hands-On Machine Learning', author: 'Aurélien Géron' },
      { title: 'Learning TensorFlow', author: 'Tom Hope' },
      { title: 'Machine Learning with TensorFlow', author: 'Nishant Shukla' },
    ],
    interviewQuestions: [
      { question: 'What is a tensor?', difficulty: 'Easy' },
      { question: 'Explain the difference between TensorFlow and Keras', difficulty: 'Medium' },
      { question: 'What is eager execution?', difficulty: 'Medium' },
    ],
    roadmap: ['Python Basics', 'ML Fundamentals', 'TensorFlow Basics', 'Keras API', 'Neural Networks', 'CNNs', 'RNNs', 'Production Deployment'],
    careerOpportunities: ['ML Engineer', 'Deep Learning Engineer', 'AI Researcher', 'Data Scientist'],
  },
  {
    id: 'pytorch', name: 'PyTorch', icon: '🔥', color: '#EE4C2C',
    description: 'Meta\'s open-source ML framework with dynamic computation graphs. Preferred for research and increasingly used in production.',
    difficulty: 'Advanced', popularity: 2, paradigms: ['Deep Learning', 'Dynamic Graphs', 'ML Framework'],
    roadmapUrl: 'https://pytorch.org/docs/stable/',
    tags: ['pytorch', 'torch', 'deep-learning', 'neural-networks', 'ml', 'meta'],
    topics: ['Overview', 'Installation', 'Tensors', 'Autograd', 'Datasets', 'DataLoaders', 'nn.Module', 'Training Loop', 'Transfer Learning', 'TorchScript', 'Distributed Training'],
    resources: [
      { name: 'PyTorch Docs', url: 'https://pytorch.org/docs/stable/', type: 'Official' },
      { name: 'PyTorch Tutorials', url: 'https://pytorch.org/tutorials/', type: 'Tutorial' },
      { name: 'PyTorch Blog', url: 'https://pytorch.org/blog/', type: 'Blog' },
    ],
    cheatSheets: [
      { name: 'PyTorch Cheat Sheet', url: 'https://pytorch.org/tutorials/beginner/ptcheat.html' },
    ],
    documentation: [
      { name: 'PyTorch API', url: 'https://pytorch.org/docs/stable/torch.html' },
      { name: 'PyTorch Documentation', url: 'https://pytorch.org/docs/stable/index.html' },
    ],
    books: [
      { title: 'Deep Learning with PyTorch', author: 'Eli Stevens' },
      { title: 'Programming PyTorch for Deep Learning', author: 'Ian Pointer' },
      { title: 'Deep Learning with PyTorch Step-by-Step', author: 'Daniel Voigt Godoy' },
    ],
    interviewQuestions: [
      { question: 'What is autograd?', difficulty: 'Medium' },
      { question: 'Explain dynamic computation graphs', difficulty: 'Hard' },
    ],
    roadmap: ['Python Basics', 'PyTorch Basics', 'Tensors & Autograd', 'Data Loading', 'Building Models', 'Training', 'Deployment', 'Research'],
    careerOpportunities: ['ML Engineer', 'Deep Learning Engineer', 'AI Researcher', 'Data Scientist'],
  },
  {
    id: 'scikit-learn', name: 'Scikit-learn', icon: '📐', color: '#F7931E',
    description: 'Python\'s most popular machine learning library for classical ML algorithms. Simple, efficient, and accessible.',
    difficulty: 'Intermediate', popularity: 3, paradigms: ['Machine Learning', 'Classical ML', 'Python Library'],
    roadmapUrl: 'https://scikit-learn.org/stable/documentation.html',
    tags: ['scikit-learn', 'sklearn', 'ml', 'python', 'machine-learning'],
    topics: ['Overview', 'Installation', 'Preprocessing', 'Supervised Learning', 'Classification', 'Regression', 'Clustering', 'Dimensionality Reduction', 'Model Selection', 'Cross-Validation', 'Pipelines'],
    resources: [
      { name: 'Scikit-learn Docs', url: 'https://scikit-learn.org/stable/documentation.html', type: 'Official' },
      { name: 'Scikit-learn Tutorials', url: 'https://scikit-learn.org/stable/tutorial/index.html', type: 'Tutorial' },
      { name: 'Scikit-learn Examples', url: 'https://scikit-learn.org/stable/auto_examples/', type: 'Reference' },
    ],
    cheatSheets: [
      { name: 'ML Cheat Sheet', url: 'https://scikit-learn.org/stable/tutorial/machine_learning_map/index.html' },
    ],
    documentation: [
      { name: 'API Reference', url: 'https://scikit-learn.org/stable/modules/classes.html' },
      { name: 'Scikit-learn User Guide', url: 'https://scikit-learn.org/stable/user_guide.html' },
    ],
    books: [
      { title: 'Introduction to Machine Learning with Python', author: 'Andreas C. Müller' },
      { title: 'Python Machine Learning', author: 'Sebastian Raschka' },
    ],
    interviewQuestions: [
      { question: 'What is overfitting?', difficulty: 'Easy' },
      { question: 'Explain cross-validation', difficulty: 'Medium' },
    ],
    roadmap: ['Python Basics', 'NumPy/Pandas', 'ML Concepts', 'Scikit-learn Basics', 'Supervised Learning', 'Unsupervised Learning', 'Model Evaluation', 'Pipelines'],
    careerOpportunities: ['Data Scientist', 'ML Engineer', 'Data Analyst', 'Research Scientist'],
  },
  {
    id: 'hugging-face', name: 'Hugging Face', icon: '🤗', color: '#FFD21E',
    description: 'Platform for building, training, and deploying NLP models. Home to thousands of pre-trained transformers and datasets.',
    difficulty: 'Intermediate', popularity: 4, paradigms: ['NLP', 'Transformers', 'Model Hub'],
    roadmapUrl: 'https://huggingface.co/docs',
    tags: ['huggingface', 'transformers', 'nlp', 'llm', 'bert', 'gpt'],
    topics: ['Overview', 'Pipeline API', 'Transformers Library', 'Datasets Library', 'Tokenizers', 'Model Hub', 'Fine-Tuning', 'Trainer API', 'Accelerate', 'Inference API', 'Spaces'],
    resources: [
      { name: 'Hugging Face Docs', url: 'https://huggingface.co/docs', type: 'Official' },
      { name: 'Hugging Face Course', url: 'https://huggingface.co/learn/nlp-course', type: 'Course' },
      { name: 'Hugging Face Blog', url: 'https://huggingface.co/blog', type: 'Blog' },
    ],
    cheatSheets: [
      { name: 'Transformers Cheat Sheet', url: 'https://huggingface.co/docs/transformers/en/quicktour' },
    ],
    documentation: [
      { name: 'Transformers API', url: 'https://huggingface.co/docs/transformers/en/index' },
      { name: 'Hugging Face Models', url: 'https://huggingface.co/models' },
    ],
    books: [
      { title: 'Natural Language Processing with Transformers', author: 'Lewis Tunstall' },
      { title: 'Fine-Tuning BERT', author: 'Amit Chaudhary' },
    ],
    interviewQuestions: [
      { question: 'What is a transformer model?', difficulty: 'Medium' },
      { question: 'Explain the attention mechanism', difficulty: 'Hard' },
    ],
    roadmap: ['NLP Basics', 'Hugging Face Ecosystem', 'Pipeline API', 'Fine-Tuning', 'Model Hub', 'Deployment', 'Advanced Techniques'],
    careerOpportunities: ['NLP Engineer', 'ML Engineer', 'AI Researcher', 'Data Scientist'],
  },
  {
    id: 'openai-api', name: 'OpenAI API', icon: '⚡', color: '#412991',
    description: 'API access to GPT-4, GPT-4o, DALL-E, Whisper, and other powerful AI models for text, image, code, and audio generation.',
    difficulty: 'Beginner', popularity: 5, paradigms: ['LLM', 'Generative AI', 'API'],
    roadmapUrl: 'https://platform.openai.com/docs/',
    tags: ['openai', 'gpt', 'llm', 'api', 'chatgpt', 'generative-ai'],
    topics: ['Overview', 'API Setup', 'Chat Completions', 'Text Completion', 'Function Calling', 'Embeddings', 'Image Generation', 'Vision', 'Whisper (Audio)', 'Fine-Tuning', 'TTS'],
    resources: [
      { name: 'OpenAI API Docs', url: 'https://platform.openai.com/docs/', type: 'Official' },
      { name: 'OpenAI Cookbook', url: 'https://cookbook.openai.com', type: 'Tutorial' },
      { name: 'OpenAI Community', url: 'https://community.openai.com', type: 'Community' },
    ],
    cheatSheets: [
      { name: 'OpenAI API Reference', url: 'https://platform.openai.com/docs/api-reference' },
    ],
    documentation: [
      { name: 'API Reference', url: 'https://platform.openai.com/docs/api-reference/chat' },
      { name: 'OpenAI Status', url: 'https://status.openai.com' },
    ],
    books: [
      { title: 'Developing Apps with GPT-4 and ChatGPT', author: 'Olivier Caelen' },
      { title: 'Quick Start Guide to ChatGPT and Generative AI', author: 'Jason Kennedy' },
    ],
    interviewQuestions: [
      { question: 'What is few-shot prompting?', difficulty: 'Easy' },
      { question: 'Explain token limits and context windows', difficulty: 'Medium' },
    ],
    roadmap: ['API Basics', 'Prompt Engineering', 'Chat Completions', 'Function Calling', 'Advanced Patterns', 'Production', 'Fine-Tuning'],
    careerOpportunities: ['AI Engineer', 'LLM Engineer', 'Prompt Engineer', 'Full Stack AI Developer'],
  },
  {
    id: 'langchain', name: 'LangChain', icon: '⛓️', color: '#1C3C3C',
    description: 'Framework for developing applications powered by language models. Simplifies chaining LLM calls, RAG, and agentic workflows.',
    difficulty: 'Intermediate', popularity: 6, paradigms: ['LLM Framework', 'Orchestration', 'RAG'],
    roadmapUrl: 'https://python.langchain.com/docs',
    tags: ['langchain', 'llm', 'rag', 'agents', 'prompt-engineering'],
    topics: ['Overview', 'Installation', 'LLMs', 'Chat Models', 'Prompts', 'Chains', 'Agents', 'Tools', 'Memory', 'RAG', 'LangServe'],
    resources: [
      { name: 'LangChain Docs', url: 'https://python.langchain.com/docs', type: 'Official' },
      { name: 'LangChain Tutorial', url: 'https://python.langchain.com/docs/tutorials/', type: 'Tutorial' },
      { name: 'LangChain Blog', url: 'https://blog.langchain.dev', type: 'Blog' },
    ],
    cheatSheets: [
      { name: 'LangChain How-To', url: 'https://python.langchain.com/docs/how_to/' },
    ],
    documentation: [
      { name: 'LangChain API', url: 'https://python.langchain.com/api_reference/' },
      { name: 'LangSmith Docs', url: 'https://docs.smith.langchain.com' },
    ],
    books: [
      { title: 'LangChain in Action', author: 'Ankur Patel' },
      { title: 'Building LLM Apps', author: 'Valentina Alto' },
    ],
    interviewQuestions: [
      { question: 'What is RAG?', difficulty: 'Medium' },
      { question: 'Explain LangChain agents', difficulty: 'Medium' },
    ],
    roadmap: ['Python Basics', 'LLM Fundamentals', 'LangChain Basics', 'Chains & Prompts', 'RAG Implementation', 'Agents & Tools', 'Production Deployment'],
    careerOpportunities: ['AI Engineer', 'LLM Engineer', 'NLP Engineer', 'Backend AI Developer'],
  },
  {
    id: 'ollama', name: 'Ollama', icon: '🦙', color: '#000000',
    description: 'Run open-source LLMs locally on your machine. Supports Llama, Mistral, Gemma, and hundreds of models with a simple CLI.',
    difficulty: 'Beginner', popularity: 7, paradigms: ['Local LLM', 'Model Runner', 'Open-Source'],
    roadmapUrl: 'https://github.com/ollama/ollama',
    tags: ['ollama', 'llama', 'local-llm', 'open-source', 'llm'],
    topics: ['Overview', 'Installation', 'Model Pull', 'Running Models', 'Custom Models', 'Modelfile', 'API Access', 'Parallel Requests', 'GPU Acceleration', 'Model Library', 'Troubleshooting'],
    resources: [
      { name: 'Ollama Docs', url: 'https://github.com/ollama/ollama', type: 'Official' },
      { name: 'Ollama Library', url: 'https://ollama.com/library', type: 'Models' },
      { name: 'Ollama Blog', url: 'https://ollama.com/blog', type: 'Blog' },
    ],
    cheatSheets: [
      { name: 'Ollama CLI Reference', url: 'https://github.com/ollama/ollama?tab=readme-ov-file#quickstart' },
    ],
    documentation: [
      { name: 'Ollama GitHub', url: 'https://github.com/ollama/ollama' },
      { name: 'Ollama API Docs', url: 'https://github.com/ollama/ollama/blob/main/docs/api.md' },
    ],
    books: [
      { title: 'Local LLMs with Ollama', author: 'Ethan Carter' },
    ],
    interviewQuestions: [],
    roadmap: ['Installation', 'Running Models', 'Custom Modelfiles', 'API Integration', 'GPU Setup', 'Production'],
    careerOpportunities: ['ML Engineer', 'AI Engineer', 'DevOps Engineer'],
  },
  {
    id: 'keras', name: 'Keras', icon: '🔷', color: '#D00000',
    description: 'High-level neural networks API for Python. Runs on top of TensorFlow, JAX, or PyTorch. Designed for fast experimentation.',
    difficulty: 'Intermediate', popularity: 8, paradigms: ['Deep Learning', 'Neural Networks', 'High-Level API'],
    roadmapUrl: 'https://keras.io',
    tags: ['keras', 'deep-learning', 'neural-networks', 'tf', 'python'],
    topics: ['Overview', 'Installation', 'Sequential API', 'Functional API', 'Layers', 'Models', 'Training', 'Callbacks', 'Transfer Learning', 'Custom Layers', 'Distributed Training'],
    resources: [
      { name: 'Keras Docs', url: 'https://keras.io', type: 'Official' },
      { name: 'Keras Guides', url: 'https://keras.io/guides/', type: 'Tutorial' },
      { name: 'Keras Examples', url: 'https://keras.io/examples/', type: 'Reference' },
    ],
    cheatSheets: [
      { name: 'Keras Cheat Sheet', url: 'https://keras.io/getting_started/' },
    ],
    documentation: [
      { name: 'Keras API', url: 'https://keras.io/api/' },
      { name: 'Keras 3 Docs', url: 'https://keras.io/keras_3/' },
    ],
    books: [
      { title: 'Deep Learning with Python', author: 'François Chollet' },
      { title: 'Advanced Deep Learning with Keras', author: 'Rowel Atienza' },
    ],
    interviewQuestions: [
      { question: 'What is the difference between Sequential and Functional API?', difficulty: 'Medium' },
      { question: 'Explain Keras callbacks', difficulty: 'Medium' },
    ],
    roadmap: ['Python Basics', 'Deep Learning Concepts', 'Keras Basics', 'Building Models', 'Training & Tuning', 'Advanced Architectures', 'Production'],
    careerOpportunities: ['ML Engineer', 'Deep Learning Engineer', 'Data Scientist', 'AI Researcher'],
  },
  {
    id: 'xgboost', name: 'XGBoost', icon: '📈', color: '#FF6600',
    description: 'Optimized gradient boosting library for tabular data. Dominates Kaggle competitions with state-of-the-art performance.',
    difficulty: 'Intermediate', popularity: 9, paradigms: ['Gradient Boosting', 'Ensemble Learning', 'Tree-Based'],
    roadmapUrl: 'https://xgboost.readthedocs.io',
    tags: ['xgboost', 'gradient-boosting', 'ensemble', 'ml', 'kaggle'],
    topics: ['Overview', 'Installation', 'DMatrix', 'Parameters', 'Training', 'Evaluation', 'Cross-Validation', 'Feature Importance', 'Early Stopping', 'GPU Acceleration', 'Scikit-learn API'],
    resources: [
      { name: 'XGBoost Docs', url: 'https://xgboost.readthedocs.io', type: 'Official' },
      { name: 'XGBoost Tutorials', url: 'https://xgboost.readthedocs.io/en/stable/tutorials/', type: 'Tutorial' },
      { name: 'XGBoost GitHub', url: 'https://github.com/dmlc/xgboost', type: 'GitHub' },
    ],
    cheatSheets: [
      { name: 'XGBoost Parameters', url: 'https://xgboost.readthedocs.io/en/stable/parameter.html' },
    ],
    documentation: [
      { name: 'XGBoost API', url: 'https://xgboost.readthedocs.io/en/stable/python/python_api.html' },
      { name: 'XGBoost Parameters Guide', url: 'https://xgboost.readthedocs.io/en/stable/parameter.html' },
    ],
    books: [
      { title: 'The Elements of Statistical Learning', author: 'Trevor Hastie' },
    ],
    interviewQuestions: [
      { question: 'What is gradient boosting?', difficulty: 'Hard' },
      { question: 'How does XGBoost differ from random forest?', difficulty: 'Medium' },
    ],
    roadmap: ['ML Basics', 'Ensemble Methods', 'XGBoost Basics', 'Parameter Tuning', 'Advanced Features', 'Deployment'],
    careerOpportunities: ['Data Scientist', 'ML Engineer', 'Kaggle Competitor', 'Data Analyst'],
  },
  {
    id: 'jax', name: 'JAX', icon: '⚡', color: '#00BFFF',
    description: 'Google\'s high-performance numerical computing library with JIT compilation, automatic differentiation, and GPU/TPU acceleration.',
    difficulty: 'Advanced', popularity: 10, paradigms: ['Numerical Computing', 'Autograd', 'JIT Compilation'],
    roadmapUrl: 'https://jax.readthedocs.io',
    tags: ['jax', 'google', 'numerical', 'autograd', 'jit', 'gpu'],
    topics: ['Overview', 'Installation', 'NumPy Compatibility', 'JIT with @jit', 'Autograd (grad)', 'Vectorization (vmap)', 'Parallelization (pmap)', 'Random Numbers', 'Neural Networks', 'Flax/Haiku', 'TPU Training'],
    resources: [
      { name: 'JAX Docs', url: 'https://jax.readthedocs.io', type: 'Official' },
      { name: 'JAX Tutorials', url: 'https://jax.readthedocs.io/en/latest/notebooks/quickstart.html', type: 'Tutorial' },
      { name: 'JAX GitHub', url: 'https://github.com/jax-ml/jax', type: 'GitHub' },
    ],
    cheatSheets: [
      { name: 'JAX Quickstart', url: 'https://jax.readthedocs.io/en/latest/notebooks/quickstart.html' },
    ],
    documentation: [
      { name: 'JAX API', url: 'https://jax.readthedocs.io/en/latest/jax.html' },
      { name: 'JAX Quickstart', url: 'https://jax.readthedocs.io/en/latest/notebooks/quickstart.html' },
    ],
    books: [
      { title: 'JAX in Practice', author: 'David K. Zhang' },
    ],
    interviewQuestions: [
      { question: 'What is JIT compilation in JAX?', difficulty: 'Hard' },
      { question: 'How does JAX compare to NumPy?', difficulty: 'Medium' },
    ],
    roadmap: ['Python Basics', 'NumPy Experience', 'JAX Basics', 'JIT & Autograd', 'vmap/pmap', 'Neural Networks with Flax', 'Research'],
    careerOpportunities: ['ML Researcher', 'Deep Learning Engineer', 'AI Scientist', 'Quantitative Researcher'],
  },
]
