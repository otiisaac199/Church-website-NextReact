import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.nav_flex}>
      <div className={styles.logo}>
        <Image
          src="/images/vector.png"
          width={120}
          height={30}
          className={styles.logo_img}
        />
      </div>
      <div className={styles.vertical_line}></div>
      <div className={styles.center_menu}>
        <Link href="/">
          <a>HOME</a>
        </Link>
        <Link href="/About">
          <a>ABOUT US</a>
        </Link>
        <Link href="/Sermon">
          <a>SERMON</a>
        </Link>
        <Link href="/Blog">
          <a>BLOG</a>
        </Link>
      </div>
      <div style={{ flex: "3", display: "flex", justifyContent: "end" }}>
        <Link href="/Contact">
          <button className={styles.button}>CONTACT US</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
