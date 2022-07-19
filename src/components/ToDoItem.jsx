import React from "react";

function ToDoItem(props) {
  return (
    <div>
      <div style={{ width: "220px", float: "left" }}>
        <li>{props.text} </li>
      </div>
      <div
        onClick={() => {
          props.onChecked(props.id);
        }}
        style={{ marginLeft: "220px" }}
      >
        <p>{props.icon}</p>
      </div>
    </div>
  );
}

export default ToDoItem;
