import React from "react";

const TextInput = ({ value, onChange }) => (
  <input
    type="text"
    value={value}
    id="search-input"
    onChange={onChange}
    placeholder="Nunca dejes de buscar"
    className="flex-1 h-10 ml-8 p-4 rounded-sm rounded-r-none"
  />
);

export default TextInput;
