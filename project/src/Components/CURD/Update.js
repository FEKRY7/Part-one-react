// import axios from 'axios';
// import React, { Fragment, useEffect, useState } from 'react';
// import { useLocation, useParams } from 'react-router-dom';
// const Update = () => {
//   const pid = useParams()
//   const id = pid.id
//   const [Data, setData] = useState('');
//   const [Time, setTime] = useState('');
//   const [Name, setName] = useState('');
//   const [Phone, setPhone] = useState('');
//   const [Total, setTotal] = useState('');
// const location = useLocation()
//  useEffect(()=>{
//   console.log(location);
//  },[])

//   const updateData = () => {
//     axios.patch(`http://localhost:5000/api/BookTable/${id}`, { Data, Time, Name, Phone, Total })
//       .then(res => {
//         console.log(res.data.data.products);
//       })
//   };  
//   return (
//     <Fragment>
      
//       <div className="tatristan">
//         <div className="mnsten">
//           <h1 className="textastan">Update Product</h1>
//         </div>
//         <form className="bagerform">
//           <div className="contenrtotl1">
//             <div className="conterx1">
//               <div className="contdata">
//                 <label>Data</label>
//               </div>
//               <input
//                 type="date"
//                 id="Data"
//                 name="data"
//                 placeholder="25/03/2024"
//                 value={Data}
//                 onChange={(e) => setData(e.target.value)}
//               />
//             </div>
//             <div className="conterx2">
//               <div className="contTime">
//                 <label>Time</label>
//               </div>
//               <input
//                 type="time"
//                 id="time"
//                 name="time"
//                 placeholder="06:30 PM"
//                 value={Time}
//                 onChange={(e) => setTime(e.target.value)}
//               />
//             </div>
//           </div>
//           <div className="contenrtotl2">
//             <div className="conterx3">
//               <div className="contName">
//                 <label>Name</label>
//               </div>
//               <input
//                 type="text"
//                 id="name"
//                 name="username"
//                 placeholder="Enter your name"
//                 value={Name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>
//             <div className="conterx4">
//               <div className="contPhone">
//                 <label>Phone</label>
//               </div>
//               <input
//                 type="number"
//                 id="phone"
//                 name="phone"
//                 placeholder="x-xxx-xxx-xxxx"
//                 value={Phone}
//                 onChange={(e) => setPhone(e.target.value)}
//               />
//             </div>
//           </div>
//           <div className="contenrtotl3">
//             <div className="conterx5">
//               <div className="contTotal">
//                 <label>Total Person</label>
//               </div>
//               <input
//                 type="text"
//                 name="total"
//                 id="total"
//                 placeholder="1 Person"
//                 value={Total}
//                 onChange={(e) => setTotal(e.target.value)}
//               />
//             </div>
//           </div>
//           <div className="conterx6">
//             <button className="contButton" onClick={updateData}>
//               Book A Table
//             </button>
//           </div>
//         </form>
//       </div>
//     </Fragment>
//   );
// };

// export default Update;






import axios from 'axios';
import { useParams } from 'react-router-dom'; // Assuming you're using React Router for URL parameters
import React, { Fragment, useEffect, useState } from 'react';

const Update = () => {
  const { id } = useParams(); // Assuming your URL parameter is named 'id'

  // Initialize formData as an empty object
  const [formData, setFormData] = useState({});
  // Fetch data from the server when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const breakfast = await axios.get(`http://localhost:5000/api/breakfast/${id}`);
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
      await axios.patch(`http://localhost:5000/api/breakfast/${id}`, data);
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };
  return (
    <Fragment>
<div className='slizes'>
     <form class="form" onSubmit={handleSubmit}>
    <div class="flex-column">
      <label>Title</label></div>
      <div class="inputForm">
        <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg"><g id="Layer_3" data-name="Layer 3"><path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path></g></svg>
        <input 
        //onChange={(e) => getEmail(e.target.value)}
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
    <button class="button-submit">Update</button>
    </form>
     </div>
    </Fragment>
  )
}

export default Update