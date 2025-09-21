"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome to Product App</h1>
      <ul>
        <li><Link href="/product">Products</Link></li>
        <li><Link href="/category">Categories</Link></li>
      </ul>
    </main>
  );
}
