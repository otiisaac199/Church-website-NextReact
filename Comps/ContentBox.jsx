import Image from "next/image";
import styles from "../styles/Home.module.css";

function ContentBox({ imgSrc, title, text }) {
  return (
    <div className={styles.content_box}>
      <div className={styles.content_box_top}>
        <Image src={imgSrc} alt="icon" />
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <div></div>
    </div>
  );
}

export default ContentBox;
