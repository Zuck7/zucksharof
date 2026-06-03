import { Link } from 'react-router-dom';

const experiences = [
  {
    title: 'Software Engineer Expert',
    company: 'Mercor',
    location: 'Remote',
    duration: 'May 2026 – Present',
    current: true,
    color: 'emerald',
    points: [
      'Evaluating and ranking LLM outputs across reasoning, coding, and instruction-following tasks to improve model alignment for leading AI labs',
    ],
    tags: ['LLM Evaluation', 'Model Alignment', 'Reasoning', 'Coding', 'AI'],
  },
  {
    title: 'Software Consultant Intern',
    company: 'KPMG',
    location: 'Toronto, ON',
    duration: 'January 2026 – April 2026',
    current: false,
    color: 'blue',
    highlights: [
      { label: 'Productivity Boost', value: '+40%' },
      { label: 'System Type', value: 'Multi-Agent' },
    ],
    points: [
      'Assisted in the testing and quality assurance processes to ensure that developed solutions meet client specifications and industry standards',
      'Designed and developed a multi-agent system to resolve team miscommunications, enabling coworkers to verify information with agents and reduce deal losses',
      'Leveraged agentic AI with Power Automate and n8n workflows, increasing productivity by 40% and driving successful deal closures and new opportunity generation',
      'Introduced reports using PowerBI and Excel for internal workflow analysis and optimization of the processes',
      'Contributed to development of an internal pricing tool, allowing consultants to evaluate deal profitability',
    ],
    tags: ['Multi-Agent Systems', 'Agentic AI', 'LangChain', 'Python', 'n8n', 'Power Automate', 'PowerBI', 'Consulting'],
  },
  {
    title: 'Marketing Associate',
    company: 'Quartermaster Inc.',
    location: 'Toronto, ON',
    duration: 'April 2025 – December 2025',
    current: false,
    color: 'violet',
    highlights: [
      { label: 'GTA Conversion', value: '15%' },
      { label: 'Referrals Collected', value: '400+' },
    ],
    points: [
      'Collaborated with the software team on product bugs and reported them on Slack for a resolution',
      'Contributed to the conversion of 15% of GTA (homeowner to product user), helped with account setups and assisted in leading the team of 11 members in achieving KPIs',
      'In 5 months, collected 400+ referrals from homeowners on home service professionals they used',
    ],
    tags: ['Marketing', 'Team Leadership', 'Customer Acquisition', 'Jira', 'Slack'],
  },
];

const education = [
  {
    degree: 'Ontario Advanced Diploma',
    field: 'Software Engineering & AI',
    school: 'Centennial College',
    location: 'Toronto, ON',
    duration: 'Sept 2024 – December 2027',
    status: 'In Progress',
    courses: ['OOP', 'AI Systems Design', 'Supervised Learning', 'AI Soft Test & MLOps', 'DSA', 'Networking & Intelligent Robotics', 'Advanced Database Concepts', 'Linux', 'Web App Dev', 'SDLC'],
  },
];

const colorConfig = {
  blue: {
    border: 'border-blue-500/30',
    dot: 'bg-blue-400',
    badge: 'bg-blue-500/10 border-blue-500/20 text-blue-300',
    title: 'text-blue-400',
    highlight: 'bg-blue-500/10 border-blue-500/20',
    highlightText: 'text-blue-300',
    tag: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
  },
  emerald: {
    border: 'border-emerald-500/30',
    dot: 'bg-emerald-400',
    badge: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300',
    title: 'text-emerald-400',
    highlight: 'bg-emerald-500/10 border-emerald-500/20',
    highlightText: 'text-emerald-300',
    tag: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
  },
  violet: {
    border: 'border-violet-500/30',
    dot: 'bg-violet-400',
    badge: 'bg-violet-500/10 border-violet-500/20 text-violet-300',
    title: 'text-violet-400',
    highlight: 'bg-violet-500/10 border-violet-500/20',
    highlightText: 'text-violet-300',
    tag: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
  },
};

function Experience() {
  return (
    <div className="page-bg relative overflow-hidden">

      {/* Glow orbs */}
      <div className="glow-orb w-56 h-56 sm:w-80 sm:h-80 bg-emerald-500 top-20 right-0" />
      <div className="glow-orb w-48 h-48 sm:w-72 sm:h-72 bg-violet-600 bottom-40 -left-10" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-20">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
            <span className="gradient-text">Professional Experience</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-lg max-w-2xl mx-auto">
            My professional journey, the impact I've created, and the technologies I've worked with.
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-xl font-semibold text-white uppercase tracking-widest mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-slate-600" />
            Work Experience
            <span className="flex-1 h-px bg-slate-700" />
          </h2>

          <div className="space-y-5 sm:space-y-6">
            {experiences.map((exp, index) => {
              const c = colorConfig[exp.color] || colorConfig.emerald;
              return (
                <div
                  key={index}
                  className={`bg-slate-900/60 border ${c.border} rounded-2xl p-5 sm:p-8 hover:bg-slate-900/80 transition-all duration-300`}
                >
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                    <div>
                      {exp.current && (
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${c.badge} text-xs font-medium mb-3`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${c.dot} animate-pulse`} />
                          Current Role
                        </div>
                      )}
                      <h3 className={`text-lg sm:text-xl text-white font-bold ${c.title} mb-1`}>{exp.title}</h3>
                      <p className="text-white font-semibold">{exp.company}</p>
                      <p className="text-slate-200 text-sm">{exp.location}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-slate-300 text-sm font-medium">{exp.duration}</p>
                    </div>
                  </div>

                  {/* Impact highlights */}
                  {exp.highlights && (
                    <div className="flex flex-wrap gap-3 mb-5">
                      {exp.highlights.map((h, i) => (
                        <div
                          key={i}
                          className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border ${c.highlight}`}
                        >
                          <p className={`text-xl font-extrabold ${c.highlightText}`}>{h.value}</p>
                          <p className="text-slate-300 text-xs leading-tight">{h.label}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Bullet points */}
                  <ul className="space-y-3 mb-6">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-white text-sm leading-relaxed">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${c.dot} flex-shrink-0`} />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-lg border text-xs font-medium ${c.tag}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Education */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-xl font-semibold text-white uppercase tracking-widest mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-slate-600" />
            Education
            <span className="flex-1 h-px bg-slate-700" />
          </h2>

          {education.map((edu, i) => (
            <div
              key={i}
              className="bg-slate-900/60 border border-violet-500/20 rounded-2xl p-5 sm:p-8 hover:bg-slate-900/80 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-3">
                    {edu.status}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                  <p className="text-violet-400 font-semibold mb-1">{edu.field}</p>
                  <p className="text-slate-200 text-sm">{edu.school} · {edu.location}</p>
                </div>
                <p className="text-slate-300 text-sm font-medium flex-shrink-0">{edu.duration}</p>
              </div>

              <div>
                <p className="text-slate-300 text-xs uppercase tracking-wider mb-3 font-semibold">Relevant Coursework</p>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-xs"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center bg-slate-900/60 border border-slate-800 rounded-2xl p-5 sm:p-8">
          <p className="text-slate-300 mb-4">Want to see my full work and projects?</p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <Link
              to="/projects"
              className="px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl from-violet-600 to-cyan-600 text-white text-sm sm:text-base font-semibold hover:from-violet-500 hover:to-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5"
            >
              View Projects
            </Link>
            <a
              href="https://www.linkedin.com/in/zuhriddinsh/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl from-violet-600 to-cyan-600 text-white text-sm sm:text-base font-semibold hover:from-violet-500 hover:to-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Experience;
