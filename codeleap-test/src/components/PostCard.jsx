import { useState } from "react"
import DeleteModal from "./DeleteModal"

function PostCard({ post }) {

  const [showDelete, setShowDelete] = useState(false)

  const handleDelete = async () => {

    await fetch(`https://dev.codeleap.co.uk/careers/${post.id}/`, {
      method:"DELETE"
    })

    window.location.reload()
  }

  return (

    <div style={{
      border:"1px solid #ddd",
      padding:"15px",
      marginTop:"15px",
      borderRadius:"6px"
    }}>

      <h3>{post.title}</h3>

      <small>{post.username}</small>

      <p>{post.content}</p>

      <button onClick={() => setShowDelete(true)}>
        Delete
      </button>

      {showDelete && (
        <DeleteModal
          onCancel={() => setShowDelete(false)}
          onConfirm={handleDelete}
        />
      )}

    </div>

  )

}

export default PostCard