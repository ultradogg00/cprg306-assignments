import Link from "next/link";

export default function StudentInfo(){
    return(
        <main>
            <p>David Ashieze</p>
            <Link className=" underline text-red-500 hover:text-red-300" href="https://github.com/ultradogg00/cprg306-assignments">https://github.com/ultradogg00/cprg306-assignments</Link>
        </main>
    );
}