import React, { Fragment, useEffect, useState } from 'react';
import H from './Home.css'
import logo from './photo/japanese-food.png'
import CaKe from './photo/Group.png'
import Drinks from './photo/Vector.png'
import MainDishes from './photo/Vector (1).png'
import Breakfast from './photo/Group (1).png'
import logo1 from './photo/image 110.png'
import Image from './photo/Image.png'
import Icon1 from './photo/bg.png'
import Icon2 from './photo/text.png'
import Mask1 from './photo/Mask group (1).png'
import Mask2 from './photo/Mask group (2).png'
import Mask3 from './photo/Mask group.png'
import kebab from './photo/kebab-set-table 1.png'
import mid from './photo/mid-shot-chef-holding-plate-with-pasta-making-ok-sign 1.png'
import sadj from './photo/sadj-iron-pot-with-various-salads 1.png'
import sour from './photo/sour-curry-with-snakehead-fish-spicy-garden-hot-pot-thai-food 1.png'
import card from './photo/card (1).png'
import features from './photo/features.png'
import pht1 from './photo/1.png'
import pht2 from './photo/2 (1).png'
import pht3 from './photo/3 (1).png'
import pht4 from './photo/4.png'
import pht5 from './photo/5.png'
import japanese2 from './photo2/japanese-food.png'
import Maskx from './photo2/col 3.png'
import { FaUser } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link, json } from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast';
import { CiLogout } from "react-icons/ci";
import Scroll from './Scroll/Scroll';
function Homepage() {
  let random = Math.floor(Math.random() * 360) + 1;
  const [DataUsers, SetDataUser] = useState();
  const [ChangeDisplay, SetChangeDisplay] = useState(false);
  const [DeleteData, SetDeleteData] = useState(true);
  useEffect(() => {
    try {
      if (localStorage.getItem("id") !== null) {
        let Pid = JSON.parse(localStorage.getItem("id"));
        axios
          .get(`http://localhost:5000/api/users/${Pid}`)
          .then((e) => {
            SetDataUser(e.data.data.products);
            toast(`Welcome ${e.data.data.products.username} Data Is Loading Now...!`);
            SetChangeDisplay(true);
          SetDeleteData(false);
          });
      } else {
        SetChangeDisplay(false);
        toast.error("You Must login to See Your Profile");
      }
    } catch (err) {
      console.log(err);
    }
  }, []);
  const RemoveData = () => {
    localStorage.removeItem("type");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("id");
    SetDeleteData(true);
    SetChangeDisplay(false);
    window.location.pathname = "/";
  };
useEffect(()=>{
  document.title=`Bistro Bliss Home` 
 })
  return (
    <Fragment>
      <Scroll/>
      <header className='Header'>
          <div className='TopBar'>
                  <div className='call'>
                  <LuPhone className='ph'/><h1 className='Phone'>(414) 857 - 0107</h1>
                  </div>                  
              <div className='mail'>
                
              <MdOutlineMailOutline className='Ma'/><h1 className='MailOutline'>yummy@bistrobliss</h1>
                  </div>
              <div className="cardd">
  <a className="socialContainer containerOne faster1" href="#">
    <svg viewBox="0 0 16 16" className="socialSvg instagramSvg"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path> </svg>
  </a>
  
  <a className="socialContainer containerTwo faster1" href="#">
    <svg viewBox="0 0 16 16" className="socialSvg twitterSvg"> <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path> </svg>              </a>
    
  <a className="socialContainer containerThree faster1" href="#">
    <svg viewBox="0 0 448 512" className="socialSvg linkdinSvg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
  </a>
  
  <a className="socialContainer containerFour faster1" href="#">
    <svg viewBox="0 0 16 16" className="socialSvg whatsappSvg"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path> </svg>
  </a>
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
            <div className='foxes'>
          <Link className={`foxese ${ChangeDisplay ? 'showProfile' : 'hidex'}`} to={'/UserProfile'}>
            {DataUsers && (
              <h1
              className="usernamez"
              style={{ backgroundColor: `hsl(${random}, 70%, 54%)` }}
              >
              {DataUsers?.username.split("").splice(0, 1).join(" ")}
            </h1>
            )}
          </Link>
          </div>
          </div>
          <div className='OneButtom'>
          <Link to={'/BookTable'}>
          <button class="button type1">
           <span class="btn-txt">Book A Table</span>
              </button>
          </Link>
          <Link to={'/register'} id='us' className={` ${'userLo'} ${ChangeDisplay ?  'hidex' : 'showProfile'}`}>
             <FaUser />
          </Link>
          <button className={`${'golfdantanto'} ${ DeleteData ? 'hidex' : 'showProfile'}`} onClick={()=>RemoveData()}><CiLogout /></button>
          </div>
      </header>
      <div className='Contener'>
      <img src={logo1} className="amges1" alt="logo" />
      <div data-aos="zoom-in-up">
      <h1 className='Bestfood'>Best food for your taste</h1>
      <p className='Discover'>Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
      </div>
      <Link to={'/BookTable'}>
      <button className='BookA'>Book A Table</button>
      </Link>
      <Link to={'/Menu'}>
      <button className='Explore'>Explore Menu</button>
      </Link>
      </div>
        <div className='cardworsd'>
          <h1 className='texttre'>Browse Our Menu</h1>
          <Link className='es' to={'/Breakfast'}>
          <div class="card">
         <div className='Breakfast'>
             <img src={Breakfast} className="Break" alt="logo"/>
         </div>
  <div class="card-details">
    <p class="text-title">Breakfast</p>
    <p class="text-body">In the new era of technology we look in the future with certainty and pride for our life.</p>
  </div>
  <button class="card-button">Explore Menu</button>
</div>
          </Link>
          <Link className='es' to={'/MainDish'}>
<div class="card1">
<div className='MainDishes'>
    <img src={MainDishes} className="Main" alt="logo" />
    </div>
  <div class="card-details1">
    <p class="text-title1">Main Dishes</p>
    <p class="text-body1">In the new era of technology we look in the future with certainty and pride for our life.</p>
  </div>
  <button class="card-button1">Explore Menu</button>
</div>
          </Link>
          <Link className='es' to={'/JoisDrin'}>
          <div class="card2">
  <div class="card-details2">
  <div className='Drinks'>
    <img src={Drinks} className="Dri" alt="logo" />
    </div>
    <p class="text-title2">Drinks</p>
    <p class="text-body2">In the new era of technology we look in the future with certainty and pride for our life.</p>
  </div>
  <button class="card-button2">Explore Menu</button>
</div>
          </Link>

          <Link className='es' to={'/BacerDesse'}>
<div class="card3">
  <div class="card-details3">
    <div className='boxCake'>
    <img src={CaKe} className="Cake" alt="logo" />
    </div>
    <p class="text-title3">Desserts</p>
    <p class="text-body3">In the new era of technology we look in the future with certainty and pride for our life.</p>
  </div>
  <button class="card-button3">Explore Menu</button>
</div>
          </Link>
        </div>
            
       <div className='bageContener'>
       
       <div className='smallcontener'>
       <div data-aos="zoom-in-up">
       <h1 className='wsten'>We provide healthy food for your family.</h1>
            <p className='pragraf1'>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</p>
            <p className='pragraf2'>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
       </div>
            <Link to={'/About'}>
            <button className='pragraf3'>More About Us</button>
            </Link>
        </div>
       <div className='tanton'>
        <div data-aos="fade-right"><img src={Image} className="ualus" alt="logo" /></div>
             <div className='smollalrds'>
             <div data-aos="fade-right"><img src={Icon1} className="ual1" alt="logo"/><img src={Icon2} className="ual2" alt="logo"/></div>
             </div>
       </div>
       </div>
       <div className='conteners1'>
           <h1 className='onetexts'>We also offer unique services for your events</h1>
           <div data-aos="zoom-in-right">
           <div className='fristtasc'>
           <img src={kebab} className="kebab" alt="logo"/>
           <p className='prafrafss1'>Caterings</p>
           <p className='prafrafss2'>In the new era of technology we look in the future with certainty for life.</p>
           </div>
           </div>
           <div data-aos="zoom-in-right">
           <div className='fristtasc2'>
           <img src={Mask2} className="Mask2" alt="logo"/>
           <p className='prafrafss3'>Birthdays</p>
           <p className='prafrafss4'>In the new era of technology we look in the future with certainty for life.</p>
           </div>
           </div>
           <div data-aos="zoom-in-left">
           <div className='fristtasc3'>
           <img src={Mask1} className="Mask1" alt="logo"/>
           <p className='prafrafss5'>Weddings</p>
           <p className='prafrafss6'>In the new era of technology we look in the future with certainty for life.</p>
           </div>
           </div>
           <div data-aos="zoom-in-left">
           <div className='fristtasc4'>
           <img src={Mask3} className="Mask3" alt="logo"/>
           <p className='prafrafss7'>Events</p>
           <p className='prafrafss8'>In the new era of technology we look in the future with certainty for life.</p>
           </div>
           </div>
       </div>
       <div className='Contenerst3'>
        <div className='Cont1'>
        <div data-aos="fade-right">
                     <div className='mid0'>
                        <img src={mid} className="mid" alt="logo"/>
                     </div>
                  </div>
                  <div data-aos="fade-left">
                <div className='sour0'>
                <img src={sour} className="sour" alt="logo"/>
                </div>
                  </div>
                  <div data-aos="fade-left">
            <div className='sadj0'>
            <img src={sadj} className="sadj" alt="logo"/>
            </div>
                  </div>
        </div>
        <div data-aos="zoom-in-up">
        <div className='Cont2'>
          <h1 className='honer1'>Fastest Food Delivery in City</h1>
          <p className='honer2'>Our visual designer lets you quickly and of drag a down your way to customapps for both keep desktop. </p>  
        <img src={features} className="features" alt="logo"/>
        </div>
        </div>
       </div>
       <div className='tarnadoo'>
        <h1 className='doslike'>What Our Customers Say</h1>
        <div className='bageplase'>
        <div data-aos="fade-down-right">
        <img src={card} className="cardstt" alt="logo"/>    
        </div>
        </div>
       </div>
       <div className='jaleconteners'>
          <div className='shildcontener'>
            <h1 className='donatalo'>Our Blog & Articles</h1>
            <Link to={'/Pages'}>
            <button className='botnsera'>Read All Articles</button>
            </Link>
          </div>
            <div className='controlamge'>
            <div data-aos="fade-down-right">
        <img src={pht1} className="pht1" alt="logo"/>    
              </div>      
              <div data-aos="fade-down-right">
        <div className='nilano'>
        <img src={pht2} className="pht2" alt="logo"/>
        </div>
        <div className='nilano1'>
         <img src={pht3} className="pht3" alt="logo"/>    
        </div>
        <div className='nilano2'>
        <img src={pht4} className="pht4" alt="logo"/>    
        </div>
        <div className='nilano3'>
        <img src={pht5} className="pht5" alt="logo"/>    
        </div>    
              </div>
            </div>
       </div>
       <div className='Maximnal'>
           <div className='UstosXicer'>
             <img src={japanese2} className="japanese2" alt="logo"/>
             <h1 className='textXicer'>Bistro Bliss</h1>
           </div>
           <p className='menytextXicer'>In the new era of technology we look a in the future with certainty and pride to for our company and.</p>
             <div className='ChildXicer'>
             <a className="socialContainerx containerOnex faster1" href="#">
    <svg viewBox="0 0 16 16" className="socialSvgx instagramSvgx"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path> </svg>
  </a>
  
  <a className="socialContainerx containerTwox faster1" href="#">
    <svg viewBox="0 0 16 16" className="socialSvgx twitterSvgx"> <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path> </svg>              </a>
    
  <a className="socialContainerx containerThreex faster1" href="#">
    <svg viewBox="0 0 448 512" className="socialSvgx linkdinSvgx"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
  </a>
  
  <a className="socialContainerx containerFourx faster1" href="#">
    <svg viewBox="0 0 16 16" className="socialSvgx whatsappSvgx"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path> </svg>
  </a>
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
  );
}

export default Homepage;