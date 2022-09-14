import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import './Contact.css';
const newData = [
  {
    id: 1,
    firstName: 'Sir',
    lastName: 'Faraz',
    number: '098765432',
    box: 'number',
  },
  {
    id: 2,
    firstName: 'Sir',
    lastName: 'Faraz',
    number: '098765432',
    box: 'number',
  },
];
const Contact = ({ getData }) => {
  const [submitting, setSubmitting] = useState(false);
  const [userInputs, setUserInputs] = useState({
    id: Math.random().toString(),
    firstName: '',
    lastName: '',
    number: '',
    box: '',
  });
  const [form, setForm] = useState(newData);

  const numChange = (e) => {
    setUserInputs((prevState) => {
      return { ...prevState, number: e.target.value };
    });
    console.log(userInputs.number);
  };
  const fNameChange = (e) => {
    setUserInputs((prevState) => {
      return { ...prevState, firstName: e.target.value };
    });
    console.log(userInputs.firstName);
  };
  const lNameChange = (e) => {
    setUserInputs((prevState) => {
      return { ...prevState, lastName: e.target.value };
    });
    console.log(userInputs.lastName);
  };
  const boxHandler = (e) => {
    setUserInputs((prevState) => {
      return { ...prevState, box: e.target.value };
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
    const formObj = {
      id: userInputs.id,
      firstName: userInputs.firstName,
      lastName: userInputs.lastName,
      box: userInputs.box,
      number: userInputs.number,
    };

    setForm((prevState) => {
      return { ...prevState, formObj };
    });
    newData.push(formObj);
    console.log(form);
    getData(formObj);
  };

  return (
    <>
      {submitting && (
        <div className="container information-container">
          <h2>You are submitting the following...</h2>
          <div className="row information-container">
            {Object.entries(userInputs).map(([name, value]) => (
              <div className="col-md-3" key={name}>
                <strong>{name}</strong>: {value.toString()}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* {submitting && (
        <div className="container information-container">
          <h2>You are submitting the following...</h2>
          <div className="row information-container">
            {form.map(([name, value]) => (
              <li key={name}>
                <div className="col-md-3">{value.toString()}</div>
              </li>
            ))}
          </div>
        </div>
            )} */}

      <div className="container parent">
        <div className="row mb-5 mt-3">
          <Form className="ms-3" onSubmit={submitHandler}>
            {/* first name start */}
            <div className="input1">
              <label className="text-white text-center">
                Enter first name
                <input className="text" type="text" onChange={fNameChange} />
              </label>
            </div>
            {/* last name start */}
            <div className="input1">
              <label className="text-white text-center">
                Enter last name
                <input className="text" type="text" onChange={lNameChange} />
              </label>
            </div>

            {/* enter number */}
            <div className="input1">
              <label className="text-white text-center">
                Enter your Number
                <input className="text" type="text" onChange={numChange} />
              </label>
            </div>
            {/* select box option */}
            <div className="row mt-3">
              <div className="col-md-3 ">
                <label className="text-white ms-4">Sort by</label>
              </div>
              <div className="col-md-4">
                <select className="options" onChange={boxHandler}>
                  <option value="">Please choose an option</option>
                  <option>{userInputs.firstName}</option>
                  <option>{userInputs.lastName}</option>
                  <option>{userInputs.number}</option>
                </select>
              </div>
            </div>
            <input type="submit" className="submit " />
          </Form>
        </div>
      </div>
      {
        <div className="container">
          {newData.map((value) => (
            <div className="row mt-3 mb-3 information-container" key={value.id}>
              <div className="col-md-3">{value.firstName}</div>
              <div className="col-md-3">{value.lastName}</div>
              <div className="col-md-3">{value.number}</div>
              <div className="col-md-3">{value.box}</div>
            </div>
          ))}
        </div>
      }

      {/* 
      <div className="container information-container">
        <div className="row information-container">
          <div className="col-md-3">{userInputs.firstName}</div>
          <div className="col-md-3">{userInputs.lastName}</div>
          <div className="col-md-3">{userInputs.number}</div>
          <div className="col-md-3">{userInputs.box}</div>
        </div>
    </div> */}
    </>
  );
};

export default Contact;
