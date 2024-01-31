import React from 'react';
import dados from "../../receitas.json";

const banco = dados;

function Receita({nomeR}) {
  
  const getReceitas = (nomeReceita) => {
      const receitaEncontrada = dados.find(receita => receita.nome === nomeReceita);
      return receitaEncontrada;
  };

  const receitaEncontrada = getReceitas(nomeR);

  if (!receitaEncontrada) {

    return (
      <div>
        <p>Receita não encontrada.</p>
      </div>
    );
  }

  const elementosReceita = (
    <div>
      <p>Nome: {receitaEncontrada.nome} </p>
      <p>Ingredientes: {receitaEncontrada.ingredientes} </p>
      <p>Instruções: {receitaEncontrada.instrucoes} </p>
    </div>
  );

  return (
    <div className="receitas">
        {elementosReceita}
    </div>
  );
}

export default Receita;
