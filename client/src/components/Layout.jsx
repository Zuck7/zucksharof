import { Link } from 'react-router-dom';
import zuck from '../assets/zuck.png';

function Layout() {
  return (
    <div id='animated' className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100">
      {/* Navigation */}
      <nav className="bg-transparent backdrop-blur-sm px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={zuck} alt="Logo" className="w-16 h-16 rounded-lg" />
          <h2 className="text-xl font-semibold">
            Zuhriddin (Zuck) Sharofiddinov
          </h2>
        </div>
        
        <div className="flex items-center gap-6">
          <Link 
            to="/" 
            className="hover:text-indigo-200 transition-colors duration-200 font-medium"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="hover:text-indigo-200 transition-colors duration-200 font-medium"
          >
            About Me
          </Link>
          <Link 
            to="/projects" 
            className="hover:text-indigo-200 transition-colors duration-200 font-medium"
          >
            Projects
          </Link>
          <Link 
            to="/services" 
            className="hover:text-indigo-200 transition-colors duration-200 font-medium"
          >
            Services
          </Link>
          <Link 
            to="/contact" 
            className="hover:text-indigo-200 transition-colors duration-200 font-medium"
          >
            Contact
          </Link>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-8">
        {/* This is where your page content will be rendered */}
      </div>
    </div>
  );
}

export default Layout;