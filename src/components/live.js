import React from "react";
import ReactPlayer from 'react-player'
import Embed from 'react-embed';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Col,
    Row
} from 'reactstrap';

const Live = () => {
    return (
        <Card>
            <CardBody>
                <div className="d-flex align-items-center">
                    <div>
                        <CardTitle>Live Streaming</CardTitle>
                        <CardSubtitle>Seda Hotel, Cebu City, Cebu, Philippines</CardSubtitle>
                    </div>
                </div>
                <Row>
                    <Col lg="12">
                        <div className="campaign ct-charts">
                        <div className='player-wrapper'>
                            <ReactPlayer
                            className='react-player'
                            url='https://www.facebook.com/reymar.gualvez.1/videos/230266881956643'
                            width='100%'
                            height='100%'
                            playing="true"
                            controls="true"
                            appId="713990019210041"
                            />
                        </div>
                        </div>
                    </Col>
                </Row>
            </CardBody>

            <CardBody>
                <div className="d-flex align-items-center">
                    <div>
                        <CardTitle>B2B Tribute Video</CardTitle>
                    </div>
                </div>
                <Row>
                    <Col lg="12">
                    <div className="campaign ct-charts">
                        <div className='player-wrapper'>
                            <ReactPlayer
                            className='react-player'
                            url='https://youtu.be/Z2CZcu5Mm3A'
                            width='100%'
                            height='300px'
                            controls="true"
                            />
                        </div>
                        </div>
                    </Col>

                    
                </Row>
            </CardBody>
        </Card>
);
}

export default Live;
