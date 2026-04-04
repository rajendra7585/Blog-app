import { useParams, useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectPostById, updatePost } from '../redux/postsSlice';
import { useNotification } from '../context';
import PostForm from '../components/blog/PostForm';

function EditPostPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { showSuccess } = useNotification();
  const post = useSelector((state) => selectPostById(state, id));

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <svg className="w-20 h-20 mx-auto text-gray-300 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Post Not Found</h1>
        <p className="text-gray-600 mb-6">The post you're trying to edit doesn't exist.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
      </div>
    );
  }

  const handleSubmit = (formData) => {
    dispatch(updatePost({
      id,
      ...formData
    }));
    showSuccess('Post updated successfully!');
    navigate(`/post/${id}`);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      {/* Back Link */}
      <Link
        to={`/post/${id}`}
        className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-6 transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Post
      </Link>

      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Edit Post
        </h1>
        <p className="text-gray-600">
          Update your blog post content.
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <PostForm 
          initialData={post} 
          onSubmit={handleSubmit} 
          isEditing={true}
        />
      </div>
    </div>
  );
}

export default EditPostPage;
