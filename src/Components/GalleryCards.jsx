import React from "react";
import "../css/GalleryCards.css";
import img1 from "../assets/images/galleryimg1.jpg";
import img2 from "../assets/images/galleryimg2.jpg";
import img3 from "../assets/images/galleryimg3.jpg";
import img4 from "../assets/images/galleryimg4.jpg";
import img5 from "../assets/images/galleryimg5.jpg";
import img6 from "../assets/images/galleryimg6.jpg";
import img7 from "../assets/images/galleryimg7.jpg";
import img8 from "../assets/images/galleryimg8.jpg";
import img9 from "../assets/images/galleryimg9.jpg";
import img10 from "../assets/images/galleryimg10.jpg"
import img11 from "../assets/images/galleryimg11.jpg"
import img12 from "../assets/images/galleryimg12.jpg"
import img13 from "../assets/images/galleryimg13.jpg"
import img14 from '../assets/images/galleryimg14.jpg'
import img15 from "../assets/images/galleryimg15.jpg"

const Card = ({ image, title, text, category }) => {
  return (
    <li className="cards_item">
      <div className="card">
        <div className="card_image">
          <img src={image} alt={title} />
        </div>
        <div className="card_content">
          <h2 className="card_title">{title}</h2>
          <p className="card_text">{text}</p>
          <p className="text-gray-600 text-sm">{category}</p>

        </div>
      </div>
    </li>
  );
};

const galleryData = [
  {
    id: 1,
    title: "Modern Living Room",
    image: img1,
    text: "A sleek, modern living room with minimalist furniture and warm lighting.",
    category: "Living Room",
  },
  {
    id: 2,
    title: "Cozy Bedroom",
    image: img2,
    text: "A warm and inviting bedroom with soft lighting and earthy tones.",
    category: "Bedroom",
  },
  {
    id: 3,
    title: "Luxury Kitchen",
    image: img3,
    text: "A high-end kitchen featuring marble countertops and gold fixtures.",
    category: "Kitchen",
  },
  {
    id: 4,
    title: "Elegant Bathroom",
    image: img4,
    text: "A spa-like bathroom with a freestanding tub and ambient lighting.",
    category: "Bathroom",
  },
  {
    id: 5,
    title: "Minimalist Office",
    image: img5,
    text: "A clean and functional workspace with neutral colors and modern decor.",
    category: "Office",
  },
  {
    id: 6,
    title: "Rustic Dining Room",
    image: img6,
    text: "A charming dining room with wooden furniture and vintage decor.",
    category: "Dining Room",
  },
  {
    id: 7,
    title: "Industrial Loft",
    image: img7,
    text: "A stylish loft with exposed brick, metal accents, and open spaces.",
    category: "Loft",
  },
  {
    id: 8,
    title: "Outdoor Patio",
    image: img8,
    text: "A relaxing outdoor patio with cozy seating and string lights.",
    category: "Outdoor",
  },
  {
    id: 9,
    title: "Modern Living Room",
    image: img9,
    text: "A sleek, modern living room with minimalist furniture and warm lighting.",
    category: "Living Room",
  },
  {
    id: 10,
    title: "Cozy Bedroom",
    image: img10,
    text: "A stylish loft with exposed brick, metal accents, and open spaces.",
    category: "Loft",
  },
  {
    id: 11,
    title: "Luxury bathroom",
    image: img11,
    text: "A spa-like bathroom with a freestanding tub and ambient lighting.",
    category: "Bath Room",
  },
  {
    id: 12,
    title: "Minimalist Kitchen",
    image: img12,
    text: "A high-end kitchen featuring marble countertops and gold fixtures.",
    category: "Kitchen",
  },
  {
    id: 13,
    title: "Cool Dining",
    image: img13,
    text: "A charming dining room with wooden furniture and vintage decor.",
    category: "Dining Room",
  },
  {
    id: 14,
    title: "Rustic Bedroom",
    image: img14,
    text: "A warm and inviting bedroom with soft lighting and earthy tones.",
    category: "Bed Room",
  },
  {
    id: 15,
    title: "Modern Hall",
    image: img15,
    text: "A sleek and modern hallway with minimalist decor and ample storage.",
    category: "Hall",
  },
];

const GalleryCards= () => {
  return (
    <div className="main">
      <h1>Our Gallery</h1>
      <ul className="cards">
        {[...galleryData].map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </ul>
    </div>
  );
};

export default GalleryCards;
