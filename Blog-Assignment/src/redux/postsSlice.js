import { createSlice } from '@reduxjs/toolkit';
import { mockPosts } from '../data/mockPosts';

// Load liked posts from localStorage
const loadLikedPosts = () => {
  try {
    const saved = localStorage.getItem('likedPosts');
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

// Save liked posts to localStorage
const saveLikedPosts = (likedPosts) => {
  try {
    localStorage.setItem('likedPosts', JSON.stringify(likedPosts));
  } catch {
    // Ignore localStorage errors
  }
};

const initialState = {
  posts: mockPosts,
  likedPosts: loadLikedPosts(), // Array of post IDs the user has liked
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // Add a new post
    addPost: (state, action) => {
      state.posts.unshift(action.payload);
    },
    
    // Update an existing post
    updatePost: (state, action) => {
      const { id, title, content, tags } = action.payload;
      const existingPost = state.posts.find(post => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
        existingPost.tags = tags;
      }
    },
    
    // Delete a post
    deletePost: (state, action) => {
      const postId = action.payload;
      state.posts = state.posts.filter(post => post.id !== postId);
      // Also remove from liked posts
      state.likedPosts = state.likedPosts.filter(id => id !== postId);
      saveLikedPosts(state.likedPosts);
    },
    
    // Like a post
    likePost: (state, action) => {
      const postId = action.payload;
      const existingPost = state.posts.find(post => post.id === postId);
      if (existingPost && !state.likedPosts.includes(postId)) {
        existingPost.likes += 1;
        state.likedPosts.push(postId);
        saveLikedPosts(state.likedPosts);
      }
    },

    // Unlike a post
    unlikePost: (state, action) => {
      const postId = action.payload;
      const existingPost = state.posts.find(post => post.id === postId);
      if (existingPost && state.likedPosts.includes(postId)) {
        existingPost.likes = Math.max(0, existingPost.likes - 1);
        state.likedPosts = state.likedPosts.filter(id => id !== postId);
        saveLikedPosts(state.likedPosts);
      }
    },
    
    // Set loading status
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    
    // Set error
    setError: (state, action) => {
      state.error = action.payload;
      state.status = 'failed';
    }
  }
});

// Export actions
export const { 
  addPost, 
  updatePost, 
  deletePost, 
  likePost,
  unlikePost,
  setStatus, 
  setError 
} = postsSlice.actions;

// Selectors
export const selectAllPosts = (state) => state.posts.posts;
export const selectPostById = (state, postId) => 
  state.posts.posts.find(post => post.id === postId);
export const selectPostsStatus = (state) => state.posts.status;
export const selectPostsError = (state) => state.posts.error;
export const selectLikedPosts = (state) => state.posts.likedPosts;
export const selectIsPostLiked = (state, postId) => 
  state.posts.likedPosts.includes(postId);

// Export reducer
export default postsSlice.reducer;
