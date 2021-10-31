import React, { useState, useEffect } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';



const Reviews = () => {




    const [reviews, setReviews] = useState();

    useEffect(() => {

        fetch("http://localhost:5000/reviews")
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <div>

            <div className='d-flex justify-content-center align-items-center'>
                <div className="container">
                    <h2 className=" text-center my-5">Awesome <span className="blue-color">Reviews</span></h2>
                    <div className="row row-cols-1 row-cols-lg-3 g-4 px-5 mx-auto">

                        {/* <div className="d-flex flex-wrap  justify-content-center align-items-center mx-2"> */}
                        {
                            reviews?.map(review =>

                                <ReviewCard
                                    key={review._id}
                                    data={review}
                                >
                                </ReviewCard>
                            )
                        }

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Reviews;