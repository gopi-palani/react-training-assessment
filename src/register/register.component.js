import React, { useEffect, useState } from 'react';
import styles from '../styles.js';

const UserRegisteration = (props) => {
  const { setUsers } = props;
  const [user, setUser] = useState(props.user);
  const [duplicateUser, SetDummyUser] = useState(false);

  const submit = e => {
    e.preventDefault();
    const TotalUsers = JSON.parse(localStorage.getItem('users'));
    let RemoveUser = false;
    TotalUsers.forEach(function(u){
        if(u.email === user.email){
            RemoveUser = true;
            SetDummyUser(true);
        };
    });
     if(user.email !== undefined && !RemoveUser){
        const totalUsers = TotalUsers.length;
         if(totalUsers >= 0){
            user.id = totalUsers + 1;
            user.enabled = true;
         }
        TotalUsers.push(user);
        localStorage.setItem('users', JSON.stringify(TotalUsers));
        setUsers(TotalUsers);
     };
  };

  const handleKeyDown = e => {
    SetDummyUser(false);
  };

  return (
    <>
        <form className="form-inline" onSubmit={submit} style={styles.form}>
            <div className="input-group mb-2 mr-sm-2">
                <input 
                  type="text" 
                  className="form-control mb-2 mr-sm-2" 
                  style={styles.formInputs} 
                  id="fname" 
                  placeholder="First Name"
                  pattern="([A-z0-9À-ž\s]){2,45}" 
                  title="Minumum 2 and Maximum 45 characters required"
                  name="user[fname]"
                  onChange={e => setUser({ ...user, fname: e.target.value })}
                  required
                />
                <input type="text" 
                  className="form-control mb-2 mr-sm-2" 
                  style={styles.formInputs} 
                  id="lname" 
                  placeholder="Last Name"
                  pattern="([A-z0-9À-ž\s]){2,45}" 
                  title="Minumum 2 and Maximum 45 characters required"
                  name="user[lname]"
                  onChange={e => setUser({ ...user, lname: e.target.value })}
                  required
                />
                
                <input 
                  type="text" 
                  className="form-control mb-2 mr-sm-2" 
                  style={styles.formInputs} 
                  id="email" 
                  placeholder="Email Address"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" 
                  title="Please Enter a valid Email address"
                  name="user[email]"
                  onKeyDown={handleKeyDown}
                  onChange={e => setUser({ ...user, email: e.target.value })}
                  required
                />
                <button 
                  type="submit" 
                  className="btn btn-primary mb-2 mr-sm-2"
                >
                  Save
                </button>
            </div>
	    </form>
        {duplicateUser && <h6 style={styles.error}>This user already exists, Please retry with different email</h6>}
    </>
  )
}

export default UserRegisteration;



