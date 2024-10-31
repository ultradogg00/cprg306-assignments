"use client";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import itemsJson from "./items.json";
import { useEffect, useState } from "react";
import MealList from "./meal-list.js";

export default function Page() {
  const listData = itemsJson.map((item) => ({ ...item }));
  const [list, setList] = useState(listData);
  const [mainIngredient,setMainIngredient] = useState('');
  const addItem = (newItem) => {
    // console.dir(newItem)
    // const updatedList = [...list, newItem];
    setList([...list, newItem]);
    console.dir(list)
    console.dir(newItem)
    // setList(list.push(newItem))
  };
  // const displayMeals =(event)=>{

  //   // setMainIngredient(item.name);
  //   console.dir(event.target.getAttribute("meal-name"));

  // }


  return (
    <main className="">
      <h1 className=" flex  justify-center   text-5xl m-9  ">Shopping List</h1>
      <div className=" flex items-start  justify-center  ">
        <NewItem additemFunc={addItem}  />
        <ItemList list={list}  />
      
      </div>
    </main>
  );
}
