import React from "react";
import "./App.css";
import Card from "./Components/Card";

function App() {
  let myObj = {
    username: "Shubham",
    age: 21,
  };

  let newArr = [1, 2, 3];

  return (
    <>
      <h1
        className="bg-green-400 text-black p-4 
        rounded-xl m-3"
      >
        Work on Tailwind
      </h1>
      <h1>{myObj.username}</h1>
      <Card username="chai aur code" btnText="visit me"></Card>
      <Card username={myObj.username} age={myObj.age} />
    </>
  );
}

export default App;
