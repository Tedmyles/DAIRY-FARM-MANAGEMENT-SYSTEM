import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AnimalCard from './AnimalCard';
import AddAnimalModal from './AddAnimalModal'; // Import the AddAnimalModal component


const AnimalsPage = () => {
  const [animals, setAnimals] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/animals');

        setAnimals(response.data);
      } catch (error) {
        console.error('Error fetching animals:', error);
      }
    };

    fetchAnimals();
  }, []);

  const handleAddAnimal = () => {
    // Logic to open the modal
    setShowModal(true);
  };

  const handleCloseModal = () => {
    // Logic to close the modal
    setShowModal(false);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold my-4">Cows</h1>
      <div className="flex justify-end mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleAddAnimal}
        >
          Add Animal
        </button>
      </div>
      <div className="flex flex-wrap -mx-4">
        {animals.map(animal => (
          <AnimalCard key={animal._id} animal={animal} />
        ))}
      </div>
      {/* Render the AddAnimalModal component */}
      <AddAnimalModal showModal={showModal} handleCloseModal={handleCloseModal} />
    </div>
  );
};

export default AnimalsPage;
