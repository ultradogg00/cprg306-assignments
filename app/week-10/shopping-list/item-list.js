"use client";
import { useEffect, useState } from "react";
import Item from "./item";
import MealList from "./meal-list";



export default function ItemList({list}) {

    
  
  const [itemList, setItems] = useState(()=> { return list.length>0 ?
    [...list].sort((a, b) => a.name.localeCompare(b.name)) : [];
  }


);

  const [sortBy, setSortBy] = useState("name");
  const [mainIngredient,setMainIngredient] = useState('');



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
    if (list.length>0) {
      const sortedList = [...list].sort((a, b) =>
        sortBy === "name" ? a.name.localeCompare(b.name) : a.category.localeCompare(b.category)
      );
      setItems(sortedList);
    } else {
      const sortedList = [];
      setItems(sortedList);
    }
    
    
  }, [list, sortBy]);
  const displayMeals =(event)=>{

    setMainIngredient(event.currentTarget.getAttribute("meal-name"));
    console.dir(mainIngredient);

  }
  
  
  

  return (
    <div className=" flex  justify-center border-solid   border-width: 9px ">
      
      <ul>
        {sortBy == "name" ? <button className={ "mr-5 border p-4 rounded-md bg-slate-700" } onClick={sortName}>Sort by name</button> : <button className={ "mr-5 border p-4 rounded-md hover:bg-slate-500" } onClick={sortName}>Sort by name</button>  }
       
        {sortBy == "category" ? <button className={ "mr-5 border p-4 rounded-md bg-slate-700" } onClick={sortCategory}>Sort by Category</button> : <button className={ "mr-5 border p-4 rounded-md hover:bg-slate-500" } onClick={sortCategory}>Sort by Category</button>  }
        {itemList.map((item) => (
          <li key={item.id}  >
          
            <Item
              name={item.name}
              category={item.category}
              quantity={item.quantity}
              displayMeals={displayMeals}
            />
        
          </li>
          ))}
      </ul>
      {mainIngredient == '' ? <p>Select an item </p>: 
      <MealList mainIngredient={mainIngredient}/>}
    
    </div>
  );
}
