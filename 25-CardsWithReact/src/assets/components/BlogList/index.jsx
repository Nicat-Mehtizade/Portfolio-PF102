import PropTypes from "prop-types";
import Blog from "../Blog";
import "./index.css"

const BlogList = ({ blogs }) => {
  return (
    <div className="blogs">
      {blogs.map((blog) => 
        <Blog key={blog.id} blog={blog} />
      )}
    </div>
  );
};

export default BlogList;

BlogList.propTypes=({
    blogs: PropTypes.array
})