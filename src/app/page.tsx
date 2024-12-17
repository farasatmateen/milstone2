
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex justify-around items-center bg-slate-300 text-2xl font-sans text-[#044e83] mt-5">
<h1>Countries List </h1>
      <ul className="flex justify-around items-center gap-x-5 ">
      <Link href={"/country/pakistan"}> <li>Pakistan</li></Link>
      <Link href={"/country/Australia"}> <li>Australia</li></Link>
      <Link href={"/country/iran"}> <li>Iran</li></Link>
      <Link href={"/country/saudia"}> <li>Saudi</li></Link>
      <Link href={"/country/Canada"}> <li>Canada</li></Link>
      </ul>
    </div>
  );
}
