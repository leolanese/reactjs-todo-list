import React from "react";
import RemovableListItem from "../removableListItem";
import PropTypes from "prop-types";

const ListItem = props => {
  const items = props.items;
  const removeItem = props.removeItem;

  return (
    <ul style={{ paddingLeft: 0 }}>
      {items.map(item => (
        <RemovableListItem
          key={item.key}
          text={item.text}
          id={item.key}
          removeItem={removeItem}
        />
      ))}
    </ul>
  );
};

ListItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ),
  removeItem: PropTypes.func
};

export default ListItem;
