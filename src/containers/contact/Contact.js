import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration, contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = React.useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // If an in-site endpoint is provided in portfolio.js, POST to it and stay on site
    const endpoint = (contactInfo.contactForm && contactInfo.contactForm.endpoint) || "";
    const payload = { name: form.name, email: form.email, message: form.message };

    setStatus({ loading: true, success: null, error: null });

    if (endpoint) {
      fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      })
        .then((res) => {
          if (!res.ok) throw new Error("Network response was not ok");
          return res.json().catch(() => ({}));
        })
        .then(() => {
          setStatus({ loading: false, success: "Message sent. Thank you!", error: null });
          setForm({ name: "", email: "", message: "" });
        })
        .catch((err) => {
          setStatus({ loading: false, success: null, error: "Failed to send message. Please try again later." });
        });
    } else {
      // No endpoint provided: fallback to mailto but open in same tab as last resort
      const to = contactInfo.email_address || "";
      const subject = encodeURIComponent(`Message from ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} <${form.email}>`);
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
      setStatus({ loading: false, success: "Opened mail client.", error: null });
    }
  };
  // status: { loading, success, error }
  const [status, setStatus] = React.useState({ loading: false, success: null, error: null });
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>
            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              <div className="contact-card">
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label>Name *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                    />
                    {errors.name && <div className="error">{errors.name}</div>}
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your.email@example.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                    {errors.email && <div className="error">{errors.email}</div>}
                  </div>
                </div>

                <div className="form-group">
                  <label>Message *</label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project or just say hello..."
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                  />
                  {errors.message && <div className="error">{errors.message}</div>}
                </div>

                <div className="form-actions">
                  <button type="submit" className="send-button" disabled={status.loading}>
                    <i className="fas fa-paper-plane"></i>
                    <span> {status.loading ? "Sending..." : " Send Message"}</span>
                  </button>
                </div>
              {status.success && <div className="success">{status.success || "Message sent successfully."}</div>}
              {status.error && <div className="error">{status.error}</div>}
              </form>

              <br />
              <SocialMedia />
              </div>
            </div>
          </div>
          <div className="contact-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={email} />
            ) : (
              <img
                alt="Man working"
                src={require("../../assets/images/contactMailDark.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
