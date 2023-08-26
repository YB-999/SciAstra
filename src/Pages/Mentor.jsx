import React, { useEffect } from "react";

import MentorsSection from '../shared/MentorSection';
import AdvisorSection from '../shared/AdvisorSection';
import '../styles/mentor.css'
import { Container } from "reactstrap";

const Mentor = () =>{
    useEffect(() => {
        window.scrollTo(0, 0)
        })
        return (
        <section className="mentor_section">
        <Container className="mentor_page">
            <MentorsSection />
            <AdvisorSection />
        </Container>
        </section>
        );
    };

export default Mentor;