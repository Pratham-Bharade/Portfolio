import "./Contact.css";
import emailjs from "@emailjs/browser";
import React, { useRef, useState, useEffect } from "react";

function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [toast, setToast] = useState(false);
  const [emailError, setEmailError] = useState(false);

  useEffect(() => {
    // Note: User should replace with their own public key in production
    emailjs.init("9CaouynAaDJa2R2Si");
  }, []);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    const emailValue = (form.current.elements.namedItem("email") as HTMLInputElement).value;

    if (!validateEmail(emailValue)) {
      setEmailError(true);
      return;
    }

    setEmailError(false);
    setLoading(true);

    emailjs
      .sendForm("service_q5u429c", "template_d0y9fr8", form.current)
      .then(() => {
        setSuccess(true);
        setToast(true);
        form.current?.reset();

        setTimeout(() => {
          setSuccess(false);
          setToast(false);
        }, 3000);
      })
      .catch(() => {
        setToast(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="contact" id="contact">
      <h2 className="contact-title shiny-text">Contact Me</h2>
      <h5 className="contact-tagline">Let’s discuss how I can contribute to your team</h5>

      <div className="contact-container">
        <form ref={form} onSubmit={sendEmail} className="contact-form glass">
          <div className="input-group">
            <input type="text" name="name" required />
            <label>Name</label>
          </div>

          <div className={`input-group ${emailError ? "error-shake" : ""}`}>
            <input type="email" name="email" required />
            <label>Email</label>
          </div>

          <div className="input-group">
            <textarea name="message" rows={4} required></textarea>
            <label>Message</label>
          </div>

          <button type="submit" disabled={loading} className="submit-btn">
            {loading ? "Sending..." : success ? "Sent ✓" : "Send Message"}
          </button>

          {success && (
            <div className="checkmark">
              <div className="checkmark-circle">
                <div className="checkmark-stem"></div>
                <div className="checkmark-kick"></div>
              </div>
            </div>
          )}
        </form>

        <div className="social-card glass">
          <h3>Connect With Me</h3>
          
          <div className="contact-info">
            <p><strong>Mobile:</strong> +91 9322228426</p>
            <p><strong>Email:</strong> prathambharade@gmail.com</p>
          </div>

          <div className="social-links">
            <button onClick={() => window.open("https://github.com/pratham-bharade", "_blank")}> GitHub </button>
            <button onClick={() => window.open("https://linkedin.com/in/prathamesh-bharade-02694428b", "_blank")}>LinkedIn</button>
            <button onClick={() => window.open("https://instagram.com/pratham_bharade", "_blank")}>Instagram</button>
          </div>
        </div>
      </div>

      {toast && (
        <div className="toast">
          {success ? "Message Sent Successfully 🚀" : "Something went wrong ❌"}
        </div>
      )}
    </section>
  );
}

export default Contact;
