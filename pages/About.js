import Head from "next/head";
import AboutPage from "../Comps/AboutPage/AboutPage";

function About() {
  return (
    <>
      <Head>
        <title>Church | About</title>
      </Head>
      <div>
        <AboutPage />
      </div>
    </>
  );
}

export default About;
