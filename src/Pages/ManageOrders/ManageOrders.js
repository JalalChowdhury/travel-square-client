// import Dropdown from '@restart/ui/esm/Dropdown';
import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownButton, Table } from 'react-bootstrap';
import './ManageOrders.css';



const ManageOrders = () => {

    const [ordersData, setOrdersData] = useState([]);
    // const [orderStatus, setOrderStatus] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => {
                setOrdersData(data);

            })

    }, [])

    //
    // const ostatus = [];
    // ordersData.map(o => ostatus.push({ id: o._id, status: o.status }));
    // useEffect(() => {


    //     setOrderStatus(ostatus);
    // }, [])
    // console.log(ostatus);

    const handleStatusUpdate = (id, status) => {
        fetch(`http://localhost:5000/updateOrderStatus`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                orderId: id,
                status: status
            })
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    const newOrders = [...ordersData];

                    newOrders.forEach(order => {
                        if (order._id === id) {
                            order.status = status;
                        }
                    })

                    setOrdersData(newOrders);
                    // console.log(result);
                    // // setOrderStatus({id:id,status:status});
                    // const newOrderStatus = [...orderStatus];
                    // // const Idx = newOrderStatus.indexOf(order => order.id === id);
                    // // console.log("Idx ", Idx);
                    // // if (Idx) {
                    // //     newOrderStatus[Idx].status = status
                    // // }
                    // for(let i=0;i<newOrderStatus.length;i++){
                    //     if(newOrderStatus[i].id === id){
                    //         newOrderStatus[i].status = status ;
                    //         break;
                    //     }
                    // }
                    // setOrderStatus(newOrderStatus);
                }

            })
    }

    return (
        <div>
            <h1>Manage orders</h1>

            <div className="table-div">
                <Table striped bordered hover  size="md" >
                    <thead>
                        <tr>
                            
                            <th>Name</th>
                            <th>Email</th>
                            <th>Service Title</th>
                            <th>Price</th>
                            <th>Booking Date</th>
                            <th>Status</th>

                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            ordersData?.map(order =>
                                <tr>
                                 
                                    <td>{order.userName}</td>
                                    <td>{order.userEmail}</td>

                                    <td>{order.serviceTitle}</td>
                                    <td>${order.servicePrice}</td>
                                    <td>{order.bookingDate}</td>

                                   
                                    <td>{order.status}</td>
                                    <td>
                                        <DropdownButton id="dropdown-basic-button" alignRight variant='info' title="Update Status" >
                                            <Dropdown.Item onClick={() => handleStatusUpdate(order._id, "PENDING")} >Pending</Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleStatusUpdate(order._id, "ONGOING")} >Ongoing</Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleStatusUpdate(order._id, "DONE")} >Done</Dropdown.Item>
                                        </DropdownButton>
                                    </td>

                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>


        </div >
    );
};

export default ManageOrders;