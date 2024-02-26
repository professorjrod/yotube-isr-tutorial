import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div id="welcome">
        <h1>Welcome to Jared's Blog page</h1>
      </div>
      <div>
        <Link href="/blog">Click to view blog posts</Link>
      </div>
    </main>
  );
}
