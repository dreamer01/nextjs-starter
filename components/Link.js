import React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledLink = ({ as, children, className, href }) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
);

export default styled(StyledLink)`
  color: ${(p) => p.theme.primary};
  text-decoration: none;
  transition: all 0.2s ease-in-out;
`;
