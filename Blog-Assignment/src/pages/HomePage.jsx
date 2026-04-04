import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAllPosts } from '../redux/postsSlice';
import { BlogList } from '../components';

function HomePage() {
  const posts = useSelector(selectAllPosts);
  const totalPosts = posts.length;
  const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 mb-10 text-white animate-fade-in">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Welcome to BlogApp
            </h1>
            <p className="text-blue-100 text-lg mb-6">
              Discover stories, share your ideas, and connect with a community of writers and readers.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                <span><strong>{totalPosts}</strong> Posts</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <span><strong>{totalLikes}</strong> Likes</span>
              </div>
            </div>
          </div>
          <Link
            to="/add"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-all hover:shadow-lg font-semibold self-start md:self-center"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Write a Post
          </Link>
        </div>
      </div>

      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Latest Posts
        </h2>
        {totalPosts > 0 && (
          <span className="text-sm text-gray-500">
            Showing {totalPosts} {totalPosts === 1 ? 'post' : 'posts'}
          </span>
        )}
      </div>

      {/* Blog Posts */}
      <BlogList />
    </div>
  );
}

export default HomePage;
