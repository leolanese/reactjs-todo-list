import styled from "styled-components";

const Button = styled.button`
  color: #ededed;
  position: relative;
  font-size: 1em;
  min-width: 5em;
  border-radius: 13pt;
  border-radius: 0.5em;
  background-color: ${props => (props.disabled ? "grey" : "darkgrey")};
`;

export default Button;
