import React, { Fragment, useEffect, useState } from 'react';
import './JoisDrin.css'
import logo from './../photo/japanese-food.png'
import sondar from './../photo2/logo.png'
import japanese2 from './../photo2/japanese-food.png'
import Maskx from './../photo2/col 3.png'
import { LuPhone } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link, json } from 'react-router-dom'
import axios from 'axios';
const JoisDrin = () => {
  useEffect(()=>{
    document.title=`Bistro Bliss JoisDrin` 
   })
    const [JoisDrin , setJoisDrin] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:5000/api/JoisDrin")
    .then((e)=>setJoisDrin(e.data.data.products))
  },[])
  return (
    <Fragment>
              <header className='Header'>
          <div className='TopBar'>
                  <div className='call'>
                  <LuPhone className='ph'/><h1 className='Phone'>(414) 857 - 0107</h1>
                  </div>                  
              <div className='mail'>
              <MdOutlineMailOutline className='Ma'/><h1 className='MailOutline'>yummy@bistrobliss</h1>
                  </div>
              <div className="cardd">
  <Link className="socialContainer containerOne faster1" href="#">
    <svg viewBox="0 0 16 16" className="socialSvg instagramSvg"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path> </svg>
  </Link>
  
  <Link className="socialContainer containerTwo faster1" href="#">
    <svg viewBox="0 0 16 16" className="socialSvg twitterSvg"> <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path> </svg>              </Link>
    
  <Link className="socialContainer containerThree faster1" href="#">
    <svg viewBox="0 0 448 512" className="socialSvg linkdinSvg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
  </Link>
  
  <Link className="socialContainer containerFour faster1" href="#">
    <svg viewBox="0 0 16 16" className="socialSvg whatsappSvg"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path> </svg>
  </Link>
</div>
          </div>
          <div className='onepage'>
          <img src={logo} className="amges" alt="logo" />
          <h1 className='onetext'>Bistro Bliss</h1>
          </div>
          <div className='TowBage'>
          <Link to={'/'} id='the1'>Home</Link>
            <Link to={'/About'} id='the1'>About</Link>
            <Link to={'/Menu'} id='the1'>Menu</Link>
            <Link to={'/Pages'} id='the1'>Pages</Link>
            <Link to={'/Contact'} id='the1'>Contact</Link>
          </div>
          <div className='OneButtom'>
          <Link to={'/BookTable'}>  
          <button class="button type1">
           <span class="btn-txt">Book A Table</span>
              </button>
          </Link>
          </div>
      </header>
      <div className='shanderbagxc'>
        <div className='alxsander'>
      <div data-aos="zoom-in-up">
            <h1 className='alxtext'>JoisDrin</h1>
            <p className='alexpragraf'>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
        </div>
      </div>
      <div data-aos="zoom-in-up">
        <div className='tanoraconter'>
            <Link to={'/Menu'}>
        <button className='bot1xmj'>All</button>
            </Link>
            <Link to={'/Breakfast'}>
            <button className='bot2xmj'>Breakfast</button>
            </Link>
            <Link to={'/MainDish'}>
            <button className='bot3xmj'>Main Dishes</button>
            </Link>
            <Link to={'/JoisDrin'}>
            <button className='bot4xmj'>Drinks</button>
            </Link>
            <Link to={'/BacerDesse'}>
            <button className='bot5xmj'>Desserts</button>
            </Link>
        </div>
      </div>
        <div className='contenerbox'>
            {
              JoisDrin?.map((el)=> <div className='box3' key={el._id}>
              <img src={`http://localhost:5000/${el.avatar}`} className="logov1" alt="logo" />
              <h1 className='pricse'>{el.price}</h1>   
              <h1 className='types'>{el.name}</h1>
              <p className='vitino'>Made with eggs, lettuce, salt, oil and other ingredients.</p>   
              </div>)
            }
        </div>
      </div>
      <div className='tigertos'>
        <div className='fingerta'>
          <h1 className='textlargs'>You can order through apps</h1>
          <p className='marmatoler'>Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor semper.</p>
        </div>
        <div className='controlers'>
        <img src={sondar} className="sondar" alt="logo" />
        </div>
      </div>
      <div className='Maximnal'>
           <div className='UstosXicer'>
             <img src={japanese2} className="japanese2" alt="logo"/>
             <h1 className='textXicer'>Bistro Bliss</h1>
           </div>
           <p className='menytextXicer'>In the new era of technology we look a in the future with certainty and pride to for our company and.</p>
             <div className='ChildXicer'>
             <Link className="socialContainerx containerOnex faster1" href="#">
    <svg viewBox="0 0 16 16" className="socialSvgx instagramSvgx"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path> </svg>
  </Link>
  
  <Link className="socialContainerx containerTwox faster1" href="#">
    <svg viewBox="0 0 16 16" className="socialSvgx twitterSvgx"> <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path> </svg>              </Link>
    
  <Link className="socialContainerx containerThreex faster1" href="#">
    <svg viewBox="0 0 448 512" className="socialSvgx linkdinSvgx"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
  </Link>
  
  <Link className="socialContainerx containerFourx faster1" href="#">
    <svg viewBox="0 0 16 16" className="socialSvgx whatsappSvgx"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path> </svg>
  </Link>
             </div>
             <div className='contenertstext'>
              <p className='PagesXicer'>Pages</p>
              <p className='HomeXicer'>Home</p>
              <p className='AboutXicer'>About</p>
              <p className='MenuXicer'>Menu</p>
              <p className='PricingXicer'>Pricing</p>
              <p className='BlogXicer'>Blog</p>
              <p className='ContactXicer'>Contact</p>
              <p className='DeliveryXicer'>Delivery</p>
             </div>
             <div className='contenertstext2'>
             <p className='UtilityXicer'>Utility Pages</p>
              <p className='StartHereXicer'>Start Here</p>
              <p className='StyleguideXicer'>Styleguide</p>
              <p className='PassworXicer'>Password Protected</p>
              <p className='NotXicer'>404 Not Found</p>
              <p className='LicensesXicer'>Licenses</p>
              <p className='ChangXicer'>Changelog</p>
              <p className='ViewXicer'>View More</p>
             </div>
                 <div className='BostaXicer'>
                 <div data-aos="zoom-in-up">
                  <img src={Maskx} className="Maskx" alt="logo"/>
                 </div>
               </div>
               <div className='juiner'>
                <hr className='hrstyling'/>
                <p className='textend'>Copyright © 2023 Hashtag Developer. All Rights Reserved</p>
               </div>
       </div>
    </Fragment>
  )
}

export default JoisDrin
