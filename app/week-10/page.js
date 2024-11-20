"use client"
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context"

export default function SignInPage(){

    const {user, gitHubSignIn, firebaseSignOut} =useUserAuth();

    async function handleSignIn() {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
            
        }
        
    }

    async function handleSignOut() {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log(error);
            
        }
        
    }
    console.dir(user)
    return (
        <main className="m-5 flex-row items-center  justify-center  ">
            <header>
                <h1 className=" text-3xl text-center">FireBase Week-9</h1>
            </header>
            {user  ? (<div className="   max-w-sm rounded overflow-hidden shadow-lg p-6  justify-center bg-gray-500">
                    <p>Welcome</p>
                    <p>{user.displayName} click on the link  to view your shopping list</p>
                    <div className=" ali">
                        <img src={user.photoURL} className="w-20 h-20 rounded-2xl"/>
                    </div>
                    <div>
                        <Link href="week-10/shopping-list" className=" text-blue-600 underline">Shopping List</Link>
                    </div>

                    <button className="text-lg text-white bg-blue-600 px-2 py-1 mt-4" onClick={handleSignOut}>Sign out</button>
            </div>):(
                <div>
                    <button className="text-lg text-white bg-blue-600 px-2 py-1 mt-4" onClick={handleSignIn}>Sign in</button>
                </div>
            )}
        </main>
    )
}