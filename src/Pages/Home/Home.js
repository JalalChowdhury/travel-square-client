import React, { useEffect, useState } from 'react';
import Experience from '../../Components/Experience/Experience';
import FAQ from '../../Components/FAQ/FAQ';
import ServicePackage from '../../Components/ServicePackage/ServicePackage';
// import TravelersReviews from '../../components/TravelersReviews/TravelersReviews';

import "./Home.css";
const Home = () => {
   
     // all services 
     const [services, setServices] = useState([]);

     useEffect(() => {
         fetch('http://localhost:5000/services')
             .then(res => res.json())
             .then(data => setServices(data))
 
     }, [])
 
     // get fisrt 6 items in services 
     const topServices = services.slice(0, 6);
 
     
     
     return (
         <div className="home" >


             <div>
                 <Experience></Experience>
             </div>
 
             <div className='d-flex justify-content-center align-items-center'>
                 <div>
                     <h2 className=" text-center my-5">OUR <span className="blue-color">SERVICES</span></h2>
                     <div className="row row-cols-1 row-cols-lg-3 g-4 px-5 mx-auto">
 
                         {/* <div className="d-flex flex-wrap  justify-content-center align-items-center mx-2"> */}
                         {
                             topServices?.map(service =>
 
                                 <ServicePackage
                                     key={service.id}
                                     service={service}
                                 >
                                 </ServicePackage>
                             )
                         }
 
                     </div>
 
                 </div>
             </div>

             <div>
                 <FAQ></FAQ>
             </div>

             {/* <div>
                 <TravelersReviews></TravelersReviews>
             </div> */}
             
 
 
 
         </div>
     );
};

export default Home;