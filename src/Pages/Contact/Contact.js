import React from 'react';
import './Contact.css';
import './Contact.css';

import Iframe from '@trendmicro/react-iframe';

const Contact = () => {
    function handleSubmit() {
        alert("As Soon as,We will contact You");
    }
    return (
        <div className="contact">
            <div className="w-50 mx-auto">
                <div>
                    <h1 className="text-center my-1 my-4">Have Some <span className="blue-color">Question?</span></h1>
                    <p className="text-center my-3">Fill out the form below and we will contact you during our working hours.</p>
                    <form className="row g-3">
                        <div className="col-md-6">


                            <input type="FName" className="form-control" id="inputFName4" placeholder='Name' />
                        </div>
                        <div className="col-md-6">

                            <input type="Address" className="form-control" id="inputLAddress4" placeholder='Address' />
                        </div>
                        <div className="col-md-6">

                            <input type="FName" className="form-control" id="inputPhone4" placeholder='Mobile-number' />
                        </div>
                        <div className="col-md-6">

                            <input type="Email" className="form-control" id="inputEmail4" placeholder='Email' />
                        </div>

                        <div className="col-lg-12">
                            <div className="form-group">

                                <textarea className="form-control" rows="3" placeholder="Question/Comment"></textarea>
                            </div>
                        </div>

                        <div className="col-lg-9 me-21">
                            <select className="form-control form-control-lg">
                                <option>Request answer</option>
                                <option>Receive reply by Mail</option>
                                <option>Receive reply by Phone</option>
                            </select>
                        </div>

                        <div className="col-lg-3">
                            <button onClick={handleSubmit} type="submit" className="send-btn">Send</button>
                        </div>
                    </form>
                </div>
            </div>
            {/* map and contact info */}
            <div className="d-flex justify-content-center align-items-center py-5">
                <div className="row my-1">

                    <div className="col-md-6 px-3 d-flex justify-content-center align-items-center">
                        <div>
                            <div className="d-flex align-items-center">
                                <div className="icons-design navy-color">
                                    <i className="fas fa-plus-square"></i>
                                </div>
                                <div className="d-flex justify-content-center align-items-center">
                                    <div>
                                        <h3>100+ <span className="blue-color">Tour Packages</span></h3>
                                        <h5>Special Offers limited time</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex  align-items-center">
                                <div className="icons-design navy-color">
                                    <i className="fas fa-phone-square-alt"></i>
                                </div>
                                <div className="d-flex justify-content-center align-items-center">
                                    <div>
                                        <h3><span className="blue-color">CALL US</span> TODAY</h3>
                                        <h5>(+88) 01758- 785521</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex  align-items-center">
                                <div className="icons-design navy-color">
                                    <i className="fas fa-envelope-square"></i>
                                </div>
                                <div className="d-flex justify-content-center align-items-center">
                                    <div>
                                        <h3>SEND US AN <span className="blue-color">E-MAIL</span> </h3>
                                        <h5>travel.square@gmail.com</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div id="map-design">
                            <div className="container">
                                <Iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14475.232313030407!2d91.85235586977541!3d24.90452730000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1626020059971!5m2!1sen!2sbd" width="100%" height={440} />
                            </div>
                        </div>

                    </div>

                </div>

            </div>




        </div>
    );
};

export default Contact;