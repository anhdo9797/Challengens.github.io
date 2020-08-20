import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import "./search.scss";

export default ({ placeholder, onSearch, search, onChange }) => {
  const [focus, setFocus] = useState(false);
  return (
    <div
      className="searchCustom"
      style={{ border: focus ? " 1px solid #a80e0e" : " 1px solid #bfd8f8" }}
    >
      <input
        placeholder={placeholder}
        value={search}
        onChange={onChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      <button onClick={onSearch}>
        <SearchOutlined
          style={{ fontSize: 16, color: "#a80e0e", fontWeight: "bold" }}
        />
      </button>
    </div>
  );
};
