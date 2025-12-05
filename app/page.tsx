import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Welcome to Leela&apos;s Kitchen-Dosa Corner
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Authentic Indian Cuisine Made with Love
            </p>
            <p className="text-lg mb-10 text-primary-200 max-w-2xl mx-auto">
              Experience the rich flavors and aromas of traditional Indian dishes. 
              From crispy dosas to fluffy idlis, we bring you the taste of home.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/menu"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors shadow-lg"
              >
                View Menu
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Leela&apos;s Kitchen?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are committed to serving you the most authentic and delicious Indian cuisine
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">🍛</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Authentic Recipes</h3>
              <p className="text-gray-600">
                Traditional recipes passed down through generations, ensuring authentic flavors
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">🌶️</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Fresh Ingredients</h3>
              <p className="text-gray-600">
                We use only the freshest ingredients and spices to create our dishes
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Made with Love</h3>
              <p className="text-gray-600">
                Every dish is prepared with care and passion for authentic Indian cuisine
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Dishes
            </h2>
            <p className="text-lg text-gray-600">
              A taste of our most popular dishes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-5xl mb-4">🥘</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Masala Dosa</h3>
              <p className="text-gray-600">Crispy golden crepe filled with spiced potatoes</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-5xl mb-4">🍚</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Idli</h3>
              <p className="text-gray-600">Soft, fluffy steamed rice cakes, a South Indian favorite</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-5xl mb-4">🍛</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Biryani</h3>
              <p className="text-gray-600">Fragrant basmati rice cooked with aromatic spices</p>
            </div>
          </div>
          
          <div className="text-center">
            <Link
              href="/menu"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              View Full Menu for Catering
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Order?
          </h2>
          <p className="text-xl mb-6 text-primary-100">
            Give us a call
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/menu"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors shadow-lg"
            >
              Order Online
            </Link>
            <a
              href="tel:+13197774664"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              📞 Call +1 (319) 777-4664
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}





