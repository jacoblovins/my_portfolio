// import React, { Component } from 'react';
// import './email.css';

// export default class Email extends Component {
//     constructor() {
//         super();

//         this.state = {
//             userValue: '',
//             emailValue: '',
//             messageValue: ''
//         };
//         this.handleChange = this.handleChange.bind(this);
//     }


//     handleChange(event) {
//         this.setState({ [event.target.name]: event.target.value });
//     }

//     render() {
//         return (
//             <form>
//                 <div className="form-group">
//                     <label>Name:</label>
//                     <input type="text" className="form-control" id="usr" name="userValue" value={this.state.userValue} onChange={this.handleChange} placeholder="John Smith" />
//                 </div>
//                 <div className="form-group">
//                     <label>Email address</label>
//                     <input type="email" className="form-control" id="exampleInputEmail1" name="emailValue" value={this.state.emailValue} onChange={this.handleChange} placeholder="example@email.com" />
//                 </div>
//                 <div className="form-group">
//                     <label >Message</label>
//                     <textarea className="form-control" id="exampleFormControlTextarea1" name="messageValue" value={this.state.messageValue} onChange={this.handleChange} rows="3"></textarea>
//                 </div>
//                 <button type="submit" className="btn btn-primary">Submit</button>
//             </form>
//         )
//     }
// }

import React, { useState } from 'react'
import './email.css';

function Email() {

    const [input, setInput] = useState({
        userValue: '',
        emailValue: '',
        messageValue: ''
    });

    const handleChange = event => {
        setInput({ ...input, [event.target.name]: event.target.value });
    }

    return (
        <form>
            <div className="form-group">
                <label>Name:</label>
                <input type="text" className="form-control" id="usr" name="userValue" value={input.userValue} onChange={handleChange} placeholder="John Smith" />
            </div>
            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" name="emailValue" value={input.emailValue} onChange={handleChange} placeholder="example@email.com" />
            </div>
            <div className="form-group">
                <label >Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" name="messageValue" value={input.messageValue} onChange={handleChange} rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Email

