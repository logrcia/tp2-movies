const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-10 px-6 mb-2 bg-blue-950 text-white font-bold text-2xl">
        <div>logo</div>
        <nav>
            <ul className="flex">
                <li className="mr-5">Home</li>
                <li>Generos</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar