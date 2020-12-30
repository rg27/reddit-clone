import React, { useState } from "react";
import Embed from 'react-embed';
import Iframe from 'react-iframe'
import {
  Card,
  CardBody,
} from 'reactstrap';

const SurveyDashboard = () => {


return (
  <Card>
    <CardBody>
        <Iframe 
            width="100%"
            height="700px" 
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQk8UrFM6lO_bCh2VLveCksfXgreG5MGyf8s57rMB6JPphua800S0Ez-1IpOUuKVOw9wicAXlH-i0eS/pubhtml?gid=10073062&single=true" 
            frameborder="0" 
            style="border:0" 
            allowfullscreen="true"
        />
    </CardBody>
  </Card>
  );
};

export default SurveyDashboard;