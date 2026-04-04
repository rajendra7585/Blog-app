import { Link } from 'react-router-dom';
import LikeButton from './LikeButton';

function BlogCard({ post, index = 0 }) {
  const { id, title, content, author, createdAt, likes, tags } = post;
  
  // Format date
  const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  // Get excerpt (first 150 characters)
  const excerpt = content.length > 150 ? `${content.substring(0, 150)}...` : content;

  // Calculate reading time (rough estimate: 200 words per minute)
  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <article 
      className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full hover-lift animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Colored top border */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
      
      {/* Tags */}
      <div className="px-6 pt-5">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.slice(0, 3).map((tag) => (
            <span 
              key={tag} 
              className="px-2.5 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full transition-colors hover:bg-blue-100"
            >
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-500 rounded-full">
              +{tags.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="px-6 flex-1">
        <Link to={`/post/${id}`} className="block">
          <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
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
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-semibold shadow-md">
              {author.charAt(0).toUpperCase()}
            </div>
            <div className="text-sm">
              <p className="font-semibold text-gray-900">{author}</p>
              <p className="text-gray-500 flex items-center gap-2">
                <span>{formattedDate}</span>
                <span className="w-1 h-1 bg-gray-400 rounded-full" />
                <span>{readingTime} min read</span>
              </p>
            </div>
          </div>
          <LikeButton postId={id} likes={likes} />
        </div>
      </div>
    </article>
  );
}

export default BlogCard;
