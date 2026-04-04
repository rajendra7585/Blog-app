import { createSlice } from '@reduxjs/toolkit';
import { mockPosts } from '../data/mockPosts';

const initialState = {
  posts: mockPosts,
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
    },
    
    // Like/Unlike a post
    likePost: (state, action) => {
      const postId = action.payload;
      const existingPost = state.posts.find(post => post.id === postId);
      if (existingPost) {
        existingPost.likes += 1;
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
  setStatus, 
  setError 
} = postsSlice.actions;

// Selectors
export const selectAllPosts = (state) => state.posts.posts;
export const selectPostById = (state, postId) => 
  state.posts.posts.find(post => post.id === postId);
export const selectPostsStatus = (state) => state.posts.status;
export const selectPostsError = (state) => state.posts.error;

// Export reducer
export default postsSlice.reducer;
