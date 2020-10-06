// Imports
import React, { useState } from 'react';
import './App.css';

// Components
import UserCard from './components/UserCard/UserCard'
import MainMenu from './components/MainMenu/MainMenu'
import ClientsList from './components/ClientsList/ClientsList'

function App() {
  // State
  const [menuVisibility, setMenuVisibility ] = useState('hidden')

  // Methods
  function toggleMenu() {
    setMenuVisibility(menuVisibility === 'hidden' ? 'shown' : 'hidden')
  }

  return (
    <div id="app" className="App">
      
      <div id="brand">
        <img src="xyz" alt="Brand logo" id="brand-logo" />
      </div>      
      
      <header id="header">
        <div className="user-container">
          <UserCard />
        </div>
        <div className="options-container">          
          <a href="#logoff" className="text-blue hide-sm">
            Logoff
          </a>
          <a href="#settings" className="text-blue hide-sm">
            <i className="material-icons">settings</i>
          </a>
          <a href="#menu" className="text-blue" id="menu-toggler" onClick={toggleMenu}>
            <i className="material-icons">menu</i>
          </a>
          <a href="#messages" className="text-blue">
            <i className="material-icons">message</i>&nbsp;
          </a>
        </div>
      </header>

      <aside id="aside" data-visibility={menuVisibility}>
        <div className="aside-shadow" onClick={toggleMenu}/>
        <MainMenu />
      </aside>

      <main id="main">
        <ClientsList />
      </main>

    </div>
  );
}

export default App;
