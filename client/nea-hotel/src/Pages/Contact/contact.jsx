import React from "react";
import "./contact.css";

export default function Contact() {

    return (
        <div className="containerContact">
                        <div className="contact-img">
                <h3>
                    Please contact us for more information
                </h3>
                <h3>
                    or to book your stay
                </h3>
            </div>
            <div className="containerContact-form">
                <form className="contact-form">  
                    <label className="titleContact" for="firstName">First name:</label><br/>
                    <input className="form-text" type="text" id="firstName" name="firstName"/><br/>
                    <label className="titleContact" for="lastName">Last name:</label><br/>
                    <input className="form-text" type="text" id="lastName" name="lastName"/><br/>
                    <label className="titleContact" for="email">Email:</label><br/>
                    <input className="form-text" type="text" id="email" name="email"/><br/>
                    <label className="titleContact" for="message">Message:</label><br/>
                    <input className="form-text" type="text" id="message" name="message"/><br/>
                    <input className="btn-submit" type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    );
}