import React from 'react'
import Container from '../components/Container/Container'
import Email from '../components/Email/Email';
import ContactInfo from '../components/ContactInfo/ContactInfo';

function Contact() {
    const label = "Contact"
    const content = [<Email key="0"/>, <ContactInfo key="1"/>]
    return (
        <div>
            <Container containerLabel = {label} innerContent = {content}/>
        </div>
    )
}

export default Contact
