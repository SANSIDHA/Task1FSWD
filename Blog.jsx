import React, { useState } from "react";

function Blog() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!comment.trim()) {
      alert("Comment cannot be empty");
      return;
    }

    setComments([...comments, comment]);
    setComment("");
  };

  return (
    <div style={styles.container}>
      {/* Blog Content */}
      <div style={styles.blog}>
        <h1>My Tech Blog</h1>
        <p>
          Welcome to my blog! This article discusses the importance of React
          state management and component-based design.
        </p>
        <p>
          React helps build fast and scalable user interfaces using reusable
          components.
        </p>
      </div>

      {/* Comments Section */}
      <div style={styles.comments}>
        <h2>Comments</h2>

        <form onSubmit={handleSubmit}>
          <textarea
            rows="3"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write a comment..."
            style={styles.textarea}
          ></textarea><br />

          <button type="submit">Post Comment</button>
        </form>

        <ul style={styles.commentList}>
          {comments.map((cmt, index) => (
            <li key={index} style={styles.commentItem}>
              {cmt}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    padding: "20px"
  },
  blog: {
    flex: "2",
    minWidth: "250px"
  },
  comments: {
    flex: "1",
    minWidth: "250px",
    border: "1px solid #ccc",
    padding: "15px"
  },
  textarea: {
    width: "100%",
    marginBottom: "10px"
  },
  commentList: {
    listStyleType: "none",
    padding: 0
  },
  commentItem: {
    borderBottom: "1px solid #ddd",
    padding: "8px 0"
  }
};

export default Blog;
