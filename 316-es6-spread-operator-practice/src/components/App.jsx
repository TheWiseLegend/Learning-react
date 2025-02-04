import React, { useState } from "react";

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>

function App() {
    const [inputText, setInputText] = useState("");
    const [listItem, setListItem] = useState([]);

    function handleChange(event) {
        const newItem = event.target.value;
        setInputText(newItem);
    }

    function addItem() {
        setListItem((prevItems) => {
            return [...prevItems, inputText];
        });
        setInputText("")
    }

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div className="form">
                <input type="text" value={inputText} onChange={handleChange} />
                <button onClick={addItem}>
                    <span>Add</span>
                </button>
            </div>
            <div>
                <ul>
                    {listItem.map((item) => (
                        <li>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
