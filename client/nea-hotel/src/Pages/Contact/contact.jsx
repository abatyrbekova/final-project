import React from "react";

export default function Contact() {
    return (
        <div>
            <h1>Contact</h1>
            <form>  
                <label for="fname">First name:</label><br/>
                <input type="text" id="fname" name="fname"/><br/>
                <label for="lname">Last name:</label><br/>
                <input type="text" id="lname" name="lname"/><br/>
                <label for="email">Email:</label><br/>
                <input type="text" id="email" name="email"/><br/>
                <label for="message">Message:</label><br/>
                <input type="text" id="message" name="message"/><br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}