"use client";
import { useState } from "react";
import Item from "./item";
import itemsJson from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  const [allItems, setItems] = useState(
    itemsJson.sort((a, b) => a.name.localeCompare(b.name))
  );
  

  const sortName = () => {
    // setSortBy("name")
    // allItems.sort((a ,b) => b.quantity - a.quantity);
    console.log("clicked");
    setSortBy("name");
    setItems([...allItems].sort((a, b) => a.name.localeCompare(b.name)));
  };
  const sortCategory = () => {
    // setSortBy("name")
    // allItems.sort((a ,b) => b.quantity - a.quantity);
    console.log("clicked cat");
    setSortBy("category");
    setItems(
      [...allItems].sort((a, b) => a.category.localeCompare(b.category))
    );
  };

  return (
    <div className=" flex  justify-center border-solid   border-width: 9px ">
      <ul>
        {sortBy == "name" ? <button className={ "mr-5 border p-4 rounded-md bg-slate-700" } onClick={sortName}>Sort by name</button> : <button className={ "mr-5 border p-4 rounded-md hover:bg-slate-500" } onClick={sortName}>Sort by name</button>  }
       
        {sortBy == "category" ? <button className={ "mr-5 border p-4 rounded-md bg-slate-700" } onClick={sortCategory}>Sort by Category</button> : <button className={ "mr-5 border p-4 rounded-md hover:bg-slate-500" } onClick={sortCategory}>Sort by Category</button>  }
        

        {allItems.map((item) => (
          <li key={item.id}>
            <Item
              name={item.name}
              category={item.category}
              quantity={item.quantity}
            />
        
          </li>
          ))}
      </ul>
    </div>
  );
}
