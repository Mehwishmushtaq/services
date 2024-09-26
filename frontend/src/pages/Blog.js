import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import BlogForm from "../Components/BlogForm";

function BlogPage() {
    const [blogs, setBlogs] = useState([]);

    // Fetch blog posts from the REST API
    useEffect(() => {
        fetch("http://localhost:8000/api/blogs")
            .then((res) => res.json())
            .then((data) => setBlogs(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <>
            <BlogForm />
            <Container className="my-5">
      <h1 className="text-center mb-4">Blog Posts</h1>
      <Row>
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <Col key={blog._id} sm={12} md={6} lg={4} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{blog.title}</Card.Title>
                  <Card.Text>{blog.content}</Card.Text>
                  <footer className="blockquote-footer">
                    By {blog.author} on{" "}
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </footer>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>No blog posts available.</p>
        )}
      </Row>
    </Container>
        </>

    );
}

export default BlogPage;
