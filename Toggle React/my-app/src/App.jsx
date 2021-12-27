import React from "react";

function App() {

  const [heading,setHeading]=React.useState('Heading1');

function handleClick()
{
  var x=heading;
  var ans=(x==="Heading1"?"Heading2":"Heading1");
  setHeading(ans);
}
    return (
      <div>
        <h1>{heading}</h1>
        <button onClick={handleClick}>Change Heading</button>
      </div>
    );
  }

export default App;