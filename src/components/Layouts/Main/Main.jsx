import React, {useState} from 'react'


export const Main = () => {

  const [contadorValue, actualizarContador] = useState(0);
  const [text, setText]= useState("");

  const update = (event)=>{
    setText(event.target.value);
  }
  

  const sum = ()=>{
    actualizarContador(contadorValue + 1);
  }

  const res = ()=>{
    actualizarContador(contadorValue - 1);
  }

  const reset = ()=>{
    actualizarContador(0);
  }

  return (
    <main>
        <div className='contenedor1'>
          <input onChange={update}></input>
          <h1>{text}</h1>
          <h1>{contadorValue}</h1>
          <button id='btnOne' className='optbBtn' onClick={sum}>Añadir</button>
          <button id='btnTwo' className='optbBtn1' onClick={res}>Decrementar</button>
          <button id='btnThree' className='optbBtn2' onClick={reset}>Resetear</button>
        </div>
    </main>
  )
}
