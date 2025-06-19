'use client'
import { useAppContext } from "@/app/contexts/AppContext"
import Link from "next/link"

const Navbar = () => {
  const {favoritesQty} = useAppContext()
  return (
    <div className="flex justify-between items-center p-10 px-6 bg-blue-950 text-white font-bold text-2xl ">
        <div>logo</div>
        <nav>
            <ul className="flex">
                <li className="mr-5">Home</li>
                <li className="mr-5">Película</li>
                <li className="mr-5">Series</li>
                <li className="mr-5">Generos</li>
                <li>
                  <Link href={"/favorites"}>Favorites</Link>
                </li>
            </ul>
        </nav>
        <div>
        {`Favorites: ${favoritesQty()}`}
        </div>
    </div>
  )
}

export default Navbar