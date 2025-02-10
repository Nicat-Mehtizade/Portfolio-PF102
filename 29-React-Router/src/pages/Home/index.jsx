import { useEffect, useState } from "react";
import { BASE_URL } from "../../constants";
import axios from "axios";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router"

const Home = () => {
  const [posts, setPosts] = useState([]);
  const navigate=useNavigate()

  const getPosts = async () => {
    try {
      const response = await axios(`${BASE_URL}posts`);
      setPosts(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

const handlePostClick=(id)=>{
    navigate(`/post/${id}`)
}
  return (
    
    <div className="posts">
      <h1>POSTS</h1>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div onClick={()=>{handlePostClick(post.id)}} className="post" key={post.id} >
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <div className="byPosted">
              <span>Posted by</span> {post.author || "Unknown"} <span>on</span>{" "}
              {post.date || "N/A"}
            </div>
          </div>
        ))
      ) : (
        <p>Loading posts...</p>
      )}
      <div className="btn">
      <button className="olderPostsBtn">
        OLDER POSTS<FontAwesomeIcon icon={faArrowRight} /> </button>
        </div>
    </div>
  );
};

export default Home;
