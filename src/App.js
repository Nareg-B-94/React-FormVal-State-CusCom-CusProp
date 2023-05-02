import React, { useState } from 'react';
import AddUser from './Components/Users/AddUser';
import CreatedUsersList from './Components/Users/CreatedUsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          name: userName,
          age: userAge,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <CreatedUsersList users={usersList} />
    </div>
  );
}

export default App;
