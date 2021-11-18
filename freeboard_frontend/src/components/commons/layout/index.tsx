import { ReactChild } from "react";
import styled from "@emotion/styled";
import Header from "./header/Header.container";
import Banner from "./banner/Banner.container";
import Navigation from "./navigation/Navigation.container";
import Footer from "./footer/Footer.container";
import { useRouter } from "next/router";

const Wrapper = styled.div``;
const Body = styled.div``;
const BodyWrapper = styled.div`
  display: flex;
`;
// const Sidebar = styled.div`
//   width: 200px;
//   /* height: 700px; */
//   background-color: turquoise;
// `;

const HIDDEN_HEADERS = ["/12_05_modal_address_state_prev"];

interface ILayoutProps {
  children: ReactChild;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

  return (
    <Wrapper>
      {!isHiddenHeader && <Header />}

      <Banner />
      <Navigation />
      <BodyWrapper>
        {/* <Sidebar>sidebar!!</Sidebar> */}
        <Body>{props.children}</Body>
      </BodyWrapper>
      <Footer />
    </Wrapper>
  );
}
