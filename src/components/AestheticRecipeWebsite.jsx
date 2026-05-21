export default function AestheticRecipeWebsite() {
  const categories = [
    "Desserts",
    "Breakfast",
    "Healthy",
    "Drinks",
    "Dinner",
    "Vegan",
  ];

  const recipes = [
    {
      title: "Berry Pancakes",
      image:
        "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=1200&auto=format&fit=crop",
      category: "Breakfast",
    },
    {
      title: "Pink Velvet Cake",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop",
      category: "Desserts",
    },
    {
      title: "Strawberry Matcha",
      image:
        "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=1200&auto=format&fit=crop",
      category: "Drinks",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fdf7f2] text-[#5b4636] font-serif overflow-x-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#f0ddd1] shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#e8b89f] to-[#c98a68] flex items-center justify-center text-white text-xl font-bold shadow-lg">
              R
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-wide">Rosé Recipes</h1>
              <p className="text-xs tracking-[0.3em] uppercase text-[#b88c75]">
                aesthetic kitchen
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm uppercase tracking-widest font-medium">
            <a className="hover:text-[#c98a68] transition cursor-pointer">
              Home
            </a>
            <a className="hover:text-[#c98a68] transition cursor-pointer">
              About
            </a>
            <a className="hover:text-[#c98a68] transition cursor-pointer">
              Recipes
            </a>
            <a className="hover:text-[#c98a68] transition cursor-pointer">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Home Page */}
      <section className="max-w-7xl mx-auto px-8 py-20 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="uppercase tracking-[0.4em] text-sm text-[#c98a68] mb-5">
            Welcome to Rosé Recipes
          </p>

          <h2 className="text-6xl leading-tight font-bold mb-7">
            Elegant Recipes <br />
            Made Beautiful.
          </h2>

          <p className="text-lg leading-9 text-[#725b4c] max-w-xl mb-8">
            Discover aesthetic desserts, cozy breakfasts, healthy bowls, and
            dreamy drinks all in one beautifully designed recipe collection.
            Made for food lovers who enjoy cooking with style.
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-full shadow-xl flex items-center p-3 max-w-xl mb-10 border border-[#f1dfd2]">
            <input
              type="text"
              placeholder="Search recipes, drinks, desserts..."
              className="flex-1 outline-none px-5 text-[#6b5444] bg-transparent"
            />
            <button className="bg-[#c98a68] hover:bg-[#b87958] transition text-white px-7 py-3 rounded-full uppercase text-xs tracking-widest shadow-lg">
              Search
            </button>
          </div>

          {/* Categories */}
          <div>
            <h3 className="uppercase tracking-[0.3em] text-sm text-[#b88c75] mb-4">
              Categories
            </h3>

            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 rounded-full bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition border border-[#f1dfd2] text-sm"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1200&auto=format&fit=crop"
            alt="Aesthetic Food"
            className="rounded-[3rem] shadow-2xl w-full h-[650px] object-cover"
          />

          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-lg rounded-3xl p-6 shadow-xl max-w-xs border border-[#f0ddd1]">
            <p className="uppercase tracking-[0.2em] text-xs text-[#b88c75] mb-2">
              Featured Recipe
            </p>
            <h3 className="text-2xl font-bold mb-3">Strawberry Cheesecake</h3>
            <p className="text-sm leading-6 text-[#6b5444]">
              Creamy layers, fresh strawberries, and a buttery biscuit base.
            </p>
          </div>
        </div>
      </section>

      {/* About Page Section */}
      <section className="bg-[#fffaf7] py-20 px-8 border-y border-[#f2e2d8]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <img
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop"
            alt="About Food"
            className="rounded-[2.5rem] h-[500px] object-cover shadow-2xl"
          />

          <div>
            <p className="uppercase tracking-[0.4em] text-sm text-[#c98a68] mb-4">
              About Us
            </p>

            <h2 className="text-5xl font-bold mb-8 leading-tight">
              Recipes Designed With Warmth & Style
            </h2>

            <p className="text-lg leading-9 text-[#725b4c] mb-6">
              Rosé Recipes was created for people who love aesthetic food,
              elegant presentation, and simple cooking experiences. From cozy
              breakfasts to dreamy desserts, every recipe is designed to feel
              comforting and visually beautiful.
            </p>

            <p className="text-lg leading-9 text-[#725b4c]">
              This website combines modern visuals with delicious recipes so
              cooking can feel creative, calming, and inspiring.
            </p>
          </div>
        </div>
      </section>

      {/* Recipe Cards */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="uppercase tracking-[0.4em] text-sm text-[#c98a68] mb-3">
              Popular Recipes
            </p>
            <h2 className="text-5xl font-bold">Trending This Week</h2>
          </div>

          <button className="hidden md:block bg-[#c98a68] text-white px-7 py-4 rounded-full uppercase tracking-widest text-xs shadow-lg hover:bg-[#b87958] transition">
            Explore More
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {recipes.map((recipe) => (
            <div
              key={recipe.title}
              className="bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-[#f2e2d8]"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="h-72 w-full object-cover"
              />

              <div className="p-7">
                <p className="uppercase tracking-[0.3em] text-xs text-[#b88c75] mb-3">
                  {recipe.category}
                </p>

                <h3 className="text-3xl font-bold mb-4">{recipe.title}</h3>

                <button className="mt-2 text-[#c98a68] uppercase tracking-widest text-sm hover:underline">
                  View Recipe →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Signature */}
      <footer className="bg-white border-t border-[#f0ddd1] py-14 text-center">
        <p className="italic text-lg text-[#7d6556] mb-3">
          "Cooking is an art served with love."
        </p>

        <h4 className="text-3xl font-bold text-[#c98a68] tracking-wide mb-2">
          — Rosé Recipes
        </h4>

        <p className="uppercase tracking-[0.3em] text-xs text-[#b88c75]">
          Designed with aesthetic simplicity
        </p>
      </footer>
    </div>
  );
}
