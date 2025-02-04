import React from "react";
import Heading from "./Heading";
import Entry from "./Entry";
import emojipedia from "../emojipedia"; 

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      descripton={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <Heading />
      <dl className="dictionary">
        {emojipedia.map(createEntry)};
      </dl>
    </div>
  );
}

export default App;
