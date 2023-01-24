import { useState } from 'react'
import './App.css'
import logo from './imagenes/logoProFlight.png'


function App() {

  const logos=[ 
  {id:1, imagen: logo},
  {id:2, imagen:logo},
  {id:3, imagen:logo},
  {id:4, imagen:logo}
  ]

  const [logoActual, setLogoActual] = useState(1)

  function siguiente(){
    setLogoActual( logoActual === logos.length ? 1 : logoActual + 1)
  }

  function anterior(){
    setLogoActual(logoActual === logos[0].id ? 4 : logoActual - 1 )
  }

  return (
    <div className='contenedor'>
      <div className='flecha'
        onClick={anterior}>
          <p className='flecha__texto'> ⇐ </p>
      </div>

      {logos.map((logo =>(
        <div className={logo.id === logoActual ? 'activo' : 'logo'}

        key={logo.id}>
          <img 
            src={logo.imagen}
            alt= 'Logo ProFlight'
            className='logo__imagen'
          /> 
        </div>
      )))}   

      <div className='flecha' 
        onClick={siguiente}>
          <p className='flecha__texto'> ⇒ </p>
      </div>  
    </div>
  )
}

export default App
