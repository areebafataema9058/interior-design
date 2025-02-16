import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styling
import "../css/LivingRoom.css"; // Import custom CSS

// Import Images for LivingRoomCards
import img1 from "../assets/images/livingimg1.jpg";
import img2 from "../assets/images/livingimg2.jpg";
import img3 from "../assets/images/livingimg3.jpg";
import img4 from "../assets/images/livingimg4.jpg";
import img5 from "../assets/images/livingimg5.jpg";

// CardDeck Component (Bootstrap Cards)
const CardDeck = () => {
  const cardData = [
    {
      id: 1,
      imgSrc: "https://picsum.photos/309/200?image=1050",
      title: "Card Title 1",
      text: "This is a longer card with supporting text below as a natural lead-in to additional content.",
      updated: "Last updated 3 mins ago",
    },
    {
      id: 2,
      imgSrc: "https://picsum.photos/309/200?image=1041",
      title: "Card Title 2",
      text: "This is a longer card with supporting text below as a natural lead-in to additional content.",
      updated: "Last updated 3 mins ago",
    },
    {
      id: 3,
      imgSrc: "https://picsum.photos/309/200?image=1039",
      title: "Card Title 3",
      text: "This is a longer card with supporting text below as a natural.",
      updated: "Last updated 3 mins ago",
    },
    {
      id: 4,
      imgSrc: "https://picsum.photos/309/200?image=1019",
      title: "Card Title 4",
      text: "This is a longer card with supporting text below as a natural lead-in to additional content.",
      updated: "Last updated 3 mins ago",
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Bootstrap Card Deck</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {cardData.map((card) => (
          <div key={card.id} className="col">
            <div className="card h-100">
              <img src={card.imgSrc} className="card-img-top" alt="Card" />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
                <p className="card-text">
                  <small className="text-muted">{card.updated}</small>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// LivingRoomCards Component
const LivingRoomCards = () => {
  const livingRoomItems = [
    {
      id: 1,
      name: "Sofa",
      img: img1,
      description: "A comfortable three-seater sofa.",
    },
    {
      id: 2,
      name: "Coffee Table",
      img: img2,
      description: "A stylish wooden coffee table.",
    },
    {
      id: 3,
      name: "TV Stand",
      img: img3,
      description: "A modern TV stand with storage.",
    },
    {
      id: 4,
      name: "Bookshelf",
      img: img4,
      description: "A tall bookshelf filled with books.",
    },
    { id: 5, name: "Rug", img: img5, description: "A soft and cozy area rug." },
  ];

  return (
    <div className="living-room-container mt-5">
      <h2 className="text-center">Welcome to the Living Room</h2>
      <p className="text-center">
        The living room is the heart of the home, where family and friends
        gather to relax, entertain, and enjoy meaningful conversations. It is
        designed for comfort and style, featuring cozy seating, elegant decor,
        and a warm ambiance.
      </p>
      <h3 className="text-center">Living Room Items:</h3>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
        {livingRoomItems.map((item) => (
          <div key={item.id} className="col">
            <div className="card h-100 text-center shadow-sm">
              <img src={item.img} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LivingRoomCards;
