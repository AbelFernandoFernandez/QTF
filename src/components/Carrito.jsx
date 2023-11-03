import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';
import papelera from './papelera.png'

const Carrito = () => {

  const { carrito, precioTotal, vaciarCarrito, deleteItem } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  }

  // const handleDeleteItem = () => {
  //   deleteItem()
  // }


  return (
    <div className="container">
      <h1 className="main-title">Carrito</h1>

      {
        carrito.map((prod) => (
          <div className='proCar' key={prod.id}>
            <br />
            <h3>{prod.name}</h3>
            <p>Precio unit: ${prod.price}</p>
            <p>Precio total: ${prod.price * prod.cantidad}</p>
            <p>Cant: {prod.cantidad}</p>
            <img onClick={() => deleteItem(prod.id)} className='tacho' src={papelera} alt="" />
            <br />
          </div>
        ))
      }

      {
        carrito.length > 0 ?
          <>
            <h2>Precio total: ${precioTotal()}</h2>
            <div className='comandos'>
              <img onClick={handleVaciar} src={papelera} alt="" />
              <p>Vaciar Carrito</p>
              <br />
              <button><Link to="/checkout">Finalizar compra</Link></button>
            </div>
          </> :
          <h2>El carrito está vacío </h2>
      }

    </div>
  )
}

export default Carrito