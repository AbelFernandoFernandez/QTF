import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ productos }) => {
  return (
    <div className="producto">
      <img src={productos.img} alt={productos.name} />
      <div>
        <h4>{productos.name}</h4>
        <p>Precio: ${productos.price}</p>
        <p>Categoría: {productos.category}</p>
        <Link className="ver-mas" to={`/item/${productos.id}`}>Ver más</Link>
      </div>
    </div>
  )
}

export default Item