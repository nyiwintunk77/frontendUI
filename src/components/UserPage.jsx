import React from 'react';
import {useParams} from 'react-router-dom';

const UserPage = () => {
  let {id} = useParams();
  return (
    <>
      <h1>Hello there user {id}</h1>
      <p>This is your awesome User Profile page</p>
    </>
  )
}

export default UserPage;