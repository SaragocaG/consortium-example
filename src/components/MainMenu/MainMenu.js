import React from 'react';
import './MainMenu.css';

function MainMenu() {
  const menuItems = [
    { title: 'Visão Geral', route: 'overview', icon: 'bar_chart' }, 
    { title: 'Tickets', route: 'tickets', icon: 'folder' }, 
    { title: 'Atendimento', route: 'suport', icon: 'local_phone' }, 
    { title: 'Clientes', route: 'clients', icon: 'person' }, 
    { title: 'Vendas', route: 'sells', icon: 'attach_money' }, 
    { title: 'ATAC', route: 'atac', icon: 'emoji_events' }
  ]
  
  return (
    <>
      <ul>
      {
        menuItems.map(item => (
          <li className="menu-item" key={item.title}>
            <a href="">
              <i className="material-icons text-blue">
                { item.icon }
              </i> &nbsp; &nbsp;
              { item.title }
            </a>
          </li>
        ))
      }
      </ul>
    </>
  )
}

export default MainMenu