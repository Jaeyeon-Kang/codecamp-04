import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { Global } from "@emotion/react";
import "antd/dist/antd.css";
import { AppProps } from "next/dist/shared/lib/router/router";
import { globalStyles } from "../src/commons/styles/globalStyles";
import Layout from "../src/components/commons/layout/index";
import { createUploadLink } from "apollo-upload-client";
import { createContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";

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

export const GlobalContext = createContext(null);

function MyApp({ Component, pageProps }: AppProps) {
  const [myAccesToken, setMyAccesToken] = useState("");
  const [myUserInfo, setMyUserInfo] = useState({});
  const myValue = {
    accessToken: myAccesToken,
    setMyAccesToken: setMyAccesToken,
    // userInfo: myUserInfo,
    // setMyUserInfo: setMyUserInfo,
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) setMyAccesToken(accessToken);
  }, []);

  const uploadLink = createUploadLink({
    uri: "http://backend04.codebootcamp.co.kr/graphql",
    headers: {
      authorization: `Bearer ${myAccesToken}`,
    },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as any]),

    cache: new InMemoryCache(),
  });

  return (
    <GlobalContext.Provider value={myValue}>
      <ApolloProvider client={client}>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
