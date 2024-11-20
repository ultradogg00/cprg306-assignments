"use client";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";

import { useEffect, useState } from "react";
import {getItems,addItem} from "../_services/shopping-list-service.js"
import Link from "next/link.js";
import { useUserAuth } from "../_utils/auth-context.js";
import { db } from "../_utils/firebase.js";
import { collection } from "firebase/firestore";

export default function Page() {
  const { user } = useUserAuth();
  

  // const listData = .map((item) => ({ ...item }));
  const [list, setList] = useState([]);
  const [mainIngredient, setMainIngredient] = useState("");
  const addNewItem = async (newItem) => {

    // setList([...list, newItem]);
    // console.dir(list);
    // console.dir(newItem);
    console.log(user.uid);
    await addItem(user.uid, newItem);
    loadItems();
   
  };
   async function loadItems() {
    
    console.dir(user.uid)
    getItems(user.uid,setList);
    console.log(list);
   
   
    
  }
  useEffect(()=>{
    if(user){
      loadItems();
     
    }
  },[user])

  return (
    <main className="">
      {user ? (
        <div>
          <h1 className=" flex  justify-center   text-5xl m-9  ">
            Shopping List
          </h1>
          <div className=" flex items-start  justify-center  ">
            <NewItem additemFunc={addNewItem} />
            <ItemList list={list} />
          </div>
        </div>
      ) : (
        <div>
          <p>You need to sign in to view this page </p>
          <Link href="/week-9"  className=" text-blue-600 underline">
            Sign in page
          </Link>
        </div>
      )}
    </main>
  );
}
