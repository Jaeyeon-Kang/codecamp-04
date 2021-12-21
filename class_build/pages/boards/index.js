import Head from "next/head";

export default function BoardsPage() {
  return (
    <>
      <Head>
        <meta property="og:title" content="welcome board" />
        <meta property="og:url" content="jjeje.website" />
        <meta
          property="og:image"
          content="https://www.codingfactory.net/wp-content/uploads/abc.jpg"
        />
        <meta property="og:description" content="hello. welcome to My Site" />
      </Head>
      <div>Good to see you here. </div>;
    </>
  );
}
