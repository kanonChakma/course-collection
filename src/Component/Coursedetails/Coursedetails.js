import React from 'react';
const Coursedetails = (props) =>{
    const {instructor,length,name,fee,Description,img,students}=props.course;
    console.log(img)
    return (
        <div className="col-md-4"> 
             <div className="card">
            <div className="bg-secondary proper text-white">
                 <img src={img} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h3 className="card-title font-weight-bold">{name}</h3>
                     <p className="card-text">{Description}</p>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Course Fee</td>
                                    <td>:${fee}</td>
                                </tr>
                                <tr>
                                    <td>Enroll Students</td>
                                    <td>:{students}</td>
                                </tr>
                                <tr>
                                    <td>Course length</td>
                                    <td>:{length}</td>
                                </tr>
                                <tr>
                                    <td>Course instructor</td>
                                    <td>:{instructor}</td>
                                </tr>
                            </tbody>
                        </table>
                     <button onClick={()=>props.courseHandle(props.course)} className="btn text-white bg-dark mt-2">Enroll Now</button>
                </div>
              </div>
           </div>
        </div>
    );
};

export default Coursedetails;