import React, { useEffect, useState } from 'react';
import ServicePackage from '../../Components/ServicePackage/ServicePackage';

import './Packages.css';


const Packages = () => {

    // all services 
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://dreadful-vampire-25678.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])

    return (
        <div className="packages">

            <div className='d-flex justify-content-center align-items-center'>
                <div>
                    <h1 className=" text-center my-5">Our <span className="blue-color">Packages</span></h1>
                    <div className="row row-cols-1 row-cols-lg-3 g-4 px-5 mx-auto">

                        {/* <div className="d-flex flex-wrap  justify-content-center align-items-center mx-2"> */}
                        {
                            services?.map(service =>

                                <ServicePackage
                                    key={service._id}
                                    service={service}
                                >
                                </ServicePackage>
                            )
                        }

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Packages;