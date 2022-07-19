import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WelcomePage from "./WelcomePage";

library.add(faTrashCan);

const trashCan = <FontAwesomeIcon icon="fa-solid fa-trash-can" />;

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");

  function handleName(event) {
    const newValue = event.target.value;
    setName(newValue);
  }

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  function handleEnterforWelcome(e){
    if(e.key==="Enter"){
        return window.alert(`Press the "Jump To List" button below`)
    }
  }

  function handleEnterforHome(e){
    if(e.key==="Enter"){
        return window.alert(`Press the "Add" button on the side`)
    }
  }


  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/ToDoList"
          element={
            <div>
              <div className="form">
                <WelcomePage
                  handleChange={handleName}
                  name={name}
                  enterWelcome={handleEnterforWelcome}
                  // jumpToList={<Link to="/Home"></Link>}
                />
                <button>
                <Link to="/ToDoList/Home">Jump To List</Link></button>
              </div>
            </div>
          }
        />
        <Route
          path="/ToDoList/Home"
          element={
            <div className="container">
              <div className="heading">
                <h1>{name}'s List</h1>
              </div>
              <div className="form">
                <InputArea
                  handleChange={handleChange}
                  inputText={inputText}
                  addItem={addItem}
                  enterHome={handleEnterforHome}
                />
              </div>
              <div>
                <ul>
                  {items.map((todoItem, index) => (
                    <ToDoItem
                      key={index}
                      id={index}
                      text={todoItem}
                      onChecked={deleteItem}
                      icon={trashCan}
                    />
                  ))}
                </ul>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
