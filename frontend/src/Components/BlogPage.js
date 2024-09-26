import React, { useEffect, useState } from 'react';
import { fetchBlogs, createBlog } from '../services/blogService';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({ title: '', content: '' });

  useEffect(() => {
    const getBlogs = async () => {
      const blogData = await fetchBlogs();
      setBlogs(blogData);
    };
    getBlogs();
  }, []);

  const handleCreateBlog = async () => {
    const createdBlog = await createBlog(newBlog);
    setBlogs([...blogs, createdBlog]);
  };

  return (
    <div>
      <h2>Blogs</h2>
      {blogs.map((blog) => (
        <div key={blog._id}>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
        </div>
      ))}

      <h2>Create New Blog</h2>
      <input
        type="text"
        placeholder="Title"
        value={newBlog.title}
        onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
      />
      <textarea
        placeholder="Content"
        value={newBlog.content}
        onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
      />
      <button onClick={handleCreateBlog}>Create Blog</button>
    </div>
  );
};

export default BlogPage;
