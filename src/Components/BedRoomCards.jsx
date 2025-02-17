import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styling
import img1 from "../assets/images/bedimg1.jpg"
import img2 from "../assets/images/bedimg2.jpg"
import img3 from "../assets/images/bedimg3.jpg"
import img4 from "../assets/images/bedimg4.jpg"
import img5 from "../assets/images/bedimg5.jpg"
import "../css/BedRoom.css"


const BedRoomCards = () => {
  const bedRoomItems = [
    {
      id: 1,
      name: "Bed",
      img: img1,
      description: "A king-sized bed with soft bedding.",
    },
    {
      id: 2,
      name: "Nightstand",
      img: img2,
      description: "A wooden nightstand with a lamp.",
    },
    {
      id: 3,
      name: "Wardrobe",
      img: img3,
      description: "A spacious wardrobe for clothes storage.",
    },
    {
      id: 4,
      name: "Dresser",
      img: img4,
      description: "A modern dresser with multiple drawers.",
    },
    {
      id: 5,
      name: "Carpet",
      img: img5,
      description: "A soft and warm bedroom carpet.",
    },
  ];

  return (
    <div className="bedroom-container mt-5">
      <h2 className="text-center">Welcome to the Bedroom</h2>
      <p className="text-center">
        The bedroom is a personal retreat, offering comfort and relaxation. It's
        designed to provide a peaceful ambiance for restful sleep, featuring
        cozy furnishings and elegant decor.
      </p>
      <h3 className="text-center">Bedroom Items:</h3>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
        {bedRoomItems.map((item) => (
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

export default BedRoomCards;
