import React, { useState, useEffect } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';

import './Reviews.css';

const Reviews = () => {




    const [reviews, setReviews] = useState();

    useEffect(() => {

        fetch("https://dreadful-vampire-25678.herokuapp.com/reviews")
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <div className="reviews">

            <div className='d-flex justify-content-center align-items-center pt-5 pb-5'>
                <div className="container">
                    <h1 className=" text-center my-5">Awesome <span className="blue-color">Reviews</span></h1>
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