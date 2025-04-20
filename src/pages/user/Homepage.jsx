import React from 'react'
import { Outlet } from "react-router-dom";
import Heropage from '../../components/user/Heropage';
import Productpage from './Productpage';

function HomePage() {
   

  return (
   <div >
     <Heropage/>
     <Productpage/>

    <Outlet />
    </div>
   
    
  
  )
}

export default HomePage