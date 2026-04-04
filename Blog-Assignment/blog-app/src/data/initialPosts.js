import { v4 as uuidv4 } from 'uuid';

export const initialPosts = [
  {
    id: uuidv4(),
    title: "Getting Started with React",
    content: "React is a powerful JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage application state efficiently. In this post, we'll explore the fundamentals of React and how to get started with your first application.\n\nReact's component-based architecture makes it easy to build complex UIs from small, isolated pieces of code. Each component manages its own state, then composes them to create complex UIs.\n\nKey concepts to learn:\n- JSX syntax\n- Components and Props\n- State and Lifecycle\n- Hooks (useState, useEffect, etc.)\n- Virtual DOM",
    author: "John Doe",
    createdAt: new Date('2024-01-15').toISOString(),
    likes: 42,
    tags: ["React", "JavaScript", "Frontend"]
  },
  {
    id: uuidv4(),
    title: "Understanding Redux Toolkit",
    content: "Redux Toolkit is the official, opinionated, batteries-included toolset for efficient Redux development. It simplifies store setup, reduces boilerplate code, and includes powerful features like createSlice and createAsyncThunk.\n\nWhy Redux Toolkit?\n- Simplified store setup with configureStore\n- Automatic Redux DevTools integration\n- Built-in Immer for immutable update logic\n- createSlice reduces boilerplate\n- RTK Query for data fetching\n\nThis article covers the essential concepts you need to know to get started with modern Redux development.",
    author: "Jane Smith",
    createdAt: new Date('2024-01-20').toISOString(),
    likes: 38,
    tags: ["Redux", "State Management", "React"]
  },
  {
    id: uuidv4(),
    title: "Tailwind CSS Best Practices",
    content: "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs. Learn how to use Tailwind effectively, organize your styles, and create beautiful, responsive layouts without writing custom CSS.\n\nBest practices include:\n- Use @apply for repeated patterns\n- Leverage the configuration file\n- Use JIT mode for faster builds\n- Organize components with consistent class ordering\n- Use the official Prettier plugin\n\nTailwind's approach might seem verbose at first, but it leads to more maintainable and flexible designs.",
    author: "Alex Johnson",
    createdAt: new Date('2024-02-01').toISOString(),
    likes: 55,
    tags: ["CSS", "Tailwind", "Design"]
  },
  {
    id: uuidv4(),
    title: "Docker for Frontend Developers",
    content: "Docker containers have revolutionized how we deploy applications. This guide introduces Docker concepts specifically for frontend developers, covering Dockerfile creation, image building, and deployment strategies for React applications.\n\nKey topics covered:\n- Understanding containers vs VMs\n- Writing efficient Dockerfiles\n- Multi-stage builds for smaller images\n- Docker Compose for development\n- Deploying to cloud platforms\n\nBy containerizing your frontend applications, you ensure consistent behavior across development, testing, and production environments.",
    author: "Sarah Wilson",
    createdAt: new Date('2024-02-10').toISOString(),
    likes: 29,
    tags: ["Docker", "DevOps", "Deployment"]
  },
  {
    id: uuidv4(),
    title: "Context API vs Redux: When to Use What",
    content: "Both Context API and Redux are state management solutions in React, but they serve different purposes. Understanding when to use each one can help you build more maintainable applications.\n\nUse Context API for:\n- Theme switching\n- User authentication state\n- Locale/language preferences\n- Any data that doesn't change frequently\n\nUse Redux for:\n- Complex application state\n- Frequent state updates\n- When you need middleware\n- Time-travel debugging\n- When state is shared across many components\n\nIn this blog app, we use Redux for blog posts (frequent CRUD operations) and Context for theme and notifications (cross-cutting concerns).",
    author: "Mike Chen",
    createdAt: new Date('2024-02-15').toISOString(),
    likes: 61,
    tags: ["React", "Redux", "Context API", "State Management"]
  }
];
