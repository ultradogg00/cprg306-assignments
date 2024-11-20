import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";







export async function addItem (userId,item){
    try {
        const newItemListReference = collection(db,"users",userId, "items");
        const newItemPromise = await addDoc(newItemListReference, item);
        console.log(newItemPromise.id);
            
    } catch (error) {
        console.log(error);
    }


}

export async function getItems(userId,setter) {
    try {
        const newItemListReference = collection(db,"users",userId, "items");
        const allItemsQuery = query(newItemListReference);
        const querySnapShotArray = await getDocs( allItemsQuery);
        let itemArray =[];
        querySnapShotArray.forEach( (docSnap)=> {
            let item = {
                id: docSnap.id,
                ...docSnap.data()
            }
            itemArray.push(item);
            console.dir(item);
        } )
        console.dir(itemArray);
        setter(itemArray);
    } catch (error) {
        console.log(error);
    }
    
}