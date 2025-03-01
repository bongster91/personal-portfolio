import styled from "styled-components";

const ContactContainer = styled.section`
    border-top: 3px solid black;
    grid-row: 12;
    grid-column: 1/13;
    padding-bottom: 15px;

    h2 {
        font-style: italic;
        border-bottom: 1px solid black;
        padding-left: 10px;
    }

    a {
        padding-left: 15px;
        font-weight: bold;
    }

    @media screen and (max-width: 700px) {
        grid-row: 7;
        grid-column: 1/13;
    
    }
`

function ContactInfo() {
    return (
        <ContactContainer id="contact">
            <h2>Contact Me</h2>
            <a className="github" href="https://github.com/bongster91" target='_blank' rel='noreferrer'>GitHub</a>
            <a className="linkedin" href="https://www.linkedin.com/in/grace-bong-7922b7202/" target='_blank' rel='noreferrer'>LinkedIn</a>
            <a className="email" href="mailto:gracebong.park@gmail.com">Email</a>
        </ContactContainer>
    );
};

export default ContactInfo;
