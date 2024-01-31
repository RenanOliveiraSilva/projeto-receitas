import React from 'react'
import './home.css'

import { BsSearch } from "react-icons/bs";
import Navbar from '../../assets/components/navbar/navbar'
import Card from '../../assets/components/card/card'
import { BiColor } from 'react-icons/bi';

function Home() {
  return <>
  
    <div className="container">

      <div className="side">
          <h2> Procure uma receita</h2>
        <div className="pesquisa-receita">
          <input type="text" placeholder='Ex: Feijão carioca' /> <button><BsSearch size={25} /></button> 

        </div>
      </div>

      <div className="content">
        <Card 
          link={'https://p2.trrsf.com/image/fget/cf/1200/1200/middle/images.terra.com/2021/02/04/1572294240-aprenda-como-fazer-um-arroz-dos-deuses-fonte-pinterest-500x500.jpg'}
          nome={'Arroz branco'}
          descricao={'Prato presente no cotidiano de todo brasileiro '}
          />


      </div>

    </div>

  </>
}

export default Home