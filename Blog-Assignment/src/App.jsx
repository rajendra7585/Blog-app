import { useSelector, useDispatch } from 'react-redux'
import { selectAllPosts, likePost } from './redux/postsSlice'
import { useNotification } from './context'

function App() {
  const posts = useSelector(selectAllPosts)
  const dispatch = useDispatch()
  const { showSuccess } = useNotification()

  const handleLike = (postId) => {
    dispatch(likePost(postId))
    const post = posts.find(p => p.id === postId)
    showSuccess(`You liked "${post?.title}"!`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Blog Application
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            React + Redux + Context API + Tailwind CSS
          </p>
          <div className="flex justify-center gap-4 mb-4">
            <span className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md">
              React
            </span>
            <span className="px-4 py-2 bg-purple-500 text-white rounded-lg shadow-md">
              Redux
            </span>
            <span className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md">
              Tailwind
            </span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Phase 3: Context API - Notifications enabled
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {post.content.substring(0, 150)}...
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-medium">{post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                  </div>
                  <button
                    onClick={() => handleLike(post.id)}
                    className="flex items-center gap-1 px-3 py-1 text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    <span>{post.likes}</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
