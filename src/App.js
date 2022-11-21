import React from "react";
import "./style.css";
import Parties from './components/parties.js'
import Mathequation from './components/loachKefel.js'

export default function App() {
  return (
    <div>
      <h1>Choose The Party Which You Voted For</h1>
      <Parties></Parties>
      <h1>Multiplication Table</h1>
      <Mathequation></Mathequation>
    </div>
  );
}
