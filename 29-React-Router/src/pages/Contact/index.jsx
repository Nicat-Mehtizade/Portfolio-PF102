import "./index.css"
const Contact = () => {
  return (
    <div className="page-container">
      <div className="hero-section">
        <h1 className="hero-title">Contact</h1>
      </div>

      <div className="content-wrapper">
        <div className="contact-card">
          <h2 className="contact-title">Get in Touch</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input id="name" className="form-input" placeholder="Your name" />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input id="email" type="email" className="form-input" placeholder="your@email.com" />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea id="message" className="form-textarea" placeholder="Your message..." />
            </div>

            <button className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact