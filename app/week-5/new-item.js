"use client";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");
  const [quantity, setQuantity] = useState(1);
  let isDialble = false;

  const handleSubmit = (event) => {
    event.preventDefault();
    let item = {
      iName: name,
      iCategory: category,
      iQuantity: quantity,
    };
    console.dir(item);
    alert(`
            Name:${item.iName}
            Category :${item.iCategory}
            Quantity:${item.iQuantity}
            
            `);
    setName("");
    setCategory("Produce");
    setQuantity(1);
  };
  let decBtn =
    "mr-9 disabled:bg-gray-500 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900";
  if (quantity == 1) {
    isDialble = true;
    decBtn =
      "mr-9 disabled:bg-gray-700 text-white bg-red-700  focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600  dark:focus:ring-red-900";
  }
  const increment = () => {
    setQuantity(quantity + 1);
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      isDialble = true;
    }
  };
  const handleItemName = (event) => {
    setName(event.target.value);
  };
  const handleCategory = (event) => {
    setCategory(event.target.value);
  };
  return (
    <div className=" flex justify-center  p-3 mt-12 ">
      <div className="rounded-md bg-blue-500 bg-opacity-50 p-12">
        <form onSubmit={handleSubmit}>
          <input
          value={name}
            required
            className="py-2 px-2 mr-10 mb-4 rounded text-black "
            onChange={handleItemName}
            placeholder="item Name"
          ></input>

          <select
            value={category}
            className="py-2 px-2 rounded-sm text-black"
            onChange={handleCategory}
            // onFocus={(event) => event.target.size = 2}
            // onBlur={(e) => e.target.size = 1}
          >
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Meat">Meat</option>
            <option value="Frozen Foods">Frozen Foods</option>
            <option value="Canned Goods">Canned Goods</option>
            <option value="Beverages">Beverages</option>

          </select>

          <div className="mt-2 p-2 bg-white text-black bg-opacity-85 rounded w-56  ">
            <p className="text-xl pl-1">Quantity: {quantity}</p>
            <button
              type="button"
              disabled={isDialble}
              className={decBtn}
              onClick={decrement}
            >
              Remove{" "}
            </button>
            <button
              type="button"
              onClick={increment}
              className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Add{" "}
            </button>
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="mr-3  text-black rounded bg-green-300 px-3 py-2 hover:bg-green-600"
            >
              Add item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
