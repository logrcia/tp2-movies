import MoviesContainer from "@/components/MoviesContainer"

const HomeContainer = () => {
  return (
    <div>
        <section className="bg-gradient-to-r from-purple-800 to-blue-950 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Movies App</h1>
          <p className="text-xl">Discover the latest trending movies</p>
        </div>
      </section>
        <section>
            <h2 className="text-3xl font-bold text-gray-800 m-4 text-center">Trending Movies</h2>
            <MoviesContainer />
        </section>
    </div>
  )
}

export default HomeContainer