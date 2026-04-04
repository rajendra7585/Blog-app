import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { likePost, unlikePost, selectIsPostLiked } from '../../redux/postsSlice';
import { useNotification } from '../../context';

function LikeButton({ postId, likes }) {
  const dispatch = useDispatch();
  const { showSuccess, showInfo } = useNotification();
  const [isAnimating, setIsAnimating] = useState(false);
  const isLiked = useSelector((state) => selectIsPostLiked(state, postId));

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Trigger animation
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
    
    if (isLiked) {
      dispatch(unlikePost(postId));
      showInfo('Like removed');
    } else {
      dispatch(likePost(postId));
      showSuccess('Post liked!');
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center gap-2 px-3 py-1.5 text-sm font-semibold rounded-full transition-all duration-200 group ${
        isLiked 
          ? 'text-red-500 bg-red-50 hover:bg-red-100' 
          : 'text-gray-500 hover:text-red-500 hover:bg-red-50'
      }`}
      aria-label={isLiked ? `Unlike post, current likes: ${likes}` : `Like post, current likes: ${likes}`}
    >
      {isLiked ? (
        // Filled heart (liked)
        <svg 
          className={`w-5 h-5 transition-transform duration-300 ${
            isAnimating ? 'scale-125' : 'group-hover:scale-110'
          }`}
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      ) : (
        // Outline heart (not liked)
        <svg 
          className={`w-5 h-5 transition-transform duration-300 ${
            isAnimating ? 'scale-125' : 'group-hover:scale-110'
          }`}
          fill="none" 
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
        </svg>
      )}
      <span className={`transition-all duration-200 ${isAnimating ? 'scale-110' : ''}`}>
        {likes}
      </span>
    </button>
  );
}

export default LikeButton;
