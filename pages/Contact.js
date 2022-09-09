import Head from "next/head";
import ContactPage from "../Comps/ContactPage/ContactPage";

function Contact() {
  return (
    <>
      <Head>
        <title>Church | Contact</title>
      </Head>
      <div>
        <ContactPage />
      </div>
    </>
  );
}

export default Contact;
