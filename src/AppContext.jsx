
import { useState, useEffect, createContext } from "react";
 
// Creating the Context
export const AppContext = createContext();
 
export function AppProvider({ children }) {
 
  // Lifted State - cartCount is shared across all pages
  const [cartCount, setCartCount] = useState(0);
  const [currentPage, setCurrentPage] = useState("home");
 
  // Browser Storage - useEffect reads from localStorage on first load
  useEffect(() => {
    const stored = localStorage.getItem("cartCount");
    if (stored) setCartCount(Number(stored));
  }, []);
 
  // Browser Storage - useEffect saves to localStorage whenever cartCount changes
  useEffect(() => {
    localStorage.setItem("cartCount", cartCount);
  }, [cartCount]);
 
  // Derived State - computed from cartCount
  const hasItemsInCart = cartCount > 0;
 
  // Navigate between pages
  const navigate = (page) => {
    setCurrentPage(page);
  };
 
  return (
    <AppContext.Provider value={{ cartCount, setCartCount, currentPage, navigate, hasItemsInCart }}>
      {children}
    </AppContext.Provider>
  );
}
 