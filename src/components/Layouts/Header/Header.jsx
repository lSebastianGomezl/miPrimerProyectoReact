import React from 'react';
import { LogoTipo } from '../../UI/LogoTipo/LogoTipo';
import logotipo from '../../../images/cursos.jpg';
import { NavegacionInicio } from '../../UI/NavegacionInicio/NavegacionInicio';

export const Header = () => {
  return (
    <header>
        <LogoTipo recurso={logotipo} estilo="img"/>
        <NavegacionInicio />
    </header>
  )
}
