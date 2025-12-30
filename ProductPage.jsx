import React from "react";
import { useParams } from "react-router-dom";

const productsData = {
  electronics: [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Smartphone" }
  ],
  clothing: [
    { id: 3, name: "T-Shirt" },
    { id: 4, name: "Jeans" }
  ],
  books: [
    { id: 5, name: "Java Programming" },
    { id: 6, name: "React Guide" }
  ]
};

const ProductPage = () => {
  const { category } = useParams();
  const products = productsData[category] || [];

  return (
    <div style={styles.container}>
      <h2>{category.toUpperCase()} PRODUCTS</h2>

      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <ul style={styles.list}>
          {products.map((product) => (
            <li key={product.id} style={styles.item}>
              {product.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px"
  },
  list: {
    listStyle: "none",
    padding: 0
  },
  item: {
    background: "#f4f4f4",
    padding: "10px",
    marginBottom: "8px",
    borderRadius: "5px"
  }
};

export default ProductPage;
