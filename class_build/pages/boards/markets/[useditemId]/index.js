import Head from "next/head";
import { gql, request } from "graphql-request";

export default function BoardsPage(props) {
  return (
    <>
      <Head>
        <meta property="og:title" content={props.fetchUseditem.name} />
        <meta property="og:url" content="jjeje.website" />
        <meta property="og:image" content={props.fetchUseditem.images[0]} />
        <meta property="og:description" content={props.fetchUseditem.remarks} />
      </Head>
      <div>Good to see you here. This is Market Page. </div>;
    </>
  );
}

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      name
      remarks
      images
    }
  }
`;

export const getServerSideProps = async (context) => {
  //graphql도 결국엔 restapi이므로 axios를 요청하던지, 혹은 graphql-request 라이브러리를 데리고와서 요청하든지 해야한다

  const result = await request(
    "https://backend04.codebootcamp.co.kr/graphql",
    FETCH_USEDITEM,
    {
      useditemId: context.query.useditemId,
    }
  );

  return {
    props: {
      FETCH_USEDITEM: {},
      // props까지는 반드시 적어줘야 하고, 이 안에는 우리 맘대로 적는거에요.
      name: result.fetchUseditem.name,
      remarks: result.fetchUseditem.remarks,
      images: result.fetchUseditem.images[0],
    },
  };
};
