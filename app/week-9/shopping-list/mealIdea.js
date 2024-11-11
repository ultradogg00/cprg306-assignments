import { useEffect, useState } from "react";

export default function Meal({ name, id,  }) {
  const [ingredients, setIngredients] = useState([]);
  const [finalList, setFinalLsit] = useState([]);
  const [clicked, setClicked ] = useState(false);

  async function getIndgernet(id) {
    try {
      //   console.log(cleanMainIn);

      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      // console.dir(response);
      if (!response.ok) console.log(response.statusText);

      const data = await response.json();

      setIngredients([...data.meals]);
      console.dir(ingredients);
    } catch (error) {
      console.log(` Error: ${error.message}`);
    }
  }
  const hadleMealClick = () => {
    
    getIndgernet(id);
  };
  useEffect(() => {
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
  }, [ingredients]);

  return (
    <div
      className="p-1  ml-2 border-2 border-indigo-600 rounded-lg mt-1 hover:bg-indigo-300 "
      onClick={hadleMealClick}
    >
      <p>{name}</p>
      {finalList.length != 0 && <h4>Ingredients:</h4>}
      {/* {clicked &&
        finalList.map((x, index) => (
          <div>
            <p className=" text-slate-400 text-sm " key={index}>
              {x}
            </p>
          </div>
        ))} */}

      {finalList.map((x, index) => (
        <div>
          <p className=" text-slate-400 text-sm " key={index}>
            {x}
          </p>
        </div>
      ))}
    </div>
  );
}
