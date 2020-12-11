import React, { useState } from "react";
import db from "./lib/firebase";
import {
  Card,
  CardBody,
  Button, 
  Form, 
  FormGroup, 
  Label, 
  Input
} from 'reactstrap';

const Feedback = () => {
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
  <Card>
    <CardBody>
    <div className="d-flex align-items-center">
      <Form className="form" onSubmit={handleSubmit}>
          <h1>Feedback Form</h1>
          <FormGroup >
              <Input 
                required
                type="name" 
                name="name" 
                className="inputClass"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)} 
              />
          </FormGroup>
          <FormGroup>
            <Input 
              required
              className="inputClass"
              type="email" 
              name="email" 
              placeholder="Company Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Input 
              required
              className="textarea"
              type="textarea" 
              name="text"  
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </FormGroup>
          <Button className="feedbutton">Submit</Button>
      </Form>
    </div>
    </CardBody>
  </Card>
  );
};

export default Feedback;