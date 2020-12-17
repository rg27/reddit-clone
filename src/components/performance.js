import React from 'react';
import ReactPlayer from 'react-player'
import {
    Card, 
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Row,
    Col,
    Container
} from 'reactstrap';

const Performance = () => {
    return (
        <Container>
            <Card>
                <CardBody>
                    <div className="d-flex align-items-center">
                        <div>
                            <CardTitle>Tiktok Challenge</CardTitle>
                            <CardSubtitle>Phasellus lobortis vestibulum sapien, ut blandit neque bibendum eu. Nunc tincidunt pharetra felis. </CardSubtitle>
                        </div>
                    </div>
                    <Row>
                        <Col sm="4" md="4">
                            <Card>
                                <div className="campaign ct-charts">
                                    <div className=''>
                                        <ReactPlayer
                                        url='https://www.youtube.com/watch?v=21X5lGlDOfg'
                                        width='100%'
                                        height='200px'
                                        controls="true"
                                        />
                                    </div>
                                </div>
                                <CardBody>
                                    <CardTitle>De-Dupe</CardTitle>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="4" md="4">
                            <Card>
                                <div className="campaign ct-charts">
                                    <div className=''>
                                        <ReactPlayer
                                        url='https://www.youtube.com/watch?v=21X5lGlDOfg'
                                        width='100%'
                                        height='200px'
                                        controls="true"
                                        />
                                    </div>
                                </div>

                                <CardBody>
                                    <CardTitle>Data Science</CardTitle>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="4" md="4">
                            <Card>
                                <div className="campaign ct-charts">
                                    <div className=''>
                                        <ReactPlayer
                                        url='https://www.youtube.com/watch?v=21X5lGlDOfg'
                                        width='100%'
                                        height='200px'
                                        controls="true"
                                        />
                                    </div>
                                </div>
                                <CardBody>
                                    <CardTitle>HS Codes</CardTitle>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Container>
    );
}

export default Performance;
