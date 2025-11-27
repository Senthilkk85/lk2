import MenuItem from '@/components/MenuItem';

// Helper function to generate unique IDs
function generateId(category: string, name: string): string {
  return `${category.toLowerCase().replace(/\s+/g, '-')}-${name.toLowerCase().replace(/\s+/g, '-')}`;
}

export default function Menu() {
  const menuItems = [
    {
      category: 'South Indian - Dosa',
      items: [
        { name: 'Masala Dosa', description: 'Crispy golden crepe filled with spiced potatoes, served with coconut chutney and sambar', price: '$9.99' },
        { name: 'Plain Dosa', description: 'Classic crispy dosa served with coconut chutney and sambar', price: '$7.99' },
        { name: 'Rava Dosa', description: 'Crispy semolina dosa with onions and green chilies', price: '$9.99' },
        { name: 'Onion Dosa', description: 'Dosa topped with fresh onions and green chilies', price: '$10.99' },
        { name: 'Ghee Dosa', description: 'Buttery dosa made with clarified butter for rich flavor', price: '$9.99' },
        { name: 'Podi Dosa', description: 'Dosa topped with flavorful spice powder (gunpowder)', price: '$9.99' },
        { name: 'Paper Dosa', description: 'Extra thin and crispy dosa, served with chutneys', price: '$7.99' },
        { name: 'Mysore Masala Dosa', description: 'Spicy dosa with red chutney and potato filling', price: '$10.99' },
        { name: 'Set Dosa', description: 'Soft, spongy mini dosas served in a set of 3', price: '$10.99' },
        { name: 'Pesarattu', description: 'Green gram dosa with ginger and green chilies', price: '$9.99' },
        { name: 'Uttapam', description: 'Thick dosa with vegetables like onions, tomatoes, and chilies', price: '$9.99' },
        { name: 'Cheese Dosa', description: 'Dosa stuffed with cheese and vegetables', price: '$10.99' },
        { name: 'Neer Dosa', description: 'Soft, thin rice crepe from Karnataka', price: '$7.99' },
        { name: 'Adai Dosa', description: 'Protein-rich dosa made with mixed lentils', price: '$9.99' },
      ]
    },
    {
      category: 'South Indian - Idli & Vada',
      items: [
        { name: 'Plain Idli', description: 'Soft, fluffy steamed rice cakes served with sambar and coconut chutney', price: '$5.99' },
        { name: 'Rava Idli', description: 'Semolina idli with vegetables and tempering', price: '$6.99' },
        { name: 'Idli Vada', description: 'Combo of soft idli and crispy vada with chutneys', price: '$7.99' },
        { name: 'Podi Idli', description: 'Idli tossed with aromatic spice powder and oil', price: '$6.99' },
        { name: 'Kanchipuram Idli', description: 'Spiced idli with pepper, cumin, and curry leaves', price: '$7.99' },
        { name: 'Fried Idli', description: 'Crispy fried idli pieces tossed with spices', price: '$7.99' },
        { name: 'Schezwan Idli', description: 'Idli tossed in spicy Schezwan sauce', price: '$8.99' },
        { name: 'Mini Idli', description: 'Small bite-sized idlis served with sambar', price: '$6.99' },
        { name: 'Medu Vada', description: 'Crispy lentil donuts served with sambar and chutney', price: '$5.99' },
        { name: 'Sambar Vadai', description: 'Vada served with hot sambar', price: '$6.99' },
        { name: 'Thayir Vadai', description: 'Vada soaked in seasoned yogurt', price: '$6.99' },
      ]
    },
    {
      category: 'Hyderabadi Cuisine',
      items: [
        { name: 'Hyderabadi Biryani', description: 'Authentic dum biryani with layers of rice and meat', price: '$15.99' },
        { name: 'Chicken 65', description: 'Spicy deep-fried chicken from Hyderabad', price: '$12.99' },
        { name: 'Haleem', description: 'Slow-cooked meat and lentil stew, traditional Ramadan dish', price: '$11.99' },
        { name: 'Mirchi Ka Salan', description: 'Spicy green chilies in tangy peanut curry', price: '$8.99' },
        { name: 'Double Ka Meetha', description: 'Bread pudding in sweet milk, Hyderabadi dessert', price: '$6.99' },
        { name: 'Qubani Ka Meetha', description: 'Apricot dessert with cream', price: '$7.99' },
        { name: 'Pathar Ka Gosht', description: 'Meat cooked on hot stone, Hyderabadi specialty', price: '$16.99' },
        { name: 'Bagara Baingan', description: 'Eggplant in rich tamarind and peanut gravy', price: '$9.99' },
      ]
    },
    {
      category: 'Chettinad Cuisine',
      items: [
        { name: 'Chettinad Chicken', description: 'Spicy South Indian chicken curry with coconut', price: '$14.99' },
        { name: 'Chettinad Fish Curry', description: 'Tangy and spicy fish curry with tamarind', price: '$13.99' },
        { name: 'Chettinad Mutton', description: 'Fiery mutton curry with whole spices', price: '$16.99' },
        { name: 'Kozhi Varuval', description: 'Dry spicy chicken fry, Chettinad style', price: '$13.99' },
        { name: 'Karaikudi Chicken', description: 'Spicy chicken curry from Karaikudi', price: '$14.99' },
        { name: 'Chettinad Egg Curry', description: 'Hard-boiled eggs in spicy Chettinad gravy', price: '$11.99' },
      ]
    },
    {
      category: 'Kerala Cuisine',
      items: [
        { name: 'Kerala Fish Curry', description: 'Tangy fish curry with coconut milk and kokum', price: '$13.99' },
        { name: 'Kerala Prawn Curry', description: 'Prawns in coconut milk and spices', price: '$14.99' },
        { name: 'Appam with Stew', description: 'Lacy rice pancakes with vegetable or meat stew', price: '$9.99' },
        { name: 'Puttu', description: 'Steamed rice cylinders with coconut', price: '$6.99' },
        { name: 'Kadala Curry', description: 'Black chickpea curry, served with puttu', price: '$8.99' },
        { name: 'Kerala Parotta', description: 'Layered flatbread, flaky and crispy', price: '$4.99' },
        { name: 'Beef Fry', description: 'Spicy beef fry, Kerala style', price: '$15.99' },
        { name: 'Kerala Chicken Roast', description: 'Dry roasted chicken with coconut and spices', price: '$14.99' },
        { name: 'Avial', description: 'Mixed vegetables in coconut and yogurt curry', price: '$9.99' },
        { name: 'Sadhya Thali', description: 'Traditional Kerala feast with rice and 20+ dishes', price: '$18.99' },
      ]
    },
    {
      category: 'Tamil Nadu Specialties',
      items: [
        { name: 'Pongal', description: 'Savory rice and lentil porridge with pepper and cumin', price: '$6.99' },
        { name: 'Ven Pongal', description: 'Savory pongal with ghee and black pepper', price: '$6.99' },
        { name: 'Sakkarai Pongal', description: 'Sweet rice and lentil dish with jaggery and nuts', price: '$6.99' },
        { name: 'Bisi Bele Bath', description: 'Spicy rice and lentil dish with vegetables', price: '$8.99' },
        { name: 'Rasam', description: 'Tangy tamarind soup with spices', price: '$4.99' },
        { name: 'Sambar', description: 'Traditional lentil stew with vegetables', price: '$4.99' },
        { name: 'Kootu', description: 'Vegetable and lentil stew with coconut', price: '$8.99' },
        { name: 'Paruppu Usili', description: 'Crumbled lentil and vegetable stir-fry', price: '$8.99' },
        { name: 'Kara Kuzhambu', description: 'Spicy tamarind-based curry', price: '$9.99' },
        { name: 'Vatha Kuzhambu', description: 'Tangy and spicy curry with vegetables', price: '$9.99' },
      ]
    },
    {
      category: 'Andhra Cuisine',
      items: [
        { name: 'Andhra Chicken Curry', description: 'Fiery hot chicken curry, Andhra style', price: '$14.99' },
        { name: 'Gongura Chicken', description: 'Chicken cooked with sorrel leaves', price: '$14.99' },
        { name: 'Andhra Fish Curry', description: 'Spicy fish curry with tamarind and red chilies', price: '$13.99' },
        { name: 'Pulihora', description: 'Tangy tamarind rice', price: '$6.99' },
        { name: 'Gutti Vankaya', description: 'Stuffed brinjal curry, Andhra style', price: '$9.99' },
        { name: 'Royyala Vepudu', description: 'Spicy prawn fry, Andhra style', price: '$15.99' },
        { name: 'Bendakaya Fry', description: 'Okra stir-fry with spices', price: '$8.99' },
      ]
    },
    {
      category: 'Punjabi Cuisine',
      items: [
        { name: 'Butter Chicken', description: 'Creamy tomato-based curry with tender chicken pieces', price: '$13.99' },
        { name: 'Chicken Tikka Masala', description: 'Grilled chicken in creamy tomato and spice sauce', price: '$14.99' },
        { name: 'Dal Makhani', description: 'Creamy black lentils cooked with butter and cream', price: '$9.99' },
        { name: 'Sarson Ka Saag', description: 'Mustard greens cooked with spices, served with makki ki roti', price: '$10.99' },
        { name: 'Makki Ki Roti', description: 'Corn flour flatbread', price: '$3.99' },
        { name: 'Rajma', description: 'Kidney beans in rich tomato and onion gravy', price: '$9.99' },
        { name: 'Chole Bhature', description: 'Spiced chickpeas with fluffy fried bread', price: '$10.99' },
        { name: 'Aloo Paratha', description: 'Paratha stuffed with spiced potatoes', price: '$5.99' },
        { name: 'Paneer Tikka', description: 'Marinated paneer cubes grilled with vegetables', price: '$10.99' },
        { name: 'Amritsari Kulcha', description: 'Stuffed leavened bread from Amritsar', price: '$4.99' },
        { name: 'Lassi', description: 'Sweet yogurt drink', price: '$3.99' },
        { name: 'Mango Lassi', description: 'Sweet yogurt drink with mango', price: '$4.99' },
        { name: 'Punjabi Thali', description: 'Complete meal with dal, vegetables, roti, rice, and dessert', price: '$13.99' },
      ]
    },
   
    {
      category: 'Rice & Biryani',
      items: [
        { name: 'Vegetable Biryani', description: 'Fragrant basmati rice cooked with mixed vegetables and aromatic spices', price: '$12.99' },
        { name: 'Chicken Biryani', description: 'Tender chicken pieces cooked with basmati rice and spices', price: '$14.99' },
        { name: 'Mutton Biryani', description: 'Slow-cooked mutton with basmati rice and traditional spices', price: '$16.99' },
        { name: 'Egg Biryani', description: 'Hard-boiled eggs cooked with basmati rice and spices', price: '$11.99' },
        { name: 'Prawn Biryani', description: 'Juicy prawns cooked with basmati rice and aromatic spices', price: '$15.99' },
        { name: 'Jeera Rice', description: 'Basmati rice tempered with cumin seeds', price: '$4.99' },
        { name: 'Lemon Rice', description: 'Tangy rice with lemon, curry leaves, and peanuts', price: '$5.99' },
        { name: 'Curd Rice', description: 'Mild and creamy rice mixed with yogurt and tempered', price: '$5.99' },
        { name: 'Tomato Rice', description: 'Tangy rice cooked with tomatoes and spices', price: '$5.99' },
        { name: 'Coconut Rice', description: 'Fragrant rice with fresh coconut and curry leaves', price: '$5.99' },
        { name: 'Pulao', description: 'Aromatic rice cooked with vegetables and whole spices', price: '$6.99' },
      ]
    },
    {
      category: 'Curries & Gravies',
      items: [
        { name: 'Chicken Curry', description: 'Traditional spicy chicken curry with onions and tomatoes', price: '$12.99' },
        { name: 'Kadai Chicken', description: 'Chicken cooked in a wok with bell peppers and spices', price: '$13.99' },
        { name: 'Mutton Curry', description: 'Tender mutton cooked in traditional spice blend', price: '$15.99' },
        { name: 'Fish Curry', description: 'Fresh fish cooked in tangy coconut-based gravy', price: '$13.99' },
        { name: 'Prawn Curry', description: 'Juicy prawns in spicy coconut curry', price: '$14.99' },
        { name: 'Dal Tadka', description: 'Yellow lentils tempered with spices and ghee', price: '$8.99' },
        { name: 'Palak Paneer', description: 'Spinach curry with fresh cottage cheese cubes', price: '$10.99' },
        { name: 'Paneer Butter Masala', description: 'Cottage cheese in creamy tomato gravy', price: '$11.99' },
        { name: 'Paneer Tikka Masala', description: 'Grilled paneer in creamy spicy sauce', price: '$11.99' },
        { name: 'Chana Masala', description: 'Spiced chickpeas in a flavorful tomato gravy', price: '$9.99' },
        { name: 'Aloo Gobi', description: 'Potatoes and cauliflower cooked with spices', price: '$9.99' },
        { name: 'Baingan Bharta', description: 'Smoky roasted eggplant mashed with spices', price: '$9.99' },
        { name: 'Bhindi Masala', description: 'Okra cooked with onions, tomatoes, and spices', price: '$9.99' },
        { name: 'Malai Kofta', description: 'Vegetable balls in creamy tomato gravy', price: '$11.99' },
        { name: 'Navratan Korma', description: 'Mixed vegetables in creamy cashew and yogurt sauce', price: '$10.99' },
      ]
    },

    {
      category: 'Breads',
      items: [
        { name: 'Naan', description: 'Soft, fluffy leavened bread baked in tandoor', price: '$3.99' },
        { name: 'Garlic Naan', description: 'Naan topped with fresh garlic and butter', price: '$4.99' },
        { name: 'Butter Naan', description: 'Naan brushed with butter', price: '$4.99' },
        { name: 'Cheese Naan', description: 'Naan stuffed with melted cheese', price: '$5.99' },
        { name: 'Aloo Naan', description: 'Naan stuffed with spiced potatoes', price: '$5.99' },
        { name: 'Kulcha', description: 'Leavened flatbread, soft and fluffy', price: '$3.99' },
        { name: 'Roti', description: 'Whole wheat flatbread', price: '$2.99' },
        { name: 'Tandoori Roti', description: 'Whole wheat bread baked in tandoor', price: '$3.99' },
        { name: 'Paratha', description: 'Layered flatbread, plain or stuffed', price: '$4.99' },
        { name: 'Gobi Paratha', description: 'Paratha stuffed with spiced cauliflower', price: '$5.99' },
        { name: 'Paneer Paratha', description: 'Paratha stuffed with spiced paneer', price: '$6.99' },
        { name: 'Poori', description: 'Deep-fried puffed bread', price: '$3.99' },
        { name: 'Bhatura', description: 'Large, fluffy deep-fried bread', price: '$4.99' },
      ]
    },
    {
      category: 'Street Food & Snacks',
      items: [
        { name: 'Samosa', description: 'Crispy fried pastry filled with spiced potatoes', price: '$3.99' },
        { name: 'Paneer Samosa', description: 'Samosa stuffed with spiced paneer', price: '$4.99' },
        { name: 'Pakora', description: 'Vegetables coated in chickpea flour and fried', price: '$5.99' },
        { name: 'Onion Pakora', description: 'Crispy onion fritters', price: '$4.99' },
        { name: 'Aloo Tikki', description: 'Spiced potato patties, crispy outside, soft inside', price: '$5.99' },
        { name: 'Dahi Vada', description: 'Lentil dumplings in sweet and tangy yogurt', price: '$6.99' },
      
      ]
    },
    {
      category: 'Thali & Combos',
      items: [
        { name: 'Vegetarian Thali', description: 'Complete meal with rice, roti, dal, vegetables, dessert, and pickle', price: '$12.99' },
        { name: 'Non-Vegetarian Thali', description: 'Complete meal with rice, roti, curry, dal, dessert, and pickle', price: '$14.99' },
        { name: 'South Indian Thali', description: 'Rice, sambar, rasam, vegetables, curd, pickle, and dessert', price: '$11.99' },
        { name: 'North Indian Thali', description: 'Dal, vegetables, rice, roti, raita, and dessert', price: '$12.99' },
        { name: 'Mini Thali', description: 'Smaller portion thali with 2 curries, rice, and roti', price: '$9.99' },
        { name: 'Dosa Combo', description: 'Dosa with sambar, chutneys, and coffee', price: '$10.99' },
        { name: 'Idli Combo', description: 'Idli with sambar, chutneys, and vada', price: '$8.99' },
      ]
    },
    {
      category: 'Beverages',
      items: [
        { name: 'Masala Chai', description: 'Spiced Indian tea with milk', price: '$2.99' },
        { name: 'Coffee', description: 'South Indian filter coffee', price: '$3.99' },
        { name: 'Salted Lassi', description: 'Salted yogurt drink with spices', price: '$3.99' },
        { name: 'Buttermilk', description: 'Cool, refreshing spiced buttermilk', price: '$2.99' },
        { name: 'Fresh Lime Soda', description: 'Refreshing lime and soda drink', price: '$3.99' },
        { name: 'Mango Shake', description: 'Fresh mango milkshake', price: '$4.99' },
        { name: 'Badam Milk', description: 'Almond milk with saffron and cardamom', price: '$4.99' },
        { name: 'Rose Milk', description: 'Sweet milk flavored with rose syrup', price: '$3.99' },
        { name: 'Jal Jeera', description: 'Spiced cumin water, refreshing and tangy', price: '$2.99' },
        { name: 'Nimbu Pani', description: 'Fresh lemonade with salt and spices', price: '$2.99' },
        { name: 'Thandai', description: 'Cooling drink with nuts and spices', price: '$4.99' },
      ]
    },
    {
      category: 'Desserts',
      items: [
        { name: 'Gulab Jamun', description: 'Sweet milk dumplings soaked in sugar syrup', price: '$5.99' },
        { name: 'Kheer', description: 'Sweet rice pudding with cardamom and nuts', price: '$5.99' },
        { name: 'Kulfi', description: 'Traditional Indian ice cream', price: '$4.99' },
        { name: 'Jalebi', description: 'Crispy, sweet pretzel-shaped dessert', price: '$5.99' },
        { name: 'Halwa', description: 'Sweet semolina pudding with ghee and nuts', price: '$5.99' },
        { name: 'Carrot Halwa', description: 'Sweet carrot pudding with milk and nuts', price: '$6.99' },
        { name: 'Badam Halwa', description: 'Rich almond pudding', price: '$7.99' },
        { name: 'Payasam', description: 'South Indian sweet pudding with milk and rice', price: '$5.99' },
        { name: 'Rava Kesari', description: 'Sweet semolina dessert with saffron', price: '$5.99' },

      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Menu
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our wide selection of authentic Indian dishes from all regions
          </p>
        </div>

        {menuItems.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-6 pb-2 border-b-2 border-primary-200">
              {section.category}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((item, itemIndex) => (
                <MenuItem
                  key={itemIndex}
                  id={generateId(section.category, item.name)}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  category={section.category}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
