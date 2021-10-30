import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import styles from './Testimonial.module.css'
// import testimonialData from './testimonialData.json'
import ReviewCard from "./ReviewCard/ReviewCard";



export default class AutoPlay extends Component {
    state = {
        testimonialData: []
    }

    componentDidMount() {
        fetch('http://localhost:5000/reviews')
            .then((response) => response.json())
            .then(data => {
                this.setState({ testimonialData: data });
            });
    }

    render() {
        const settings = {
            dots: true,
            // infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            // autoplay: true,
            // speed: 3000,
            // autoplaySpeed: 500,
            cssEase: "linear",
            centerMode: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        cssEase: "linear",
                        centerMode: true,
                    }

                },
                {
                    breakpoint: 1200,
                    settings: {
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        cssEase: "linear",
                        centerMode: true,
                    }

                }
            ]
        };

        return (
            <div className='container pt-5 pb-5'>
                <h3 className='text-center text-uppercase text-brand py-3'>Testimonials</h3>
                <Slider {...settings}>
                    {
                        this.state.testimonialData.map(data => <ReviewCard data={data} ></ReviewCard>)
                    }
                </Slider>
            </div>
        );
    }
}
