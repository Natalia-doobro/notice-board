import React from 'react';
import { FormGroup, Col, Label, Input, Button, ListGroup, ListGroupItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function TabThree({data, nextTab, prevTab}) {
  const photo = [];

  const handleChang = (event) =>  {
    const file = event.target.files[0];
  
    if (photo.length !== 5) {
      console.log(file)
      return photo.push(file);
    }
    
    return console.log(photo)
  }
  
  const handleData = (evt) => {
    const obg = {
      photo: photo
    };
      
    data(obg);
  };

  return (
   <>  

      {photo.length !== 5 &&
        <FormGroup row>
          <Label for="exampleFile" sm={2}>Photo</Label>
              
          <Col sm={10}>
            <Input
              id="exampleFile"
              name="file"
              type="file"
              onChange={handleChang}
            />
          </Col>
        </FormGroup>
      }  

      { photo.length === 5 && (
        <ListGroup>
          {photo.map(elem => (
            <ListGroupItem key={elem.name}>
              {elem.name}
            </ListGroupItem>
          ))}
        </ListGroup>
      )}

    <Button color="warning" onClick={prevTab}>Prev</Button>
    <Button color="success" onClick={() => { nextTab(); handleData() }}>Next</Button>   
  </>
  );
};

export default TabThree;