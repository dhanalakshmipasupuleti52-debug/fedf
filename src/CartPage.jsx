import { useContext } from "react";
import { AppContext } from "./AppContext";

export function CartPage({ navigate }) {
  const { cartCount, setCartCount } = useContext(AppContext);

  const styles = {
    page: {
      maxWidth: 960,
      margin: "0 auto",
      padding: "40px 24px",
      textAlign: "center",
    },
    box: {
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
    clearBtn: {
      background: "#ff7043",
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

  return (
    <div style={styles.page}>
      <div style={styles.box}>
        <div style={{ fontSize: 56 }}>🛒</div>
        <h2 style={{ color: "#2d5a3d" }}>Your Cart</h2>
        {cartCount === 0 ? (
          <p style={{ color: "#555" }}>Your cart is empty!</p>
        ) : (
          <p style={{ color: "#555" }}>You have {cartCount} item(s) in your cart!</p>
        )}
        <button style={styles.btn} onClick={() => navigate("plants")}>
          Continue Shopping 🌿
        </button>
        {cartCount > 0 && (
          <button style={styles.clearBtn} onClick={() => setCartCount(0)}>
            Clear Cart 🗑️
          </button>
        )}
      </div>
    </div>
  );
}