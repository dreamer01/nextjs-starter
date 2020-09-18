import React from "react";
import styled from "styled-components";

import Link from "./Link";

function Footer() {
  return (
    <Wrapper>
      <hr />
      <center>2020 &copy; Pushpendra Singh.</center>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.footer`
  width: 768px;
  margin-top: 40px;
  padding-bottom: 40px;
  p,
  a {
    font-size: 14px;
  }
  @media ${(p) => p.theme.media.tablet} {
    width: 100%;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Credits = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  @media ${(p) => p.theme.media.tablet} {
    flex-direction: column-reverse;
    justify-content: center;
    text-align: center;
  }
`;

const Row = styled(Flex)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const FooterList = styled.div``;

const FooterLink = styled(Link)`
  color: ${(p) => p.theme.bgContrast};
`;

const Social = styled.a`
  /* color: ${(p) => p.theme.textNormal};
  border-bottom: 2px dotted ${(p) => p.theme.primary};
  margin-left: 25px;
  & :hover {
    color: ${(p) => p.theme.primary};
  } */
`;

const SocialIcon = styled.img`
  width: 20px;
  margin-right: 20px;
  height: auto;
  svg {
    fill-opacity: 0.5;
  }
`;

const Declaration = styled.p`
  @media ${(p) => p.theme.media.mobile} {
    font-size: 10px;
  }
`;
