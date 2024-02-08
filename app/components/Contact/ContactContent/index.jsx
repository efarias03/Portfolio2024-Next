import ContactForm from "../Form";

function ContactContent() {
    return (
        <section id="contact-section" className="default-section column flex">
            
                <div id="contact-header" className="default-container">
                    <h1>Let&apos;s work together?</h1>
                </div>

                <ContactForm />
        </section>
    )
}

export default ContactContent;