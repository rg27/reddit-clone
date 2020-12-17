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

const B2b = () => {
    return (
        <Card>
            <CardBody>
                <div className="d-flex align-items-center">
                    <div>
                        <CardTitle>B2B Entry</CardTitle>
                    </div>
                </div>
                <Row>
                    <Col sm="6" md="6">
                        <Card>
                            <div className="campaign ct-charts">
                                <div className=''>
                                    <ReactPlayer
                                    url='https://www.youtube.com/watch?v=Z2CZcu5Mm3A'
                                    width='100%'
                                    height='500px'
                                    controls="true"
                                    />
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col sm="6" md="6">
                        <Card>
                            <div className="campaign ct-charts">
                                <div className=''>
                                    <ReactPlayer
                                    url='https://www.youtube.com/watch?v=mk48X8BZMFk'
                                    width='100%'
                                    height='500px'
                                    controls="true"
                                    />
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
                
                   
              
            </CardBody>
        </Card>
);
}

export default B2b;
