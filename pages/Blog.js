import Head from "next/head";
import BlogPage from "../Comps/BlogPage/BlogPage";

function Blog() {
  return (
    <>
      <Head>
        <title>Church | Blog</title>
      </Head>
      <div>
        <BlogPage />
      </div>
    </>
  );
}

export default Blog;
