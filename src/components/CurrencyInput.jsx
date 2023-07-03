import React from "react";
import "./CurrencyInput.css";

const CurrencyInput = ({ options, currency, amount, handleAmountChange, handleCurrencyChange }) => {
  return (
    <div className="converter-container container">
      <h4 className="mb-4">I have / I want</h4>
      <select name="currency" id="" value={currency} onChange={handleCurrencyChange}>
        {Object.keys(options).map((key, index) => {
          return (
            <option key={index} value={key}>
              {options[key]}
            </option>
          );
        })}
      </select>
      <input type="number" min="0" max="10000" step="1" value={amount} onChange={handleAmountChange}/>
    </div>
  );
};

export default CurrencyInput;
