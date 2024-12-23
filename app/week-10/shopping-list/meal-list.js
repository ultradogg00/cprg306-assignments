"use client";

import { useState, useEffect } from "react";
import Meal from "./mealIdea";

export default function MealList({ mainIngredient }) {
  let mI = mainIngredient;
  const [finalList, setFinalLsit] = useState([]);
  const [allMeals, setAllMeals] = useState([]);

  // final ingredient list state

  // function that calls final ingredient list setter
  const displayFinalList =(ingredients)=>{
    if (ingredients.length > 0) {
      console.log("Ingredients updated:", ingredients);
      const cleanIng = Object.keys(ingredients[0])
        .filter((key) => key.startsWith("strIngredient") && ingredients[0][key])
        .map((key) => ingredients[0][key]);

      const cleanSize = Object.keys(ingredients[0])
        .filter((key) => key.startsWith("strMeasure") && ingredients[0][key])
        .map((key) => ingredients[0][key]);

      const combo = cleanIng.map(
        (ingredient, index) => `${ingredient}, amount: ${cleanSize[index]}`
      );

      setFinalLsit(combo);

      console.log("Ingredients updated:", ingredients);
    }

  }
  
  async function getMeals(mainIngredient) {
    try {
    let cleanMainIn = mainIngredient.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
    cleanMainIn = cleanMainIn.split(',')[0];
      console.log(cleanMainIn);

      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${cleanMainIn}`
      );
      // console.dir(response);
      if (!response.ok) console.log(response.statusText);

      const data = await response.json();
      

      console.dir(data.meals);
      setAllMeals(data.meals);
    } catch (error) {
      console.log(` Error: ${error.message}`);
    }
  }
  
  useEffect(() => {
    getMeals(mI);
    // console.log(mI);
  }, [mainIngredient]);

  return (
    <div>
         <h2 className="text-2xl ml-1">Meal Ideas:</h2>
        
       {allMeals != null && <p>Here are some meal Ideas using {mI}</p>} 
       
      <ul>
        {allMeals == null ? (
          <p>Could not find any meals</p>
        ) : (
          allMeals.map((x) => (
            <li className="" key={x.idMeal}>
              <Meal name={x.strMeal} id={x.idMeal}  />
              {/* pass down final ingredient list setter */}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
