import React from 'react';
import faqImg from '../../assets/FAQ-img.png';
import './FAQ.css';

const FaqAbout = () => {
    return (
        <section className="py-5 container" id="about">

            <div className="top-text">
                <h1> - FREQUENTLY ASKED <span className="blue-color">QUESTIONS -</span></h1>
                <h6>The journey of a thousand (S)miles begins with one step!</h6>
            </div>
            {/*  added row part for Question and answer--> */}
            <article className="row">


                <div className="col-md-6 my-5">

                    {/*  boostrap accordian using for Questions  */}
                    <div className="accordion" id="accordionExample">
                        {/*  Question and Answer - 1  --> */}
                        <div className="accordion-item border border-info">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button bg-white accordian-ques-design" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">

                                    Can People who have recently recovered from COVID-19 travel ?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>Yes, people who have recovered from COVID-19 can safely travel if they tested positive for COVID-19 in the past 90 days and have met criteria to end isolation.</p>

                                    <p>People can continue to test positive for up to 90 days after a COVID-19 diagnosis without being infectious to others. For this reason, travelers who have recovered
                                        from COVID-19 in the past 90 days do not need to get tested before or after travel. If they develop COVID-19 symptoms after travel, they should isolate and consult with a
                                        healthcare provider for testing recommendations.Maintaining physical distance to prevent COVID-19 is often difficult on public transportation. People may not be able to
                                        keep a distance of 6 feet from others on airplanes, trains, or buses.</p>

                                    <p>Those traveling by air to the United States from a foreign country can show documentation of recovery from COVID-19 instead of a negative test result before boarding their flight.</p>

                                    <p>These travelers should follow other travel recommendations and requirements for domestic and biggest travel.</p>
                                </div>
                            </div>
                        </div>

                        {/*  Question and Answer - 2  --> */}
                        <div className="accordion-item my-3 border border-info">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed bg-white accordian-ques-design" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                                    aria-controls="collapseTwo">
                                    What are the age restrictions on your tours?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>
                                        To travel independently you must be at least 18 years of age. There are no upper age limits for most of our tours (although 18-to-Thirtysomethings tours
                                        are restricted exclusively to 18-to-39-year-olds). Also, travellers with pre-existing medical conditions are required to complete a medical questionnaire.
                                        Our Family Adventures are open to families with children aged between 6 and 17 years of age. Our standard (non-family) adventures are open to children aged 12 years
                                        or older when accompanied by a parent (max. two children per adult). The two-children-per-adult restriction does not apply to our Family adventures.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/*  Question and Answer - 3  --> */}
                        <div className="accordion-item my-3 border border-info">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed bg-white accordian-ques-design" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                                    aria-controls="collapseThree">
                                    Can travelling on a cruise increase ny risk of getting COVID-19?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>
                                        Yes. The chance of getting COVID-19 on cruise ships is high because the virus spreads easily between people in close quarters aboard ships.
                                        For this reason, CDC recommends the following groups of people avoid traveling on cruise ships, including river cruises, worldwide:
                                    </p>
                                    <ul>
                                        <li>
                                            People who are not fully vaccinated.
                                        </li>
                                        <li>
                                            People with an increased risk of severe illness, regardless of vaccination status, including
                                        </li>
                                        <li>
                                            Older adults  of serious chronic medical conditions such as heart disease, chronic lung disease, and diabetes.
                                        </li>
                                        <li>
                                            Children with underlying medical conditions.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/*  Question and Answer - 4  --> */}
                        <div className="accordion-item my-3 border border-info">
                            <h2 className="accordion-header accordian-ques-design" id="headingThree">
                                <button className="accordion-button bg-white collapsed " type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    What is the most appropriate type of luggage to bring?
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>
                                        We strongly recommend bringing a backpack or duffel bag, as suitcases can be cumbersome and difficult to store in buses, under seats,
                                        etc.. Keep in mind that you will normally have to carry your own luggage on and off buses and trains and up and down hotel staircases.
                                        Suitcases with wheels may not work well on dirt or cobblestone roads.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="col-md-6 py-4">
                    <img src={faqImg} className="img-fluid" alt="" />
                </div>

            </article>
        </section>
    );
};

export default FaqAbout;