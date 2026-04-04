import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addPost } from '../redux/postsSlice';
import { useNotification } from '../context';
import PostForm from '../components/blog/PostForm';

function AddPostPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { showSuccess } = useNotification();

  const handleSubmit = (formData) => {
    const newPost = {
      id: uuidv4(),
      ...formData,
      createdAt: new Date().toISOString(),
      likes: 0
    };

    dispatch(addPost(newPost));
    showSuccess('Post published successfully!');
    navigate(`/post/${newPost.id}`);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Create New Post
        </h1>
        <p className="text-gray-600">
          Share your thoughts, ideas, and stories with the world.
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <PostForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default AddPostPage;
