import React, { useState } from "react";
import cities from "../cities.json"; 

import styles from "./Input.module.css";

const Input = () => {
  const [inputValue, setInputValue] = useState(""); 
  const [suggestions, setSuggestions] = useState([]); 


  const getMatchingCities = (query) => {
    if (!query) return []; 

   
    const lowerCaseQuery = query.toLowerCase();

   
    const matchedCities = cities.filter((city) =>
      city.toLowerCase().includes(lowerCaseQuery)
    );

    return matchedCities;
  };

 
  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    const newSuggestions = getMatchingCities(value);
    setSuggestions(newSuggestions); 
  };

  return (
    <div className={styles.container}>
     
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search for a city..."
        className={styles.inputField}
      />
      {suggestions.length > 0 && (
        <ul className={styles.suggestionsList}>
          {suggestions.map((city, index) => (
            <li key={index}>{city}</li>
          ))}
        </ul>
      )}
      {suggestions.length === 0 && inputValue && <p>No cities found</p>}
    </div>
  );
}

export default Input;
