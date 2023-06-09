import React from 'react';
import Card from '../UI/Card';
import './CreatedUsersList.css';

const CreatedUsersList = (props) => {
  return (
    <Card className={`users`}>
      <ul>
        {props.users.map((user) => {
          return (
            <li key={user.id}>
              {user.name} ({user.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default CreatedUsersList;
