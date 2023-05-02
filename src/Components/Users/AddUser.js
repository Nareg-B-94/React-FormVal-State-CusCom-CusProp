import React, { useState } from 'react';
import Card from '../UI/Card';
import './AddUser.css';
import Button from '../UI/Button';
import { OverlayModule } from '../UI/OverlayModule';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)',
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age ( > 0)',
      });
      return;
    }
    // console.log(enteredUsername, enteredAge);
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <OverlayModule
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={'input'}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input
            value={enteredUsername}
            onChange={usernameChangeHandler}
            type='text'
            id='username'
          />
          <label htmlFor='age'>Age (Years)</label>
          <input
            value={enteredAge}
            onChange={ageChangeHandler}
            type='number'
            id='age'
          />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
