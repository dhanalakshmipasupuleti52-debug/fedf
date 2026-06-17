import { useContext, useState } from "react";
import { AppContext } from "./AppContext";

export function CartPage({ navigate }) {
  const { cartCount, setCartCount } = useContext(AppContext);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    setCartCount(0);
  };

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
    orderBtn: {
      background: "#388e3c",
      color: "#fff",
      border: "none",
      padding: "14px 32px",
      borderRadius: 30,
      fontSize: 17,
      cursor: "pointer",
      fontWeight: 700,
      margin: 6,
      boxShadow: "0 4px 12px rgba(56,142,60,0.3)",
    },
    successBox: {
      background: "#e8f5e9",
      borderRadius: 20,
      padding: "48px 32px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      maxWidth: 420,
      margin: "40px auto",
    },
    tick: {
      fontSize: 72,
      marginBottom: 16,
    },
    successTitle: {
      color: "#2d5a3d",
      fontSize: 26,
      fontWeight: 800,
      marginBottom: 12,
    },
    successMsg: {
      color: "#4a7c59",
      fontSize: 16,
      lineHeight: 1.7,
      marginBottom: 24,
    },
  };

  // ✅ Order Placed Screen
  if (orderPlaced) {
    return (
      <div style={styles.page}>
        <div style={styles.successBox}>
          <div style={styles.tick}>✅</div>
          <h2 style={styles.successTitle}>Order Placed!</h2>
          <p style={styles.successMsg}>
            Thank you for your order! 🌿<br />
            Your plants are on their way to you.<br />
            Expected delivery in <strong>2-3 days</strong> 🚚
          </p>
          <button style={styles.btn} onClick={() => {
            setOrderPlaced(false);
            navigate("home");
          }}>
            Back to Home 🏠
          </button>
          <button style={styles.btn} onClick={() => {
            setOrderPlaced(false);
            navigate("plants");
          }}>
            Shop More 🌱
          </button>
        </div>
      </div>
    );
  }

  // 🛒 Cart Screen
  return (
    <div style={styles.page}>
      <div style={styles.box}>
        <div style={{ fontSize: 56 }}>🛒</div>
        <h2 style={{ color: "#2d5a3d" }}>Your Cart</h2>
        {cartCount === 0 ? (
          <>
            <p style={{ color: "#555" }}>Your cart is empty!</p>
            <button style={styles.btn} onClick={() => navigate("plants")}>
              Shop Plants 🌿
            </button>
          </>
        ) : (
          <>
            <p style={{ color: "#555" }}>
              You have <strong>{cartCount}</strong> item(s) in your cart!
            </p>
            <button style={styles.orderBtn} onClick={handlePlaceOrder}>
              Place Order 🛒
            </button>
            <br />
            <button style={styles.btn} onClick={() => navigate("plants")}>
              Continue Shopping 🌿
            </button>
            <br />
            <button style={styles.clearBtn} onClick={() => setCartCount(0)}>
              Clear Cart 🗑️
            </button>
          </>
        )}
      </div>
    </div>
  );
}