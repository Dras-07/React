import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

function solve(emojipedia)
{
  return (
    <Card 
    key={emojipedia.id}
    emoji={emojipedia.emoji}
    name={emojipedia.name}
    meaning={emojipedia.meaning}
     />
  )
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
    {emojipedia.map(solve)}
    </div>
  );
}

export default App;
