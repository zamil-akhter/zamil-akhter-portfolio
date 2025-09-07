import "./Contact.css";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="contact-title">
          <span className="highlight">Get In Touch</span>
        </h2>
        <p className="subtitle">
          Ready to start your next project? Let&apos;s create something amazing together.
        </p>

        <div className="contact-content">
          {/* Left Info Section */}
          <div className="contact-info">
            <h3>Let&apos;s Connect</h3>
            <p>
              I am always interested in hearing about new opportunities, creative projects,
              or just having a chat about technology and design. Don&apos;t hesitate to reach out!
            </p>

            <div className="info-card">
              <Mail className="icon email" />
              <div>
                <span>Email</span>
                <strong>{import.meta.env.VITE_CONTACT_EMAIL}</strong>
              </div>
            </div>

            <div className="info-card">
              <Phone className="icon phone" />
              <div>
                <span>Phone</span>
                <strong>+91 {import.meta.env.VITE_CONTACT_PHONE}</strong>
              </div>
            </div>

            <div className="info-card">
              <MessageCircle className="icon whatsapp" />
              <div>
                <span>WhatsApp</span>
                <strong>+91 {import.meta.env.VITE_CONTACT_PHONE}</strong>
              </div>
            </div>

            <div className="info-card">
              <MapPin className="icon location" />
              <div>
                <span>Location</span>
                <strong>Chandigarh, India</strong>
              </div>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="contact-form">
            <h3>Open to Collaborations & Opportunities</h3>
            <form>
              <div className="form-row">
                <input type="text" placeholder="Your name" required />
                <input type="email" placeholder="your@email.com" required />
              </div>
              <input type="text" placeholder="What's this about?" required />
              <textarea placeholder="Tell me about your project..." rows={5} required></textarea>
              <button type="submit">
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
