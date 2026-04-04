// Mock blog post data
export const mockPosts = [
  {
    id: '1',
    title: 'Getting Started with React',
    content: `React is a powerful JavaScript library for building user interfaces. It was developed by Facebook and has become one of the most popular choices for front-end development.

In this post, we'll explore the basics of React, including components, props, and state. React's component-based architecture allows you to build reusable UI elements that can be composed together to create complex applications.

One of React's key features is the virtual DOM, which optimizes rendering performance by minimizing direct manipulation of the actual DOM. This makes React applications fast and efficient.

To get started with React, you'll need Node.js installed on your machine. You can create a new React project using Vite or Create React App. Both tools provide a great development experience with hot module replacement and other modern features.`,
    author: 'Jane Doe',
    createdAt: '2026-04-01T10:00:00Z',
    likes: 24,
    tags: ['React', 'JavaScript', 'Web Development']
  },
  {
    id: '2',
    title: 'Understanding Redux Toolkit',
    content: `Redux Toolkit is the official, opinionated, batteries-included toolset for efficient Redux development. It simplifies the most common Redux use cases and eliminates much of the boilerplate code.

Key features of Redux Toolkit include:
- configureStore(): Wraps createStore with good defaults
- createSlice(): Generates action creators and reducers
- createAsyncThunk(): Handles async logic with ease
- Built-in Immer support for immutable updates

Redux Toolkit makes it much easier to write Redux logic. Instead of writing action types, action creators, and reducers separately, you can use createSlice to generate them all at once.

The toolkit also includes RTK Query, a powerful data fetching and caching tool that can eliminate the need for hand-written data fetching logic.`,
    author: 'John Smith',
    createdAt: '2026-04-02T14:30:00Z',
    likes: 18,
    tags: ['Redux', 'React', 'State Management']
  },
  {
    id: '3',
    title: 'Tailwind CSS: Utility-First Styling',
    content: `Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs. Unlike traditional CSS frameworks like Bootstrap, Tailwind doesn't provide pre-built components.

Instead, it gives you building blocks like flex, pt-4, text-center, and rotate-90 that you can combine to create any design directly in your markup.

Benefits of Tailwind CSS:
- No more naming CSS classes
- Smaller production builds with PurgeCSS
- Responsive design made easy
- Dark mode support built-in
- Highly customizable via configuration

Tailwind pairs exceptionally well with React, allowing you to style components inline without leaving your JavaScript files. The utility classes are intuitive and follow a consistent naming convention.`,
    author: 'Sarah Johnson',
    createdAt: '2026-04-03T09:15:00Z',
    likes: 32,
    tags: ['CSS', 'Tailwind', 'Design']
  },
  {
    id: '4',
    title: 'Building REST APIs with Node.js',
    content: `Node.js has become the go-to platform for building scalable backend services. Combined with Express.js, you can create powerful REST APIs in minutes.

A REST API follows the principles of Representational State Transfer, using HTTP methods to perform CRUD operations:
- GET: Retrieve resources
- POST: Create new resources
- PUT/PATCH: Update existing resources
- DELETE: Remove resources

Best practices for REST API design include:
- Use meaningful resource names
- Version your API
- Implement proper error handling
- Add authentication and authorization
- Document your endpoints

Node.js's non-blocking I/O model makes it perfect for handling multiple concurrent requests, making it ideal for building high-performance APIs.`,
    author: 'Mike Chen',
    createdAt: '2026-04-03T16:45:00Z',
    likes: 15,
    tags: ['Node.js', 'API', 'Backend']
  },
  {
    id: '5',
    title: 'Introduction to TypeScript',
    content: `TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds optional static typing, classes, and modules to JavaScript, making it easier to build and maintain large-scale applications.

Why use TypeScript?
- Catch errors at compile time instead of runtime
- Better IDE support with IntelliSense
- Improved code readability and documentation
- Easier refactoring
- Strong community and ecosystem

TypeScript is gradually adoptable - you can start with JavaScript and add types incrementally. The TypeScript compiler can infer types in many cases, reducing the amount of explicit type annotations needed.

Popular frameworks like Angular use TypeScript by default, and React has excellent TypeScript support. Learning TypeScript is a valuable investment for any JavaScript developer.`,
    author: 'Emily Davis',
    createdAt: '2026-04-04T08:00:00Z',
    likes: 21,
    tags: ['TypeScript', 'JavaScript', 'Programming']
  },
  {
    id: '6',
    title: 'Docker for Developers',
    content: `Docker has revolutionized how we develop, ship, and run applications. It allows you to package your application with all its dependencies into a standardized unit called a container.

Key Docker concepts:
- Image: A read-only template for creating containers
- Container: A runnable instance of an image
- Dockerfile: Instructions to build an image
- Docker Compose: Tool for defining multi-container apps

Benefits of using Docker:
- Consistent environments across development and production
- Isolation of applications and dependencies
- Easy scaling and deployment
- Version control for infrastructure

For web developers, Docker simplifies the setup process. Instead of installing databases, caching servers, and other services locally, you can run them in containers with a single command.`,
    author: 'Alex Turner',
    createdAt: '2026-04-04T11:30:00Z',
    likes: 28,
    tags: ['Docker', 'DevOps', 'Containers']
  }
];
