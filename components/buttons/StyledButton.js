import styled from "styled-components";

const StyledButton = styled.div.withConfig({
  shouldForwardProp: (props) => "buttonColor" !== props,
})`
  color: ${(props) => `${props.buttonColor}`};
  background-color: #fff;
  border: ${(props) => `1px solid ${props.buttonColor}`};
  border-radius: 10px;
  padding: 0.75rem 1rem;
  line-height: 1;
  text-decoration: none;
  z-index: 100;
  font-family: var(--font-mono);
  outline: none;
  max-width: fit-content;
  box-shadow: ${(props) => `2px 2px 0 0 ${props.buttonColor}`};
  &:hover {
    transform: translate(1px, 1px);
    box-shadow: none;
  }
`;

export default StyledButton;
