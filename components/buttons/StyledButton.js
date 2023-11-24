import styled from "styled-components";

const StyledButton = styled.button.withConfig({
  shouldForwardProp: (props) => "buttonColor" !== props,
})`
  color: ${(props) => `${props.buttonColor}`};
  background-color: transparent;
  border: ${(props) => `1px solid ${props.buttonColor}`};
  border-radius: 8%;
  padding: 0.75rem 1rem;
  line-height: 1;
  text-decoration: none;
  z-index: 100;
  font-family: var(--font-mono);
  &:hover {
    outline: none;
    box-shadow: ${(props) => `3px 3px 0 0 ${props.buttonColor}`};
    transform: translate(-4px, -4px);
  }
`;

export default StyledButton;
