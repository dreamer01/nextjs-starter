import React from "react";
import styled from "styled-components";

import Footer from "./Footer";
import Header from "./Header";
import SEO from "./Seo";

const Container = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: -webkit-fill-available;
  height: 100%;
  padding-left: 20px;
  padding-right: 20px;
  overflow-y: scroll;
`;

const Content = styled.div`
  width: 768px;
  margin-top: 20px;
  flex: 1;
  @media ${(p) => p.theme.media.tablet} {
    margin-top: 60px;
    width: 100%;
    text-align: center;
  }
`;

function Layout({ children }) {
  return (
    <Container>
      <SEO />
      <Wrapper>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </Wrapper>
    </Container>
  );
}

export default Layout;
