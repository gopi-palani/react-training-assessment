import React, { useEffect, useState } from 'react';
import styles from '../styles.js';
import ActionButtons from '../actions/actions.component.js';
import Circle from '../images/circle.component.js';

const ViewData = (props) => {
  const { id, fname, lname, email, enabled } = props;
  const [enabliliy, setEnabliliy] = useState(enabled)

return (
    <>
        <div style={styles.content}>
            <p>#{id}</p>
            {enabliliy ? <Circle fillColor='#42FF00'/> : <Circle fillColor='#FF0000'/> }
            <ActionButtons id={id} setEnabliliy={setEnabliliy}/>
            <p>First Name : {fname}</p>
            <p>Last Name : {lname}</p>
            <p>Email : {email}</p>
        </div>
    </>
  )
}

export default ViewData;



