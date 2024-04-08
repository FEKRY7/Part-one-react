import axios from 'axios';
import React, { Fragment, useState } from 'react';

const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [avater, setAvatar] = useState(null); // Change avater to avatar

  const submit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('name', name);
    formData.append('price', price);
    formData.append('avatar', avater); // Append avatar to formData

    axios.post("http://localhost:5000/api/BacerDesse", formData)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleFileChange = (e) => {
    setAvatar(e.target.files[0]);
  };

  return (
    <Fragment>
      <div className='slizes'>
        <form className="form" onSubmit={submit}>
          <div className="flex-column">
            <label>Title</label>
            <div className="inputForm">
              <input
                name="title"
                type="text"
                className="input"
                placeholder="Enter your Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
          <div className="flex-column">
            <label>Name</label>
            <div className="inputForm">
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Enter your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex-column">
            <label>Price</label>
            <div className="inputForm">
              <input
                name="price"
                type="text"
                className="input"
                placeholder="Enter your Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
          <div className="container">
            <label htmlFor="file" className="footer">
              <p>{avater ? avater.name : 'Not selected file'}</p>
            </label>
            <input id="file" type="file" onChange={handleFileChange} />
          </div>
          <button type="submit" className="button-submit">Send</button>
        </form>
      </div>
    </Fragment>
  );
};

export default AddProduct;

