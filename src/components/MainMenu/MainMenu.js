import React from 'react';
import './MainMenu.css';

const menuItems = [
  { title: 'Visão Geral', route: 'overview', icon: 'bar_chart' }, 
  { title: 'Tickets', route: 'tickets', icon: 'folder' }, 
  { title: 'Atendimento', route: 'suport', icon: 'local_phone' }, 
  { title: 'Clientes', route: 'clients', icon: 'person' }, 
  { title: 'Vendas', route: 'sells', icon: 'attach_money' }, 
  { title: 'ATAC', route: 'atac', icon: 'emoji_events' }
]

function MainMenu() {
  return (
    <>
      <div id="brand">
        <img src="https://www.bamaqconsorcio.com.br/images/logo_agora_e_bamaq.png" alt="Brand logo" id="brand-logo" />
      </div>
      <ul>
      {
        menuItems.map(item => (
          <li className="menu-item">
            <a href="">
              <i className="material-icons">
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