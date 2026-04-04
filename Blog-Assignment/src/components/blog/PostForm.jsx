import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

function PostForm({ initialData = {}, onSubmit, isEditing = false }) {
  const [formData, setFormData] = useState({
    title: initialData.title || '',
    content: initialData.content || '',
    author: initialData.author || '',
    tags: initialData.tags?.join(', ') || ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    } else if (formData.title.length < 5) {
      newErrors.title = 'Title must be at least 5 characters';
    }
    
    if (!formData.content.trim()) {
      newErrors.content = 'Content is required';
    } else if (formData.content.length < 20) {
      newErrors.content = 'Content must be at least 20 characters';
    }
    
    if (!formData.author.trim()) {
      newErrors.author = 'Author name is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Parse tags
    const tags = formData.tags
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0);

    // Simulate a small delay for better UX
    await new Promise(resolve => setTimeout(resolve, 300));

    onSubmit({
      title: formData.title.trim(),
      content: formData.content.trim(),
      author: formData.author.trim(),
      tags: tags.length > 0 ? tags : ['General']
    });
    
    setIsSubmitting(false);
  };

  // Character count helper
  const getCharacterCountColor = () => {
    if (formData.content.length < 20) return 'text-gray-400';
    if (formData.content.length < 100) return 'text-yellow-600';
    return 'text-green-600';
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
      {/* Title */}
      <div>
        <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
          Title <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter a compelling title..."
          className={`input-field ${errors.title ? 'input-error' : ''}`}
        />
        {errors.title && (
          <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {errors.title}
          </p>
        )}
      </div>

      {/* Author */}
      <div>
        <label htmlFor="author" className="block text-sm font-semibold text-gray-700 mb-2">
          Author <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Your name..."
          disabled={isEditing}
          className={`input-field ${errors.author ? 'input-error' : ''} ${isEditing ? 'bg-gray-100 cursor-not-allowed opacity-60' : ''}`}
        />
        {errors.author && (
          <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {errors.author}
          </p>
        )}
        {isEditing && (
          <p className="mt-1 text-sm text-gray-500">Author cannot be changed</p>
        )}
      </div>

      {/* Tags */}
      <div>
        <label htmlFor="tags" className="block text-sm font-semibold text-gray-700 mb-2">
          Tags <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <input
          type="text"
          id="tags"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          placeholder="React, JavaScript, Web Development"
          className="input-field"
        />
        <p className="mt-1.5 text-sm text-gray-500">Separate multiple tags with commas</p>
      </div>

      {/* Content */}
      <div>
        <label htmlFor="content" className="block text-sm font-semibold text-gray-700 mb-2">
          Content <span className="text-red-500">*</span>
        </label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          rows={12}
          placeholder="Write your blog post content here. You can use multiple paragraphs..."
          className={`input-field resize-y min-h-[200px] ${errors.content ? 'input-error' : ''}`}
        />
        {errors.content && (
          <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {errors.content}
          </p>
        )}
        <div className="mt-1.5 flex items-center justify-between text-sm">
          <span className={getCharacterCountColor()}>
            {formData.content.length} characters
          </span>
          {formData.content.length >= 20 && (
            <span className="text-green-600 flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Minimum reached
            </span>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end gap-4 pt-6 border-t border-gray-200">
        <Link
          to="/"
          className="px-5 py-2.5 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg font-medium transition-all"
        >
          Cancel
        </Link>
        <Button type="submit" variant="primary" size="md" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              {isEditing ? 'Updating...' : 'Publishing...'}
            </>
          ) : (
            <>
              {isEditing ? 'Update Post' : 'Publish Post'}
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

export default PostForm;
