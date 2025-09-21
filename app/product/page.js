"use client";
import { useEffect, useState } from "react";

export default function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/product")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <main>
      <h1>Products</h1>
      <ul>
        {products.map(prod => (
          <li key={prod._id}>
            {prod.name} - ${prod.price}
          </li>
        ))}
      </ul>
    </main>
  );
}
