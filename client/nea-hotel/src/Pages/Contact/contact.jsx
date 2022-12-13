import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(true);

    emailjs
      .sendForm(
        "service_bzc719a",
        "template_r3kez12",
        form.current,
        "SuPOrn3aFlQ5nfPik"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div class="containerContact">
      <div class="contact-img">
        <h3>Contact us for more information</h3>
      </div>
      {/* <!-- contact form --> */}
      <form className="containerContact-form" ref={form} onSubmit={sendEmail}>
        {/* <!-- name --> */}
        <div class="contact-form">
          <label className="form-text" for="name">
            Name
          </label>
          <input
            className="form-text"
            type="name"
            name="name"
            id="name"
            placeholder="enter your name"
          />
        </div>

        {/* <!-- email --> */}
        <div class="contact-form">
          <label className="form-text" for="email">
            Email address
          </label>
          <input
            className="form-text"
            type="email"
            name="email"
            id="email"
            placeholder="enter your email"
          />
        </div>

        {/* <!-- subject --> */}
        <div class="contact-form">
          <label className="form-text" for="subject">
            Subject
          </label>
          <input
            className="form-text"
            type="text"
            name="subject"
            id="subject"
            placeholder="enter email subject"
          />
        </div>

        {/* <!-- message/email content --> */}
        <div class="contact-form">
          <label className="form-text" for="email_body">
            Message
          </label>
          <textarea className="form-text" id="email_body" rows="5"></textarea>
        </div>

        <button className="btn-submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
