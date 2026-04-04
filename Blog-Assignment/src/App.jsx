import { BrowserRouter } from 'react-router-dom';
import { Layout, BlogList } from './components';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <div className="container mx-auto px-4 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Latest Posts
            </h1>
            <p className="text-gray-600">
              Discover stories, thinking, and expertise from writers on any topic.
            </p>
          </div>

          {/* Blog Posts */}
          <BlogList />
        </div>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
