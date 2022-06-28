import React from 'react'
import { LogoTipo } from '../../UI/LogoTipo/LogoTipo'
import { Parrafo } from '../../UI/Parrafo/Parrafo'
import { Titulo } from '../../UI/Titulo/Titulo'
import  logotipomain  from '../../../images/React_Native_Logo.png';

export const Main = () => {
  return (
    <main>
        <div className='contenedor1'>
            <Titulo style="title2" textTitulo="Mi Primera Pagina en React"/>
            <Parrafo estilo="parrafo1" textParrafo="Lorem ipsum dolor sit 
            amet consectetur adipisicing elit. Consequatur aspernatur asperiores
            voluptatibus eaque quidem cumque. Ratione voluptate libero et quis,
            aspernatur sint velit laborum, aliquam, nam delectus ullam quibusdam 
            eosipsum dolor sit amet consectetur adipisicing elit. Consequatur aspernatur 
            asperiores voluptatibus eaque quidem cumque. Ratione voluptate libero et quis,
            aspernatur sint velit laborum, aliquam, nam delectus ullam quibusdam eos."/>
        </div>
        <LogoTipo recurso={logotipomain} estilo="img2"/>
    </main>
  )
}
