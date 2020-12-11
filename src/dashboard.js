import React, { useState } from "react";
import Embed from 'react-embed';
import Iframe from 'react-iframe'
import {
  Card,
  CardBody,
} from 'reactstrap';

const Dashboard = () => {


return (
  <Card>
    <CardBody>
        <Iframe 
            width="1000"
            height="800" 
            src="https://datastudio.google.com/embed/reporting/32e1ac6a-55e7-4163-b753-5310607597eb/page/qgR" 
            frameborder="0" 
            style="border:0" 
            allowfullscreen="true"
        />
    </CardBody>
  </Card>
  );
};

export default Dashboard;