import React from "react";
import img1 from "../assets/images/patioimg1.jpg"
import img2 from "../assets/images/patioimg2.jpg"
import img3 from "../assets/images/patioimg3.jpg"
import img4 from "../assets/images/patioimg4.jpg"
import img5 from "../assets/images/patioimg5.jpg"
import "../css/OutDoorCards.css";

const OutdoorCards = () => {
  const patioItems = [
    {
      id: 1,
      name: "Patio Set",
      img: img1,
      description: "A stylish patio set for outdoor relaxation.",
    },
    {
      id: 2,
      name: "Umbrella Shade",
      img: img2,
      description: "A large umbrella shade for sunny days.",
    },
    {
      id: 3,
      name: "Fire Pit",
      img: img3,
      description: "A cozy fire pit for evening gatherings.",
    },
    {
      id: 4,
      name: "Outdoor Rug",
      img: img4,
      description: "An elegant outdoor rug for a cozy feel.",
    },
    {
      id: 5,
      name: "Lanterns",
      img: img5,
      description: "Beautiful lanterns to create a warm ambiance.",
    },
  ];

  return (
    <div className="patio-container mt-5">
      <h2 className="text-center">Welcome to the Outdoor Patio</h2>
      <p className="text-center">
        The outdoor patio is the perfect space to relax and entertain guests. It
        features comfortable seating, stylish decor, and a cozy atmosphere for
        enjoying the outdoors.
      </p>
      <h3 className="text-center">Patio Items:</h3>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
        {patioItems.map((item) => (
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

export default OutdoorCards;
