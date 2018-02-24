import React from "react";
import Hero from "../components/Hero";
import Search from "../pages/Search";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const About = () =>
  <div>
    <Hero backgroundImage="https://wallpaperscraft.com/image/cup_coffee_newspaper_breakfast_113335_1920x1080.jpg">
      <h1>New York Times Article Scrubber</h1>
      <h2>Search for and annotate articles of interest!</h2>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Welcome To Pupster!</h1>
        </Col>
      </Row>
    </Container>
<Search/>


  </div>;



export default About;
