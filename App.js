import "./App.css";
import React, { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    // Handle search here
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: "option1", label: "2023" },
    { value: "option2", label: "2022" },
    { value: "option3", label: "2021" },
    { value: "option3", label: "2020" },
    { value: "option3", label: "2019" },
    { value: "option3", label: "2018" },
    { value: "option3", label: "2017" },
    { value: "option3", label: "2016" },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="App">
      <div class="topnav">
        <form onSubmit={handleSearch}>
          <input
            className="searchbar"
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <button className="search-icon" type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
        <div className="dropdown">
          <button
            className="dropdown__toggle"
            onMouseEnter={() => setIsOpen(true)}
            onClick={toggleDropdown}
          >
            {selectedOption ? selectedOption.label : "Year"}
          </button>
          {isOpen && (
            <ul className="dropdown__menu">
              {options.map((option) => (
                <li
                  key={option.value}
                  className="dropdown__menu-item"
                  onClick={() => handleOptionClick(option)}
                >
                  <span>{option.label}</span>
                  <span className="dropdown__menu-item-description">
                    {option.description}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
