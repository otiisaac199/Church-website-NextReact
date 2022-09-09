import Head from "next/head";
import Image from "next/image";
import HomePage from "../Comps/HomePage/HomePage";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Church | Home</title>
      </Head>
      <div>
        <HomePage />
      </div>
    </>
  );
}
