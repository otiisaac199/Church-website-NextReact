import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.left_footer_side}>
        <div className={styles.top_left_footer}>
          <Image
            src="/images/vector.png"
            width={120}
            height={30}
            className={{}}
          />
          <p>COPYRIGHT FINSWEET 2022</p>
        </div>

        <div className="bottom_left-footer">
          <p>(480) 555-0103</p>
          <p>4517 WASHINGTON AVE.</p>
          <p>FINSWEET@EXAMPLE.COM</p>
        </div>
      </div>

      <div className={styles.right_footer_side}>
        <div className={styles.quicklinks}>
          <h4>Quicklinks</h4>
          <Link href="About">
            <p>ABOUT US</p>
          </Link>
          <Link href="/Sermon">
            <p>SERMONS</p>
          </Link>
          <Link href="/">
            <p>EVENTS</p>
          </Link>
          <Link href="Blog">
            <p>BLOG</p>
          </Link>
        </div>
        <div className={styles.social_handles}>
          <h4>Connect</h4>
          <div className={styles.footer_icon}>
            <IoLogoFacebook className={styles.ico} />
            <AiFillTwitterCircle className={styles.ico} />
            <AiFillLinkedin className={styles.ico} />
          </div>
        </div>
        <div className={styles.subscribe}>
          <h1>SUBSCRIBE TO GET LATEST UPDATE AND NEWS</h1>
          <div className={styles.subscribe_input}>
            <input type="email" placeholder="Yourname@gmail.com" />
            <button className={styles.button}>SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
