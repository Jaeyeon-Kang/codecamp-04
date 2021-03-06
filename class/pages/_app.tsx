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
import * as Sentry from "@sentry/nextjs";

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

Sentry.init({
  dsn: "https://4e8712d4bbfe496081ff1865da01facf@o1091880.ingest.sentry.io/6109512",
});

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

    if (localStorage.getItem("refreshToken")) getAccessToken(setMyAccessToken);
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 1. ?????? ?????? ????????? ??????
        if (err.extensions?.code === "UNAUTHENTICATED") {
          // 3. ????????? ???????????? ?????? ?????? ???????????????
          operation.setContext({
            headers: {
              ...operation.getContext().headers,
              authorization: `Bearer ${getAccessToken(setMyAccessToken)}`, // 2. refreshToken?????? accessToken ????????? ?????? => restoreAccessToken
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
      {/* ?????? ??????????????? ??????????????? ???????????? ???????????? ??????????????? */}
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
