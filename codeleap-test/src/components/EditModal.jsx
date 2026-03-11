import { useState } from "react";

function EditModal({ post, onCancel, onUpdated }) {

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const handleSave = async () => {

    await fetch(`https://dev.codeleap.co.uk/careers/${post.id}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        content
      })
    });

    onUpdated();
  };

  return (

    <div style={{
      position:"fixed",
      top:0,
      left:0,
      right:0,
      bottom:0,
      background:"rgba(0,0,0,0.5)",
      display:"flex",
      alignItems:"center",
      justifyContent:"center"
    }}>

      <div style={{
        background:"white",
        padding:"20px",
        borderRadius:"8px",
        width:"400px"
      }}>

        <h3>Edit item</h3>

        <input
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />

        <textarea
          value={content}
          onChange={(e)=>setContent(e.target.value)}
        />

        <div style={{
          display:"flex",
          justifyContent:"flex-end",
          gap:"10px",
          marginTop:"20px"
        }}>

          <button onClick={onCancel}>
            Cancel
          </button>

          <button onClick={handleSave}>
            Save
          </button>

        </div>

      </div>

    </div>

  );
}

export default EditModal;