import React from 'react';
import './ClientCard.css';

function ClientCard(props) {
  const { client } = props

  return (
    <div className='client-card'>
      <div className="client-container my-2">
        <div className="client-header">
          <div className="">
            <img className="client-picture" src={  client.picture } />
          </div>
          <div>
            <span className="client-name text-blue">{ client.name }</span>
            <p className="client-quotas">{ client.quotas }</p>
          </div>

          <div>
            <p className="client-phone">{ client.phone }</p>
            <p className="client-email">{ client.email }</p>
          </div>

          <div>
            <p className="client-city">{ client.city }</p>
            <p className="client-quotas">{ client.quotas }</p>
          </div>

          <div>
            <h3>{ client.score }</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientCard
