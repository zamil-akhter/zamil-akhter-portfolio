import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p>Feel free to reach out to me!</p>
            <div className="contact-item">
              <strong>Email:</strong> {import.meta.env.VITE_CONTACT_EMAIL}
            </div>
            <div className="contact-item">
              <strong>LinkedIn:</strong> {import.meta.env.VITE_CONTACT_LINKEDIN}
            </div>
            <div className="contact-item">
              <strong>GitHub:</strong> {import.meta.env.VITE_CONTACT_GITHUB}
            </div>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows={5} required></textarea>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
