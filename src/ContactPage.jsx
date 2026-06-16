
import { useState, useRef, useEffect } from "react";
 
// CONTACT PAGE
// Controlled inputs   → useState (name, email, message)
// Uncontrolled input  → useRef  (phone)
// Form Validation     → validate()
// useEffect           → document title side effect
 
export function ContactPage() {
 
  // CONTROLLED inputs
  const [name, setName]       = useState("");
  const [email, setEmail]     = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors]   = useState({});
  const [submitted, setSubmitted] = useState(false);
 
  // UNCONTROLLED input - DOM controls value, we read via ref
  const phoneRef = useRef(null);
 
  // useEffect - side effect: update document title
  useEffect(() => {
    document.title = "Contact | Green Thumb";
    return () => { document.title = "Green Thumb"; };
  }, []);
 
  // FORM VALIDATION
  const validate = () => {
    const newErrors = {};
    if (!name.trim())               newErrors.name    = "Name is required";
    if (!email.includes("@"))       newErrors.email   = "Enter a valid email";
    if (message.trim().length < 10) newErrors.message = "Message must be at least 10 characters";
    return newErrors;
  };
 
  const handleSubmit = () => {
    const found = validate();
    if (Object.keys(found).length > 0) {
      setErrors(found);
      return;
    }
    const phone = phoneRef.current?.value || "not provided";
    console.log("Submitted:", { name, email, message, phone });
    setSubmitted(true);
  };
 
  const styles = {
    page: {
      maxWidth: 960,
      margin: "0 auto",
      padding: "40px 24px",
    },
    contactWrap: {
      display: "flex",
      gap: 40,
      flexWrap: "wrap",
    },
    contactInfo: {
      flex: 1,
      minWidth: 200,
      background: "#2d5a3d",
      color: "#c8e6c9",
      borderRadius: 16,
      padding: 28,
      lineHeight: 2,
    },
    form: {
      flex: 2,
      minWidth: 280,
      display: "flex",
      flexDirection: "column",
      gap: 8,
    },
    label: {
      fontWeight: 600,
      color: "#2d5a3d",
      fontSize: 14,
      marginTop: 4,
    },
    input: {
      border: "2px solid #c8e6c9",
      borderRadius: 10,
      padding: "10px 14px",
      fontSize: 15,
      outline: "none",
      fontFamily: "inherit",
      background: "#fff",
      width: "100%",
      boxSizing: "border-box",
    },
    inputError: {
      borderColor: "#e53935",
    },
    error: {
      color: "#e53935",
      fontSize: 12,
    },
    btn: {
      background: "#2d5a3d",
      color: "#fff",
      border: "none",
      padding: "12px 28px",
      borderRadius: 30,
      fontSize: 16,
      cursor: "pointer",
      fontWeight: 600,
      marginTop: 8,
    },
    successBox: {
      textAlign: "center",
      background: "#fff",
      borderRadius: 20,
      padding: "48px 32px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      maxWidth: 420,
      margin: "40px auto",
    },
  };
 
  if (submitted) {
    return (
      <div style={styles.page}>
        <div style={styles.successBox}>
          <div style={{ fontSize: 56 }}>🌸</div>
          <h2 style={{ color: "#2d5a3d" }}>Thank you, {name}!</h2>
          <p style={{ color: "#555" }}>We'll get back to you soon.</p>
          <button style={styles.btn} onClick={() => {
            setSubmitted(false);
            setName(""); setEmail(""); setMessage("");
          }}>
            Send Another
          </button>
        </div>
      </div>
    );
  }
 
  return (
    <div style={styles.page}>
      <h2 style={{ color: "#1b5e20", fontSize: 32, marginBottom: 24, fontWeight: 800 }}>
        Contact Us 🌸
      </h2>
 
      <div style={styles.contactWrap}>
        <div style={styles.contactInfo}>
          <h3 style={{ color: "#fff", marginTop: 0 }}>Get in touch</h3>
          <p>📍 123 Garden Lane, Hyderabad</p>
          <p>📞 +91 98765 43210</p>
          <p>📧 hello@greenthumb.in</p>
          <p>🕘 Mon–Sat, 9am – 6pm</p>
        </div>
 
        <div style={styles.form}>
          {/* CONTROLLED input */}
          <label style={styles.label}>Name *</label>
          <input
            style={{ ...styles.input, ...(errors.name ? styles.inputError : {}) }}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
          {errors.name && <span style={styles.error}>{errors.name}</span>}
 
          {/* CONTROLLED input */}
          <label style={styles.label}>Email *</label>
          <input
            style={{ ...styles.input, ...(errors.email ? styles.inputError : {}) }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
          {errors.email && <span style={styles.error}>{errors.email}</span>}
 
          {/* UNCONTROLLED input - only useRef, no useState */}
          <label style={styles.label}>Phone (optional)</label>
          <input
            style={styles.input}
            ref={phoneRef}
            placeholder="Your phone number"
          />
          <small style={{ color: "#888" }}>This field uses useRef (uncontrolled)</small>
 
          {/* CONTROLLED textarea */}
          <label style={styles.label}>Message *</label>
          <textarea
            style={{ ...styles.input, height: 90, resize: "vertical", ...(errors.message ? styles.inputError : {}) }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="How can we help?"
          />
          {errors.message && <span style={styles.error}>{errors.message}</span>}
 
          <button style={styles.btn} onClick={handleSubmit}>Send Message 🌿</button>
        </div>
      </div>
    </div>
  );
}
 