import { Link, Outlet } from 'react-router-dom';
import zuck from '../assets/zuck.png';

function Layout() {
  return (
    <div id='animated' className="flex flex-col min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100">
      {/* Navigation */}
      <nav className="bg-transparent backdrop-blur-sm px-8 py-4 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-4">
          <img src={zuck} alt="Logo" className="w-16 h-16 rounded-lg" />
          <h2 className="text-xl font-semibold text-gray-800">
            Zuhriddin (Zuck) Sharofiddinov
          </h2>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-indigo-600 transition-colors duration-200 font-medium text-gray-700">Home</Link>
          <Link to="/about" className="hover:text-indigo-600 transition-colors duration-200 font-medium text-gray-700">About Me</Link>
          <Link to="/projects" className="hover:text-indigo-600 transition-colors duration-200 font-medium text-gray-700">Projects</Link>
          <Link to="/services" className="hover:text-indigo-600 transition-colors duration-200 font-medium text-gray-700">Services</Link>
          <Link to="/contact" className="hover:text-indigo-600 transition-colors duration-200 font-medium text-gray-700">Contact</Link>
        </div>
      </nav>
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;