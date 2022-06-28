import React from 'react';
import { LogoTipo } from '../../UI/LogoTipo/LogoTipo';
import logotipo from '../../../images/cursos.jpg';
import { NavegacionInicio } from '../../UI/NavegacionInicio/NavegacionInicio';
import { Titulo } from '../../UI/Titulo/Titulo';

export const Header = () => {
  return (
    <header>
        <LogoTipo recurso={logotipo} estilo="img"/>
        <Titulo style="title" textTitulo="Mi Primera Pagina en React"/>
        <NavegacionInicio />
    </header>
  )
}
