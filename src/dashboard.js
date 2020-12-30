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
            width="100%"
            height="800" 
            src="https://datastudio.google.com/embed/reporting/1358356b-8b4e-4c88-a13e-36578d3219a7/page/VgD" 
            frameborder="0" 
            style="border:0" 
            allowfullscreen="true"
        />
    </CardBody>
  </Card>
  );
};

export default Dashboard;