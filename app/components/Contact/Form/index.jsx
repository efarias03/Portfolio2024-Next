"use client";

import { useState } from 'react';
import emailjs from "@emailjs/browser"

function ContactForm() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("")
    const [notificationText, setNotificationText] = useState("");
    const [buttonStatus, setButtonStatus] = useState("Send");
    const [loadingForm, setLoadingForm] = useState(false);

    function sendEmail(e) {
        e.preventDefault()

        if ( !email || !message) {
            alert("Inputs Vazios")
            return;
        }

        const templateParams = {
            message: message,
            email: email
        }

        setButtonStatus("Sending...")
        setLoadingForm(true)
    
        emailjs.send("service_hgq9qpg", "template_dwrzf7q", templateParams, "F1jTyhfQ3Ilad25mV")
            .then((res) => {
                setEmail("")
                setMessage("")
                setStatus("sucess")
                setNotificationText("email sent")
                setButtonStatus("Sent")
                setLoadingForm(false)

                setTimeout(() => {
                    setStatus("")
                    setButtonStatus("Send")
                }, 2500);
            })
            .catch((err) => {
                alert(err)
            })
    }

    return (
        <form action="" onSubmit={sendEmail}>
            <div className={`notification ${status}`}>
                <div className="notification-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                </div>
                <div className="notification-content">
                    <div className="notification-title">
                        <span>{status}</span>
                    </div>
                    <div className="text">
                        <span>{notificationText}</span>
                    </div>
                </div>
            </div>
            <div className="form-container default-container">
                <div className="inputs">
                    <div className="input-group">
                        <label htmlFor="email" >Your email here:</label>
                        <input value={email} name="email" id="email" type="text" onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                </div>
                <div className="message-div">
                    <div className="message-label">
                        <label htmlFor="message">How can I help you:</label>
                    </div>
                    <div className="message-text">
                        <textarea value={message} name="message" id="message" onChange={(e) => setMessage(e.target.value)} required ></textarea>
                    </div>
                </div>
                <div className="form-button-div">
                    <button type="submit" className={`${loadingForm ? "heartbeat" : ""}`}>{buttonStatus}</button>
                </div>
            </div>
        </form>
    )
}

export default ContactForm;