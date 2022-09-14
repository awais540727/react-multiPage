import React, { useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import Component1 from '../component/Component1';
import Contact from './Contact';
import './Home.css';
const getContactData = [];

const Home = () => {
  const [getInputData, setInputData] = useState(getContactData);
  {
    /* Col useRef */
  }
  const colElement = useRef();

  /* Row useRef */

  const rowElement = useRef();

  /* Getting data from contact page */

  const click = (data) => {
    getContactData.push(data);

    /* Saving input data In a State */

    setInputData((defState) => {
      return { data, ...getContactData };
    });
  };

  /* Row backgroundColor change */

  const rowInput = () => {
    rowElement.current.style.backgroundColor = 'green';
  };

  /* Col backgroundColor change */

  const colInput = () => {
    colElement.current.style.backgroundColor = 'blue';
  };
  return (
    <>
      {getContactData.map((value) => {
        return (
          <div
            className="row mt-3 mb-3 information-container"
            ref={rowElement}
            key={value.id}
          >
            {/* Using Col Ref */}
            <div className="col-md-3" ref={colElement}>
              {value.firstName}
            </div>
            <div className="col-md-3">{value.lastName}</div>
            <div className="col-md-3">{value.number}</div>
            <div className="col-md-3">{value.box}</div>
          </div>
        );
      })}

      <Button type="submit" onClick={colInput}>
        Click me to change Col Background
      </Button>
      <Button type="submit" onClick={rowInput}>
        Click me to change Row Background
      </Button>
      <Contact getData={click} />
    </>
  );
};
export default Home;
