import React from "react";
import ReactPlayer from 'react-player'
import {
    Card,
    CardBody,
    CardTitle,
    Col,
    Row,
    Container,
    CardLink
} from 'reactstrap';

const Kahot = () => {
    return (
    <Container>
        <Card>
            <CardBody>
                <div className="d-flex align-items-center">
                    <div>
                        <CardTitle>Let's Play Kahoot!</CardTitle>
                        <h3>Click this <CardLink className="kahotLink" href="https://kahoot.it/"  target="_blank">link</CardLink> or search "kahoot.it" and enter the pin below to join the game.(You can use PC or mobile phone)</h3>
                    </div>
                </div>
                <Row>
                    <Col lg="12">
                        <div className="campaign ct-charts">
                        <div className='player-wrapper'>
                            <ReactPlayer
                            // className='react-player'
                            url='https://www.youtube.com/watch?v=bmVKaAV_7-A'
                            width='100%'
                            height='500px'
                            // playing="true"
                            controls="true"
                            />
                        </div>
                        </div>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    </Container>
    );
}

export default Kahot;
