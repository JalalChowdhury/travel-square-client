import React, { useRef } from 'react';
import './AddNewServices.css';
import headerBanner from '../../assets/banner2.jpg';




const AddNewServices = () => {

    const titleRef = useRef();
    const imageRef = useRef();
    const priceRef = useRef();
    const descriptionRef = useRef();

    const handleAddServices = e => {
        const title = titleRef.current.value;
        const image = imageRef.current.value;
        const price = priceRef.current.value;
        const description = descriptionRef.current.value;

        const newUser = { title, image, price, description };

        // fetch for .. 
        fetch("https://dreadful-vampire-25678.herokuapp.com/services", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)


        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Successfully added the Services");
                    e.target.reset();
                }
            })
        e.preventDefault();
    }




    return (
        <div className="addServices">


            <div>
                <img src={headerBanner} className="img-fluid addServiceBanner" alt="" />
                <div className="addService-bodyDesign">
                   
                    <h1 id="addService-header1">A Best Place To Stay</h1>
                    <h2>Add a new services</h2>
                    
                    




                </div>
            </div>
            <div className='my-4'>
               

                <form className="addServices-form" onSubmit={handleAddServices}>

                    <div class="form-group addService">

                        <input type="serviceName" className="form-control mb-2" placeholder="Service Title" ref={titleRef} />

                    </div>
                    <div class="form-group addService">

                        <input type="serviceImg" className="form-control mb-2" placeholder="Image URL" ref={imageRef} />

                    </div>
                    <div class="form-group addService">

                        <input type="servicePrice" className="form-control mb-2" placeholder="Price" ref={priceRef} />

                    </div>
                    <div class="form-group addService">

                        <textarea class="form-control mb-4" rows="3" placeholder="Services for sort Description" ref={descriptionRef} ></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary mx-auto" >Add Services</button>


                </form>
            </div>
        </div>
    );
};

export default AddNewServices;