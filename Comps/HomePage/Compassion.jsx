import CompStyles from "../comps.module.css";
import styles from "../../styles/Home.module.css";
import ContentHead from "../ContentHead";
import Image from "next/image";
import ImagesModule from "../../public/images";
import styled from "styled-components";

const Heading = styled.div``;

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
          <Image
            src={ImagesModule.bearedMan}
            alt=""
            width={300}
            height={350}
            className={CompStyles.compassion_img_content_child}
          />
        </div>
        <div className={CompStyles.compassion_img_content}>
          <button className={styles.button}>READ MORE</button>
          <Image
            src={ImagesModule.mAndWReading}
            alt="icon"
            className={CompStyles.compassion_img_content_child}
            width={350}
            height={450}
          />
        </div>
        <div className={CompStyles.compassion_img_content}>
          <Image
            src={ImagesModule.brownPews}
            alt=""
            width={300}
            height={350}
            className={CompStyles.compassion_img_content_child}
          />
        </div>
      </div>
    </div>
  );
}

export default Compassion;
