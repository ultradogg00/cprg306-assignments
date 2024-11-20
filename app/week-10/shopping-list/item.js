

export default function Item({name,quantity,category,displayMeals}){
    return(


        


        <div className="p-2 pr-0  border-2 border-indigo-600 rounded-lg mt-9 hover:bg-indigo-300 " onClick={displayMeals} meal-name={name} >
            <p className="font-extrabold text-lg">{name}</p>
            <p>Buy {quantity}</p>
            <p> in {category}</p>

        </div>
        
          

      

    );
}