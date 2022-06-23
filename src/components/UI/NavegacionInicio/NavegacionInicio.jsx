import React from 'react';
import { Ancla } from '../Anclas/Ancla';

export const NavegacionInicio = () => {
  return (
      <nav>
         <Ancla estilo="ancla" textoAncla="Inicio"/>
         <Ancla estilo="ancla" textoAncla="Productos"/> 
      </nav>
  )
}
