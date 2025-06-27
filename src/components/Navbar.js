'use client'
import { useAppContext } from "@/app/contexts/AppContext"
import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  const {favoritesQty} = useAppContext()
  return (
    <div className="flex justify-between items-center p-10 px-6 bg-blue-950 text-white font-bold text-xl ">
        
        <Image src="/assets/logo-movie.png"
        width={48}
        height={48}
        alt="logo" />
        <nav>
            <ul className="flex">
                <li className="mr-5">
                  <Link href={"/"}>Home</Link>
                </li>
                <li className="mr-5">Película</li>
                <li className="mr-5">Series</li>
                <li className="mr-5">Generos</li>
                <li>
                  <Link href={"/favorites"}>Favorites {favoritesQty()}</Link>
                </li>
            </ul>
        </nav>
      
    </div>
  )
}

export default Navbar