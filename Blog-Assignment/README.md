# Notezy - Blog Application

A modern, responsive blog application built with **React**, **Redux Toolkit**, **Context API**, and **Tailwind CSS**. This application allows users to create, read, update, delete, and like blog posts.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Redux](https://img.shields.io/badge/Redux_Toolkit-2.5-764ABC?logo=redux)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Local Setup](#local-setup)
- [Redux vs Context API Usage](#redux-vs-context-api-usage)
- [Deployment](#deployment)
- [Public URL](#public-url)
- [Screenshots](#screenshots)
- [Assumptions](#assumptions)

---

## Features

- **View Posts**: Browse all blog posts in a responsive grid layout
- **View Post Details**: Read full blog post content with author info
- **Create Post**: Add new blog posts with title, content, author, and tags
- **Edit Post**: Update existing blog post content
- **Delete Post**: Remove posts with confirmation dialog
- **Like Post**: Like/appreciate blog posts
- **Notifications**: Toast notifications for user actions
- **Responsive Design**: Mobile-first design that works on all devices
- **Form Validation**: Client-side validation with error feedback

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | UI library for building user interfaces |
| **Redux Toolkit** | Global state management for blog posts |
| **Context API** | Cross-cutting concerns (notifications) |
| **React Router DOM** | Client-side routing |
| **Tailwind CSS 4** | Utility-first CSS framework |
| **Vite** | Build tool and development server |
| **UUID** | Generating unique post IDs |

---

## Project Structure

```
Blog-Assignment/
├── public/                    # Static assets
├── src/
│   ├── components/
│   │   ├── blog/              # Blog-related components
│   │   │   ├── BlogCard.jsx   # Post preview card
│   │   │   ├── BlogList.jsx   # Grid of blog cards
│   │   │   ├── LikeButton.jsx # Like functionality
│   │   │   ├── PostForm.jsx   # Create/Edit form
│   │   │   └── index.js
│   │   ├── common/            # Reusable UI components
│   │   │   ├── Button.jsx     # Button variants
│   │   │   ├── DeleteConfirmModal.jsx
│   │   │   ├── Notification.jsx
│   │   │   └── index.js
│   │   ├── layout/            # Layout components
│   │   │   ├── Header.jsx     # Navigation header
│   │   │   ├── Footer.jsx     # Page footer
│   │   │   ├── Layout.jsx     # Main layout wrapper
│   │   │   └── index.js
│   │   └── index.js
│   ├── context/               # React Context providers
│   │   ├── NotificationContext.jsx
│   │   └── index.js
│   ├── data/                  # Mock data
│   │   └── mockPosts.js       # Sample blog posts
│   ├── pages/                 # Page components
│   │   ├── HomePage.jsx       # Blog listing page
│   │   ├── PostDetailPage.jsx # Single post view
│   │   ├── AddPostPage.jsx    # Create new post
│   │   ├── EditPostPage.jsx   # Edit existing post
│   │   ├── NotFoundPage.jsx   # 404 page
│   │   └── index.js
│   ├── redux/                 # Redux store and slices
│   │   ├── store.js           # Store configuration
│   │   ├── postsSlice.js      # Posts state management
│   │   └── index.js
│   ├── App.jsx                # Main app with routes
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles & Tailwind
├── .gitignore
├── Dockerfile                 # Docker configuration
├── nginx.conf                 # Nginx configuration
├── docker-compose.yml         # Docker Compose config
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

---

## Local Setup

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Blog-Assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## Redux vs Context API Usage

This application demonstrates the appropriate use of both **Redux** and **Context API** for different types of state management:

### Redux Toolkit - Global State Management

Redux is used for managing the **blog posts state** because:

1. **Complex State Logic**: Posts require multiple operations (CRUD + likes)
2. **Shared Across Components**: Many components need access to posts data
3. **Predictable Updates**: Redux DevTools allow easy debugging
4. **Scalability**: Easy to add more features (search, filters, pagination)

**Redux manages:**
- List of all blog posts
- Add, update, delete post operations
- Like post functionality
- Loading and error states

```javascript
// postsSlice.js - Redux actions
export const { addPost, updatePost, deletePost, likePost } = postsSlice.actions;

// Selectors
export const selectAllPosts = (state) => state.posts.posts;
export const selectPostById = (state, postId) => 
  state.posts.posts.find(post => post.id === postId);
```

### Context API - Cross-Cutting Concerns

Context API is used for **notifications** because:

1. **Simpler State**: Just an array of notification messages
2. **UI-Only Concern**: Doesn't affect business logic
3. **Less Boilerplate**: No need for actions/reducers/selectors
4. **Transient State**: Notifications auto-dismiss after 3 seconds

**Context manages:**
- Toast notifications (success, error, info, warning)
- Show/hide notification logic
- Auto-dismiss functionality

```javascript
// NotificationContext.jsx
const { showSuccess, showError, showInfo, showWarning } = useNotification();

// Usage example
showSuccess('Post published successfully!');
```

### Why This Separation?

| Aspect | Redux (Posts) | Context (Notifications) |
|--------|--------------|------------------------|
| **Persistence** | Persists across sessions | Temporary, auto-dismiss |
| **Complexity** | CRUD operations | Simple add/remove |
| **Debugging** | DevTools needed | Simple console logs |
| **Scalability** | Will grow with features | Stays simple |

---

## Deployment

### Docker Deployment (Recommended)

1. **Build Docker image**
   ```bash
   docker build -t notezy-blog .
   ```

2. **Run container**
   ```bash
   docker run -p 3000:80 notezy-blog
   ```
   Then open http://localhost:3000

3. **Using Docker Compose**
   ```bash
   docker-compose up -d
   ```
   Then open http://localhost:3000

4. **Stop container**
   ```bash
   docker-compose down
   ```

### Deploy to Firebase Hosting

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase**
   ```bash
   firebase init hosting
   ```

4. **Build and Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

### Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

### Deploy to AWS S3 + CloudFront

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Upload to S3**
   ```bash
   aws s3 sync dist/ s3://your-bucket-name --delete
   ```

3. **Invalidate CloudFront cache**
   ```bash
   aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
   ```

---

## Public URL

**Live Application:** [https://your-deployed-url.com](https://your-deployed-url.com)

> *Note: Replace with actual deployed URL after deployment*

---

## Screenshots

### Home Page
- Hero section with stats
- Responsive grid of blog cards
- Mobile hamburger menu

### Post Detail
- Full article view
- Like, Edit, Delete actions
- Author information

### Create/Edit Post
- Form with validation
- Tag input
- Character counter

---

## Assumptions

1. **No Backend Required**: Data is maintained locally in Redux store. Data resets on page refresh.

2. **Authentication Not Required**: Any user can create, edit, or delete posts. No user accounts implemented.

3. **Local Data Persistence**: Posts are not persisted to localStorage or any database. Redux store resets on refresh.

4. **Single Author Per Post**: Author name is set at creation and cannot be changed during edit.

5. **Like System**: Simple increment-only likes. No unlike functionality. No user tracking for likes.

6. **Tags**: Free-form text tags, comma-separated. No predefined tag list.

7. **No Image Upload**: Blog posts are text-only. No image/media upload functionality.

8. **Mock Data**: Application starts with 6 sample blog posts for demonstration.

9. **Browser Support**: Targets modern browsers (Chrome, Firefox, Safari, Edge). No IE11 support.

10. **No SEO**: Single-page application without server-side rendering for SEO.

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

This project is created for educational/assignment purposes.

---

## Author

**Rajendra Yadav**

Built with ❤️ using React, Redux, and Tailwind CSS
