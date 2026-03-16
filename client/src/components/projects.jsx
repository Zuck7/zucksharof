import cosmetics from '../assets/cosmetics.jpeg';
import mobistore from '../assets/mobistore.jpeg';
import uberEats from '../assets/uberEats.jpeg';

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
    imagePath: null,
    title: 'Shopdesc.ai',
    subtitle: 'AI-Powered Product Copywriting Platform',
    text: 'Solving the problem of slow, expensive manual product copywriting — each listing can take 15–30 minutes to write and $5–$25 to outsource. Designed a multi-agent generation workflow for product analysis, SEO strategy, competitor research, and copywriting to produce marketplace-ready content in under 30 seconds per product.',
    techStack: ['TypeScript', 'React', 'Node.js', 'Python', 'FastAPI', 'Docker', 'MongoDB'],
    githubUrl: 'https://shopdesc.ai',
    liveUrl: '',
    featured: true,
    color: 'violet',
    impact: 'Under 30 seconds per product',
  },
  {
    imagePath: cosmetics,
    title: 'Cosmetics Multi-Agent System',
    subtitle: 'RAG-Powered AI Assistant',
    text: 'Implemented Streamlit for a frontend chat interface for querying a cosmetics knowledge base, leveraging llama-3.3 for inferencing via Groq. Developed a multi-agent system consisting of Planner (Orchestration), Reflection, Summarization, and Validation Agents integrated with a RAG system on open-source cosmetic and health product data.',
    techStack: ['Python', 'RAG', 'LangChain', 'Streamlit', 'Groq', 'Systems Design'],
    githubUrl: 'https://github.com/Zuck7/Cosmetics-AI-Agent',
    liveUrl: '',
    featured: false,
    color: 'pink',
    impact: 'Multi-agent orchestration',
  },
  {
    imagePath: mobistore,
    title: 'Rezolved',
    subtitle: 'IT Support Ticket Management System',
    text: 'Programmed the frontend and backend using the MERN stack and Bootstrap for styling. Inspected the entire ticket submission flow and debugged CRUD operations using MongoDB to verify data integrity. Shipped using CI/CD pipelines over 3 months, ran unit testing on tickets, and implemented Firebase signup with Google Auth and Admin/User roles.',
    techStack: ['MERN', 'Bootstrap', 'Firebase', 'MongoDB', 'CI/CD', 'Unit Testing'],
    githubUrl: '',
    liveUrl: 'https://rezolved.vercel.app',
    featured: false,
    color: 'emerald',
    impact: '3-month CI/CD delivery',
  },
  {
    imagePath: null,
    title: 'YouTube Comments Spam Detector',
    subtitle: 'ML Text Classification Model',
    text: 'Built a comments spam detector using scikit-learn, NLTK, and NumPy that classifies spam or ham comments using a Multinomial Naïve Bayes Classifier. Used Bag of Words for feature extraction and TF-IDF for feature weighting. Achieved 87% test accuracy, effectively capturing spam indicators.',
    techStack: ['Python', 'NLTK', 'NumPy', 'Scikit-learn', 'Machine Learning', 'NLP'],
    githubUrl: '',
    liveUrl: '',
    featured: false,
    color: 'cyan',
    impact: '87% test accuracy',
  },
  {
    imagePath: null,
    title: 'Banking System Simulator',
    subtitle: 'C# .NET Application',
    text: 'Developed event handlers and created 3 types of accounts with full functionality for purchase, payment processing, interest rate calculations, and transaction fees. Managed a team of 4 peers and assisted in decoupling the application architecture to simplify future feature additions.',
    techStack: ['C#', '.NET', 'OOP', 'Event Handling'],
    githubUrl: '',
    liveUrl: '',
    featured: false,
    color: 'amber',
    impact: 'Team of 4',
  },
  {
    imagePath: uberEats,
    title: 'Uber Eats SRS',
    subtitle: 'Software Requirements Specification',
    text: "Coordinated a team of 4 on building a full SRS document for the Uber Eats mobile app. Built Sequence, Use Case, and Activity Swim Lane diagrams, and constructed functional/non-functional requirements and use cases. Programmed Python classes to demonstrate a simplified domain model of the application.",
    techStack: ['Systems Design', 'Requirements Analysis', 'SRS', 'Python', 'UML'],
    githubUrl: '',
    liveUrl: '',
    featured: false,
    color: 'rose',
    impact: 'Full SRS document',
  },
];

const colorMap = {
  violet: {
    border: 'border-violet-500/30',
    glow: 'shadow-violet-500/10',
    badge: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
    title: 'text-violet-400',
    tag: 'bg-violet-500/10 border border-violet-500/20 text-violet-300',
    impact: 'bg-violet-500/10 text-violet-300',
  },
  pink: {
    border: 'border-pink-500/30',
    glow: 'shadow-pink-500/10',
    badge: 'bg-pink-500/10 text-pink-300 border-pink-500/20',
    title: 'text-pink-400',
    tag: 'bg-pink-500/10 border border-pink-500/20 text-pink-300',
    impact: 'bg-pink-500/10 text-pink-300',
  },
  emerald: {
    border: 'border-emerald-500/30',
    glow: 'shadow-emerald-500/10',
    badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    title: 'text-emerald-400',
    tag: 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-300',
    impact: 'bg-emerald-500/10 text-emerald-300',
  },
  cyan: {
    border: 'border-cyan-500/30',
    glow: 'shadow-cyan-500/10',
    badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    title: 'text-cyan-400',
    tag: 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-300',
    impact: 'bg-cyan-500/10 text-cyan-300',
  },
  amber: {
    border: 'border-amber-500/30',
    glow: 'shadow-amber-500/10',
    badge: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
    title: 'text-amber-400',
    tag: 'bg-amber-500/10 border border-amber-500/20 text-amber-300',
    impact: 'bg-amber-500/10 text-amber-300',
  },
  rose: {
    border: 'border-rose-500/30',
    glow: 'shadow-rose-500/10',
    badge: 'bg-rose-500/10 text-rose-300 border-rose-500/20',
    title: 'text-rose-400',
    tag: 'bg-rose-500/10 border border-rose-500/20 text-rose-300',
    impact: 'bg-rose-500/10 text-rose-300',
  },
};

function Projects() {
  return (
    <div className="page-bg relative overflow-hidden">

      {/* Glow orbs */}
      <div className="glow-orb w-96 h-96 bg-violet-600 top-0 -right-20" />
      <div className="glow-orb w-72 h-72 bg-cyan-500 bottom-40 -left-10" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-white mb-4">
            <span className="gradient-text">My Projects</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            A collection of projects spanning AI/ML systems, full-stack web apps, and software engineering
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-6 mb-20">
          {projects.map((project, index) => {
            const c = colorMap[project.color];
            return (
              <div
                key={index}
                className={`bg-slate-900/60 border ${c.border} rounded-2xl overflow-hidden hover:bg-slate-900/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${c.glow} ${project.featured ? 'ring-1 ring-violet-500/30' : ''}`}
              >
                {project.featured && (
                  <div className="bg-gradient-to-r from-violet-600/20 to-cyan-600/20 border-b border-violet-500/20 px-6 py-2 flex items-center gap-2">
                    <span className="text-xs font-bold text-violet-300 tracking-widest uppercase">Featured Project</span>
                  </div>
                )}

                <div className="flex flex-col md:flex-row">

                  {/* Image */}
                  {project.imagePath && (
                    <div className="md:w-56 flex-shrink-0">
                      <img
                        src={project.imagePath}
                        alt={project.title}
                        className="w-full h-48 md:h-full object-cover opacity-80"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex-1 p-7">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className={`text-white font-bold ${c.title}`}>{project.title}</h3>
                          {project.impact && (
                            <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${c.impact}`}>
                              {project.impact}
                            </span>
                          )}
                        </div>
                        <p className="text-slate-300 text-sm font-medium">{project.subtitle}</p>
                      </div>

                      {/* Links */}
                      <div className="flex items-center gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-600 transition-all duration-200 text-sm font-medium"
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
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${c.tag} transition-all duration-200 text-sm font-medium hover:opacity-80`}
                          >
                            <ExternalIcon className="w-4 h-4" />
                            Live App
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed mb-5">{project.text}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 rounded-lg border text-xs font-medium ${c.badge}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Have a project in mind?</h2>
          <p className="text-slate-300 mb-6">I'm always open to discussing new opportunities and ideas.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:zukhriddinsh@gmail.com"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold hover:from-violet-500 hover:to-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25"
            >
              zukhriddinsh@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/zuhriddinsh/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 font-semibold hover:bg-slate-700 transition-all duration-300"
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
