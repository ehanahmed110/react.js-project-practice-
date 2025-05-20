import React from "react";
import { AutoComplete } from "primereact/autocomplete";
import { useState } from "react";

export function Dropdown() {
    
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);
  const search = (e) => {
    const allItems = ["Apple", "Banana", "Cherry", "Date", "Grapes"];
    const filtered = allItems.filter((item) =>
      item.toLowerCase().includes(e.query.toLowerCase())
    );
    setItems(filtered);
  };
  return (
    <>
      <div>
        <h1>dropdown</h1>
        <AutoComplete
          value={value}
          suggestions={items}
          completeMethod={search}
          onChange={(e) => setValue(e.value)}
          dropdown
          placeholder="Select a fruit"
        />
      </div>
    </>
  );
}
