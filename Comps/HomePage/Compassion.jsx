import CompStyles from "../comps.module.css";
import styles from "../../styles/Home.module.css";
import ContentHead from "../ContentHead";
import Images from "next/image";

function Compassion() {
  return (
    <div className={CompStyles.compassion}>
      <ContentHead pText={"SUB-HEADLINE"} h1Text={"LOVE AND COMPASSION"} />

      <div className={CompStyles.compassion_text}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A,
          praesentium, deleniti dicta omnis ea aliquam corrupti consequatur
          numquam voluptate tempore distinctio cum neque recusandae est culpa
          vitae sint delectus exercitationem error ex possimus inventore
          debitis! Accusantium similique minus nam esse dolorem repellat placeat
          alias odio, corrupti, voluptatibus!
        </p>
      </div>

      <div className={CompStyles.compassion_img}>
        <div className={CompStyles.compassion_img_content}>
          <Images alt="" width={300} height={350} />
        </div>
      </div>
    </div>
  );
}

export default Compassion;
