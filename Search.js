import { Box } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";

import "./App.css";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    // Handle search here
  };

  /* const [result, setResult] = useState([]);
  const [first, setfirst] = useState("");

  const fetchBooks = async (url) => {
    const res = await fetch(url);
    console.log(res);
    const json = await res.json();
    console.log(json);
    setResult(json.hits.hits);
  };
  useEffect(() => {
    fetchBooks("/details/_search");
  }, []);
  console.log("our result is", result);*/

  /*dropdown*/
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
    <>
      <Box>
        <div className="topnav">
          <img
            src="https://www.icd10data.com/images/ICD10Data.com266x45.png"
            className="logo"
          />
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
      </Box>
    </>
  );
};

export default Search;
