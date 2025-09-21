"use client";
import { useEffect, useState } from "react";

export default function CategoryPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/api/category")
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  return (
    <main>
      <h1>Categories</h1>
      <ul>
        {categories.map(cat => (
          <li key={cat._id}>{cat.name}</li>
        ))}
      </ul>
    </main>
  );
}
