import React from "react";
import styled from "styled-components";
import Link from "next/link";

const StyledButton = styled.button`
  color: #fecaca;
  background-color: transparent;
  border: 1px solid #fecaca;
  border-radius: 8%;
  padding: 0.75rem 1rem;
  line-height: 1;
  text-decoration: none;
  margin-left: 15px;
  z-index: 100;

  &:hover {
    outline: none;
    box-shadow: 3px 3px 0 0 #fecaca;
    transform: translate(-4px, -4px);
  }
`;

export default function ResumeButton() {
  return (
    <Link href="/resume">
      <StyledButton>Resume</StyledButton>
    </Link>
  );
}
