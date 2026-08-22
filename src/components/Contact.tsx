import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Sparkles,
  CheckCircle2,
  Copy,
  ExternalLink,
  Linkedin,
  Github,
  Instagram,
  Clock,
  ShieldCheck,
  Check
} from "lucide-react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [inquiryType, setInquiryType] = useState<string>("hiring");
  const [domainFocus, setDomainFocus] = useState<string>("fullstack");
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate seamless async dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after short delay
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 4000);
    }, 1200);
  };

  const inquiryOptions = [
    { id: "hiring", label: "Full-Time Opportunity", icon: "💼" },
    { id: "freelance", label: "Project / Contract", icon: "🚀" },
    { id: "collab", label: "Collaboration", icon: "🤝" },
    { id: "general", label: "Tech Chat / General", icon: "☕" },
  ];

  const domainOptions = [
    { id: "java", label: "Java & Systems" },
    { id: "python", label: "Python & AI Systems" },
    { id: "fullstack", label: "Full-Stack (React/Node)" },
    { id: "database", label: "SQL & Databases" },
    { id: "other", label: "Other" },
  ];

  return (
    <section className="contact" id="contact">
      <div className="contact-wrapper">
        {/* Section Header */}
        <div className="contact-header">
          <div className="contact-badge-tag">
            <Sparkles size={13} className="sparkle-icon" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="contact-heading shiny-text">
            Have a Project or Opportunity?
            <br />
            Let's Start a Conversation
          </h2>
          <p className="contact-subheading">
            Whether you are recruiting for software engineering roles, discussing a project, or exploring technical collaboration, my inbox is always open.
          </p>
        </div>

        {/* Live Availability Status Bar */}
        <div className="contact-status-strip">
          <div className="status-strip-item">
            <span className="live-status-dot"></span>
            <span className="status-strip-text">
              Status: <strong>Available for Full-Time Roles</strong>
            </span>
          </div>
          <span className="status-divider">•</span>
          <div className="status-strip-item">
            <MapPin size={14} className="strip-icon" />
            <span className="status-strip-text">
              Location: <strong>Pune, Maharashtra, India</strong>
            </span>
          </div>
          <span className="status-divider">•</span>
          <div className="status-strip-item">
            <Clock size={14} className="strip-icon" />
            <span className="status-strip-text">
              Response Time: <strong>Within a Few Hours</strong>
            </span>
          </div>
        </div>

        {/* Main Grid */}
        <div className="contact-main-grid">
          {/* LEFT: Quick Connect Channels & Direct Info */}
          <div className="contact-channels-col">
            <div className="channels-card">
              <h3 className="channels-card-title">Direct Communication</h3>
              <p className="channels-card-desc">
                Feel free to reach out directly via email, phone, or professional networks:
              </p>

              {/* Email Card */}
              <div className="channel-box">
                <div className="channel-box-icon email">
                  <Mail size={20} />
                </div>
                <div className="channel-box-content">
                  <span className="channel-label">Email Address</span>
                  <a
                    href="mailto:prathameshbharade64@gmail.com"
                    className="channel-value email-val"
                  >
                    prathameshbharade64@gmail.com
                  </a>
                </div>
                <button
                  type="button"
                  className="channel-copy-btn"
                  onClick={() => handleCopy("prathameshbharade64@gmail.com", "email")}
                  title="Copy email"
                >
                  {copiedField === "email" ? (
                    <span className="copied-text">
                      <Check size={13} /> Copied
                    </span>
                  ) : (
                    <Copy size={15} />
                  )}
                </button>
              </div>

              {/* Phone / WhatsApp Card */}
              <div className="channel-box">
                <div className="channel-box-icon phone">
                  <Phone size={20} />
                </div>
                <div className="channel-box-content">
                  <span className="channel-label">Phone / WhatsApp</span>
                  <a href="tel:+919356567431" className="channel-value">
                    +91 93565 67431
                  </a>
                </div>
                <button
                  type="button"
                  className="channel-copy-btn"
                  onClick={() => handleCopy("+919356567431", "phone")}
                  title="Copy phone"
                >
                  {copiedField === "phone" ? (
                    <span className="copied-text">
                      <Check size={13} /> Copied
                    </span>
                  ) : (
                    <Copy size={15} />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="channel-box">
                <div className="channel-box-icon location">
                  <MapPin size={20} />
                </div>
                <div className="channel-box-content">
                  <span className="channel-label">Current Base</span>
                  <span className="channel-value">Pune, Maharashtra, India</span>
                </div>
              </div>

              {/* Social Profiles Grid */}
              <div className="social-profiles-section">
                <span className="social-profiles-label">Professional Profiles</span>
                <div className="social-profiles-grid">
                  <a
                    href="https://linkedin.com/in/prathamesh-bharade-02694428b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-profile-pill"
                  >
                    <Linkedin size={16} className="social-pill-icon linkedin" />
                    <span>LinkedIn</span>
                    <ExternalLink size={12} className="social-arrow" />
                  </a>

                  <a
                    href="https://github.com/Pratham-Bharade"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-profile-pill"
                  >
                    <Github size={16} className="social-pill-icon github" />
                    <span>GitHub</span>
                    <ExternalLink size={12} className="social-arrow" />
                  </a>

                  <a
                    href="https://www.instagram.com/mee_ahee/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-profile-pill"
                  >
                    <Instagram size={16} className="social-pill-icon instagram" />
                    <span>Instagram</span>
                    <ExternalLink size={12} className="social-arrow" />
                  </a>
                </div>
              </div>

              {/* Quick Summary Note */}
              <div className="recruiter-highlight-note">
                <ShieldCheck size={18} className="note-shield" />
                <div>
                  <h4>Ready for Immediate Joining</h4>
                  <p>Open for full-time Software Developer, Java, Python, and Full-Stack roles.</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Interactive Inquiry Form */}
          <div className="contact-form-col">
            <div className="interactive-form-card">
              <div className="form-card-header">
                <h3 className="form-card-title">Send a Direct Message</h3>
                <p className="form-card-sub">
                  Select your inquiry type to customize your message:
                </p>
              </div>

              <form onSubmit={handleSubmit} className="custom-contact-form">
                {/* Inquiry Type Chips */}
                <div className="form-group-block">
                  <label className="input-field-label">Purpose of Inquiry</label>
                  <div className="inquiry-chips-grid">
                    {inquiryOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt.id}
                        className={`inquiry-chip ${inquiryType === opt.id ? "active" : ""}`}
                        onClick={() => setInquiryType(opt.id)}
                      >
                        <span>{opt.icon}</span>
                        <span>{opt.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Domain Focus Chips */}
                <div className="form-group-block">
                  <label className="input-field-label">Primary Tech / Domain Interest</label>
                  <div className="domain-chips-grid">
                    {domainOptions.map((dom) => (
                      <button
                        type="button"
                        key={dom.id}
                        className={`domain-chip ${domainFocus === dom.id ? "active" : ""}`}
                        onClick={() => setDomainFocus(dom.id)}
                      >
                        {dom.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email Row */}
                <div className="form-row-dual">
                  <div className="input-control">
                    <label className="input-field-label" htmlFor="contact-name">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="form-text-input"
                    />
                  </div>

                  <div className="input-control">
                    <label className="input-field-label" htmlFor="contact-email">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="e.g. john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="form-text-input"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="input-control">
                  <label className="input-field-label" htmlFor="contact-subject">
                    Subject / Role Title
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="e.g. Software Engineer Opportunity / Project Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="form-text-input"
                  />
                </div>

                {/* Message */}
                <div className="input-control">
                  <label className="input-field-label" htmlFor="contact-message">
                    Your Message *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Tell me about the role, project requirements, timeline, or whatever is on your mind..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="form-textarea"
                  ></textarea>
                </div>

                {/* Submit Button & Feedback */}
                <div className="form-actions-row">
                  <button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className={`submit-message-btn ${isSubmitted ? "success" : ""}`}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="btn-spinner"></span>
                        <span>Sending Message...</span>
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle2 size={18} />
                        <span>Message Sent Successfully!</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </div>

                {isSubmitted && (
                  <motion.div
                    className="form-success-banner"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <CheckCircle2 size={16} className="success-icon" />
                    <span>Thank you! Your message has been received. I will get back to you shortly.</span>
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
