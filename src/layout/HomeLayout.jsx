import React from 'react'
import { Outlet } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomeLayout = () => {
  return (
    <div>
      <Navbar/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default HomeLayout