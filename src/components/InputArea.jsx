import React from "react";

function InputArea(props) {
  return (
    <div>
      <input onKeyDown={props.enterHome} onChange={props.handleChange} type="text" value={props.inputText} />
      <button onClick={props.addItem}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
