
import Link from "next/link";

export default function Home() {
  return (
    <main className=" flex  justify-center  ">
      <div className = "p-16">
        <h1 className="  text-4xl"> CPRG 306: Web Development 2 - Assignments</h1>
        <ol>
          <li className="pt-6">
            <Link className=" underline text-red-500 hover:text-red-300"  href="./week-2">Week 2 page</Link>
          </li>
          <li><Link className=" underline text-red-500 hover:text-red-300"  href="./week-3">Week 3 page</Link></li>
        </ol>
      </div>
      
      
    </main>
    
  );
}
