import { useContext, useState } from "react";
import { AppProvider, AppContext } from "./AppContext";
import { ErrorBoundary } from "./ErrorBoundary";
import { Navbar } from "./Navbar";
import { HomePage } from "./HomePage";
import { PlantsPage } from "./PlantsPage";
import { ContactPage } from "./ContactPage";
 
function Router({ currentPage, navigate }) {
 
  const [agreed, setAgreed] = useState(() => {
    return localStorage.getItem("agreedToTerms") === "true";
  });
 
  const handleAgree = () => {
    localStorage.setItem("agreedToTerms", "true");
    setAgreed(true);
  };
 
  const styles = {
    page: { maxWidth: 960, margin: "0 auto", padding: "40px 24px" },
    box: {
      textAlign: "center",
      background: "#fff",
      borderRadius: 20,
      padding: "48px 32px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      maxWidth: 420,
      margin: "40px auto",
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
      margin: 6,
    },
  };
 
  if (currentPage === "home") return <HomePage navigate={navigate} />;
 
  if (currentPage === "plants") {
    if (!agreed) {
      return (
        <div style={styles.page}>
          <div style={styles.box}>
            <h2 style={{ color: "#2d5a3d" }}>🔒 Members Only</h2>
            <p style={{ color: "#555" }}>Agree to our care guidelines to browse plants.</p>
            <button style={styles.btn} onClick={handleAgree}>I Agree 🌿</button>
            <button style={{ ...styles.btn, background: "#ccc", color: "#333" }} onClick={() => navigate("home")}>
              Go Back
            </button>
          </div>
        </div>
      );
    }
    return <PlantsPage />;
  }
 
  if (currentPage === "contact") return <ContactPage />;
 
  return (
    <div style={styles.page}>
      <div style={styles.box}>
        <div style={{ fontSize: 56 }}>🍂</div>
        <h2 style={{ color: "#2d5a3d" }}>404 – Page not found</h2>
        <button style={styles.btn} onClick={() => navigate("home")}>Go Home</button>
      </div>
    </div>
  );
}
 
function AppContent() {
  const { currentPage, navigate, cartCount, hasItemsInCart } = useContext(AppContext);
 
  const styles = {
    app: {
      fontFamily: "'Segoe UI', sans-serif",
      minHeight: "100vh",
      background: "#f5f9f5",
      display: "flex",
      flexDirection: "column",
    },
    footer: {
      background: "#2d5a3d",
      color: "#c8e6c9",
      textAlign: "center",
      padding: "18px",
      fontSize: 14,
      marginTop: "auto",
    },
  };
 
  return (
    <div style={styles.app}>
      <Navbar
        currentPage={currentPage}
        navigate={navigate}
        cartCount={cartCount}
        hasItemsInCart={hasItemsInCart}
      />
      <ErrorBoundary>
        <Router currentPage={currentPage} navigate={navigate} />
      </ErrorBoundary>
      <footer style={styles.footer}>
        🌿 Green Thumb © 2025 · Made with React · Deployed on Netlify
      </footer>
    </div>
  );
}
 
export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}