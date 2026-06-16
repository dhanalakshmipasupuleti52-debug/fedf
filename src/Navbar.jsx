
export function Navbar({ currentPage, navigate, cartCount, hasItemsInCart }) {
  const styles = {
    nav: {
      background: "#2d5a3d",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 32px",
      height: 60,
      position: "sticky",
      top: 0,
      zIndex: 100,
      boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    },
    navBrand: {
      fontWeight: 700,
      fontSize: 22,
      cursor: "pointer",
    },
    navLinks: {
      display: "flex",
      alignItems: "center",
      gap: 8,
    },
    navBtn: {
      background: "transparent",
      border: "none",
      color: "#c8e6c9",
      fontSize: 15,
      cursor: "pointer",
      padding: "6px 14px",
      borderRadius: 20,
    },
    navBtnActive: {
      background: "#4a7c59",
      color: "#fff",
    },
    cart: {
      marginLeft: 12,
      fontSize: 16,
      color: "#fff",
      position: "relative",
    },
    cartDot: {
      display: "inline-block",
      width: 8,
      height: 8,
      background: "#ff7043",
      borderRadius: "50%",
      position: "absolute",
      top: -2,
      right: -4,
    },
  };
 
  return (
    <nav style={styles.nav}>
      <div style={styles.navBrand} onClick={() => navigate("home")}>
        🌿 Green Thumb
      </div>
      <div style={styles.navLinks}>
        {["home", "plants", "contact"].map((page) => (
          <button
            key={page}
            style={{
              ...styles.navBtn,
              ...(currentPage === page ? styles.navBtnActive : {}),
            }}
            onClick={() => navigate(page)}
          >
            {page.charAt(0).toUpperCase() + page.slice(1)}
          </button>
        ))}
        <span style={styles.cart}>
          🛒 {cartCount}
          {hasItemsInCart && <span style={styles.cartDot} />}
        </span>
      </div>
    </nav>
  );
}
 
