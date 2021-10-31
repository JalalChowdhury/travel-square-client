import React from 'react';

const ReviewCard = (props) => {
   
    const {  name, image, review } = props.data;

   
    return (
        <div className=" card-container col my-2 d-flex flex-wrap justify-content-center align-items-center mb-4">
            <div className="card-design h-100">


                <img className="card-image img-fluid p-2 rounded-circle" src={image} alt="" />

                <div className="card-body">
                    <p>{review}</p>
                    <h4 className="card-text">{name}</h4>

                    
                   
                </div>


            </div>

        </div>
    );
};

export default ReviewCard;