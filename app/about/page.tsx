export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Leela&apos;s Kitchen</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            A family tradition of authentic Indian cuisine
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Leela&apos;s Kitchen was born from a passion for authentic Indian cuisine and a 
                desire to share the rich flavors of traditional recipes with the community. 
                Named after the matriarch of our family, Leela, who spent decades perfecting 
                these recipes in her own kitchen.
              </p>
              <p>
                Our journey began with the simple belief that food should be made with love, 
                using fresh ingredients and time-honored techniques. Every dish on our menu 
                tells a story - from the crispy dosas that remind us of South Indian mornings 
                to the aromatic biryanis that celebrate special occasions.
              </p>
              <p>
                We take pride in preparing each meal fresh daily, using only the finest spices 
                and ingredients sourced with care. Our chefs bring years of experience and 
                traditional cooking methods to every dish, ensuring that every bite transports 
                you to the heart of India.
              </p>
              <p>
                At Leela&apos;s Kitchen, we believe that good food brings people together. 
                Whether you&apos;re craving a comforting plate of idli and sambar or exploring 
                our extensive menu of regional specialties, we invite you to experience the 
                warmth and hospitality of Indian cuisine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Fresh Ingredients</h3>
              <p className="text-gray-600">
                We source the freshest ingredients daily to ensure the highest quality in every dish
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-5xl mb-4">👨‍🍳</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Traditional Methods</h3>
              <p className="text-gray-600">
                Our cooking methods honor traditional Indian culinary techniques passed down through generations
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-5xl mb-4">💝</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Hospitality</h3>
              <p className="text-gray-600">
                We treat every guest like family, ensuring a warm and welcoming dining experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            To serve authentic Indian cuisine that brings people together and creates 
            lasting memories, one delicious meal at a time.
          </p>
        </div>
      </section>
    </div>
  );
}





