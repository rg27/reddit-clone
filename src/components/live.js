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
                            url='https://www.youtube.com/watch?v=BcA_AqSEcFI&feature=youtu.be'
                            width='100%'
                            height='100%'
                            playing="true"
                            controls="true"
                            />
                        </div>
                        </div>
                    </Col>
                </Row>
            </CardBody>

            <CardBody>
                <div className="d-flex align-items-center">
                    <div>
                        <CardTitle>Tiktok Honorable Mentions</CardTitle>
                    </div>
                </div>
                <Row>
                    <Col lg="12">
                    <div className="campaign ct-charts">
                        <div className='player-wrapper'>
                            <ReactPlayer
                            className='react-player'
                            url='https://www.youtube.com/watch?v=DQnilGGjBMM&feature=youtu.be'
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
