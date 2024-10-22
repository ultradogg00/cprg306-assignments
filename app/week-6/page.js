import ItemList from "./item-list";

export default function Page(){
    return(
        <main className="">
            <h1 className=" flex  justify-center   text-5xl m-9  ">Shopping List</h1>
            <ItemList/>
            
        </main>

    );
}