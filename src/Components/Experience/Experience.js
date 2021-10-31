import React from 'react';
import './Experience.css';
import experience_people from '../../assets/experience-people.png';
import experience_destination from '../../assets/experience-destination.png';
import experience_trips from '../../assets/experience-trips.png';
const Experience = () => {
    return (
        <div className="text-center experience py-5">
            <h1>The Most <span className="blue-color">Perferred</span></h1>
            <p>We have devoloped into a service that provides better and most trusted travel</p>
            <p>in the past more than 5 years with the achivements</p>


            <div className="row container mx-auto mt-3">
                <div className="col-md-4 mx-auto">
                    <div className="">
                        <img src={experience_people} className="experince-imageDesign" alt="" />
                    </div>
                    <div>
                        <h2>10000+</h2>
                        <h5>Our Explorers</h5>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="">
                        <img src={experience_destination} className="experince-imageDesign" alt="" />
                    </div>
                    <div>
                        <h2>100+</h2>
                        <h5>Destinations</h5>
                    </div>
                </div>
                <div className="col-md-4 mx-auto">
                    <div className="">
                        <img src={experience_trips} className="experince-imageDesign" alt="" />
                    </div>
                    <div>
                        <h2>1200+</h2>
                        <h5>More Trips</h5>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Experience;