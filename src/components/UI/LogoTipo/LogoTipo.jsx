import React from 'react';
import logotipo from '../../../images/cursos.jpg';

export const LogoTipo = ({recurso, textAlt, estilo}) => {
  return (
    <img className={estilo} src={recurso} alt={textAlt}/>
  )
}
