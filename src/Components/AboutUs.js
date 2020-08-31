import React from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
function AboutUs() {
    return (
        <div>
        <Card className="text-center">
          <Card.Header>
              The OneTechnologies
          </Card.Header>
          <Card.Body>
            <Card.Title>About Us</Card.Title>
            <Card.Text>The One Technologies is India’s top-leading and fast-growing web and mobile app development company located in Ahmedabad which has emerged as a leading inventor, innovator and implementer of cutting-edge technology. Incepted in the year of 2010 at Ahmedabad, we have emerged as a top web and mobile app development company with an aim to provide quality services in the web, 
                mobile and custom software development solutions.</Card.Text>
            <Card.Text>
            <b>We work to fulfil the requirements of the clients in the area of Web Hosting, Web Development, Mobile App Development, Search Engine Optimization (SEO) Service, E-commerce Solution, Internet Marketing, 
            Online Branding, and Enterprise Solutions.
            </b>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
}

export default AboutUs
