import React from 'react';
import './ClientCard.css';

function ClientCard(props) {
  const { client } = props

  return (
    <div className="client">
        <div className="row">

          <div className="col s2">
            <img className="client-picture" src={ client.picture } />
          </div>

          <div className="col s3">
            <h5>{ client.name }</h5>
            <p>{ client.acumValue }</p>
          </div>

          <div className="col s4">
            <div className="row">
              <div className="col s6">
                Telefone
              </div>
              <div className="col s6">
                Cidade
              </div>
              <div className="col s6">
                E-mail
              </div>
              <div className="col s6">
                Cotas
              </div>
            </div>
          </div>

          <div className="col s2 h-100">
            <h5>{ client.score }</h5>
          </div>

        </div>
    </div>
  )
}

export default ClientCard
