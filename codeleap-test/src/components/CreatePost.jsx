import { useState } from "react";

function CreatePost({username, onPostCreated}){
    const   [title, setTitle] = useState("");
    const   [content, setContent] = useState("");

    const handleCreate = async () =>{
        await fetch("https://dev.codeleap.co.uk/careers/",{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                username,
                title,
                content
            })
        });

        setTitle(""),
        setContent(""),

        onPostCreated();
    };

    return(
        <div>
            <h3>What's on your  mind?</h3>

          <input 
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)} 
          />
        
        <textarea 
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)} 
        />

        <button
        disabled={!title || !content}
        onClick={handleCreate}
        >
            Create 
        </button>
    </div>
    )};

export default CreatePost