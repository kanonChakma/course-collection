import React from 'react';
const Coursecart = (props) =>{
    const{name,fee}=props.course;

    // const price=cart.reduce((sum,item)=>sum+item.fee,0)
    return (
        <div className="bg-dark course-cart row ml-4 t text-white">
           <div className="col-md-9">
               {name}
           </div>
           <div className="col-md-3">
               ${fee}
           </div>
        </div>
    );
};

export default Coursecart;