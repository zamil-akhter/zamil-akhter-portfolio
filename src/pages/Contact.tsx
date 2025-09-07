import "./Contact.css";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    about: "",
    tellMeMore: "",
  });
  const [status, setStatus] = useState(""); // success/error message
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("https://zamil-akhter-portfolio-backend-3n8zwvwnu.vercel.app/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log("Raw response: -------------->>>>>>>>>>> ", response);

      const data = await response.json();
      console.log("Response JSON: ----------->>>>>>>>>>>>> ", data);
      if (!response.ok) {
        setStatus(data.message || "Error sending email");
      } else {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", about: "", tellMeMore: "" });
      }
    } catch (err) {
      setStatus("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="contact-title">
          <span className="highlight">Get In Touch</span>
        </h2>
        <p className="subtitle">Ready to start your next project? Let&apos;s create something amazing together.</p>

        <div className="contact-content">
          {/* Left Info Section */}
          <div className="contact-info">
            <h3>Let&apos;s Connect</h3>
            <p>I am always interested in hearing about new opportunities, creative projects, or just having a chat about technology and design. Don&apos;t hesitate to reach out!</p>

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
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <input type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} required />
              </div>
              <input type="text" name="about" placeholder="What's this about?" value={formData.about} onChange={handleChange} required />
              <textarea name="tellMeMore" placeholder="Tell me about your project..." rows={5} value={formData.tellMeMore} onChange={handleChange} required></textarea>
              <button type="submit" disabled={loading}>
                <span>{loading ? "Sending..." : "Send Message"}</span>
              </button>
            </form>
            {status && <p className="status-message">{status}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
