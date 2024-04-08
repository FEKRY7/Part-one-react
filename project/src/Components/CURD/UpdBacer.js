import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'; // Assuming you're using React Router for URL parameters
import React, { Fragment, useEffect, useState } from 'react';

const UpdBacer = () => {
  const { id } = useParams(); // Assuming your URL parameter is named 'id'

  // Initialize formData as an empty object
  const [formData, setFormData] = useState({});
  // Fetch data from the server when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const breakfast = await axios.get(`http://localhost:5000/api/BacerDesse/${id}`);
        // Set formData to the received data
        setFormData(breakfast.data.data.products);
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
        title: formData.title,
        name: formData.name,
        price: formData.price,
      };

      // Send PATCH request to update data
      await axios.patch(`http://localhost:5000/api/BacerDesse/${id}`, data);
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };
  return (
    <Fragment>
<div className='slizes'>
     <form class="form"  onSubmit={handleSubmit}>
    <div class="flex-column">
      <label>Title</label></div>
      <div class="inputForm">
        <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg"><g id="Layer_3" data-name="Layer 3"><path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path></g></svg>
        <input
        name="title" 
        type="text" 
        class="input" 
        placeholder="Enter your Title"
        value={formData.title || ''} 
        onChange={handleChange}
        />
      </div>
      <div class="flex-column">
      <label>Name </label></div>
      <div class="inputForm">
        <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg"><g id="Layer_3" data-name="Layer 3"><path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path></g></svg>
        <input 
        //onChange={(e) => getEmail(e.target.value)}
        name="name" 
        type="text" 
        class="input" 
        placeholder="Enter your Name"
        value={formData.name || ''} 
        onChange={handleChange}
        />
      </div>
      <div class="flex-column">
      <label>Price </label></div>
      <div class="inputForm">
        <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg"><g id="Layer_3" data-name="Layer 3"><path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path></g></svg>
        <input 
        //onChange={(e) => getEmail(e.target.value)}
        name="price" 
        type="text" 
        class="input" 
        placeholder="Enter your Price"
        value={formData.price || ''} 
        onChange={handleChange}
        />
      </div>
    <button class="button-submit" >Update</button>
    </form>
     </div>
    </Fragment>
  )
}

export default UpdBacer