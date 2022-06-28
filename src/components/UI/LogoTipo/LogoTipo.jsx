import React from 'react';
import logotipo from '../../../images/cursos.jpg';
import logotipomain from '../../../images/React_Native_Logo.png';

export const LogoTipo = ({recurso, textAlt, estilo}) => {
  return (
    <img className={estilo} src={recurso} alt={textAlt}/>
  )
}
