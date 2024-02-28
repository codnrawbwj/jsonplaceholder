import { Inter } from "next/font/google";
import Link from "next/link";
import { ChangeEvent, useState, ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  console.log("Home")

  const [category, setCategory] = useState('comments');
  const [number, setNumber] = useState("1");

  const handleClick = () => {
    console.log(category);
    console.log(number);
  }

  const handleCategoryChange = (e : ChangeEvent<HTMLSelectElement>) => {
      setCategory(e.target.value)
  }

  const handleNumberChange = (e : ChangeEvent<HTMLInputElement>) => {
      setNumber(e.target.value)
  }

  return (
    <>
            <div className="h-screen font-mono font-semibold text-lg flex flex-col justify-center items-center">
                <div className="flex justify-center gap-[10px]">
                    <span>jsonplaceholder.typicode.com/</span>
                    <form>
                        <select className="bg-black" name="category" id="category"
                        onChange={handleCategoryChange}>
                            <option value="comments">comments</option>
                            <option value="photos">photos</option>
                            <option value="albums">albums</option>
                            <option value="todos">todos</option>
                            <option value="posts">posts</option>
                        </select>
                    </form>
                    <span>/</span>
                    <input className="bg-black placeholder-grey-500 w-[50px]" placeholder="#" type="number"
                    onChange={handleNumberChange} />
                </div>
                <Link 
                  href={{
                    pathname: `/${category}/${number}`,
                    query: {
                      category: category,
                      number: number,
                    }
                  }} 
                  >
                  <button className="mt-5" onClick={handleClick}>Click Me {'<--'}</button>
                </Link>
            </div>
        </>
  );
}