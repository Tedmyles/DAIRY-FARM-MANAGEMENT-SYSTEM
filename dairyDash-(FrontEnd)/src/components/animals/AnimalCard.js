import React from 'react';
import './styles/AnimalCard.css'

const AnimalCard = ({ animal }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4"> {/* Adjusted max-width to max-w-xs */}
      {/* Update the image source to use the /images endpoint */}
      <div className='imgDiv' >
      <img className="w-full" src={`http://localhost:5000/images/${animal.image}`} alt={animal.breed} />
      </div>
     
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Tag ID: {animal.tagId}</div>
        <p className="text-gray-700 text-base">Breed: {animal.breed}</p>
      </div>
    </div>
  );
};

export default AnimalCard;
