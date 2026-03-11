import { useState } from "react";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";

function PostCard({ post, username }) {

  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = async () => {
    await fetch(`https://dev.codeleap.co.uk/careers/${post.id}/`, {
      method: "DELETE"
    });

    window.location.reload();
  };

return (
  <div className="post-card">

    <div className="post-header">
      {post.title}
    </div>

    <div className="post-body">

      <small>{post.username}</small>

      <p>{post.content}</p>

      {post.username === username && (
        <div>

          <button onClick={() => setShowEdit(true)}>
            Edit
          </button>

          <button
            style={{ marginLeft: "10px", background: "red", color: "white" }}
            onClick={() => setShowDelete(true)}
          >
            Delete
          </button>

        </div>
      )}

    </div>

  </div>
);
}

export default PostCard;