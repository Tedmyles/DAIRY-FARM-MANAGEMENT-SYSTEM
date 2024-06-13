import React, { useState } from 'react';
import axios from 'axios';
import './styles/addAnimal.css';
import { BASE_URL } from '../../config/urlConfig';

const AddAnimalModal = ({ showModal, handleCloseModal }) => {
  const [formData, setFormData] = useState({
    imageUrl: '',
    tagId: '',
    breed: ''
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = new FormData();
      form.append('image', formData.imageUrl ? formData.imageUrl : ''); // Ensure imageUrl is not undefined
      form.append('tagId', formData.tagId);
      form.append('breed', formData.breed);
  
      const response = await axios.post(`${BASE_URL}/animals`, form, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      console.log('Animal added successfully:', response.data);
      handleCloseModal();
    } catch (error) {
      console.error('Error adding animal:', error.response ? error.response.data : error.message);
      setError(error.response ? error.response.data.message : 'Error adding animal');
    }
  };
  
  return (
    showModal && (
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <form onSubmit={handleSubmit}>
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Add Animal</h3>
                    <div className="mt-4">
                      <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
                      <input type="file" name="image" id="image" className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" onChange={(e) => setFormData({ ...formData, imageUrl: e.target.files[0] })} />
                    </div>
                    <div className="mt-4">
                      <label htmlFor="tagId" className="block text-sm font-medium text-gray-700">Tag ID</label>
                      <input type="text" name="tagId" id="tagId" className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" onChange={handleChange} />
                    </div>
                    <div className="mt-4">
                      <label htmlFor="breed" className="block text-sm font-medium text-gray-700">Breed</label>
                      <input type="text" name="breed" id="breed" className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" onChange={handleChange} />
                    </div>
                    {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
                    <div className="mt-6">
                      <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Submit
                      </button>
                      <button type="button" className="ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" onClick={handleCloseModal}>
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default AddAnimalModal;
