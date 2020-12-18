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
                        </div>
                    </div>
                    <Row>
                        <Col sm="4" md="4">
                            <Card>
                                <div className="campaign ct-charts">
                                    <div className=''>
                                        <ReactPlayer
                                        url='https://www.youtube.com/watch?v=8wfGkUfey7Y&feature=youtu.be'
                                        width='100%'
                                        height='200px'
                                        controls="true"
                                        />
                                    </div>
                                </div>
                                <CardBody>
                                    <CardTitle>Tiktok Entry 9</CardTitle>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="4" md="4">
                            <Card>
                                <div className="campaign ct-charts">
                                    <div className=''>
                                        <ReactPlayer
                                        url='https://www.youtube.com/watch?v=-1E1LFdlsQc&feature=youtu.be'
                                        width='100%'
                                        height='200px'
                                        controls="true"
                                        />
                                    </div>
                                </div>

                                <CardBody>
                                    <CardTitle>Tiktok Entry 14</CardTitle>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="4" md="4">
                            <Card>
                                <div className="campaign ct-charts">
                                    <div className=''>
                                        <ReactPlayer
                                        url='https://www.youtube.com/watch?v=rYuJexg_fqA&feature=youtu.be'
                                        width='100%'
                                        height='200px'
                                        controls="true"
                                        />
                                    </div>
                                </div>
                                <CardBody>
                                    <CardTitle>Tiktok Entry 17</CardTitle>
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
