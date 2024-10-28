"use client";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import itemsJson from "./items.json";
import { useEffect, useState } from "react";

export default function Page() {
  const listData = itemsJson.map((item) => ({ ...item }));
  const [list, setList] = useState(listData);
  const addItem = (newItem) => {
    // console.dir(newItem)
    // const updatedList = [...list, newItem];
    setList([...list, newItem]);
    console.dir(list)
    console.dir(newItem)
    // setList(list.push(newItem))
  };

  return (
    <main className="">
      <h1 className=" flex  justify-center   text-5xl m-9  ">Shopping List</h1>
      <div className=" flex items-start  justify-center  ">
        <NewItem additemFunc={addItem} />
        <ItemList list={list} />
      </div>
    </main>
  );
}
