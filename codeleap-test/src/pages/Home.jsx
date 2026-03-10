import { useState, useEffect } from "react"
import SignupModal from "../components/SignupModal"
import CreatePost from "../components/CreatePost"
import { getPosts } from "../services/api"

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
    <div>

      <h2>CodeLeap Network</h2>

      {!username && (
        <SignupModal setUsername={setUsername} />
      )}

      {username && (
        <h2>Welcome {username}</h2>
      )}

      {username && (
        <CreatePost
          username={username}
          onPostCreated={loadPosts}
        />
      )}

      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <small>{post.username}</small>
        </div>
      ))}

    </div>
  )
}

export default Home