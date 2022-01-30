import React from 'react'

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="text4">Contact Me</div>
            <div className="text5"><span className="extra1">— </span>Get in Touch<span className="extra1"> —</span></div>

            <div className="contact-content">
                <div className="column left">
                    <div className="icons">

                        <div className="row">
                            <i className="fas fa-user conico"></i>
                            <div className="info">
                                <div className="head">Name</div>
                                <div className="sub-title">Samrath Singh Kalra</div>
                            </div>
                        </div>

                        <div className="row">
                            <i className="fas fa-map-marker-alt conico"></i>
                            <div className="info">
                                <div className="head">Address</div>
                                <div className="sub-title">Lucknow, Uttar Pradesh</div>
                            </div>
                        </div>

                        <div className="row">
                            <i className="fas fa-envelope conico"></i>
                            <div className="info">
                                <div className="head">Email</div>
                                <div className="sub-title">samrathsinghrohit@gmail.com</div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="column right">
                    <q className="quote">Whenever you feel like giving up on something, just think why you started it in the first place.</q>
                    <br /><cite className="quote2"><br />~Anonymous</cite>
                </div>

            </div>
        </section>
    )
}

export default Contact
