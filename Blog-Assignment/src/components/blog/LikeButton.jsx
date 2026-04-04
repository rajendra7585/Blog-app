import { useDispatch } from 'react-redux';
import { likePost } from '../../redux/postsSlice';
import { useNotification } from '../../context';

function LikeButton({ postId, likes }) {
  const dispatch = useDispatch();
  const { showSuccess } = useNotification();

  const handleLike = (e) => {
    e.preventDefault(); // Prevent navigation if inside a Link
    e.stopPropagation();
    dispatch(likePost(postId));
    showSuccess('Post liked!');
  };

  return (
    <button
      onClick={handleLike}
      className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-red-500 hover:bg-red-50 rounded-full transition-colors group"
      aria-label={`Like post, current likes: ${likes}`}
    >
      <svg 
        className="w-5 h-5 group-hover:scale-110 transition-transform" 
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
      <span>{likes}</span>
    </button>
  );
}

export default LikeButton;
