import { useState } from 'react'
import Home from './routes/home/home';
import Receita from './routes/receitahome/receita';
import Navbar from './assets/components/navbar/navbar';


import './App.css'

function App() {
  return(
    <>
      <Navbar />
      <Receita nomeR={"Arroz branco"} />
    </>
  )
}

export default App
