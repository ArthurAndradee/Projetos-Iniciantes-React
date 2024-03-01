import React from 'react';
import './App.css';

import { useState, useCallback } from 'react';
import Search from './search';


const allUsers = [
  'john',
  'alex',
  'george',
  'simon',
  'james',
]

function shuffle(allUsers) {
  let currentIndex = allUsers.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [allUsers[currentIndex], allUsers[randomIndex]] = [
      allUsers[randomIndex], allUsers[currentIndex]];
  }
  return allUsers;
}

interface DemoProps {};

export default function Demo({}: DemoProps) {
  const [users, setUsers] = useState(allUsers);

  const handleSearch = useCallback(
    (text: string) => {
      console.log(users[0]);

      const filteredUsers = allUsers.filter((user) =>
        user.includes(text),
      );
      setUsers(filteredUsers);
    },
    [users],
  );

  return (
    <div className='tutorial'>
      <div className='align-center mb-2 flex'>
        <button onClick={() => setUsers(shuffle(allUsers))}>
          Shuffle
        </button>

        <Search onChange={handleSearch} />
      </div>
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  )
}
