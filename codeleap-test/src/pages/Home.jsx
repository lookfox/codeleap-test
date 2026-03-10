import { useState, useEffect } from "react"
import SignupModal from "../components/SignupModal"
import CreatePost from "../components/CreatePost"
import { getPosts } from "../services/api"
import PostCard from "../components/PostCard"

function Home(){

  const [posts, setPosts] = useState([])
  const [username, setUsername] = useState("")

  const loadPosts = async () => {
    const data = await getPosts()
    setPosts(data)
  }

  useEffect(() => {
    loadPosts()
  }, [])

  
    return (
  <div className="container">

    <div className="header">
      CodeLeap Network
    </div>

    {!username && (
      <SignupModal setUsername={setUsername}/>
    )}

    {username && (
      <>
        <h3>Welcome {username}</h3>

        <CreatePost
          username={username}
          onPostCreated={loadPosts}
        />

        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
          />
        ))}
      </>
    )}

  </div>
)
  
}

export default Home