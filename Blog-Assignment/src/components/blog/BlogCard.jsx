import { Link } from 'react-router-dom';
import LikeButton from './LikeButton';

function BlogCard({ post }) {
  const { id, title, content, author, createdAt, likes, tags } = post;
  
  // Format date
  const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  // Get excerpt (first 150 characters)
  const excerpt = content.length > 150 ? `${content.substring(0, 150)}...` : content;

  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* Tags */}
      <div className="px-6 pt-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="px-6 flex-1">
        <Link to={`/post/${id}`}>
          <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors line-clamp-2">
            {title}
          </h2>
        </Link>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {excerpt}
        </p>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 mt-auto">
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-3">
            {/* Author Avatar */}
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
              {author.charAt(0).toUpperCase()}
            </div>
            <div className="text-sm">
              <p className="font-medium text-gray-900">{author}</p>
              <p className="text-gray-500">{formattedDate}</p>
            </div>
          </div>
          <LikeButton postId={id} likes={likes} />
        </div>
      </div>
    </article>
  );
}

export default BlogCard;
