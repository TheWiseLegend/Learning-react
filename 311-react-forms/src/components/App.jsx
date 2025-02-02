import React, { useState } from "react";

function App() {
    const [name, setName] = useState("");
    const [headingText, setHeading] = useState("");

    function handleChange(event) {
        setName(event.target.value); // event.target.value is the value of the input field
    }
    function handleClick(event) {
        setHeading(name);

        event.preventDefault(); // This will prevent the default behavior of the form, which is to reload the page
    }

    return (
        <div className="container">
            <h1>Hello {headingText}</h1>
            <form onSubmit={handleClick}>
                <input
                    onChange={handleChange}
                    type="text"
                    placeholder="What's your name?"
                    value={name}
                />
                <button type="submit" onClick={handleClick}>
                    Submit
                </button>
            </form>
        </div>
    );
}
export default App;
