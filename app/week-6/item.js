

export default function Item({name,quantity,category}){
    return(

        


        <div className="p-6  border-2 border-indigo-600 rounded-lg mt-9 hover:bg-indigo-300  ">
            <p className="font-extrabold text-lg">{name}</p>
            <p>Buy {quantity}</p>
            <p> in {category}</p>

        </div>
        
          

      

    );
}