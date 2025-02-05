import "./index.css"
import PropTypes from 'prop-types';

const Blog = ({blog}) => {
  return (
    <div className="blog">
        <img src={blog.image} alt={blog.title} />
        <h1>{blog.title}</h1>
        <p>{blog.content}</p>
        <div>
            <span>{blog.author} -</span>
            <span> {blog.date}</span>
        </div>
    </div>
  )
}

export default Blog

Blog.propTypes={
    blog: PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
        content: PropTypes.string,
        author: PropTypes.string,
        date: PropTypes.string,
    })
}