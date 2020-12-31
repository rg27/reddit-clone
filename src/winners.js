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

const YeeWinners = () => {
    return (
        <Card>
            <CardBody>
                <div className="d-flex align-items-center">
                    <div>
                        <CardTitle>YEE Winners</CardTitle>
                    </div>
                </div>
                <Row>
                    <Col lg="12">
                        <div className="campaign ct-charts">
                        <div className='player-wrapper'>
                            <ReactPlayer
                            className='react-player'
                            url='https://www.youtube.com/watch?v=jhlh7zp9xP8&feature=youtu.be'
                            width='100%'
                            height='500px'
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

export default YeeWinners;
