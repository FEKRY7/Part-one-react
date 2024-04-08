import React, { Fragment, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Products.css'
import { CgAdd } from "react-icons/cg";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import axios from 'axios';
import toast from 'react-hot-toast';
import Scroll from '../Scroll/Scroll';
const Products = () => {
	useEffect(()=>{
		document.title=`Bistro Bliss Products` 
	   })
  const navgite = useNavigate()
  const [isLoading,setisLoading]=useState(false)	
  const [curd,getcurd] = useState([])
	const [Mindch,getMindch] = useState([])
	const [drinks,getdrinks] = useState([])
	const [desserts,getdesserts] = useState([])
	const [delet,deletcurd] = useState([])
	const [deMain,deletMain] = useState([])
	const [deJois,deletJois] = useState([])
	const [deBacer,deletBacer] = useState([])
	useEffect(()=>{
		axios.get('http://localhost:5000/api/breakfast').then((ser)=>getcurd(ser.data.data.products))
		axios.get('http://localhost:5000/api/MainDish').then((ser)=>getMindch(ser.data.data.products))
		axios.get('http://localhost:5000/api/JoisDrin').then((ser)=>getdrinks(ser.data.data.products))
		axios.get('http://localhost:5000/api/BacerDesse').then((ser)=>getdesserts(ser.data.data.products))
	},[isLoading])

	const asd = async (_id) => {
		try {
      setisLoading(true)
		  const breakfast = await axios.delete(`http://localhost:5000/api/breakfast/${_id}`);
		  const MainDish = await axios.delete(`http://localhost:5000/api/MainDish/${_id}`);
		  const JoisDrin = await axios.delete(`http://localhost:5000/api/JoisDrin/${_id}`);
		  const BacerDesse = await axios.delete(`http://localhost:5000/api/BacerDesse/${_id}`);
		  // Assuming deletcurd is a function defined somewhere else
      setisLoading(false)
		  deletcurd(breakfast.data.data.products);
		  deletMain(MainDish.data.data.products);
		  deletJois(JoisDrin.data.data.products);
		  deletBacer(BacerDesse.data.data.products);
		} catch (error) {
		  console.error("An error occurred while deleting:", error);
		  // Handle errors as needed
		}
	  }

	  const [DataUsers, SetDataUser] = useState();
	  useEffect(() => {
		try {
		  
			if (localStorage.getItem("id") !== null) {
			  let Pid = JSON.parse(localStorage.getItem("id"));
			  axios
				.get(`http://localhost:5000/api/users/${Pid}`)
				.then((e) => {
					console.log()
					if(e.data.data.products.type === 'Admin'){
					  SetDataUser(e.data.data.products);
					  toast(`Welcome ${e.data.data.products.username}`);
					}
				});
		  
		  } else {
			toast.error("You Must login to See Your Profile");
		  }
		} catch (err) {
		  console.log(err);
		}
	  }, []);
  return (
<Fragment>
<Scroll/>
<div className='emartosx'>
<div class="button-containerz">
  <button class="buttonz" onClick={()=>navgite('/')}>
    <svg
      class="iconz"
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 1024 1024"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"
      ></path>
    </svg>
  </button>
  <button class="buttonz" onClick={()=>navgite('/Curd')}>
    <svg
      class="iconz"
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047 9.005 9.005 0 0 1 5.9 8.181.75.75 0 1 1-1.499.044 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.5-.045 9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"
      ></path>
    </svg>
  </button>

  <button class="buttonz" onClick={()=>navgite('/Products')}>
    <svg
      class="iconz"
      stroke="currentColor"
      fill="none"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke-linecap="round"
      stroke-linejoin="round"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="9" cy="21" r="1"></circle>
      <circle cx="20" cy="21" r="1"></circle>
      <path
        d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
      ></path>
    </svg>
  </button>
</div>

<div className='AmodeAldin'>
    <div className='TornadoKAlkota'>
    <h1 className='Parprosa'>Manage Employees</h1>
    {DataUsers && (
               <>
			<div className='Dolkeros'>            
              <h3>{DataUsers?.username}</h3>
            </div>
			<div className='Xstanosx'>
            <Link to={'/AddProduct'}>
          <button className='Lankrosa'><CgAdd className='wsttonesr'/> Add New Employee</button>
          </Link>
          </div>
		  <div className='figmansox'>
 <hr className='rodmabosx'/>
<table className="locantos">
				<thead className='manserto'>
					<div className='Bigenampsx'>
          <tr className='googlenampsx'>  
            <p className='lopb1x'>Title</p>
						<p className='lopb2x'>Name</p>
						<p className='lopb3x'>price</p>
						<p className='lopb4x'>avatar</p>
						<p className='lopb5x'>Actions</p>
					</tr>
          </div>
		  {isLoading?"Loading Data ...!":
              
				curd.map((el)=>
					<div className='foxBig1' key={el._id}>
					<hr className='rodmabos1x'/>
				 <div className='Bigenamps2x'>
				   <tr className='googlenamps2x'>
							   <th className='lopb1az'>{el.title}</th>
							   <th className='lopb1az'>{el.name}</th>
							   <th className='lopb1az'>{el.price}</th>
							   <th className='lopb1az'><img src={`http://localhost:5000/${el.avatar}`} className='tndros' alt="logo"/></th>
							   <th className='lopb1az'><Link to={`/Eidte/${el._id}`}><CiEdit className='CiEdit'/></Link> <MdDelete className='MdDelete' onClick={()=>asd(el._id)}/></th>
						   </tr>
				 </div>
					</div>
				)
			  }
                     {isLoading?"Loading Data ...!":
				Mindch.map((el)=>
					<div className='foxBig1' key={el._id}>
					<hr className='rodmabos1x'/>
				 <div className='Bigenamps2x'>
				   <tr className='googlenamps2x'>
							   <th className='lopb1az'>{el.title}</th>
							   <th className='lopb1az'>{el.name}</th>
							   <th className='lopb1az'>{el.price}</th>
							   <th className='lopb1az'><img src={`http://localhost:5000/${el.avatar}`} className='tndros' alt="logo"/></th>
							   <th className='lopb1az'><Link to={`/Eidte2/${el._id}`}><CiEdit className='CiEdit'/></Link> <MdDelete className='MdDelete' onClick={()=>asd(el._id)}/></th>
						   </tr>
				 </div>
					</div>
				)
			  }
                    {isLoading?"Loading Data ...!":
				drinks.map((el)=>
					<div className='foxBig1' key={el._id}>
					<hr className='rodmabos1x'/>
				 <div className='Bigenamps2x'>
				   <tr className='googlenamps2x'>
							   <th className='lopb1az'>{el.title}</th>
							   <th className='lopb1az'>{el.name}</th>
							   <th className='lopb1az'>{el.price}</th>
							   <th className='lopb1az'><img src={`http://localhost:5000/${el.avatar}`} className='tndros' alt="logo"/></th>
							   <th className='lopb1az'><Link to={`/Eidte3/${el._id}`}><CiEdit className='CiEdit'/></Link> <MdDelete className='MdDelete' onClick={()=>asd(el._id)}/></th>
						   </tr>
				 </div>
					</div>
				)
			  }
                    {isLoading?"Loading Data ...!":
				desserts.map((el)=>
					<div className='foxBig1' key={el._id}>
					<hr className='rodmabos1x'/>
				 <div className='Bigenamps2x'>
				   <tr className='googlenamps2x'>
							   <th className='lopb1az'>{el.title}</th>
							   <th className='lopb1az'>{el.name}</th>
							   <th className='lopb1az'>{el.price}</th>
							   <th className='lopb1az'><img src={`http://localhost:5000/${el.avatar}`} className='tndros' alt="logo"/></th>
							   <th className='lopb1az'><Link to={`/Eidte4/${el._id}`}><CiEdit className='CiEdit'/></Link> <MdDelete className='MdDelete' onClick={()=>asd(el._id)}/></th>
						   </tr>
				 </div>
					</div>
				)
			  } 
				</thead>
				</table>
                </div>
			   </>
          )}
	</div>
      
</div>
 
</div>

</Fragment>
  )
}

export default Products