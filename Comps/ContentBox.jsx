import styles from "../styles/Home.module.css";

function ContentBox({ ...children }) {
  return (
    <div className={styles.content_box}>
      <div className={styles.content_box_top}>
        <img src={children.imgSrc} alt="icon" />
        <h3>{children.title}</h3>
        <p>{children.text}</p>
      </div>
      <div></div>
    </div>
  );
}

export default ContentBox;
