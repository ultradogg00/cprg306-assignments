"use client";
import { useEffect, useState } from "react";
import Item from "./item";



export default function ItemList({list}) {
  const [itemList, setItems] = useState([...list].sort((a, b) => a.name.localeCompare(b.name)));
  const [sortBy, setSortBy] = useState("name");


  const sortName = () => {
    // setSortBy("name")
    // allItems.sort((a ,b) => b.quantity - a.quantity);
    // console.log("clicked");
    setSortBy("name");
    setItems([...itemList].sort((a, b) => a.name.localeCompare(b.name)));
    console.dir(itemList)
  };
  const sortCategory = () => {
    // setSortBy("name")
    // allItems.sort((a ,b) => b.quantity - a.quantity);
    // console.log("clicked cat");
    setSortBy("category");
     setItems([...itemList].sort((a, b) => a.category.localeCompare(b.category)));
     console.dir(itemList)
  };

  useEffect(() => {
    const sortedList = [...list].sort((a, b) =>
      sortBy === "name" ? a.name.localeCompare(b.name) : a.category.localeCompare(b.category)
    );
    setItems(sortedList);
  }, [list, sortBy]);
  
  
  

  return (
    <div className=" flex  justify-center border-solid   border-width: 9px ">
      
      <ul>
        {sortBy == "name" ? <button className={ "mr-5 border p-4 rounded-md bg-slate-700" } onClick={sortName}>Sort by name</button> : <button className={ "mr-5 border p-4 rounded-md hover:bg-slate-500" } onClick={sortName}>Sort by name</button>  }
       
        {sortBy == "category" ? <button className={ "mr-5 border p-4 rounded-md bg-slate-700" } onClick={sortCategory}>Sort by Category</button> : <button className={ "mr-5 border p-4 rounded-md hover:bg-slate-500" } onClick={sortCategory}>Sort by Category</button>  }
        {itemList.map((item) => (
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
