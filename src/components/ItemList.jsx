import Item from "./Item";


const ItemList = ({ productos, titulo }) => {

  return (
    <div className="container">
      <h2 className="main-title"> <h2>PRODUCTOS</h2> {titulo}</h2>

      <div className="productos">
        {productos.map((prod) => <Item productos={prod} key={prod.id} />)}
      </div>
    </div>
  )
}

export default ItemList