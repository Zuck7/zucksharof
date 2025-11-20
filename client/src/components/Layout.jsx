import { Link } from 'react-router-dom';
import zuck from '../assets/zuck.png';
import { isAuthe}

function Layout(){

  const location = useLocation();
  return(
    <>
      <div id='animated' className="bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100">
        <nav className="sticky top-0 z-50 backdrop-blur-md shadow-md p-6 flex items-center justify-between bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100/70">
          <div className="flex items-center gap-3">
            <img src={zuck} alt="logo" className="w-12 h-12 rounded-lg"/>
            <h2 className="text-xl font-bold text-gray-900">Zuhriddin (Zuck) Sharofiddinov</h2>
          </div>
          
          <div className="flex items-center gap-8">
            <Link to="/" className="text-gray-700 font-medium hover:text-indigo-600 transition-colors">Home</Link>
            <Link to="/about" className="text-gray-700 font-medium hover:text-indigo-600 transition-colors">About Me</Link>
            <Link to="/projects" className="text-gray-700 font-medium hover:text-indigo-600 transition-colors">Projects</Link>
            <Link to="/services" className="text-gray-700 font-medium hover:text-indigo-600 transition-colors">Services</Link>
            <Link to="/contact" className="text-gray-700 font-medium hover:text-indigo-600 transition-colors">Contact</Link>
          </div>
        </nav>
        {/* <br />
        <hr /> */}
      </div>
    </>
  );
}

export default Layout;