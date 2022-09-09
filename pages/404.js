import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Head from "next/head";

function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

  return (
    <>
      <Head>
        <title>404 | Page not found</title>
      </Head>
      <div className={styles.not_found}>
        <h1>Oooops...</h1>
        <h2>This page not found</h2>
        <p>
          Go to the
          <Link href="/">
            <a>Homepage</a>
          </Link>
        </p>
      </div>
    </>
  );
}

export default NotFound;
