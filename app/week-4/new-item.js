"use client"
import { useState } from "react";


export default function NewItem(){
    const [quantity,setQuantity] = useState(1)
    let isDialble = false;
    let decBtn = "mr-9 disabled:bg-gray-500 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900";
    if (quantity==1){
       
        isDialble = true;
        decBtn ="mr-9 disabled:bg-gray-700 text-white bg-red-700  focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600  dark:focus:ring-red-900"
    }
    const increment =()=>{
        
        setQuantity(quantity+1);
        
    }
    const decrement =()=>{
        if(quantity>1){
            setQuantity(quantity-1);
        }
        else{
           
            isDialble=true;
            
        }
    }
    return(
        <div className=" flex justify-center  p-4 mt-12 ">
            
            <div className="rounded-md bg-blue-500 bg-opacity-50 p-12">
                <p className="text-xl pl-1">Quantity: {quantity}</p>
                <div className="mt-8">
                <button disabled={isDialble} className={decBtn} onClick={decrement}>Remove </button>
                <button onClick={increment}  className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add </button>

                </div>
                

            </div>
            
        </div>
    );
}