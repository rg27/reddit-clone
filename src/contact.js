import React, { useState, useEffect } from "react";
import db from "./lib/firebase";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
  Row,
  Container,
  Button, 
  Form, 
  FormGroup, 
  Label, 
  Input, 
  FormText
} from 'reactstrap';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Container >
    <Card>
      <CardBody>

<Form className="form" onSubmit={handleSubmit}>
    <h1>Feedback Form</h1>
    <FormGroup>
        <Label >Name</Label>
        <Input 
          type="name" 
          name="name" 
          className="inputClass"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)} 
        />
    </FormGroup>

    <FormGroup>
      <Label for="exampleEmail">Email</Label>
      <Input 
        className="inputClass"
        type="email" 
        name="email" 
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </FormGroup>

    <FormGroup>
      <Label >Message</Label>
      <Input 
        type="textarea" 
        name="text"  
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </FormGroup>
      <Button className="feedbutton">Submit</Button>
    </Form>

   
    </CardBody>
    </Card>
    </Container>
   
    
  );
};

export default Contact;