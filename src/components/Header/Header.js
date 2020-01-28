import React from 'react';
import './Header.css';

function Header() {

  const user = {
    name: 'Glaydson Saragoca',
    picture: 'https://saragoca.com.br/portfolio/images/profile.jpg',
    role: 'Developer'
  }
  return (
    <>
      <div class="row">
        <div class="col s6">
          <div className="user-picture-container">
            <img className="user-picture" src={  user.picture } />
          </div>
          <div class="user-info">
            <span className="user-name">{ user.name }</span>
            <p className="user-role">{ user.role }</p>
          </div>
        </div>

        <div class="col s6">
          <div class="v-center">
            Logoff &nbsp;
            <i className="material-icons">settings</i>&nbsp;
            <i className="material-icons">message</i>&nbsp;
          </div>
        </div>
      </div>
    </>
  )
}

export default Header