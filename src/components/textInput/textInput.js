import styled from "styled-components";

const TextInput = styled.input`
  border-radius: 5px;
  width: 100%;
  padding: 5px 10px;
  display: inline-block;
  font-size: 24px;
  transition: box-shadow 0.3s;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 6px 2px rgba(79, 156, 239, 0.3);
    border: 1px solid #808080;
  }
`;

export default TextInput;
