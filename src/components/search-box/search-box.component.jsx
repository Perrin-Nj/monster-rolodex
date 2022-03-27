
//why some of our components have .jsx and others have .js? bcz create-react app hides away some configs. It translate our jsx to prevs or future versions of JS a bit like the ISA and the IJVM
import React from "react";

import './search-box.style.css';

export const SearchBox = ({ placeholder, handleChange }) => (
    <input
        className="search"
        type="search"
        placeholder={placeholder}
        name="SearchMonster"
        id="search"
        onChange={handleChange}
    />
)