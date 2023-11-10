import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hello World Next.js</h1>
      <p>I'm glad you're here. I hope you enjoy your visit.<br/><br/><br/>See you soon.</p>
    </div>
  );
}
