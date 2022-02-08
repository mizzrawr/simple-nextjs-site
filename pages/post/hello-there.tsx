import Image from "next/image";
import Head from "next/head";

const Hello = () => (
  <>
    <Head>
      <title>Hello there ---- My Blog</title>
      <meta property="og:title" content="Hello there ---- My Blog" />
    </Head>
    <article>
      <h1>hello there </h1>
      <Image
        src="/posts/hello-there/gati-quejandose.jpg"
        width={220}
        height={220}
      />
    </article>
  </>
);

export default Hello;
