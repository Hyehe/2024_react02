import React, { useState } from 'react';
import Profile from './Profile'
import '../step02/inputExam.css'

function ProfileEx({name}) {
  const users = ['홍가은', '호잇', '해리포터'];
  const [user, setUser] = useState(users[0]);
  const[isstatus, setStatus] = useState(true);
  return (
    <div className='center'>
      <h2>User Profile</h2>
      <button onClick={()=> setStatus(!isstatus)}>Toggle Status</button>
      <button onClick={()=> setUser(
        users[(users.indexOf(user)+1) % users.length]
      )}>Switch user</button>
      <p>
        상태 : {isstatus ? 'Active' : 'Inactive'}
      </p>
      <Profile name={user} />
    </div>
  );
}

export default ProfileEx;