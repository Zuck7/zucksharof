import cosmetics from '../assets/cosmetics.jpeg';
import rezolved from '../assets/rezolved.png';
import shopdesc from '../assets/shopdesc.png';

const GitHubIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.477 2 2 6.484 2 12.012c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.833.091-.646.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.747-1.025 2.747-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.481C19.138 20.174 22 16.426 22 12.012 22 6.484 17.523 2 12 2z"/>
  </svg>
);

const ExternalIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

const projects = [
  {
    imagePath: shopdesc,
    title: 'Multi-Agent Product Copywriting',
    subtitle: 'AI-Powered Product Copywriting Platform',
    period: 'Jan 2026 – Present',
    text: 'Solving the problem of slow, expensive manual product copywriting — each listing can take 15–30 minutes to write and $5–$25 to outsource. Designed a multi-agent Python backend workflow handling product analysis, SEO strategy, competitor research, and copywriting, producing marketplace-ready content in under 30 seconds. Containerized a scalable multi-service architecture with Docker Compose and automated builds, tests, and PR checks via a GitHub Actions CI/CD pipeline.',
    techStack: ['Python', 'TypeScript', 'LangChain', 'Docker', 'Docker Compose', 'GitHub Actions', 'Git'],
    githubUrl: 'https://github.com/Zuck7/shopdesc.ai',
    liveUrl: '',
    featured: true,
    impact: 'Under 30 seconds per product',
  },
  {
    imagePath: null,
    title: 'Supply Chain Transparency & Audit Platform',
    subtitle: 'Compliance Tracing Across Multi-Tier Supplier Networks',
    period: 'Jan 2026 – Present',
    text: 'Built a supply chain compliance platform that traces ethical and regulatory compliance across multi-tier supplier networks using a graph-based relational model with recursive SQL CTEs. Designed with Clean Architecture (Domain / Application / Infrastructure / API), JWT auth, and Redis caching, containerized via Docker/Kubernetes with CI/CD through GitHub Actions.',
    techStack: ['C# .NET 8', 'React', 'SQL', 'Redis', 'Docker', 'Kubernetes', 'Clean Architecture', 'JWT'],
    githubUrl: 'https://github.com/Zuck7/Echo_Trace',
    liveUrl: '',
    featured: false,
    impact: 'Multi-tier supplier tracing',
  },
  {
    imagePath: null,
    title: 'Bank Marketing ML Pipeline',
    subtitle: 'TFX + Airflow Production-Style ML Pipeline',
    period: '2026',
    text: 'Built a production-style ML pipeline to predict term deposit subscriptions from 45,211 bank campaign interactions using TensorFlow Extended (TFX) and Apache Airflow. Implemented all 9 pipeline components (ExampleGen, StatisticsGen, SchemaGen, ExampleValidator, Transform, Trainer, Resolver, Evaluator, Pusher), trained an embedding-based Keras classifier, and added TFMA slice-based fairness analysis across education, job type, and marital status.',
    techStack: ['Python', 'TensorFlow', 'TFX', 'Apache Airflow', 'TFMA', 'TFDV', 'Apache Beam', 'ML Metadata'],
    githubUrl: 'https://github.com/Zuck7/bank-marketing-ml',
    liveUrl: '',
    featured: false,
    impact: '91.4% val accuracy, 0.907 AUC',
  },
  {
    imagePath: cosmetics,
    title: 'Cosmetics Multi-Agent RAG System',
    subtitle: 'RAG-Powered AI Assistant',
    period: 'Sep 2025 – Dec 2025',
    text: 'Built a multi-agent backend system (Planner, Reflection, Summarization, Validation) backed by a retrieval pipeline over open-source health product data, with a Flask API serving a Streamlit chat UI. Used LLaMA 3.3 via Groq for inference and FAISS as the vector database for semantic retrieval.',
    techStack: ['Python', 'LangChain', 'LangGraph', 'FAISS', 'Flask', 'Streamlit', 'Groq', 'RAG'],
    githubUrl: 'https://github.com/Zuck7/Cosmetics-AI-Agent',
    liveUrl: '',
    featured: false,
    impact: 'Multi-agent orchestration',
  },
  {
    imagePath: null,
    title: 'YouTube Comments Spam Detector',
    subtitle: 'ML Text Classification Model',
    period: 'Sep 2025 – Oct 2025',
    text: 'Built a spam/ham classifier in scikit-learn and NLTK using a Multinomial Naive Bayes model with Bag-of-Words features and TF-IDF weighting, reaching 87% test accuracy.',
    techStack: ['Python', 'scikit-learn', 'NLTK', 'NumPy', 'Machine Learning', 'NLP'],
    githubUrl: 'https://github.com/Zuck7/YouTube-comments-spam-detector',
    liveUrl: '',
    featured: false,
    impact: '87% test accuracy',
  },
  {
    imagePath: rezolved,
    title: 'Rezolved',
    subtitle: 'IT Support Ticket Management System',
    text: 'Programmed the frontend and backend using the MERN stack and Bootstrap for styling. Inspected the entire ticket submission flow and debugged CRUD operations using MongoDB to verify data integrity. Shipped using CI/CD pipelines over 3 months, ran unit testing on tickets, and implemented Firebase signup with Google Auth and Admin/User roles.',
    techStack: ['MERN', 'Bootstrap', 'Firebase', 'MongoDB', 'CI/CD', 'Unit Testing'],
    githubUrl: '',
    liveUrl: 'https://rezolved.onrender.com',
    featured: false,
    impact: '3-month CI/CD delivery',
  },
];

function Projects() {
  return (
    <div className="page-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-20">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-4">
            <span className="gradient-text">My Projects</span>
          </h1>
          <p className="text-slate-500 text-sm sm:text-lg max-w-2xl mx-auto">
            A collection of projects spanning AI/ML systems, full-stack web apps, and software engineering
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-5 sm:space-y-6 mb-14 sm:mb-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white border rounded-2xl overflow-hidden hover:shadow-md transition-all duration-200 ${
                project.featured ? 'border-violet-300 ring-1 ring-violet-100' : 'border-slate-200 hover:border-violet-200'
              }`}
            >
              {project.featured && (
                <div className="bg-violet-50 border-b border-violet-100 px-4 sm:px-6 py-2 flex items-center gap-2">
                  <span className="text-xs font-bold text-violet-700 tracking-widest uppercase">Featured Project</span>
                </div>
              )}

              <div className="flex flex-col md:flex-row">

                {/* Image */}
                {project.imagePath && (
                  <div className="md:w-56 flex-shrink-0">
                    <img
                      src={project.imagePath}
                      alt={project.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="flex-1 p-4 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <div className="flex items-center gap-2.5 sm:gap-3 mb-1">
                        <h3 className="text-base sm:text-lg text-slate-900 font-bold">{project.title}</h3>
                        {project.impact && (
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-violet-50 text-violet-700 border border-violet-100">
                            {project.impact}
                          </span>
                        )}
                      </div>
                      <p className="text-slate-500 text-xs sm:text-sm font-medium">{project.subtitle}</p>
                      {project.period && (
                        <p className="text-slate-400 text-xs mt-1">{project.period}</p>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-all duration-200 text-xs sm:text-sm font-medium"
                        >
                          <GitHubIcon className="w-4 h-4" />
                          GitHub
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg border border-violet-200 bg-violet-50 text-violet-700 transition-all duration-200 text-xs sm:text-sm font-medium hover:bg-violet-100"
                        >
                          <ExternalIcon className="w-4 h-4" />
                          Live App
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4 sm:mb-5">{project.text}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md border border-slate-200 bg-slate-50 text-slate-600 text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Have a project in mind?</h2>
          <p className="text-slate-500 mb-6">I'm always open to discussing new opportunities and ideas.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="mailto:zukhriddinsh@gmail.com"
              className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg bg-violet-600 text-white text-sm sm:text-base font-semibold hover:bg-violet-700 transition-colors duration-200"
            >
              zukhriddinsh@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/zuhriddinsh/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg border border-slate-300 text-slate-700 text-sm sm:text-base font-semibold hover:border-violet-300 hover:text-violet-700 transition-colors duration-200"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;
