import { Link } from 'react-router-dom';

const experiences = [
  {
    title: 'AI Training Contractor',
    company: 'Mercor',
    location: 'Remote (San Francisco, CA)',
    duration: 'May 2026 – June 2026',
    current: false,
    recent: true,
    points: [
      'Evaluated and ranked LLM outputs across coding and consulting tasks using structured rubrics, comparing model responses side by side and providing written rationale for each ranking to improve model alignment',
      'Identified hallucinations, factual inaccuracies, and safety issues in model-generated responses, documenting failure patterns and providing detailed feedback to support model improvement for leading AI labs',
    ],
    tags: ['LLM Evaluation', 'Model Alignment', 'Rubrics', 'AI Safety', 'Coding'],
  },
  {
    title: 'Software Consultant Intern',
    company: 'KPMG',
    location: 'Toronto, ON',
    duration: 'January 2026 – April 2026',
    current: false,
    highlights: [
      { label: 'Consultants unblocked by automation', value: '90+' },
      { label: 'Manual processing cut', value: '10 hrs → ~0' },
    ],
    points: [
      'Developed Python automation scripts using NumPy and scikit-learn, cutting recurring manual data processing from 10 hours to near-zero for 90+ consultants',
      'Built an RFP (Request for Proposal) document generator using Power Automate, automating the assembly of proposal documents from structured inputs and reducing manual drafting time for the advisory team',
      'Built and maintained Oracle SQL stored procedures for an internal pricing tool, enabling 30+ consultants to query and evaluate deal profitability directly from the database',
      'Created Power BI dashboards connected to SQL data sources covering 5 years of advisory deals to surface workflow trends and data insights for internal stakeholders',
    ],
    tags: ['Python', 'NumPy', 'scikit-learn', 'Oracle SQL', 'Power Automate', 'Power BI', 'Automation', 'Consulting'],
  },
  {
    title: 'Marketing Associate',
    company: 'Quartermaster',
    location: 'Toronto, ON',
    duration: 'April 2025 – December 2025',
    current: false,
    highlights: [
      { label: 'GTA homeowner-to-user conversion', value: '15%' },
      { label: 'Team supported', value: '11' },
    ],
    points: [
      'Collaborated with the software team to triage and report product bugs via Jira and Slack; supported a team of 11 and helped drive a 15% homeowner-to-user conversion across the GTA',
    ],
    tags: ['Bug Triage', 'Jira', 'Slack', 'Team Support', 'Customer Acquisition'],
  },
];

const education = [
  {
    degree: 'Ontario Advanced Diploma',
    field: 'AI, Software Engineering Technology',
    school: 'Centennial College',
    location: 'Toronto, ON',
    duration: 'Aug 2024 – Dec 2027',
    status: 'In Progress',
    courses: ['OOP', 'AI Systems Design', 'Supervised Learning', 'AI Soft Test & MLOps', 'DSA', 'Networking & Intelligent Robotics', 'Advanced Database Concepts', 'Linux', 'Web App Dev', 'SDLC'],
  },
];

function Experience() {
  return (
    <div className="page-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-20">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-4">
            <span className="gradient-text">Professional Experience</span>
          </h1>
          <p className="text-slate-500 text-sm sm:text-lg max-w-2xl mx-auto">
            My professional journey, the impact I've created, and the technologies I've worked with.
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-slate-300" />
            Work Experience
            <span className="flex-1 h-px bg-slate-200" />
          </h2>

          <div className="space-y-5 sm:space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-8 hover:border-violet-200 transition-all duration-200"
              >
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                  <div>
                    {(exp.current || exp.recent) && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 text-xs font-medium mb-3">
                        <span className={`w-1.5 h-1.5 rounded-full bg-emerald-500 ${exp.current ? 'animate-pulse' : ''}`} />
                        {exp.current ? 'Current Role' : 'Most Recent'}
                      </div>
                    )}
                    <h3 className="text-lg sm:text-xl text-slate-900 font-bold mb-1">{exp.title}</h3>
                    <p className="text-slate-900 font-semibold">{exp.company}</p>
                    <p className="text-slate-500 text-sm">{exp.location}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-slate-500 text-sm font-medium">{exp.duration}</p>
                  </div>
                </div>

                {/* Impact highlights */}
                {exp.highlights && (
                  <div className="flex flex-wrap gap-3 mb-5">
                    {exp.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-violet-100 bg-violet-50"
                      >
                        <p className="text-xl font-extrabold text-violet-700">{h.value}</p>
                        <p className="text-slate-500 text-xs leading-tight">{h.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Bullet points */}
                <ul className="space-y-3 mb-6">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md border border-slate-200 bg-slate-50 text-slate-600 text-xs font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-slate-300" />
            Education
            <span className="flex-1 h-px bg-slate-200" />
          </h2>

          {education.map((edu, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-8 hover:border-violet-200 transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-xs font-medium mb-3">
                    {edu.status}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{edu.degree}</h3>
                  <p className="text-violet-600 font-semibold mb-1">{edu.field}</p>
                  <p className="text-slate-500 text-sm">{edu.school} · {edu.location}</p>
                </div>
                <p className="text-slate-500 text-sm font-medium flex-shrink-0">{edu.duration}</p>
              </div>

              <div>
                <p className="text-slate-400 text-xs uppercase tracking-wider mb-3 font-semibold">Relevant Coursework</p>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course, j) => (
                    <span
                      key={j}
                      className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-600 text-xs font-mono"
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
        <div className="text-center bg-white border border-slate-200 rounded-2xl p-5 sm:p-8">
          <p className="text-slate-500 mb-4">Want to see my full work and projects?</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/projects"
              className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg bg-violet-600 text-white text-sm sm:text-base font-semibold hover:bg-violet-700 transition-colors duration-200"
            >
              View Projects
            </Link>
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

export default Experience;
