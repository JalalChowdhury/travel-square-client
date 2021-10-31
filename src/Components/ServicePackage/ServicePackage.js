import React from 'react';
import { Link } from 'react-router-dom';
import './ServicePackage.css';
import { Button } from 'react-bootstrap';

const ServicePackage = (props) => {

    const { _id, title, image, price, description } = props.service;

    const serviceDetailURL = `/package/${_id}`;
    return (
        <div className=" card_container col my-2 d-flex flex-wrap justify-content-center align-items-center mb-4 ">
            <div className="card-design h-100 pb-3">


                <img className="card_img img-fluid p-2" src={image} alt="" />

                <div className="card_body">
                    <h4 className="card_text">{title}</h4>

                    <h5 className="card_text card-text" >$ {price}</h5>
                    <p className="card-text"><small>{description}</small></p>
                    {/* <p>{description}</p> */}

                    <Link to={serviceDetailURL}>
                        <Button className="btn-design">Details</Button>
                    </Link>



                </div>


            </div>

        </div>
    );
};

export default ServicePackage;