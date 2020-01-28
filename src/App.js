import React, { useState } from 'react';
import './App.css';

// Components
import Header from './components/Header/Header'
import MainMenu from './components/MainMenu/MainMenu'
import ClientsList from './components/ClientsList/ClientsList'

function App() {
  // State
  const [menuVisibility, setMenuVisibility ] = useState('hidden')

  function toggleMenu() {
    setMenuVisibility(menuVisibility === 'hidden' ? 'shown' : 'hidden')
  }

  return (
    <div id="app" className="App">
      <div className="row" id="app-container">

        <aside id="main-menu" className="col l3 m4" data-visibility={menuVisibility}>
          <MainMenu />
        </aside>

        <header id="header" className="col s12 l9 m8">
          <Header />
        </header>

        <main id="main-content" className="col s12 l9 m8">
          <ClientsList />
          <button onClick={toggleMenu}>ToggleMenu</button>
        </main>

      </div>
    </div>
  );
}

export default App;
