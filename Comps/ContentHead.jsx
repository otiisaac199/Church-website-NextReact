import styles from "../styles/Home.module.css";

function ContentHead({ pText, h1Text }) {
  return (
    <div className={styles.content_head}>
      <p>{pText}</p>
      <h1>{h1Text}</h1>
    </div>
  );
}

export default ContentHead;
