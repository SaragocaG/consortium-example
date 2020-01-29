import React from 'react';
import './UserCard.css';

function UserCard () {

  const user = {
    name: 'Glaydson Saragoça',
    picture: 'https://saragoca.com.br/portfolio/images/profile.jpg',
    role: 'Developer'
  }
  return (
    <>
      <div className="user">
        <img className="user-picture" src={  user.picture } />
        <span className="user-name text-blue">{ user.name }</span>
        <p className="user-role">{ user.role }</p>
      </div>
    </>
  )
}

export default UserCard