function Contact() {
  const contacts = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
        </svg>
      ),
      label: 'Email',
      value: 'zukhriddinsh@gmail.com',
      href: 'mailto:zukhriddinsh@gmail.com',
      color: 'violet',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
        </svg>
      ),
      label: 'Phone',
      value: '+1 (437) 214-2297',
      href: 'tel:+14372142297',
      color: 'cyan',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      label: 'LinkedIn',
      value: 'linkedin.com/in/zuhriddinsh',
      href: 'https://www.linkedin.com/in/zuhriddinsh/',
      color: 'blue',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 2C6.477 2 2 6.484 2 12.012c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.833.091-.646.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.747-1.025 2.747-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.481C19.138 20.174 22 16.426 22 12.012 22 6.484 17.523 2 12 2z"/>
        </svg>
      ),
      label: 'GitHub',
      value: 'github.com/Zuck7',
      href: 'https://github.com/Zuck7',
      color: 'slate',
    },
  ];

  const colorMap = {
    violet: 'bg-slate-900/60 border-violet-500/20 text-violet-400 hover:border-violet-500/50',
    cyan: 'bg-slate-900/60 border-cyan-500/20 text-cyan-400 hover:border-cyan-500/50',
    blue: 'bg-slate-900/60 border-blue-500/20 text-blue-400 hover:border-blue-500/50',
    slate: 'bg-slate-900/60 border-slate-700 text-slate-300 hover:border-slate-500',
  };

  return (
    <div className="page-bg relative overflow-hidden">

      {/* Glow orbs */}
      <div className="glow-orb w-56 h-56 sm:w-96 sm:h-96 bg-violet-600 top-0 left-1/4" />
      <div className="glow-orb w-48 h-48 sm:w-72 sm:h-72 bg-cyan-500 bottom-20 right-0" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-24">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
            <span className="gradient-text">Get in Touch</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-lg max-w-xl mx-auto">
            I'm open to new opportunities, collaborations, and conversations. Don't hesitate to reach out.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-10 sm:mb-12">
          {contacts.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`flex items-center gap-3 p-4 sm:p-5 rounded-2xl border bg-slate-900/60 ${colorMap[item.color]} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group`}
            >
              <div className="flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <p className="text-slate-300 text-xs font-semibold uppercase tracking-wider mb-0.5">{item.label}</p>
                <p className="text-white font-medium text-sm group-hover:text-current transition-colors">{item.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Quick message prompt */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 sm:p-8 text-center">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border border-violet-500/20 flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-violet-400" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-white mb-2">Let's Connect</h2>
          <p className="text-slate-300 text-sm mb-6">
            Whether it's a full-time role, co-op opportunity, freelance project, or just a chat about AI and software — I'd love to hear from you.
          </p>
          <a
            href="mailto:zukhriddinsh@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl from-violet-600 to-cyan-600 text-white text-sm sm:text-base font-semibold hover:from-violet-500 hover:to-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25"
          >
            Send an Email
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Contact;
