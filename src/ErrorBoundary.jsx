
import { Component } from "react";
 
// ERROR BOUNDARY - Class Component
export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
 
  static getDerivedStateFromError() {
    return { hasError: true };
  }
 
  componentDidCatch(error, info) {
    console.error("Error caught:", error, info);
  }
 
  render() {
    if (this.state.hasError) {
      return <FallbackComponent onRetry={() => this.setState({ hasError: false })} />;
    }
    return this.props.children;
  }
}
 
// FALLBACK COMPONENT - shown when error occurs
export function FallbackComponent({ onRetry }) {
  const styles = {
    wrapper: {
      textAlign: "center",
      padding: "60px 20px",
    },
    btn: {
      background: "#2d5a3d",
      color: "#fff",
      border: "none",
      padding: "12px 28px",
      borderRadius: 30,
      fontSize: 16,
      cursor: "pointer",
      marginTop: 16,
    },
  };
 
  return (
    <div style={styles.wrapper}>
      <div style={{ fontSize: 52 }}>🌵</div>
      <h2 style={{ color: "#4a7c59", margin: "12px 0 6px" }}>Oops! Something went wrong.</h2>
      <p style={{ color: "#666" }}>Don't worry, your plants are fine.</p>
      <button style={styles.btn} onClick={onRetry}>Try Again</button>
    </div>
  );
}