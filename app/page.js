
import Link from "next/link";

export default function Home() {
  return (
    <main className=" flex  justify-center  ">
      <div className = "p-16">
        <h1 className="  text-4xl"> CPRG 306: Web Development 2 - Assignments</h1>
        <ol>
          <li className="pt-6"><Link className=" underline text-red-500 hover:text-red-300"  href="./week-2">Week 2 page</Link></li>
          <li className="pt-2"><Link className=" underline text-red-500 hover:text-red-300"  href="./week-3">Week 3 page</Link></li>
          <li className="pt-2"><Link className=" underline text-red-500 hover:text-red-300"  href="./week-4">Week 4 page</Link></li>
          <li className="pt-2"><Link className=" underline text-red-500 hover:text-red-300"  href="./week-5">Week 5 page</Link></li>
          <li className="pt-2"><Link className=" underline text-red-500 hover:text-red-300"  href="./week-6">Week 6 page</Link></li>
          <li className="pt-2"><Link className=" underline text-red-500 hover:text-red-300"  href="./week-7">Week 7 page</Link></li>
          <li className="pt-2"><Link className=" underline text-red-500 hover:text-red-300"  href="./week-8">Week 8 page</Link></li>
          <li className="pt-2"><Link className=" underline text-red-500 hover:text-red-300"  href="./week-9">Week 9 page</Link></li>
          
        </ol>
      </div>
      
      
    </main>
    
  );
}
