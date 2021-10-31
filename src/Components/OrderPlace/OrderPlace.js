import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Hook/useAuth';
import './OrderPlace.css';

const OrderPlace = () => {
    const { user } = useAuth();

    const { serviceId } = useParams();
    const [service, setService] = useState({})

    useEffect(() => {

        const url = `http://localhost:5000/services/${serviceId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))

    }, [])

    const handlePlaceOrder = () => {
        // fetch for .. 
        fetch("http://localhost:5000/addOrder", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                userName: user.displayName,
                userEmail: user.email,
                serviceTitle: service.title,
                servicePrice: service.price,
                status: "PENDING",
                bookingDate: new Date().toDateString('dd/mm/yyyy'),
                bookingTime: new Date().toTimeString()



            })


        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Successfully placed order");

                }
            })

    }




    return (
        <div className="orderDetails">
           


            <div className=" detailsCard_container col my-2 d-flex flex-wrap justify-content-center align-items-center mb-4">
                <div className="detailsCard-design h-100">


                    <img className="detailsCard-img img-fluid p-2" src={service.image} alt="" />

                    <div className="detailsCard_body p-2">

                        <h4>{service.title}</h4>
                        <h5>${service.price}</h5>
                        <p>{service.description}</p>

                        <br />
                        <h4>My Information:</h4>
                        <h5>Name : {user.displayName}</h5>
                        <p>Email : {user.email}</p>
                        <br />
                        <br />
                        <Button className="btn-design" onClick={handlePlaceOrder}>Order Place</Button>


                    </div>


                </div>

            </div>


        </div>
    );
};

export default OrderPlace;