import React from 'react'
import {useHistory} from "react-router-dom"
import ProductDetails from '../ProductDetails/ProductDetails'

const ProductCard = ({ item }) => {
    const history = useHistory()
    const {_id,name,catagory,price,photo} = item
 
    return (
        <div>
            <div class="card" style={{width: "18rem"}}>
  <img src={photo} class="card-img-top img-fluid" alt="cardImg" />
  <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <small> catagory name - { catagory.catagory}</small>
    <h6>Price : {price} </h6>
    <button className="btn btn-success" onClick={()=> history.push(`/product/${item._id}`)}>Buy NOW</button>
  </div>
</div>
        </div>
    )
}

export default ProductCard
