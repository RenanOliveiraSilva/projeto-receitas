import React from 'react';
import './card.css';

function Card({link, nome, descricao}) {

  return (
  
    <div className="card">
        
        <div className="card-content">
            <div className="img-receita">
                <img src={link} alt="" />
            </div>
            <div className="nome-receita">
                <h3>{nome}</h3>

            </div>
            <div className="descricao-receita">
                <h4>{descricao}</h4>
            </div>
        </div>

        <div className="saiba-mais">
            <button>Saiba mais</button>
        </div>

    </div>
 
  )
}

export default Card;