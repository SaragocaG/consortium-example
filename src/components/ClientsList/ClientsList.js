import React, { useState } from 'react';
import './ClientsList.css';

import ClientCard from '../ClientCard/ClientCard'

const clients = [
  { id: 1, name: 'Douglas Adams', acumValue: 123, phone: '(XX) 1333-3333', email: 'abc@def.com', quotas: 2, score: 54, picture: 'https://atitudereflexiva.files.wordpress.com/2018/05/douglas-adams.jpg' },
  { id: 2, name: 'Anne Frank', acumValue: 321, phone: '(XX) 2333-3333', email: 'abc@def.com', quotas: 7, score: 87, picture: 'https://upload.wikimedia.org/wikipedia/pt/1/1b/Anne-Frank_lightbox.jpg' },
  { id: 3, name: 'Franz Kafka', acumValue: 234, phone: '(XX) 3333-3333', email: 'abc@def.com', quotas: 8, score: 76, picture: 'http://statig1.akamaized.net/bancodeimagens/3n/vr/a2/3nvra2nu58exxk5307f1qeqfn.jpg' },
  { id: 5, name: 'Agatha Christie', acumValue: 543, phone: '(XX) 4333-3333', email: 'abc@def.com', quotas: 3, score: 56, picture: 'https://poressaspaginas.files.wordpress.com/2011/04/agatha_christie_portrait-787835.jpg' },
  { id: 8, name: 'Gil Vicente', acumValue: 456, phone: '(XX) 5333-3333', email: 'abc@def.com', quotas: 1, score: 38, picture: 'https://www.portaldaliteratura.com/assets/files_autores/111.jpg' }
]



function ClientsList() {

  const { orderBy, setOrderBy } = useState('default')

  return (
    <>
      <div class="row">
        <div class="col s12">
          <b>Clients</b>
        </div>
        <div id="filters" class="col s3 m12">
          Filtros
        </div>
        <div id="classification" class="col s9 m12">
          Ordenar por: {orderBy}
        </div>
        <div id="clients" class="col s12">
          {
            clients.map(client => (
              <ClientCard key="client.id" client={client} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default ClientsList