import React from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const appear = keyframes`
    0% {
      opacity: 0;
      transform: translateY(-5px);
    }
    50% {
      opacity: 0.2;
      transform: translateY(0);
    }
    100% {
      opacity: 1;
    }
`;

const Item = styled.li`
  background: #fffd80;
  border-bottom: 1px #d1d1d1 solid;
  &:first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: ${appear} 1s ease;
  margin-bottom: 5px;
`;
const Text = styled.span`
  position: relative;
  font-family: "Caveat", cursive;
  font-size: 24px;
`;

const DeleteBtn = styled.button`
  font-size: 1.5em;
  font-weight: 700;
  color: darkred;
  padding: 5px;
  background-color: transparent;
  border: 0;
  appearance: none;
  outline: unset;
  transition: transform 1.5s;
`;

const RemovableListItem = props => {
  const { id, text, removeItem } = props;

  return (
    <Item>
      <Text>{text}</Text>
      {removeItem && id && (
        <DeleteBtn onClick={() => removeItem(id)}>
          <FontAwesomeIcon icon={faTrashAlt} color="darkred" />
        </DeleteBtn>
      )}
    </Item>
  );
};

RemovableListItem.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  removeItem: PropTypes.func
};

export default RemovableListItem;
