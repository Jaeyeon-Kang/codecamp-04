import {} from "graphql-request";

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { Global } from "@emotion/react";
import "antd/dist/antd.css";
import { AppProps } from "next/dist/shared/lib/router/router";
import { globalStyles } from "../src/commons/styles/globalStyles";
import Layout from "../src/components/commons/layout/index";
import { createUploadLink } from "apollo-upload-client";
import {
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { initializeApp } from "firebase/app";
import { getAccessToken } from "../src/commons/libraries/getAccessToken";
// import Head from "next/head";

const firebaseConfig = {
  apiKey: "AIzaSyBWyb0jr4zoqZ3Z2nly7PIyLo1Wji4NHq4",
  authDomain: "codecamp-04-01.firebaseapp.com",
  projectId: "codecamp-04-01",
  storageBucket: "codecamp-04-01.appspot.com",
  messagingSenderId: "233477791585",
  appId: "1:233477791585:web:86f197c72cfc108d75af20",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

interface IGlobalContext {
  accessToken?: string;
  setMyAccessToken?: Dispatch<SetStateAction<string>>;
  userInfo?: {
    name?: string;
    email?: string;
    picture?: string;
  };
  setMyUserInfo?: Dispatch<SetStateAction<{}>>;
}

export const GlobalContext = createContext<IGlobalContext>({});

function MyApp({ Component, pageProps }: AppProps) {
  const [myAccessToken, setMyAccessToken] = useState("");
  const [myUserInfo, setMyUserInfo] = useState({});
  const myValue = {
    accessToken: myAccessToken,
    setMyAccessToken: setMyAccessToken,
    userInfo: myUserInfo,
    setMyUserInfo: setMyUserInfo,
  };

  console.log(myAccessToken);

  useEffect(() => {
    // const accessToken = localStorage.getItem("accessToken") || "";
    // if (accessToken) setMyAccessToken(accessToken);
    
   if(localStorage.getItem("refreshToken")) getAccessToken(setMyAccessToken);
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 1. 토큰 만료 에러를 케치
        if (err.extensions?.code === "UNAUTHENTICATED") {
          // 3. 기존에 실패했던 요청 다시 재요청하기
          operation.setContext({
            headers: {
              ...operation.getContext().headers,
              authorization: `Bearer ${getAccessToken(setMyAccessToken)}`, // 2. refreshToken으로 accessToken 재발급 받기 => restoreAccessToken
            },
          });
          return forward(operation);
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend04.codebootcamp.co.kr/graphql",
    headers: {
      authorization: `Bearer ${myAccessToken}`,
    },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as any]),
    cache: new InMemoryCache(),
  });

  return (
    <>
      {/* 모든 페이지에서 카카오맵을 다운로드 받으므로 비효율적임 */}
      {/* <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=c1573b07307af25f6bb7415ff47e92fc"
        ></script>
      </Head> */}
      <GlobalContext.Provider value={myValue}>
        <ApolloProvider client={client}>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </GlobalContext.Provider>
    </>
  );
}

export default MyApp;
