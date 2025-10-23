import './App.css';
import CarCard from './components/CarCard.jsx';
import carData from './data/carDetails.js';

function App() {
  return (
    <div className="car-container">
      {carData.map((car) => (
        <CarCard
          key={car.id}
          img={car.img}
          name={car.name}
          desc={car.desc}
        />
      ))}
    </div>
  );
}

export default App;
