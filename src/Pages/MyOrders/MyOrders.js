
// import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Table,Button } from 'react-bootstrap';
import useAuth from '../../Hook/useAuth';
import './MyOrders.css';

const MyOrders = () => {
    const { user } = useAuth();

    const [orders, setOrders] = useState([]);

    let index = 1;

    useEffect(() => {
        fetch('https://dreadful-vampire-25678.herokuapp.com/userOrders?email=' + user.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',

            }
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleOrderCancel = id => {
        fetch(`https://dreadful-vampire-25678.herokuapp.com/cancelOrder/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result) {
                    const newOrders= orders.filter(order=> order._id !== id);
                    setOrders(newOrders)
                }
            })
    }






    return (
        <div className="py-5">
            
            <h3>Name : {orders[0]?.userName}</h3>
            <h3>Email : {orders[0]?.userEmail}</h3>
            <div className="table-div">
                <Table striped bordered hover >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Service Title</th>
                            <th>Price</th>
                            <th>Booking Date</th>

                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map(order =>
                                <tr>
                                    <td>{index++}</td>
                                    <td>{order.serviceTitle}</td>
                                    <td>{order.servicePrice}</td>
                                    <td>{order.bookingDate}</td>

                                    <td><Button onClick={() => handleOrderCancel(order._id)} variant='danger'>Cancel Order</Button></td>

                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>

        </div>
    );
};

export default MyOrders;