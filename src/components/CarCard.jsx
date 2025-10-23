import React from 'react';

function CarCard({ img, name, desc }) {
  return (
    <div className="car-card">

      <h2 className="card-name">{name}</h2>
      <p className="card-desc">{desc}</p>
      <button className="rent-btn">Rent Now</button>
    </div>
  );
}

export default CarCard;
