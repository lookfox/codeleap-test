import { useState, useEffect } from "react";
import SignupModal from "../componentes/SignupModal";
import { getPosts } from "../services/api";

const [posts, setPosts] = useState([])

useEffect(() => {
    loadPosts()

}, []) 

const loadPosts = async () =>{
    const data = await getPosts()
    setPosts(data)
}

function Home(){

    const [username, setUsername] = useState("")
    
    return(
        <div>
            <h2>CodeLeap Network</h2>

            {!username &&(
                <SignupModal setUsername={setUsername} />
            )}

            {username && (
                <h2>Welsome {username}</h2>
            )}

            {posts.map((post) => {
                <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <small>{post.username}</small>
                </div>
            })}
        </div>
    )}

    export default Home;