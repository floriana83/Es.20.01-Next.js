import Layout from "../Layout";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Index</h1>
      </div>
    </Layout>
  );
}