import React from "react";
import { motion } from "motion/react";
import Animated from '../components/Animated'

const offers = [
  {
    id: 1,
    title: "Weekend Family Feast",
    description:
      "Enjoy a delicious combination of our most-loved dishes, perfect for sharing with family and friends.",
    price: "Rs. 999",
    oldPrice: "Rs. 1,199",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 2,
    title: "Momo Mania",
    description:
      "Enjoy a variety of freshly prepared momos served with flavorful homemade achar.",
    price: "Rs. 299",
    oldPrice: "Rs. 399",
    image:
      "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 3,
    title: "Thakali Special",
    description:
      "Experience an authentic Nepali Thakali meal with dal, rice, vegetables, curry, and traditional sides.",
    price: "Rs. 399",
    oldPrice: "Rs. 499",
    image:
      "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
  },
];

const SpecialOffers = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-24" id="offers">
      
      {/* Heading */}
      <Animated className="text-center mb-14">
        <p className="text-sm uppercase tracking-[4px] text-orange-500 font-semibold mb-3">
          Special Offers
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Taste More, Spend Less
        </h2>

        <p className="max-w-2xl mx-auto mt-5 text-gray-600">
          Enjoy our specially crafted offers and discover delicious flavors
          at an amazing value.
        </p>
      </Animated>

      {/* Offers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {offers.map((offer, index) => (
          <motion.div
            key={offer.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="group overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Image */}
            <div className="relative overflow-hidden h-64">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Offer Badge */}
              <div className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Special Offer
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {offer.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-5">
                {offer.description}
              </p>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl font-bold text-orange-500">
                  {offer.price}
                </span>

                <span className="text-gray-400 line-through">
                  {offer.oldPrice}
                </span>
              </div>

              {/* Button */}
              <button className="w-full py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-orange-500 transition-colors duration-300">
                Explore Offer
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SpecialOffers;