import React from "react";
import "../css/Cards.css"
import img1 from "../assets/images/cardimg1.jpg"
import img2 from "../assets/images/cardimg2.jpg"
import img3 from "../assets/images/cardimg3.jpg"
import img4 from "../assets/images/cardimg4.jpg"
import img5 from "../assets/images/cardimg5.jpg"
const designCards = [
  {
    id: 1,
    title: "Modern Living Room",
    description:
      "A sleek and contemporary living space with minimalist furniture and warm lighting.",
    image: img1,
    category: "Living Room",
  },
  {
    id: 2,
    title: "Elegant Bedroom",
    description:
      "A cozy and elegant bedroom with soft textures and soothing colors for relaxation.",
    image: img2,
    category: "Bedroom",
  },
  {
    id: 3,
    title: "Luxury Kitchen",
    description:
      "A modern kitchen with high-end appliances and an open-space concept.",
    image: img3,
    category: "Kitchen",
  },
  {
    id: 4,
    title: "Minimalist Office",
    description:
      "A clean and organized workspace designed for productivity and focus.",
    image: img4,
    category: "Office",
  },
  {
    id: 5,
    title: "Cozy Reading Nook",
    description:
      "A peaceful and stylish corner designed for book lovers and relaxation.",
    image: img5,
    category: "Reading Room",
  },
];

const Cards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {designCards.map((card) => (
        <div
          key={card.id}
          className="bg-white shadow-lg rounded-2xl overflow-hidden"
        >
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{card.title}</h2>
            <p className="text-gray-600 mt-2">{card.description}</p>
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 mt-3 rounded-full">
              {card.category}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
