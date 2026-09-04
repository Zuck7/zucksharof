import zuhriddin from '../assets/zuhriddin.jpeg';
import Resume from '../assets/zuhriddin_resume.pdf';

function About() {
  return (
    <div className="page-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-20">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-4">
            <span className="gradient-text">About Me</span>
          </h1>
        </div>

        {/* Main card */}
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mb-8">
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="md:w-64 flex-shrink-0">
              <img
                src={zuhriddin}
                alt="Zuhriddin Sharofiddinov"
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            {/* Bio */}
            <div className="flex-1 p-5 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">Zuhriddin (Zuck) Sharofiddinov</h2>
              <p className="text-violet-600 font-medium mb-5">Software Engineer & Machine Learning Engineer · Toronto, ON</p>

              <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <p>
                  I'm a software engineer and machine learning engineer focused on building production-style ML systems and
                  AI-driven products, from multi-agent LLM pipelines and RAG systems to TFX/Airflow training pipelines and
                  full-stack applications. Most recently, I evaluated and improved LLM outputs as an AI Training Contractor at{' '}
                  <span className="text-slate-900 font-semibold">Mercor</span>, and built Python automation, Oracle SQL tooling,
                  and Power BI reporting as a Software Consultant Intern at <span className="text-slate-900 font-semibold">KPMG</span>.
                </p>
                <p>
                  My technical foundation spans the full stack: <span className="text-slate-900 font-semibold">Python</span>,{' '}
                  <span className="text-slate-900 font-semibold">TypeScript</span>, <span className="text-slate-900 font-semibold">C#</span>, and{' '}
                  <span className="text-slate-900 font-semibold">SQL</span>, through AI/ML frameworks like{' '}
                  <span className="text-slate-900 font-semibold">LangChain</span>, <span className="text-slate-900 font-semibold">LangGraph</span>,{' '}
                  <span className="text-slate-900 font-semibold">TensorFlow</span>, and <span className="text-slate-900 font-semibold">scikit-learn</span>, to
                  infrastructure including Docker, Kubernetes, and CI/CD pipelines. I'm currently completing an{' '}
                  <span className="text-slate-900 font-semibold">Advanced Diploma in AI &amp; Software Engineering Technology</span> at{' '}
                  <span className="text-slate-900 font-semibold">Centennial College</span>.
                </p>
                <p>
                  Before software, I spent three years in marketing for international companies, including{' '}
                  <span className="text-slate-900 font-semibold">Infinix Mobility</span>, experience that still shapes how I think
                  about the end user and business impact behind the systems I build.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
          {[
            { label: 'Focus', value: 'ML Systems & Full-Stack Engineering' },
            { label: 'Currently Building', value: 'Multi-Agent & RAG Systems' },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5">
              <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-1">{item.label}</p>
              <p className="font-bold text-violet-600 text-sm">{item.value}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href={Resume}
            download
            className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg bg-violet-600 text-white text-sm sm:text-base font-semibold hover:bg-violet-700 transition-colors duration-200"
          >
            Download Resume
          </a>
          <a
            href="mailto:zukhriddinsh@gmail.com"
            className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg border border-slate-300 text-slate-700 text-sm sm:text-base font-semibold hover:border-violet-300 hover:text-violet-700 transition-colors duration-200"
          >
            Get in Touch
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
  );
}

export default About;
