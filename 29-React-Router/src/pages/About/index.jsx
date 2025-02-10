import "./index.css"

const About = () => {
  return (
    <div className="page-container">
    <div className="hero-section">
      <h1 className="hero-title">About</h1>
    </div>
    
    <div className="content-wrapper">
      <div className="about-card">
        <h2 className="about-title">Our Story</h2>
        <div className="about-content">
          <p>
            Welcome to Clean Blog, where simplicity meets substance. Founded in 2024, 
            we believe in the power of clean, distraction-free writing and reading experiences.
          </p>
          <p>
            Our mission is to provide a platform where ideas can breathe and stories can unfold 
            naturally, without the clutter that often accompanies modern digital spaces.
          </p>
          <p>
            Whether you're a writer seeking the perfect canvas for your thoughts or a reader 
            in search of meaningful content, Clean Blog offers the ideal environment for both 
            creation and consumption.
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About