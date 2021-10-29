import React, { useRef } from 'react';
import './AddNewServices.css';
const AddNewServices = () => {

    const titleRef = useRef();
    const imageRef = useRef();
    const priceRef = useRef();
    const descriptionRef = useRef();

    const handleAddServices = e =>{
        const title = titleRef.current.value;
        const image = imageRef.current.value;
        const price = priceRef.current.value;
        const description = descriptionRef.current.value;

        const newUser = {title, image, price, description };

        // fetch for .. 
        fetch("http://localhost:5000/services",{
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(newUser)


        })
          .then(res => res.json())
          .then(data => {
              if(data.insertedId){
                  alert("Successfully added the Services");
                  e.target.reset();
              }
          })
        e.preventDefault();
    }




    return (
        <div>
            <h1>Add a new services</h1>

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
                    
                    <textarea class="form-control mb-4"  rows="3" placeholder="Services for sort Description" ref={descriptionRef} ></textarea>
                </div>
                <button type="submit" class="btn btn-primary mx-auto" >Add Services</button>


            </form>
        </div>
    );
};

export default AddNewServices;