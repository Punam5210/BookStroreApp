import React from "react";
import Navbar from "../component/navbar";
import Course from "../component/Course";
import Footer from "../component/Footer";
//import list from "../../public/list.json";
function Courses() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen">
      <Course/>
    </div>
    
    <Footer/>
    </>
    
  )
}

export default Courses;