import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="page-bg flex items-center justify-center px-4 py-24 text-center">
      <div>
        <p className="text-violet-600 font-mono text-sm font-semibold mb-3">404</p>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Page not found</h1>
        <p className="text-slate-500 text-sm mb-8">The page you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="px-5 py-2.5 rounded-lg bg-violet-600 text-white text-sm font-semibold hover:bg-violet-700 transition-colors duration-200"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
