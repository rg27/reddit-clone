import React, { useRef } from "react";
import Navbar from "./components/navbar";
import Performance from "./components/performance";
import VoteTally from "./vote-tally";
import Footer from "./components/footer";
import Feedback from "./feedback";
import Attendance from "./attendance";
import Dashboard from "./dashboard";
import ScrollIntoViewIfNeeded from 'react-scroll-into-view-if-needed';
import {
  Col,
  Row,
  Container
} from 'reactstrap';

const App = () => {
  const titleRef = useRef()
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
            <Dashboard/>
        </Container>
        <Container>
            <ScrollIntoViewIfNeeded>
              <Row >
                  <Col sm="6" className="py-2 "><span> <Attendance/></span></Col>
                  <Col sm="6" className="py-2 "><span> <Feedback/></span></Col>
              </Row>
            </ScrollIntoViewIfNeeded>
        </Container>
        <Footer/>
    </div>
    </>
  );
};

export default App;
