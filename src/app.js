import React, { useRef } from "react";
import Navbar from "./components/navbar";
import Performance from "./components/performance";
import VoteTally from "./vote-tally";
import Footer from "./components/footer";
import Feedback from "./feedback";
import YeeWinners from "./winners";
import Dashboard from "./dashboard";
import ScrollIntoViewIfNeeded from 'react-scroll-into-view-if-needed';
import Particles from 'react-particles-js';
import xmas1 from './assets/images/xmas1.png'
import xmas2 from './assets/images/xmas2.png'
import xmas3 from './assets/images/xmas3.png'
import xmas5 from './assets/images/xmas5.png'
import xmas6 from './assets/images/xmas6.png'
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

<Particles
 style={{ position: "absolute" }}
 height="95%"
 width="100%"
    params={{
	    "particles": {
	        "number": {
	            "value": 40,
	            "density": {
	                "enable": true,
	                "value_area": 800
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "speed": 2,
	            "out_mode": "out"
	        },
	        "shape": {
	            "type": [
	                "image",
	            ],
	            "image": [
	                {
	                    "src": xmas1,
	                    "height": 20,
	                    "width": 23
                  },
                
	                {
	                    "src": xmas2,
	                    "height": 20,
	                    "width": 20
	                },
	                {
	                    "src": xmas3,
	                    "height": 20,
	                    "width": 20
                    },
                    {
	                    "src": xmas5,
	                    "height": 20,
	                    "width": 20
                    },
                    {
	                    "src": xmas6,
	                    "height": 20,
	                    "width": 20
	                }
	            ]
	        },
	        "color": {
	            "value": "#CCC"
	        },
	        "size": {
	            "value": 40,
	            "random": false,
	            "anim": {
	                "enable": true,
	                "speed": 5,
	                "size_min": 20,
	                "sync": false
	            }
	        }
	    },
	    "retina_detect": false
	}} />
      <Navbar />
      <Container>
	  <YeeWinners/>
          {/* <Row>
              <Col sm="8" className="py-2 "><span><Performance/></span></Col>
              <Col sm="4" className="py-2 "><span><VoteTally /></span></Col>
          </Row> */}
        </Container>
        <Container>
            <Dashboard/>
        </Container>
        <Footer/>
    
    </div>
    </>
  );
};

export default App;
