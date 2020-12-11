import {  Flex, Spinner, VStack } from "@chakra-ui/core";
import ParticlesBg from "particles-bg";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
  Row,
  Container
} from 'reactstrap';
import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Performance from "./components/performance";
import VoteTally from "./vote-tally";
import Footer from "./components/footer";
import Feedback from "./feedback";
import Attendance from "./attendance";

const App = () => {

  return (
    <>
    <div className="app-background">
      <Navbar />
      <Container>
          <Row>
              <Col sm="8" className="py-2 "><span><Performance/></span></Col>
              <Col sm="4" className="py-2 "><span><VoteTally /></span></Col>
          </Row>
        </Container>
        <Container>
          <Row>
              <Col sm="6" className="py-2 "><span> <Attendance/></span></Col>
              <Col sm="6" className="py-2 "><span> <Feedback/></span></Col>
          </Row>
        </Container>
        <Footer/>
    </div>
    </>
  );
};

export default App;
