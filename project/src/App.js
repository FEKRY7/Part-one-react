
import React from 'react';
import './App.css';
import { Routes,Route } from "react-router-dom"
import Home from './Components/Homepage.js'
import About from './Components/About.js'
import Menu from './Components/Menu.js'
import BookTable from './Components/BookTable.js'
import Page from './Components/Page.js'
import Contact from './Components/Contact.js'
import Login from './Components/sing in and up/Login/Login.jsx'
import Register from './Components/sing in and up/Register/Register.jsx'
import Breakfast from './Components/RoseName/Aston.js';
import MainDish from './Components/RoseName/MainDish.js';
import JoisDrin from './Components/RoseName/JoisDrin.js';
import BacerDesse from './Components/RoseName/BacerDesse.js';
import Update from './Components/CURD/Update.js';
import Curd from './Components/CURD/Curd.js';
import Products from './Components/CURD/Products.js';
import EditProduct from './Components/CURD/EditProduct.jsx';
import Updmain from './Components/CURD/Updmain.js';
import UpdBacer from './Components/CURD/UpdBacer.js';
import UpdJois from './Components/CURD/UpdJois.js';
import AddProduct from './Components/CURD/AddProduct.js';
import UserProfile from './Components/UserProfile.js';
import Profile from './Components/sing in and up/Profile/Profile.jsx';
import { Toaster } from "react-hot-toast";
import NoPage from './Components/NoPage.js'
function App() {
  return (
<>
    <Toaster position="top-center" reverseOrder={true} />
    <Routes>      
    <Route path="/" element={<Home/>}/>  
    <Route path="/About" element={<About/>}/>  
    <Route path="/Menu" element={<Menu/>}/>  
    <Route path="/BookTable" element={<BookTable/>}/>    
    <Route path="/Pages" element={<Page/>}/>    
    <Route path="/Contact" element={<Contact/>}/>    
    <Route path="/register" element={<Login/>} />
    <Route path="/register/signup" element={<Register/>}/>
    <Route path="/Breakfast" element={<Breakfast/>}/>
    <Route path="/MainDish" element={<MainDish/>}/>
    <Route path="/JoisDrin" element={<JoisDrin/>}/>
    <Route path="/BacerDesse" element={<BacerDesse/>}/>
    <Route path="/Curd" element={<Curd/>}/>
    <Route path="/Update/:id/edit" element={<EditProduct/>}/>
    <Route path="/Eidte/:id" element={<Update/>}/>
    <Route path="/Eidte2/:id" element={<Updmain/>}/>
    <Route path="/Eidte3/:id" element={<UpdJois/>}/>
    <Route path="/Eidte4/:id" element={<UpdBacer/>}/>
    <Route path="/Products" element={<Products/>}/>
    <Route path="/AddProduct" element={<AddProduct/>}/>
    <Route path="/Profile" element={<Profile/>}/>
    <Route path="/UserProfile" element={<UserProfile/>}/>
    <Route path="*" element={<NoPage/>} />
    </Routes>
</>
  );
}

export default App;
