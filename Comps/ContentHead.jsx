import styles from "../styles/Home.module.css";

function ContentHead({ ...children }) {
  return (
    <div className={styles.content_head}>
      <p>{children.pText}</p>
      <h1>{children.h1Text}</h1>
    </div>
  );
}

export default ContentHead;
