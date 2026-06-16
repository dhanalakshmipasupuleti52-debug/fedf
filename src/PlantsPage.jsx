import { useState, useContext } from "react";
import { AppContext } from "./AppContext";

import monsteraImg from "./assets/monstera.jpg";
import peaceLilyImg from "./assets/Peace Lily.jpg";
import snakePlantImg from "./assets/snake plant.jpg";
import fiddleLeafFigImg from "./assets/Fiddle leaf fig.jpg";
import pothosImg from "./assets/Pothos.jpg";
import zzPlantImg from "./assets/ZZ Plant.jpg";

const plantsData = [
  {
    id: 1,
    name: "Monstera",
    price: 25,
    image: monsteraImg,
    care: "Low",
    desc: "Iconic split leaves, easy to grow.",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 18,
    image: peaceLilyImg,
    care: "Low",
    desc: "Purifies air, loves shade.",
  },
  {
    id: 3,
    name: "Snake Plant",
    price: 15,
    image: snakePlantImg,
    care: "Very Low",
    desc: "Nearly indestructible.",
  },
  {
    id: 4,
    name: "Fiddle Leaf Fig",
    price: 35,
    image: fiddleLeafFigImg,
    care: "Medium",
    desc: "Dramatic large leaves.",
  },
  {
    id: 5,
    name: "Pothos",
    price: 12,
    image: pothosImg,
    care: "Very Low",
    desc: "Trailing vines, perfect for shelves.",
  },
  {
    id: 6,
    name: "ZZ Plant",
    price: 22,
    image: zzPlantImg,
    care: "Very Low",
    desc: "Thrives in low light and drought.",
  },
];

export function PlantCard({ plant, onAdd }) {
  const styles = {
    card: {
      background: "#fff",
      borderRadius: 16,
      padding: 20,
      boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
      display: "flex",
      flexDirection: "column",
    },
    image: {
      width: "100%",
      height: "180px",
      objectFit: "cover",
      borderRadius: "12px",
      marginBottom: "12px",
    },
    badge: {
      background: "#e8f5e9",
      color: "#388e3c",
      fontSize: 12,
      padding: "2px 10px",
      borderRadius: 20,
      display: "inline-block",
      marginTop: 4,
      fontWeight: 600,
    },
    footer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "auto",
      paddingTop: 12,
    },
    addBtn: {
      background: "#4a7c59",
      color: "#fff",
      border: "none",
      padding: "6px 16px",
      borderRadius: 20,
      cursor: "pointer",
      fontWeight: 600,
      fontSize: 14,
    },
  };

  return (
    <div style={styles.card}>
      <img src={plant.image} alt={plant.name} style={styles.image} />

      <h3 style={{ margin: "8px 0 4px", color: "#2d5a3d" }}>
        {plant.name}
      </h3>

      <span style={styles.badge}>Care: {plant.care}</span>

      <p style={{ fontSize: 13, color: "#666", margin: "8px 0" }}>
        {plant.desc}
      </p>

      <div style={styles.footer}>
        <strong style={{ color: "#4a7c59" }}>${plant.price}</strong>

        <button
          style={styles.addBtn}
          onClick={() => onAdd(plant)}
        >
          + Add
        </button>
      </div>
    </div>
  );
}

export function PlantsPage() {
  const { setCartCount } = useContext(AppContext);

  const [filter, setFilter] = useState("All");
  const [addedId, setAddedId] = useState(null);

  const careOptions = ["All", "Very Low", "Low", "Medium"];

  const filteredPlants =
    filter === "All"
      ? plantsData
      : plantsData.filter((p) => p.care === filter);

  const handleAdd = (plant) => {
    setCartCount((prev) => prev + 1);
    setAddedId(plant.id);
    setTimeout(() => setAddedId(null), 1200);
  };

  const styles = {
    page: {
      maxWidth: 960,
      margin: "0 auto",
      padding: "40px 24px",
    },
    filterRow: {
      display: "flex",
      gap: 10,
      marginBottom: 24,
      flexWrap: "wrap",
    },
    filterBtn: {
      background: "#e8f5e9",
      color: "#2d5a3d",
      border: "2px solid transparent",
      padding: "8px 18px",
      borderRadius: 20,
      cursor: "pointer",
      fontWeight: 500,
      fontSize: 14,
    },
    filterBtnActive: {
      border: "2px solid #2d5a3d",
      background: "#2d5a3d",
      color: "#fff",
    },
    toast: {
      background: "#4caf50",
      color: "#fff",
      padding: "10px 20px",
      borderRadius: 8,
      marginBottom: 16,
      display: "inline-block",
      fontWeight: 600,
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
      gap: 20,
    },
  };

  return (
    <div style={styles.page}>
      <h2
        style={{
          color: "#1b5e20",
          fontSize: 32,
          marginBottom: 24,
          fontWeight: 800,
        }}
      >
        Our Plants 🌿
      </h2>

      <div style={styles.filterRow}>
        {careOptions.map((opt) => (
          <button
            key={opt}
            style={{
              ...styles.filterBtn,
              ...(filter === opt ? styles.filterBtnActive : {}),
            }}
            onClick={() => setFilter(opt)}
          >
            {opt}
          </button>
        ))}
      </div>

      {addedId && (
        <div style={styles.toast}>
          ✅ Added to cart!
        </div>
      )}

      <div style={styles.grid}>
        {filteredPlants.map((plant) => (
          <PlantCard
            key={plant.id}
            plant={plant}
            onAdd={handleAdd}
          />
        ))}
      </div>
    </div>
  );
}