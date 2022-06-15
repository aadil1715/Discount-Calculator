import React, { useState } from 'react';
import './App.css'

function MainScreen() {
const [amount,setAmount] = useState(0.0);
const [finalPriceWithTax,setFinalPriceWithTax] = useState(0.0);
const [finalPriceWithoutTax,setFinalPriceWithoutTax] = useState(0.0);
let historyTax = [];
const [historyWTax,setHWT] = useState([]);
const [opt,setOpt] = useState("20% off with Tax");

  function handleChange(event){
      setAmount(event.target.value)
      if(opt==="20% off with Tax"){
      calculateDiscountTax(event.target.value);
      }
      else if(opt==="20% off without Tax"){
      calculateDiscountOnly(event.target.value);
      }
  }  

  function handleOption(event){
      setOpt(event.target.value);
  }

  function addToHistory(amount){
    historyTax.push(amount)
    console.log(historyTax);
  }

  function calculateDiscountTax(amount){
    let taxablePrice = amount*1.15;
    let finalPrice = taxablePrice*0.80;
    setFinalPriceWithTax(finalPrice);
  }
  
  function calculateDiscountOnly(amount){
    let finalPriceWithoutTax = amount*0.80;
    setFinalPriceWithoutTax(finalPriceWithoutTax);
  }
  return (
    <>
    <div class="main">
    <div class="amount">
    <label>Enter the price</label>
    <input type="number" onChange={handleChange}></input>
    </div>
    <div class="dropdown">
      <label>
        What kind of product?
        <br></br>
        <select value={opt} onChange={handleOption}>
          <option value="20% off with Tax">20% off with Tax</option>
          <option value="20% off without Tax">20% off without Tax</option>
        </select>
      </label>
    </div>
    <div id="discountwithtax" hidden={opt==="20% off without Tax"}>
        <p>Final Discounted Price With Tax</p>
        <p id="n1">{finalPriceWithTax}</p>
    </div>
    <div>
    </div>
    <div id="discount" hidden={opt==="20% off with Tax"}>
        <p>Final Discounted Price Without Tax</p>
        {finalPriceWithoutTax}
    </div>
  
    </div>
    </>
  )
}

export default MainScreen