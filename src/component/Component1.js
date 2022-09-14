import React, { createContext, useState, useEffect } from 'react';
import Component2 from './Component2';
const UserContext = createContext();

const Component1 = () => {
  const [user, setUser] = useState('Hi Sir');
  console.log('user', user);
  useEffect(() => {
    setUser('Sir Faraz');
  }, []);

  return (
    <>
      <UserContext.Provider value={user}>
        <h1> Component 1</h1>

        <Component2 />
      </UserContext.Provider>
    </>
  );
};

export default Component1;
export { UserContext };
