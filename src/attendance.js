import React, { useState } from "react";

import {
  Card,
  CardBody,
  Button, 
  Form, 
  FormGroup, 
  Label, 
  Input,
} from 'reactstrap';

const Attendance = () => {
  const [data, setData] = useState ({
    name:"",
    email:"",
    account:"",
    lob:"",
    province:"",
    town:""
  });

  const {name,email,lob,account,province,town} = data;

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value})
  }
 
const handleSubmit = async (e) => {
  e.preventDefault();
  
  try{
    const response = await fetch(
      "https://v1.nocodeapi.com/rey12/google_sheets/phNpAEVUJmlYKctq?tabId=Sheet1",
      {
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify([
          [name,email,account,lob,province,town, new Date().toLocaleString()],
        ]),
    }
  );
    await response.json();
    setData({ ...data, name: "", email: "",lob: "",account: "",province: "", town: ""});
  }catch(err){
    console.log(err)
  }
}

return (
  <Card>
    <CardBody>
    <div className="d-flex align-items-center">
      <Form className="attendanceform" onSubmit={handleSubmit}>
          <h1>Attendance Form</h1>
          <FormGroup >
            <Input 
              required
              type="text" 
              name="name" 
              className="attinputClass"
              placeholder="Employee Name"
              value={name}
              onChange={handleChange} 
            />
          </FormGroup>
          <FormGroup>
         
            <Input 
              required
              className="attinputClass"
              type="text" 
              name="email" 
              placeholder="Company Email"
              value={email}
              onChange={handleChange} 
            />
          </FormGroup>

          <FormGroup>
            <Input type='select' required  value={account}   onChange={handleChange}   name="account" id="exampleAccount">
              <option  value=" ">--Choose Account--</option>
              <option value="Wayfair">Wayfair</option>
              <option value="Examity">Examity</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Input type='select' required  value={lob}   onChange={handleChange}  className="attinputClass" name="lob" id="exampleAccount">
              <option className="optionChoose" value=" ">--Choose LOB--</option>
              <option value="HS-Codes">HS-Codes</option>
              <option value="De-Dupe">De-Dupe</option>
            </Input>
          </FormGroup>

          <FormGroup>
       
            <Input 
              required
              className="attinputClass"
              type="text" 
              name="town" 
              placeholder="City/Town"
              value={town}
              onChange={handleChange} 
            />
          </FormGroup>

          <FormGroup>
         
            <Input 
              required
              className="attinputClass"
              type="text" 
              name="province" 
              placeholder="Province"
              value={province}
              onChange={handleChange} 
            />
          </FormGroup>
          <Button className="feedbutton">Submit</Button>
      </Form>
    </div>
    </CardBody>
  </Card>
  );
};

export default Attendance;