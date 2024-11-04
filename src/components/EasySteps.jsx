import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";  

function EasySteps() {
  return (
    
    <div className="p-3 mb-2 bg-body-secondary">
      <Container className="text-center my-5">
      <p class="text-danger">
        <h2 className="text-danger">Easy as 1, 2, 3...</h2>
        <Row>
          <Col xs={12} sm={6} md={4} className="mb-4">  
            <img
              src="https://5.imimg.com/data5/VF/CT/MY-49857352/organic-vegetables-500x500.png"
              alt="Step 1"
              className="hover-effect rounded-circle"
              style={{ width: "100%", height: "200px", objectFit: "cover" }}  
            />
            
            <h3>Download the app</h3>
            <p>Find it on the App Store or Google Play</p>
          </Col>
          <Col xs={12} sm={6} md={4} className="mb-4">
            <img
              src="https://img.freepik.com/premium-photo/organic-vegetables-fruits-cooking-healthy-lifestyle-with-tiny-people-design-concept-background_1099751-6725.jpg?semt=ais_hybrid"
              alt="Step 2"
              className="hover-effect rounded-circle"
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <h3>Browse for deals</h3>
            <p>Get exclusive discounts on fresh produce</p>
          </Col>
          <Col xs={12} sm={6} md={4} className="mb-4">
            <img
              src="https://images.herzindagi.info/image/2024/Apr/vegetables-with-water-content.jpg"
              alt="Step 3"
              className="hover-effect rounded-circle"
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <h3>Pick up in store</h3>
            <p>Find your nearest location</p>
          </Col>
        </Row>
        <Button variant="primary" className="mt-4">
          Get Started
        </Button>
       
        </p>
      </Container>
    </div>
  
  );
}

export default EasySteps;
