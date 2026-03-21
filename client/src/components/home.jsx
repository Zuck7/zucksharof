import { Link } from 'react-router-dom';
import zuhriddin from '../assets/zuhriddin.jpeg';

const skills = [
  {
    category: 'Languages',
    icon: '{ }',
    items: ['Python', 'JavaScript', 'Java', 'C#', 'Oracle SQL', 'HTML/CSS'],
    color: 'violet',
  },
  {
    category: 'AI & ML Libraries',
    icon: '⚡',
    items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLTK', 'Pandas', 'NumPy', 'Matplotlib'],
    color: 'cyan',
  },
  {
    category: 'Frameworks',
    icon: '◈',
    items: ['LangChain', 'LangGraph', 'React', 'Node.js', 'Express', 'Streamlit', 'Tailwind CSS'],
    color: 'pink',
  },
  {
    category: 'Tools & Platforms',
    icon: '⚙',
    items: ['Git', 'Docker', 'Firebase', 'Groq', 'VS Code', 'IntelliJ', 'Anaconda'],
    color: 'emerald',
  },
  {
    category: 'Other Skills',
    icon: '◎',
    items: ['Systems Design', 'SDLC', 'CI/CD Pipelines', 'Agentic AI', 'RAG'],
    color: 'amber',
  },
];

const colorMap = {
  violet: {
    border: 'border-violet-500/30',
    bg: 'bg-violet-500/10',
    icon: 'text-violet-400',
    badge: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
    title: 'text-violet-400',
  },
  cyan: {
    border: 'border-cyan-500/30',
    bg: 'bg-cyan-500/10',
    icon: 'text-cyan-400',
    badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    title: 'text-cyan-400',
  },
  pink: {
    border: 'border-pink-500/30',
    bg: 'bg-pink-500/10',
    icon: 'text-pink-400',
    badge: 'bg-pink-500/10 text-pink-300 border-pink-500/20',
    title: 'text-pink-400',
  },
  emerald: {
    border: 'border-emerald-500/30',
    bg: 'bg-emerald-500/10',
    icon: 'text-emerald-400',
    badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    title: 'text-emerald-400',
  },
  amber: {
    border: 'border-amber-500/30',
    bg: 'bg-amber-500/10',
    icon: 'text-amber-400',
    badge: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
    title: 'text-amber-400',
  },
};

function Home() {
  return (
    <div className="page-bg relative overflow-hidden">

      {/* Decorative glow orbs */}
      <div className="glow-orb w-56 h-56 sm:w-96 sm:h-96 bg-violet-600 top-10 -left-20" />
      <div className="glow-orb w-48 h-48 sm:w-80 sm:h-80 bg-cyan-500 top-40 right-0" />
      <div className="glow-orb w-40 h-40 sm:w-64 sm:h-64 bg-pink-500 bottom-60 left-1/3" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-20">

        {/* ── Hero ── */}
        <section className="flex flex-col md:flex-row items-center gap-8 sm:gap-14 mb-16 sm:mb-28">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for opportunities
          </div>
          {/* Profile image */}
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500 to-cyan-500 blur-2xl opacity-20" />
              <div className="relative w-44 h-44 sm:w-72 sm:h-72 rounded-3xl ring-2 ring-violet-500/30 overflow-hidden">
                <img
                  src={zuhriddin}
                  alt="Zuhriddin Sharofiddinov"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-3 -right-3 bg-slate-900 border border-slate-700 rounded-2xl px-3 py-2.5 shadow-xl">
                <p className="text-xs text-slate-400 mb-0.5">Current Role</p>
                <p className="text-sm font-bold text-white">@ KPMG</p>
              </div>
            </div>
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl sm:text-6xl font-extrabold text-white leading-tight mb-3">
              <span className="gradient-text">Zuhriddin (Zuck) Sharofiddinov</span>
            </h1>

            <p className="text-base sm:text-xl text-slate-200 font-medium mb-4 sm:mb-6">
              Software Engineer &amp; AI Developer
            </p>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl mb-6 sm:mb-8">
              Building intelligent systems at the intersection of AI and software engineering.
              Currently developing Multi-Agent systems and Agentic AI workflows at{' '}
              <span className="text-white font-semibold">KPMG</span> while completing my Advanced Diploma
              in Software Engineering &amp; AI at{' '}
              <span className="text-white font-semibold">Centennial College</span>.
            </p>

            <div className="flex flex-wrap gap-2.5 justify-center md:justify-start mb-6 sm:mb-8">
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-violet-400" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.099 3.468-4.698 3.468-8.05a8.25 8.25 0 00-16.5 0c0 3.352 1.524 5.951 3.468 8.05a19.58 19.58 0 002.683 2.282 16.975 16.975 0 001.144.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                Toronto, ON
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-violet-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                zukhriddinsh@gmail.com
              </div>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
              <Link
                to="/projects"
<<<<<<< HEAD
                className="px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl from-violet-600 to-cyan-600 text-white text-sm sm:text-base font-semibold hover:from-violet-500 hover:to-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5"
=======
                className="px-6 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-200 font-semibold hover:bg-slate-700 hover:border-slate-600 transition-all duration-300 hover:-translate-y-0.5"
>>>>>>> parent of b60d6c0 (Links styling changed)
              >
                View Projects
              </Link>
              <Link
                to="/contact"
<<<<<<< HEAD
                className="px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl from-violet-600 to-cyan-600 text-white text-sm sm:text-base font-semibold hover:from-violet-500 hover:to-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5"
=======
                className="px-6 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-200 font-semibold hover:bg-slate-700 hover:border-slate-600 transition-all duration-300 hover:-translate-y-0.5"
>>>>>>> parent of b60d6c0 (Links styling changed)
              >
                Get in Touch
              </Link>
              <a
                href="/zuhriddin_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
<<<<<<< HEAD
                className="px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl from-violet-600 to-cyan-600 text-white text-sm sm:text-base font-semibold hover:from-violet-500 hover:to-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5"
=======
                className="px-6 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-200 font-semibold hover:bg-slate-700 hover:border-slate-600 transition-all duration-300 hover:-translate-y-0.5"
>>>>>>> parent of b60d6c0 (Links styling changed)
              >
                Resume ↗
              </a>
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-16 sm:mb-28">
          {[
            { value: '6+', label: 'Projects Built' },
            { value: '40%', label: 'Productivity Gain building AI agent for Bid team at KPMG' },
          ].map((stat, i) => (
            <div
              key={i}
              className={`bg-slate-900/60 border border-slate-800 rounded-2xl p-4 sm:p-6 text-center hover:border-violet-500/30 transition-colors duration-300 ${
                i === 2 ? 'col-span-2 md:col-span-2 md:col-start-2' : ''
              }`}
            >
              <p className="text-2xl sm:text-3xl font-extrabold gradient-text mb-1">{stat.value}</p>
              <p className="text-slate-300 text-sm">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* ── Technical Skills ── */}
        <section className="mb-16 sm:mb-28">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-3">Technical Skills</h2>
            <p className="text-sm sm:text-base text-slate-300">Technologies I work with across the full stack and AI/ML</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
            {skills.map((skill, i) => {
              const c = colorMap[skill.color];
              return (
                <div
                  key={i}
                  className={`bg-slate-900/60 border ${c.border} rounded-2xl p-4 sm:p-6 hover:bg-slate-900/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl ${c.bg} ${c.border} border flex items-center justify-center ${c.icon} font-mono font-bold text-sm`}>
                      {skill.icon}
                    </div>
                    <h3 className="font-semibold text-white">{skill.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, j) => (
                      <span
                        key={j}
                        className={`px-3 py-1 rounded-lg border text-xs font-medium ${c.badge}`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Education ── */}
        <section className="mb-16 sm:mb-28">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-3">Education</h2>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 sm:p-8 hover:border-violet-500/20 transition-colors duration-300">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-4">
                  Advanced Diploma
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Ontario Advanced Diploma — Software Engineering &amp; AI
                </h3>
                <p className="text-slate-200 font-medium mb-4">Centennial College · Toronto, ON</p>
                <div className="flex flex-wrap gap-2">
                  {['Java Programming', 'AI Systems Design', 'Web Development', 'Database Concepts (SQL)', 'C# Programming', 'Software Requirements'].map((c, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 text-xs">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              <div className="sm:text-right flex-shrink-0">
                <p className="text-slate-300 text-sm font-medium">Fall 2024 – Summer 2027</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Experience Snapshot ── */}
        <section className="mb-12 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-3">Experience</h2>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 sm:p-8 hover:border-emerald-500/20 transition-colors duration-300">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Current
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Software Consultant Intern</h3>
                <p className="text-slate-200 font-medium">KPMG · Toronto, ON</p>
              </div>
              <p className="text-slate-300 text-sm font-medium flex-shrink-0">Jan 2026 – Present</p>
            </div>

            <ul className="space-y-3">
              {[
                'Developing a Multi-Agent System for Bid Pursuits that resolves team miscommunication and allows co-workers to verify information to overcome deal losses',
                'Utilizing Agentic AI in the workflow — increasing productivity by 40%, resulting in successful deal closures and new opportunities',
                'Contributing to a pricing internal software tool that allows consultants to evaluate deal profits and submit them for executive review',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <Link
                to="/experience"
                className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors duration-200"
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
