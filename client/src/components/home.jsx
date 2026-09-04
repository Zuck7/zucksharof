import { Link } from 'react-router-dom';
import zuhriddin from '../assets/zuhriddin.jpeg';
import zuhriddin_resume from '../assets/zuhriddin_resume.pdf'

const skills = [
  {
    category: 'Languages',
    icon: '{ }',
    items: ['Java', 'Python', 'C#', 'JavaScript', 'TypeScript', 'C++', 'SQL', 'PL/SQL', 'NoSQL', 'HTML/CSS', 'Bash'],
  },
  {
    category: 'AI & ML',
    icon: '⚡',
    items: ['RAG', 'MCP', 'LangChain', 'LangGraph', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'NLTK', 'NumPy', 'ChromaDB', 'FAISS'],
  },
  {
    category: 'Frameworks',
    icon: '◈',
    items: ['Node.js', 'Express', 'Flask', 'REST APIs', 'MERN', 'React', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Streamlit', 'Cypress'],
  },
  {
    category: 'Developer Tools',
    icon: '⚙',
    items: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'PostgreSQL', 'Redis', 'GitHub', 'Apache Airflow', 'Snowflake', 'ROS2'],
  },
  {
    category: 'Practices',
    icon: '◎',
    items: ['Agile', 'SDLC', 'CI/CD', 'DevOps', 'MLOps', 'Systems Design', 'Unit Testing'],
  },
];

function Home() {
  return (
    <div className="page-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-20">

        {/* ── Hero ── */}
        <section className="flex flex-col items-center gap-8 sm:gap-10 mb-16 sm:mb-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Available for opportunities
          </div>

          {/* Profile image */}
          <div className="w-36 h-36 sm:w-52 sm:h-52 rounded-2xl ring-1 ring-slate-200 overflow-hidden shadow-sm">
            <img
              src={zuhriddin}
              alt="Zuhriddin Sharofiddinov"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-6xl font-extrabold leading-tight mb-3">
              <span className="gradient-text">Zuhriddin (Zuck) Sharofiddinov</span>
            </h1>

            <p className="text-base sm:text-xl text-slate-700 font-medium mb-4 sm:mb-6">
              Software Engineer &amp; AI Developer
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8">
              Building intelligent systems at the intersection of AI and software engineering.
              Most recently evaluated and improved LLM outputs as an AI Training Contractor at{' '}
              <span className="text-slate-900 font-semibold">Mercor</span>, and built automation, SQL, and
              reporting tooling as a Software Consultant Intern at{' '}
              <span className="text-slate-900 font-semibold">KPMG</span>, while completing my Advanced Diploma
              in AI &amp; Software Engineering Technology at{' '}
              <span className="text-slate-900 font-semibold">Centennial College</span>.
            </p>

            <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center mb-6 sm:mb-8">
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-violet-500" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.099 3.468-4.698 3.468-8.05a8.25 8.25 0 00-16.5 0c0 3.352 1.524 5.951 3.468 8.05a19.58 19.58 0 002.683 2.282 16.975 16.975 0 001.144.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                Toronto, ON
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-violet-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                zukhriddinsh@gmail.com
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-violet-500" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
                +1 (437) 214-2297
              </div>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                to="/projects"
                className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg bg-violet-600 text-white text-sm sm:text-base font-semibold hover:bg-violet-700 transition-colors duration-200"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg border border-slate-300 text-slate-700 text-sm sm:text-base font-semibold hover:border-violet-300 hover:text-violet-700 transition-colors duration-200"
              >
                Get in Touch
              </Link>
              <a
                href={zuhriddin_resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg border border-slate-300 text-slate-700 text-sm sm:text-base font-semibold hover:border-violet-300 hover:text-violet-700 transition-colors duration-200"
              >
                Resume ↗
              </a>
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-16 sm:mb-24">
          {[
            { value: '5+', label: 'Projects Built' },
            { value: '90+', label: 'Consultants freed from manual data processing by automation built at KPMG' },
            { value: '2', label: 'Years of software and marketing experience' }
          ].map((stat, i) => (
            <div
              key={i}
              className={`bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 text-center hover:border-violet-200 hover:shadow-sm transition-all duration-200 ${
                i === 2 ? 'sm:col-span-2 sm:max-w-sm sm:mx-auto lg:col-span-1 lg:max-w-none' : ''
              }`}
            >
              <p className="text-2xl sm:text-3xl font-extrabold text-violet-600 mb-1">{stat.value}</p>
              <p className="text-slate-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* ── Technical Skills ── */}
        <section className="mb-16 sm:mb-24">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-3">Technical Skills</h2>
            <p className="text-sm sm:text-base text-slate-500">Technologies I work with across the full stack and AI/ML</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 hover:border-violet-200 hover:shadow-sm transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-600 font-mono font-bold text-sm">
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold text-slate-900">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, j) => (
                    <span
                      key={j}
                      className="px-2.5 py-1 rounded-md border border-slate-200 bg-slate-50 text-slate-600 text-xs font-mono"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Education ── */}
        <section className="mb-16 sm:mb-24">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-3">Education</h2>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-8 hover:border-violet-200 transition-colors duration-200">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-xs font-medium mb-4">
                  Advanced Diploma
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  Ontario Advanced Diploma — AI, Software Engineering Technology
                </h3>
                <p className="text-slate-600 font-medium mb-4">Centennial College · Toronto, ON</p>
                <div className="flex flex-wrap gap-2">
                  {['OOP', 'AI Systems Design', 'Supervised Learning', 'AI Soft Test & MLOps', 'DSA', 'Networking & Intelligent Robotics', 'Advanced Database Concepts', 'Linux', 'Web App Dev', 'SDLC'].map((c, i) => (
                    <span key={i} className="px-2.5 py-1 bg-slate-50 border border-slate-200 rounded-md text-slate-600 text-xs font-mono">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              <div className="sm:text-right flex-shrink-0">
                <p className="text-slate-500 text-sm font-medium">Aug 2024 – Dec 2027</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Experience Snapshot ── */}
        <section className="mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-3">Experience</h2>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-8 hover:border-violet-200 transition-colors duration-200">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-medium mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Most Recent
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">AI Training Contractor</h3>
                <p className="text-slate-600 font-medium">Mercor · Remote (San Francisco, CA)</p>
              </div>
              <p className="text-slate-500 text-sm font-medium flex-shrink-0">May 2026 – June 2026</p>
            </div>

            <ul className="space-y-3">
              {[
                'Evaluated and ranked LLM outputs across coding and consulting tasks using structured rubrics, comparing model responses side by side and writing rationale for each ranking to improve model alignment',
                'Identified hallucinations, factual inaccuracies, and safety issues in model-generated responses, documenting failure patterns and providing detailed feedback for leading AI labs',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <Link
                to="/experience"
                className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-700 text-sm font-medium transition-colors duration-200"
              >
                View full experience
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default Home;
