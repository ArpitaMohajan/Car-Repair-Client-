import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'
import Swal from 'sweetalert2';
const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_7einkwx', 'template_hkwwb8c', e.target, 'user_Ysln6yY6qeqOCta6uCr9O')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        <div id="contact" >
            <div className="container mt-5 ">
                <div className="text-center w-70 m-auto">
                    <h2 className="font text-danger">Contact Me</h2>
                    <form onSubmit={sendEmail}>
                        <input
                            className="w-75 input"
                            type="text"
                            placeholder="Your Name"
                            name="name"
                            required


                        />
                        <br />
                        <input
                            type="email"
                            className="w-75 input"
                            // type="text"
                            name="email"
                            placeholder="Your Email"
                            required


                        />
                        <br />
                        <input
                            className="w-75 input-message"
                            // type="text"
                            name="message"
                            placeholder="Type your message"
                            required


                        />
                        <br />
                        <button type="submit" className="btn submit-btn input">
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Contact;