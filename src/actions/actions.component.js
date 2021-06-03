import React from 'react';
import styles from '../styles.js';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import EditIcon from '@material-ui/icons/Edit';

const PerformAction = (props) => {
  const { id, setEnablility } = props;

  const DeleteItem = e => {
    const allUsers = JSON.parse(localStorage.getItem('users'));
    const editedUserEnablility = [];
    allUsers.forEach(function(item){
        if(item.id === id){
            item.enabled = false;
        };
        editedUserEnablility.push(item);
    });
    localStorage.setItem('users', JSON.stringify(editedUserEnablility));
    setEnablility(false)
  };

  const EditItem = e => {
    console.log(`edit-id:${id}`);
  };

  return (
    <>
        <div style={styles.iconAlign}>
            <EditIcon onClick={EditItem}/>                
            <DeleteForeverRoundedIcon onClick={DeleteItem}/>
        </div>
    </>
  )
}

export default PerformAction;