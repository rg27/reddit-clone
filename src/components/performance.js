import React from 'react';
import ReactPlayer from 'react-player'

import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
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
                    <CardTitle>OP360 LOBs</CardTitle>
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
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText >Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="4" md="4">
                    {/*--------------------------------------------------------------------------------*/}
                    {/*Card-1*/}
                    {/*--------------------------------------------------------------------------------*/}
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
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText >Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
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
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText >Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
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
