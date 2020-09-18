import React from "react";
import styled from "styled-components";

import logoSrc from "../assets/logo.svg";
import Link from "./Link";

function Header() {
  return (
    <Wrapper>
      <Link href="/">
        <TitleBox>
          <Logo role="img" src={logoSrc} alt="PROJECT_NAME Logo" />
          <Title>PROJECT_NAME</Title>
        </TitleBox>
      </Link>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.header`
  display: flex;
  width: 768px;
  align-items: center;
  justify-content: space-between;
  @media ${(p) => p.theme.media.tablet} {
    width: 100%;
  }
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  @media ${(p) => p.theme.media.mobile} {
    font-size: 20px;
  }
`;

const Logo = styled.img`
  width: 25px;
  margin-right: 20px;
  @media ${(p) => p.theme.media.mobile} {
    width: 15px;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Menu = styled.menu`
  position: relative;
`;

const Nav = styled.nav`
  border: none;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 15px;
  background: ${(p) => (p.active ? p.theme.light : "none")};
  &:hover {
    background: ${(p) => p.theme.light};
    color: ${(p) => p.theme.primary};
  }
`;

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 40px;
  border-radius: 5px;
  z-index: 200;
  background: ${(p) => p.theme.white};
`;

const NavItem = styled(Link)`
  border: none;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  color: ${(p) => p.theme.textNormal};
  &:hover {
    background: ${(p) => p.theme.light};
  }
`;

const LogButton = styled.a`
  border: none;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: ${(p) => p.theme.light};
  }
`;
