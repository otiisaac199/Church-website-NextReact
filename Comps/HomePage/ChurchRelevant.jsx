import CompStyles from "../comps.module.css";
import styles from "../../styles/Home.module.css";
import ContentHead from "../ContentHead";
import ContentBox from "../ContentBox";
import ImagesModule from "../../public/images";

function ChurchRelevant() {
  return (
    <div className={CompStyles.church_relevant}>
      <ContentHead
        pText={"SUB-HEADLINE"}
        h1Text={"A CHURCH THAT IS RELEVANT"}
      />
      <div className={CompStyles.church_relevant_content}>
        <ContentBox
          className={CompStyles.content_box}
          imgSrc={ImagesModule.iconOne}
          title="ABOUT US"
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur minima quibusdam doloribus. Molestias quo exercitationem facilis"
          }
        />
        <ContentBox
          className={CompStyles.content_box}
          imgSrc={ImagesModule.iconTwo}
          title="GET INVOLVED"
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur minima quibusdam doloribus. Molestias quo exercitationem facilis"
          }
        />
        <ContentBox
          className={CompStyles.content_box}
          imgSrc={ImagesModule.iconThree}
          title="GIVING BACK"
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur minima quibusdam doloribus. Molestias quo exercitationem facilis"
          }
        />
      </div>
      <p></p>
    </div>
  );
}

export default ChurchRelevant;
