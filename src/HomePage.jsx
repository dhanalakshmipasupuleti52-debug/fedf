
export function HomePage({ navigate }) {
  const styles = {
    page: {
      maxWidth: 960,
      margin: "0 auto",
      padding: "40px 24px",
    },
    hero: {
      textAlign: "center",
      padding: "60px 24px 40px",
      background: "linear-gradient(135deg, #e8f5e9 0%, #f1f8e9 100%)",
      borderRadius: 20,
      marginBottom: 40,
    },
    heroTitle: {
      fontSize: 42,
      color: "#1b5e20",
      margin: "0 0 16px",
      fontWeight: 800,
    },
    heroSub: {
      color: "#4a7c59",
      fontSize: 18,
      lineHeight: 1.7,
      marginBottom: 28,
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
    },
    featureRow: {
      display: "flex",
      gap: 20,
      flexWrap: "wrap",
    },
    featureCard: {
      flex: 1,
      minWidth: 180,
      background: "#fff",
      borderRadius: 16,
      padding: 24,
      textAlign: "center",
      boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "center",
    },
  };
 
  return (
    <div style={styles.page}>
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Bring Nature Indoors 🌱</h1>
        <p style={styles.heroSub}>
          Hand-picked plants for your home, office, and heart.
          <br />Fresh. Simple. Green.
        </p>
        <button style={styles.btn} onClick={() => navigate("plants")}>
          Explore Plants
        </button>
      </div>
 
      <div style={styles.featureRow}>
        {[
          { icon: "🌿", title: "Hand Selected", desc: "Every plant chosen with care" },
          { icon: "🚚", title: "Fast Delivery", desc: "To your door in 2-3 days" },
          { icon: "💚", title: "Plant Guarantee", desc: "Healthy or we replace it" },
        ].map((f) => (
          <div key={f.title} style={styles.featureCard}>
            <div style={{ fontSize: 36 }}>{f.icon}</div>
            <strong style={{ color: "#2d5a3d" }}>{f.title}</strong>
            <p style={{ color: "#666", margin: 0, fontSize: 14 }}>{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}