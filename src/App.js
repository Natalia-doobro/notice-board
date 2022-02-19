import React from 'react';
import { Form, Button, Alert } from 'reactstrap';
import { useState } from "react";

import TabOne from './components/TabOne';
import TabTwo from './components/TabTwo';
import TabThree from './components/TabThree';
import TabFour from './components/TabFour';
  
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [tabIndex, setTabIndex] = useState(1);
  const [oneData, setOneData] = useState(null);
  const [twoData, setTwoData] = useState(null);
  const [threeData, setThreeData] = useState(null);
  const [fourData, setFourData] = useState(null);

  const [formSubmit, setFormSubmit] = useState(true);


  const nextTab = () => {
    setTabIndex(prevTab => prevTab + 1);
  }

  const prevTab = () => {
    setTabIndex(prevTab => prevTab - 1);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!oneData && !twoData && !fourData) {
      return console.log("All required fields must be filled out ");
    }

    const obg = {
      ...oneData,
      ...twoData,
      ...threeData,
      ...fourData
    }

    setFormSubmit(false);

    return console.log(obg);
  } 

  return (
    <div className="App">
      {formSubmit ?
          <Form onSubmit={handleSubmit}>

            {tabIndex === 1 && <TabOne data={(dataOne) => setOneData(dataOne)} nextTab={nextTab} />}
          
            {tabIndex === 2 && <TabTwo data={(dataTwo) => setTwoData(dataTwo)} nextTab={nextTab} prevTab={prevTab} />}
          
            {tabIndex === 3 && <TabThree data={(dataThree) => setThreeData(dataThree)} nextTab={nextTab} prevTab={prevTab} />}
          
            {tabIndex === 4 && <TabFour data={(dataFour) => setFourData(dataFour)} prevTab={prevTab} />}


            {tabIndex === 4 &&
              <Button>
                Sign in
              </Button>
            }
          </Form>
        :
          <Alert>
            Your ad has been successfully placed
          </Alert>
        }
    </div>
  );
}

export default App;
