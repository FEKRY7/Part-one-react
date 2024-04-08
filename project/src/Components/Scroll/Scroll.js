// import React, { useEffect, useState } from 'react';
// import { FcCollapse } from 'react-icons/fc';

// const Scroll = () => {
//   const [backtotop, setBacktotop] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 300) {
//         setBacktotop(true);
//       } else {
//         setBacktotop(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     // Cleanup function to remove the event listener when component unmounts
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const scrollUp = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   };

//   return (
//     <div className='top-btn-position'>
//       {backtotop && <FcCollapse onClick={scrollUp} />}
//     </div>
//   );
// };

// export default Scroll;


import React, { useEffect, useState } from 'react'
import { FcCollapse } from "react-icons/fc";
import { FcFlashOn } from "react-icons/fc";
import '../Home.css'
const Scroll = () => {
  const [backtotop,setBacktotop]=useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
           
        if(window.scrollY > 300){
            setBacktotop(true)
        }else{
            setBacktotop(false) 
        }
    })
  },[])
  const scrollUp =()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
  }
  return (
    // <div className='top-btn-position'>
    //     {backtotop && (
    //       <FcCollapse onClick={scrollUp}/>
    //     )}
    // </div>
    <div className='App'>
        {backtotop && (
        //  <button style={{
          // position:"fixed",
          // bottom:"50px",
          // right:"50px",
          // height:"50px",
          // width:"50px",
          // fontSize:"50px"
        //  }} onClick={scrollUp}>^</button>
        <FcCollapse onClick={scrollUp} className='tando'/>
        )}
    </div>
  )
    
}

export default Scroll