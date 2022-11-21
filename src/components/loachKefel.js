import React from 'react';
import '../style.css';
export default function Mathequation() {
  
  
  
  
  let equation= [];
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      equation.push(
        <span onClick={() => alert(`התוצאה שנבחרה מגיעה מהתרגיל כפל הבא  -  ${i} * ${j}`)}>{i * j}</span>
        
      );
    }
  }

  return (
    <div class="container">
      <div class="w3-container w3-teal">
      </div>
      <div class="w3-container">
        <div>{equation}</div>
      </div>
    </div>
  );
}