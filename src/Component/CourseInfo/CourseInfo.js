import React from 'react';
import fakeData from '../../FakeData/FakeData'
import { useState } from 'react';
import Coursedetails from '../Coursedetails/Coursedetails';
import Coursecart from '../Coursecart/Coursecart';
const CourseInfo = () => {
  const[user,setUser]=useState(fakeData);
  const[course,setCourse]=useState([]);

  const courseHandle=(data)=>{
    const newCourse=[...course,data];
    setCourse(newCourse);
   }
    const totalprice=course.reduce((sum,item)=>sum+item.fee,0);
    return (
    <div className="container-fluid">
        <div className="row">
          <div className="col-md-9 row card-deck">
             {user.map(data=><Coursedetails courseHandle={courseHandle} course={data}></Coursedetails>)}
          </div>
          <div className="col-md-3">
              <h3 className="bg-dark ml-4 mt-3 p-2 text-white">You have selected :{course.length}</h3>
              {course.map(value=><Coursecart course={value}></Coursecart>)}
              {/* <Coursecart course={course}></Coursecart> */}
               <h4 className="text-danger ml-4 mt-5 bg-dark">Course Total Price:${totalprice}</h4>
               <button className="btn btn-dark">Review Your Order</button>
          </div>
         </div>
    </div>
    );

};
export default CourseInfo;