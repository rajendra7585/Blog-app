import { Link } from 'react-router-dom';
import { BlogList } from '../components';

function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Latest Posts
          </h1>
          <p className="text-gray-600">
            Discover stories, thinking, and expertise from writers on any topic.
          </p>
        </div>
        <Link
          to="/add"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium self-start"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Write a Post
        </Link>
      </div>

      {/* Blog Posts */}
      <BlogList />
    </div>
  );
}

export default HomePage;
