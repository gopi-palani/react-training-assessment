import './App.css';
import React, { useEffect, useState } from 'react';
import Register from './register/register.component.js';
import ViewData from './viewdata/viewdata.component.js';
import useDeepCompareEffect from 'use-deep-compare-effect';

function App() {
  const [regStatus, setRegStatus] = useState(false);
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    localStorage.removeItem('users');
    localStorage.setItem('users',JSON.stringify(users));
  }, []);

  useDeepCompareEffect(() => {
    setRegStatus(true);
  }, [users]);

  return (
    <div className="App">
      <Register setUsers={setUsers}/>
      <h4>Total Available users : {users.length}</h4>
      {regStatus && users.map(function (user, index) {
        return <ViewData id={user.id} fname={user.fname} lname={user.lname} email={user.email} enabled={user.enabled}/>
      })}
    </div>
  );
}

export default App;
