import { useEffect, useState } from "react";
import { useParams } from "react-router"; 
import { BASE_URL } from "../../constants";
import axios from "axios";

const BlogDetails = () => {
    const {id}=useParams()
    const [post,setPost]=useState(null)

    const getPostDetails=async ()=>{
        try {
            const response= await axios(`${BASE_URL}posts/${id}`)
            setPost(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getPostDetails()
    },[id])
  return (
    <>
    {post ? (<div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      <div className="byPosted">
        <span>Posted by</span> {post.author || "Unknown"} <span>on</span>{" "}
        {post.date || "N/A"}
      </div>
    </div>) :(<p>Loading...</p>)}
    </>
  )
}

export default BlogDetails