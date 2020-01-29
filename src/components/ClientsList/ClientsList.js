import React, { useState, useEffect } from 'react';
import './ClientsList.css';

import ClientCard from '../ClientCard/ClientCard'
import mockClients from '../../static/clients'


function ClientsList() {
  let [ orderBy, setOrderBy ] = useState('default')
  let [ clients, setClients ] = useState(mockClients)

  useEffect(() => {
    setClients(mockClients)
  }, [])

  useEffect(() => {
    
  }, [orderBy])

  function filterClients () {
    let search = document.getElementById('txSearch').value
    let filtered = mockClients.filter(client => search === '' ? true : client.name.toUpperCase().includes(search.toUpperCase()))
    setClients(filtered)
  }

  return (
    <div>
      <div>
        <b className="text-blue">Clientes</b>
      </div>

      <div id="filters" className="my-3 px-2 py-2">
        <div className="filterSearch">
          <input type="text" placeholder="Procurar..." id="txSearch" className="px-1 py-1" onChange={filterClients} />
        </div>

        <div className="filterPhase">
          <select className="px-1 py-1" onChange={filterClients}>
            <option value="" disabled selected>Etapa da Jornada</option>
            <option value="Início">Início</option>
            <option value="Meio">Meio</option>
            <option value="Fim">Fim</option>
          </select>
        </div>

        <div className="filterScore">
          <input type="range" min="0" max="100"/>
        </div>

        <div className="filterGroup"  onChange={filterClients}>
          <select className="px-1 py-1">
            <option disabled selected>Grupo</option>
            <option value="Group A">Group A</option>
            <option value="Group B">Group B</option>
            <option value="Group C">Group C</option>
          </select>
        </div>

        <div className="filterSegment" onChange={filterClients}>
          <select className="px-1 py-1">
            <option disabled selected>Segmento</option>
            <option value="Segmento 1">Segmento 1</option>
            <option value="Segmento 2">Segmento 2</option>
            <option value="Segmento 3">Segmento 3</option>
          </select>
        </div>

        <div className="filterAcumValue"  onChange={filterClients}>
          <select className="px-1 py-1">
            <option disabled selected>Valor Acumulado</option>
            <option value="10000">Até 10.000</option>
            <option value="50000">Até 50.000</option>
            <option value="100000">Acima de 100.000</option>
          </select>
        </div>

        <div className="filterChk">
          <div><label htmlFor="chkAdapt">Adaptação</label><input type="checkbox" id="chkAdapt" /></div>
          <div><label htmlFor="chkPlan">Planejado</label><input type="checkbox" id="chkPlan" /></div>
          <div><label htmlFor="chkContemp">Contemplado</label><input type="checkbox" id="chkContemp" /></div>
        </div>

      </div>

      <div id="classification" className="col s9 m12">
        Ordenar por: { orderBy }
      </div>

      <div id="clientsList" className="col s12">
        {
          clients.map(client => <ClientCard key="client.id" client={client} /> )
        }
      </div>
    </div>
  )
}

export default ClientsList