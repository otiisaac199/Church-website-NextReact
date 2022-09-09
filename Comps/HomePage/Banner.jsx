import CompStyles from "../comps.module.css";
import styles from "../../styles/Home.module.css";

function Banner() {
  return (
    <div className={CompStyles.banner}>
      <p>WELCOME TO OUR CHURCH</p>
      <h1>BECOME A PART OF OUR COMMUNITY</h1>
      <button className={`${styles.button} ${CompStyles.banner_button}`}>
        LEARN MORE
      </button>
      <div className={CompStyles.banner_bottom_text}>
        <div
          className={styles.list_line}
          style={{ margin: "10px 10px 0 0" }}
        ></div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur,
          id.
        </p>
      </div>
    </div>
  );
}

export default Banner;
