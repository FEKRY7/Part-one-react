import axios from 'axios';
import { useParams } from 'react-router-dom'; // Assuming you're using React Router for URL parameters
import React, { useEffect, useState } from 'react';

const UpdateComponent = () => {
  const { id } = useParams(); // Assuming your URL parameter is named 'id'

  // Initialize formData as an empty object
  const [formData, setFormData] = useState({});

  // Fetch data from the server when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/BookTable/${id}`);
        // Set formData to the received data
        setFormData(response.data.data.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Prepare data for PATCH request
      const data = {
        data: formData.data,
        time: formData.time,
        name: formData.name,
        phone: formData.phone,
        total: formData.total,
      };

      // Send PATCH request to update data
      await axios.patch(`http://localhost:5000/api/BookTable/${id}`, data);
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <div>
      <h1>Update Form</h1>
      <form onSubmit={handleSubmit}>
        {/* Your form inputs */}
        <input type="text" name="data" value={formData.data || ''} onChange={handleChange} />
        {/* Other inputs go here */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UpdateComponent;