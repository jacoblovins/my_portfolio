import React, { useState } from 'react'
import './email.css';
import emailjs from 'emailjs-com';

function Email() {


    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    const [sent, setSent] = useState(false)

    const handleNameChange = event => {
        setName(event.target.value);
    }
    const handleEmailChange = event => {
        setEmail(event.target.value);
    }
    const handleMessageChange = event => {
        setMessage(event.target.value);
    }


    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_mq4savi', 'template_lzoegri', e.target, 'user_nwATB7engk4AXJIy90rCp')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        setSent(true)
    }



    return (
        <div>
            {sent === false ? (
                <form onSubmit={sendEmail}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" className="form-control" id="usr" name="name" value={name} onChange={handleNameChange} placeholder="John Smith" />
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" name="email" value={email} onChange={handleEmailChange} placeholder="example@email.com" />
                    </div>
                    <div className="form-group">
                        <label >Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" name="message" value={message} onChange={handleMessageChange} rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            ) : (
                    <div>
                    <h2>Message Sent!</h2>
                    </div>
                )}
        </div>

    )
}

export default Email

