"use client";

import { useState, useEffect } from "react";
import Meal from "./mealIdea";

export default function MealList({ mainIngredient }) {
  let mI = mainIngredient;
  const [allMeals, setAllMeals] = useState([]);

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
      // let shuffled  = [...data.objectIDs];
      // shuffled = shuffled.sort( () => 0.5- Math.random() )
      // shuffled = shuffled.slice(0,10)
      // setAllMeals(shuffled);

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
              <Meal name={x.strMeal} />
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
