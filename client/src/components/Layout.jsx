import { Link } from 'react-router-dom';
import zuck from '../assets/zuck.png';

function Layout(){

  return(
    <>
      <div id='animated' className="bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100">
       <nav className="shadow flex items-center px-8 py-4 border border-gray-200">
          <div className="flex items-center gap-4">
            <img src={zuck} alt="logo" className="w-10 h-10"/>
          </div>
          <div className="flex-1 flex items-center justify-center gap-12">
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About Me' },
              { to: '/projects', label: 'Projects' },
              { to: '/experience', label: 'Experience' },
              { to: '/contact', label: 'Contact' },
            ].map((link, idx) => {
              const isActive = window.location.pathname === link.to;
              return (
                <Link
                  key={idx}
                  to={link.to}
                  className={`relative text-lg font-semibold px-2 py-1 transition-all duration-200
                    ${isActive ? 'text-indigo-600 scale-110' : 'text-indigo-500'}
                    hover:text-purple-600 hover:scale-110`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          {/* GitHub Icon on the right */}
          <div className="flex items-center gap-2">
            <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className="ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7 text-gray-900 hover:text-indigo-700 transition-colors duration-200 cursor-pointer"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.012c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.833.091-.646.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.747-1.025 2.747-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.481C19.138 20.174 22 16.426 22 12.012 22 6.484 17.523 2 12 2z"/>
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Layout;