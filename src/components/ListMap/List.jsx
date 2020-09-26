import React from 'react'
import products from '../../data/products'
import './styles.css'




export default props => {

    function getProducts() {
        return products.map(prod => 
            <li key={prod.id}> 
                {prod.id} - {prod.name} - R${prod.price}
            </li>
        )
    }

    return (
        <div>
            <h2>Lista de Compras</h2>
            <ul>
                {getProducts()}
            </ul>
        </div>
    )
}








