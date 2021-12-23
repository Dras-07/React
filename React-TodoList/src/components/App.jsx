import React from "react";
function App() {
  const [inputText, setInputText] = React.useState("");
  const [item, setItem] = React.useState([]);

  function handleChange(event) {
    setInputText(event.target.value);
  }
  function HandleClick(event) {
    setItem((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }
  
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={handleChange}
          placeholder="add item"
          value={inputText}
          type="text"
        />
        <button onClick={HandleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        {item.map((todoitems) => {
          return <li>{todoitems}</li>;
        })}
      </div>
    </div>
  );
}

export default App;
