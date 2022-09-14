import React, { useCallback, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Todo = () => {
  const [title, setTitle] = useState('Hi');
  const [count, setCount] = useState(0);

  const dec = () => {
    setCount(count - 1);
    console.log('dec');
  };

  const inc = () => {
    setCount(count + 1);
    console.log('inc');
  };

// useCallback() start
  const changeTitle = useCallback(() => {
    setTitle('New Title');
    console.log('Change title');
  });

  return (
    <>
      <Container>
        <Row>
          <Col md="2"></Col>
          <Col md="3">
            <Button className="mt-2" onClick={dec}>
              DECREMENT
            </Button>
          </Col>
          <Col md="2">
            <h1>{count}</h1>
          </Col>
          <Col md="3">
            <Button className="mt-2" onClick={inc}>
              INCREMENT
            </Button>
          </Col>
          <Col md="2"></Col>
        </Row>
        <Row className="mt-4 mb-2">
          <Col md="2"></Col>
          <Col md="4">{title}</Col>
          <Col md="4">
            <Button onClick={changeTitle}> Chage Title</Button>
          </Col>
          <Col md="2"></Col>
        </Row>
      </Container>
    </>
  );
};

export default Todo;
