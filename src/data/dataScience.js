export const dataScienceTools = [
  {
    id: 'numpy', name: 'NumPy', icon: '🔢', color: '#013243',
    description: 'Fundamental Python library for numerical computing. Provides N-dimensional arrays, linear algebra, Fourier transforms, and random number capabilities.',
    difficulty: 'Intermediate', popularity: 1, paradigms: ['Numerical Computing', 'Array Programming'],
    roadmapUrl: 'https://numpy.org/doc/stable/',
    tags: ['numpy', 'python', 'numerical', 'array', 'linear-algebra'],
    topics: ['Overview', 'Installation', 'Arrays', 'Indexing', 'Reshaping', 'Broadcasting', 'Universal Functions', 'Linear Algebra', 'Random Module', 'File I/O', 'Performance'],
    resources: [
      { name: 'NumPy Docs', url: 'https://numpy.org/doc/stable/', type: 'Official' },
      { name: 'NumPy Tutorial', url: 'https://numpy.org/learn/', type: 'Tutorial' },
      { name: 'NumPy GitHub', url: 'https://github.com/numpy/numpy', type: 'GitHub' },
    ],
    cheatSheets: [
      { name: 'NumPy Cheat Sheet', url: 'https://quickref.me/numpy' },
    ],
    documentation: [
      { name: 'NumPy API Reference', url: 'https://numpy.org/doc/stable/reference/' },
      { name: 'NumPy User Guide', url: 'https://numpy.org/doc/stable/user/' },
    ],
    books: [
      { title: 'Python for Data Analysis', author: 'Wes McKinney' },
      { title: 'NumPy Handbook', author: 'Ivan Idris' },
      { title: 'NumPy Essentials', author: 'Leo (Liang) Chin' },
    ],
    interviewQuestions: [
      { question: 'What is broadcasting in NumPy?', difficulty: 'Medium' },
      { question: 'What is the difference between np.array and np.ndarray?', difficulty: 'Easy' },
    ],
    roadmap: ['Python Basics', 'NumPy Arrays', 'Indexing & Slicing', 'Broadcasting', 'Linear Algebra', 'Random Numbers', 'Performance Optimization'],
    careerOpportunities: ['Data Scientist', 'Data Analyst', 'ML Engineer', 'Scientific Programmer'],
  },
  {
    id: 'pandas', name: 'Pandas', icon: '🐼', color: '#150458',
    description: 'Python library for data manipulation and analysis. Provides DataFrame and Series objects for working with structured data.',
    difficulty: 'Intermediate', popularity: 2, paradigms: ['Data Analysis', 'Data Manipulation'],
    roadmapUrl: 'https://pandas.pydata.org/docs/',
    tags: ['pandas', 'python', 'data-analysis', 'dataframe', 'data-wrangling'],
    topics: ['Overview', 'Installation', 'Series', 'DataFrame', 'Reading Data', 'Data Selection', 'Filtering', 'GroupBy', 'Merging', 'Pivot Tables', 'Time Series'],
    resources: [
      { name: 'Pandas Docs', url: 'https://pandas.pydata.org/docs/', type: 'Official' },
      { name: 'Pandas Tutorials', url: 'https://pandas.pydata.org/docs/getting_started/intro_tutorials/index.html', type: 'Tutorial' },
      { name: 'Pandas GitHub', url: 'https://github.com/pandas-dev/pandas', type: 'GitHub' },
    ],
    cheatSheets: [
      { name: 'Pandas Cheat Sheet', url: 'https://pandas.pydata.org/Pandas_Cheat_Sheet.pdf' },
    ],
    documentation: [
      { name: 'Pandas API', url: 'https://pandas.pydata.org/docs/reference/index.html' },
      { name: 'Pandas Getting Started', url: 'https://pandas.pydata.org/docs/getting_started/index.html' },
    ],
    books: [
      { title: 'Python for Data Analysis', author: 'Wes McKinney' },
      { title: 'Pandas in Action', author: 'Boris Paskhaver' },
      { title: 'Learning pandas', author: 'Michael Heydt' },
    ],
    interviewQuestions: [
      { question: 'What is a DataFrame?', difficulty: 'Easy' },
      { question: 'How is apply() different from map()?', difficulty: 'Medium' },
    ],
    roadmap: ['Python Basics', 'Pandas Basics', 'Data Cleaning', 'Data Transformation', 'Grouping & Aggregation', 'Time Series', 'Performance', 'Advanced Techniques'],
    careerOpportunities: ['Data Scientist', 'Data Analyst', 'Data Engineer', 'Business Analyst'],
  },
  {
    id: 'matplotlib', name: 'Matplotlib', icon: '📉', color: '#11557C',
    description: 'Comprehensive Python library for creating static, animated, and interactive visualizations. The foundation of Python data visualization.',
    difficulty: 'Intermediate', popularity: 3, paradigms: ['Data Visualization', 'Plotting'],
    roadmapUrl: 'https://matplotlib.org/stable/',
    tags: ['matplotlib', 'python', 'visualization', 'plotting', 'charts'],
    topics: ['Overview', 'Installation', 'Line Plots', 'Scatter Plots', 'Bar Charts', 'Histograms', 'Subplots', 'Styling', 'Annotations', '3D Plotting', 'Animation'],
    resources: [
      { name: 'Matplotlib Docs', url: 'https://matplotlib.org/stable/', type: 'Official' },
      { name: 'Matplotlib Tutorials', url: 'https://matplotlib.org/stable/tutorials/', type: 'Tutorial' },
      { name: 'Matplotlib Gallery', url: 'https://matplotlib.org/stable/gallery/', type: 'Reference' },
    ],
    cheatSheets: [
      { name: 'Matplotlib Cheat Sheet', url: 'https://matplotlib.org/cheatsheets/' },
    ],
    documentation: [
      { name: 'Matplotlib API', url: 'https://matplotlib.org/stable/api/' },
      { name: 'Matplotlib Tutorials', url: 'https://matplotlib.org/stable/tutorials/' },
    ],
    books: [
      { title: 'Python Data Science Handbook', author: 'Jake VanderPlas' },
      { title: 'Matplotlib for Python Developers', author: 'Sandyip Dhar' },
    ],
    interviewQuestions: [
      { question: 'What are the differences between pyplot and OOP interface?', difficulty: 'Medium' },
    ],
    roadmap: ['Python Basics', 'Matplotlib Basics', 'Basic Plots', 'Subplots & Layouts', 'Customization', 'Advanced Charts', '3D & Animation'],
    careerOpportunities: ['Data Scientist', 'Data Analyst', 'Research Scientist', 'Data Engineer'],
  },
  {
    id: 'seaborn', name: 'Seaborn', icon: '🌊', color: '#75AADB',
    description: 'Statistical data visualization library built on Matplotlib. Provides a high-level interface for attractive and informative statistical graphics.',
    difficulty: 'Intermediate', popularity: 4, paradigms: ['Statistical Visualization', 'Data Visualization'],
    roadmapUrl: 'https://seaborn.pydata.org',
    tags: ['seaborn', 'python', 'visualization', 'statistics', 'statistical-plots'],
    topics: ['Overview', 'Installation', 'Relational Plots', 'Categorical Plots', 'Distribution Plots', 'Matrix Plots', 'Regression Plots', 'Multi-plot Grids', 'Theme & Style', 'Color Palettes', 'Context'],
    resources: [
      { name: 'Seaborn Docs', url: 'https://seaborn.pydata.org', type: 'Official' },
      { name: 'Seaborn Tutorial', url: 'https://seaborn.pydata.org/tutorial.html', type: 'Tutorial' },
      { name: 'Seaborn Gallery', url: 'https://seaborn.pydata.org/examples/', type: 'Reference' },
    ],
    cheatSheets: [
      { name: 'Seaborn Cheat Sheet', url: 'https://seaborn.pydata.org/examples/index.html' },
    ],
    documentation: [
      { name: 'Seaborn API', url: 'https://seaborn.pydata.org/api.html' },
      { name: 'Seaborn Tutorial', url: 'https://seaborn.pydata.org/tutorial.html' },
    ],
    books: [
      { title: 'Seaborn: Statistical Data Visualization', author: 'Michael Waskom' },
    ],
    interviewQuestions: [
      { question: 'How is Seaborn different from Matplotlib?', difficulty: 'Easy' },
    ],
    roadmap: ['Python Basics', 'Matplotlib Basics', 'Seaborn Basics', 'Statistical Plots', 'Multi-plot Grids', 'Customization', 'Publication Figures'],
    careerOpportunities: ['Data Scientist', 'Data Analyst', 'Research Scientist', 'Data Journalist'],
  },
  {
    id: 'scipy', name: 'SciPy', icon: '📐', color: '#8CAAE6',
    description: 'Python library for scientific computing. Builds on NumPy with modules for optimization, integration, interpolation, signal processing, and statistics.',
    difficulty: 'Advanced', popularity: 5, paradigms: ['Scientific Computing', 'Optimization', 'Signal Processing'],
    roadmapUrl: 'https://docs.scipy.org/doc/scipy/',
    tags: ['scipy', 'python', 'scientific', 'optimization', 'statistics', 'signal-processing'],
    topics: ['Overview', 'Installation', 'Optimization (optimize)', 'Integration (integrate)', 'Interpolation (interpolate)', 'Signal Processing (signal)', 'Linear Algebra (linalg)', 'Sparse Matrices (sparse)', 'Statistics (stats)', 'Spatial Data', 'Image Processing (ndimage)'],
    resources: [
      { name: 'SciPy Docs', url: 'https://docs.scipy.org/doc/scipy/', type: 'Official' },
      { name: 'SciPy Tutorial', url: 'https://docs.scipy.org/doc/scipy/tutorial/', type: 'Tutorial' },
      { name: 'SciPy GitHub', url: 'https://github.com/scipy/scipy', type: 'GitHub' },
    ],
    cheatSheets: [
      { name: 'SciPy Reference', url: 'https://docs.scipy.org/doc/scipy/reference/' },
    ],
    documentation: [
      { name: 'SciPy API', url: 'https://docs.scipy.org/doc/scipy/reference/' },
      { name: 'SciPy Lecture Notes', url: 'https://scipy-lectures.org' },
    ],
    books: [
      { title: 'SciPy and NumPy', author: 'Eli Bressert' },
      { title: 'SciPy Programming', author: 'Juan Nunez-Iglesias' },
    ],
    interviewQuestions: [
      { question: 'What is SciPy used for?', difficulty: 'Easy' },
    ],
    roadmap: ['NumPy Basics', 'SciPy Basics', 'Optimization', 'Integration', 'Signal Processing', 'Statistics', 'Sparse Matrices', 'Advanced Applications'],
    careerOpportunities: ['Data Scientist', 'Scientific Programmer', 'Research Engineer', 'Quantitative Analyst'],
  },
  {
    id: 'jupyter', name: 'Jupyter', icon: '📓', color: '#F37626',
    description: 'Interactive web-based notebook environment for creating and sharing documents with live code, equations, visualizations, and narrative text.',
    difficulty: 'Beginner', popularity: 6, paradigms: ['Interactive Computing', 'Notebook', 'Literate Programming'],
    roadmapUrl: 'https://www.tutorialspoint.com/jupyter/index.htm',
    tags: ['jupyter', 'notebook', 'python', 'interactive', 'data-science'],
    topics: ['Overview', 'Installation', 'Notebook Interface', 'JupyterLab', 'Cells', 'Markdown', 'Magic Commands', 'Widgets', 'Kernels', 'Extensions', 'Sharing'],
    resources: [
      { name: 'Jupyter Docs', url: 'https://docs.jupyter.org', type: 'Official' },
      { name: 'JupyterLab Tutorial', url: 'https://jupyterlab.readthedocs.io/en/stable/' },
      { name: 'Jupyter Widgets', url: 'https://ipywidgets.readthedocs.io', type: 'Documentation' },
    ],
    cheatSheets: [
      { name: 'Jupyter Keyboard Shortcuts', url: 'https://jupyter.org/documentation' },
    ],
    documentation: [
      { name: 'JupyterLab Docs', url: 'https://jupyterlab.readthedocs.io/en/stable/' },
      { name: 'Jupyter NBViewer', url: 'https://nbviewer.jupyter.org' },
    ],
    books: [
      { title: 'Jupyter for Data Science', author: 'Dan Toomey' },
    ],
    interviewQuestions: [],
    roadmap: ['Jupyter Basics', 'Cells & Kernels', 'Markdown', 'Magic Commands', 'Widgets', 'JupyterLab', 'Voilà Dashboards'],
    careerOpportunities: ['Data Scientist', 'Data Analyst', 'Researcher', 'ML Engineer'],
  },
  {
    id: 'plotly', name: 'Plotly', icon: '📊', color: '#3F4F75',
    description: 'Interactive graphing library for Python, R, and JavaScript. Creates publication-quality interactive visualizations and dashboards.',
    difficulty: 'Intermediate', popularity: 7, paradigms: ['Interactive Visualization', 'Dashboards'],
    roadmapUrl: 'https://www.tutorialspoint.com/plotly/index.htm',
    tags: ['plotly', 'python', 'interactive', 'visualization', 'dash'],
    topics: ['Overview', 'Installation', 'Plotly Express', 'Line & Scatter', 'Bar Charts', 'Heatmaps', '3D Plots', 'Maps', 'Animations', 'Subplots', 'Dash Framework'],
    resources: [
      { name: 'Plotly Docs', url: 'https://plotly.com/python/', type: 'Official' },
      { name: 'Dash Docs', url: 'https://dash.plotly.com', type: 'Documentation' },
      { name: 'Plotly Chart Studio', url: 'https://chart-studio.plotly.com', type: 'Tool' },
    ],
    cheatSheets: [
      { name: 'Plotly Cheat Sheet', url: 'https://plotly.com/python/cheat-sheet/' },
    ],
    documentation: [
      { name: 'Plotly Python API', url: 'https://plotly.com/python-api-reference/' },
      { name: 'Plotly Express Docs', url: 'https://plotly.com/python/plotly-express/' },
    ],
    books: [
      { title: 'Interactive Dashboards with Plotly', author: 'Elias Dabbas' },
    ],
    interviewQuestions: [
      { question: 'What is Plotly Express?', difficulty: 'Easy' },
    ],
    roadmap: ['Python Basics', 'Plotly Basics', 'Plotly Express', 'Custom Layouts', 'Interactive Widgets', 'Dash Apps', 'Deployment'],
    careerOpportunities: ['Data Scientist', 'Data Analyst', 'Data Visualization Engineer', 'BI Developer'],
  },
  {
    id: 'tableau', name: 'Tableau', icon: '📈', color: '#E97627',
    description: 'Industry-leading business intelligence and data visualization platform. Drag-and-drop interface for creating powerful interactive dashboards.',
    difficulty: 'Beginner', popularity: 8, paradigms: ['BI', 'Data Visualization', 'Dashboards'],
    roadmapUrl: 'https://www.tutorialspoint.com/tableau/index.htm',
    tags: ['tableau', 'bi', 'visualization', 'dashboard', 'analytics'],
    topics: ['Overview', 'Installation', 'Connecting Data', 'Worksheets', 'Charts', 'Dashboards', 'Calculated Fields', 'Parameters', 'Filters', 'Table Calculations', 'Storytelling'],
    resources: [
      { name: 'Tableau Docs', url: 'https://help.tableau.com', type: 'Official' },
      { name: 'Tableau Public Gallery', url: 'https://public.tableau.com/app/discover', type: 'Gallery' },
      { name: 'Tableau Public', url: 'https://public.tableau.com', type: 'Platform' },
    ],
    cheatSheets: [
      { name: 'Tableau Cheat Sheet', url: 'https://help.tableau.com/current/pro/desktop/en-us/default.htm' },
    ],
    documentation: [
      { name: 'Tableau Help', url: 'https://help.tableau.com/current/pro/desktop/en-us/default.htm' },
      { name: 'Tableau Community', url: 'https://community.tableau.com' },
    ],
    books: [
      { title: 'Tableau Desktop Certified Associate', author: 'Dmitry Anoshin' },
      { title: 'Storytelling with Data', author: 'Cole Nussbaumer Knaflic' },
      { title: 'Practical Tableau', author: 'Ryan Sleeper' },
    ],
    interviewQuestions: [
      { question: 'What is a calculated field in Tableau?', difficulty: 'Easy' },
      { question: 'Explain LOD expressions', difficulty: 'Hard' },
    ],
    roadmap: ['Tableau Basics', 'Connecting Data', 'Visualizations', 'Dashboards', 'Calculations', 'Advanced Analytics', 'Tableau Prep'],
    careerOpportunities: ['Data Analyst', 'BI Analyst', 'Data Visualization Engineer', 'Business Analyst'],
  },
]
