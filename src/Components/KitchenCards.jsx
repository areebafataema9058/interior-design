import React from "react";
import img1 from "../assets/images/kitchenimg1.jpg"
import img2 from "../assets/images/kitchenimg2.jpg"
import img3 from "../assets/images/kitchenimg3.jpg"
import img4 from "../assets/images/kitchenimg4.jpg"
import img5 from "../assets/images/kitchenimg5.jpg"
import "../css/KitchenCards.css"

const KitchenCards = () => {
  const kitchenItems = [
    {
      id: 1,
      name: "Refrigerator",
      img: img1,
      description: "A spacious refrigerator to keep your food fresh.",
    },
    {
      id: 2,
      name: "Oven",
      img: img2,
      description: "A modern oven for baking and roasting.",
    },
    {
      id: 3,
      name: "CrockeryShelf",
      img: img3,
      description: "A convenient crockery shelf for storing dishes.",
    },
    {
      id: 4,
      name: "Dishwasher",
      img: img4,
      description: "A dishwasher to ease your cleaning tasks.",
    },
    {
      id: 5,
      name: "Kitchen Island",
      img: img5,
      description: "A stylish kitchen island for extra space.",
    },
  ];

  return (
    <div className="kitchen-container mt-5">
      <h2 className="text-center">Welcome to the Kitchen</h2>
      <p className="text-center">
        The kitchen is the heart of the home, where delicious meals are prepared
        with love. It features modern appliances, ample storage, and stylish
        decor for a functional yet cozy atmosphere.
      </p>
      <h3 className="text-center">Kitchen Items:</h3>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
        {kitchenItems.map((item) => (
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

export default KitchenCards;
