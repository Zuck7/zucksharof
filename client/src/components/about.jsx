import zuhriddin from '../assets/zuhriddin.jpeg';
import Resume from '../assets/zuhriddin_resume.pdf';

function About() {
  return (
    <div className="page-bg relative overflow-hidden">

      {/* Glow orbs */}
      <div className="glow-orb w-80 h-80 bg-pink-500 top-20 -left-10" />
      <div className="glow-orb w-72 h-72 bg-violet-600 bottom-40 right-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-white mb-4">
            <span className="gradient-text">About Me</span>
          </h1>
        </div>

        {/* Main card */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden mb-8">
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="md:w-64 flex-shrink-0">
              <img
                src={zuhriddin}
                alt="Zuhriddin Sharofiddinov"
                className="w-full h-64 md:h-full object-cover opacity-90"
              />
            </div>
            {/* Bio */}
            <div className="flex-1 p-8">
              <h2 className="text-2xl font-bold text-white mb-1">Zuhriddin (Zuck) Sharofiddinov</h2>
              <p className="text-violet-400 font-medium mb-5">Software Engineer & AI Developer · Toronto, ON</p>

              <div className="space-y-4 text-slate-200 text-sm leading-relaxed">
                <p>
                  Originally from Tashkent, Uzbekistan — a country with rich history and an increasingly tech-forward generation —
                  I spent 3 years in marketing for international companies, including <span className="text-white font-semibold">Infinix Mobility</span>, where I gained valuable international experience.
                </p>
                <p>
                  I made a deliberate pivot into software engineering because it sits at the intersection of business and technology —
                  allowing me to collaborate directly with product teams and shape decisions through code. The marketing background
                  gives me a unique lens: I build systems with the end user and business impact always in mind.
                </p>
                <p>
                  In just over a year in software engineering, I've developed skills across <span className="text-white font-semibold">Web Development</span>,{' '}
                  <span className="text-white font-semibold">Database Management</span>, <span className="text-white font-semibold">Systems Design</span>, and{' '}
                  <span className="text-white font-semibold">AI/ML Engineering</span>. Currently I'm building Multi-Agent systems at{' '}
                  <span className="text-white font-semibold">KPMG</span> and studying Software Engineering & AI at{' '}
                  <span className="text-white font-semibold">Centennial College</span>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Background', value: 'Marketing → Software Engineering', color: 'violet' },
            { label: 'Origin', value: 'Tashkent, Uzbekistan', color: 'cyan' },
            { label: 'Current Focus', value: 'Agentic AI & Full-Stack', color: 'pink' },
          ].map((item, i) => {
            const colorMap = {
              violet: 'border-violet-500/30 text-violet-400',
              cyan: 'border-cyan-500/30 text-cyan-400',
              pink: 'border-pink-500/30 text-pink-400',
            };
            return (
              <div key={i} className={`bg-slate-900/60 border ${colorMap[item.color].split(' ')[0]} rounded-2xl p-5`}>
                <p className="text-slate-300 text-xs uppercase tracking-wider font-semibold mb-1">{item.label}</p>
                <p className={`font-bold ${colorMap[item.color].split(' ')[1]} text-sm`}>{item.value}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href={Resume}
            download
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold hover:from-violet-500 hover:to-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5"
          >
            Download Resume
          </a>
          <a
            href="mailto:zukhriddinsh@gmail.com"
            className="px-6 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 font-semibold hover:bg-slate-700 hover:border-slate-600 transition-all duration-300 hover:-translate-y-0.5"
          >
            Get in Touch
          </a>
          <a
            href="https://www.linkedin.com/in/zuhriddinsh/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl border border-blue-500/30 text-blue-300 font-semibold hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 hover:-translate-y-0.5"
          >
            LinkedIn ↗
          </a>
        </div>

      </div>
    </div>
  );
}

export default About;
