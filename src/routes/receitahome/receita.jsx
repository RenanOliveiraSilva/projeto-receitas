import React from 'react';
import UserReceitas from './receitaController';

console.log(UserReceitas);

function Receita() {
  return <>
    <div className="receitas">
        <UserReceitas />

    </div>
  </>
}

export default Receita