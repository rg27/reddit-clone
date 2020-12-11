import React from "react";
import ReactPlayer from 'react-player'
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
                            url='https://www.facebook.com/laravelcebu/videos/863985181028919'
                            width='100%'
                            height='350px'
                            playing="true"
                            controls="true"
                            appId="713990019210041"
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
