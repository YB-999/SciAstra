import React, { useEffect } from "react";
import '../styles/team.css';
import CardGrid from '../shared/CardGrid';
import { Container } from "reactstrap";

function Team() {
    useEffect(() => {
        window.scrollTo(0, 0)
      })
      return (
        <section className="team_section">
            <Container className="team_page">
                <h1>Learn from scientists, research scholars from the top institutes in the world.</h1>
                <CardGrid />
            </Container>
        </section>
      );
}

export default Team;
