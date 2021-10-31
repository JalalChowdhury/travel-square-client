import React, { useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import Experience from '../../Components/Experience/Experience';
import FAQ from '../../Components/FAQ/FAQ';
import Reviews from '../../Components/Reviews/Reviews';
import ServicePackage from '../../Components/ServicePackage/ServicePackage';
import headerBanner from '../../assets/header-banner.jpg';
import './Home.css';
import { useHistory } from 'react-router-dom';
//for spinner
// import { css } from "@emotion/react";




const Home = () => {

    // all services 
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://dreadful-vampire-25678.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])

    const historyServices = useHistory();
    const handleClickPackages = () => {
        historyServices.push('/packages');
    }

    // get fisrt 6 items in services 
    const topServices = services.slice(0, 6);



    return (
        <div className="home" >


            <div>
                <img src={headerBanner} className="img-fluid homeBanner" alt="" />
                <div className="header-bodyDesign">

                    <h1 id="home-header1">Let's Make Your Best </h1>
                    <h1 id="home-header1">Trip Ever</h1>
                    <p id="home-header2" className="home-text my-3">Plan and book your perfect trip with expert advice travel tips,destination information and inspiration from us.</p>

                    <Button onClick={handleClickPackages} className="servicBtn-design me-3 ">View Packages</Button>




                </div>
            </div>


            <div>
                <Experience></Experience>
            </div>

            {
                services ? <div className='d-flex justify-content-center align-items-center packages-bg'>
                    <div>
                        <h2 className=" text-center my-5 py-5">Popular <span className="blue-color">Packages</span></h2>
                        <div className="row row-cols-1 row-cols-lg-3 g-4 px-5 mx-auto">

                            {/* <div className="d-flex flex-wrap  justify-content-center align-items-center mx-2"> */}
                            {
                                topServices?.map(service =>

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
                    :

                    // <Spinner animation="grow" variant="info" />
                    <Spinner animation="border" variant="danger" />

            }

            <div>
                <FAQ></FAQ>
            </div>

            <div>
                <Reviews></Reviews>
            </div>




        </div>
    );
};

export default Home;