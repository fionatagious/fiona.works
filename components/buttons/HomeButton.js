import React from "react";
import styled from "styled-components";
import Link from "next/link";

const StyledButton = styled.button`
  color: #d79eff;
  background-color: transparent;
  border: 1px solid #d79eff;
  border-radius: 8%;
  padding: 0.75rem 1rem;
  line-height: 1;
  text-decoration: none;
  margin-left: 15px;
  z-index: 100;

  &:hover {
    outline: none;
    box-shadow: 3px 3px 0 0 #d79eff;
    transform: translate(-4px, -4px);
  }
`;

export default function HomeButton() {
  return (
    <Link href="/" passHref>
      <StyledButton>Home</StyledButton>
    </Link>
  );
}
