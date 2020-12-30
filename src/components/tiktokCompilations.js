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

const TiktokCompilations = () => {
    return (
        <Card>
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
                            url='https://www.youtube.com/watch?v=0Cno7FpqKaY&feature=youtu.be%5C'
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

export default TiktokCompilations;
