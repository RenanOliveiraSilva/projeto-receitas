import { useState } from 'react'

import Navbar from './assets/components/navbar/navbar'
import Card from './assets/components/card/card'
import './App.css'

function App() {
  return(
    <>
        <div className="navbar">
          <Navbar />

        </div>

      <div className="container">


        <div className="content">
          <Card 
            link={'https://p2.trrsf.com/image/fget/cf/1200/1200/middle/images.terra.com/2021/02/04/1572294240-aprenda-como-fazer-um-arroz-dos-deuses-fonte-pinterest-500x500.jpg'}
            nome={'Arroz branco'}
            descricao={'Prato presente no cotidiano de todo brasileiro '}
            />



        </div>

      </div>

    </>
  )
}

export default App
