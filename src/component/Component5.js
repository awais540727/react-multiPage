import React, { useContext } from 'react';
import UserContext from './Component1';
const Component5 = () => {
  const user = useContext(UserContext);
  console.log('userdata', user);
  return (
    <>
      <h1> Component 5</h1>
      <h2>fa {user}</h2>
    </>
  );
};

export default Component5;
