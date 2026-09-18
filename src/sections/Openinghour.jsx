import React from "react";
import { motion } from "motion/react";
import Animated from '../components/Animated'

const openingHours = [
  {
    day: "Monday",
    time: "10:00 AM - 10:00 PM",
  },
  {
    day: "Tuesday",
    time: "10:00 AM - 10:00 PM",
  },
  {
    day: "Wednesday",
    time: "10:00 AM - 10:00 PM",
  },
  {
    day: "Thursday",
    time: "10:00 AM - 10:00 PM",
  },
  {
    day: "Friday",
    time: "10:00 AM - 10:30 PM",
  },
  {
    day: "Saturday",
    time: "10:00 AM - 10:30 PM",
  },
  {
    day: "Sunday",
    time: "10:00 AM - 10:00 PM",
  },
];

const OpeningHours = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-24" id="timing">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <Animated className="text-center mb-14">
          <p className="text-sm uppercase tracking-[4px] text-orange-500 font-semibold mb-3">
            Visit Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            We're Open for You
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-gray-600">
            Plan your visit and enjoy delicious food, warm hospitality, and
            an unforgettable dining experience at Bhojan Bhomi.
          </p>
        </Animated>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-gray-900 text-white p-8 md:p-10"
          >
            <div className="text-5xl mb-5">
              🕐
            </div>

            <h3 className="text-3xl font-bold mb-4">
              Opening Hours
            </h3>

            <p className="text-gray-300 leading-relaxed mb-6">
              We're ready to welcome you throughout the week. Come visit us
              with your family and friends and enjoy the authentic taste of
              Bhojan Bhomi.
            </p>

            <div className="inline-block bg-orange-500 px-5 py-3 rounded-xl">
              <p className="text-sm font-medium">
                Open 7 Days a Week
              </p>
            </div>
          </motion.div>

          {/* Right Timing List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-lg p-6 md:p-8"
          >
            <div className="space-y-2">
              {openingHours.map((item, index) => (
                <div
                  key={item.day}
                  className={`flex items-center justify-between py-4 px-4 rounded-xl ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <span className="font-semibold text-gray-800">
                    {item.day}
                  </span>

                  <span className="text-gray-600 text-sm md:text-base">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default OpeningHours;