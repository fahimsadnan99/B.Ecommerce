import React, { useEffect } from 'react'
import Layout from '../Layout'
import Manu from '../Manu'
import { useParams } from "react-router-dom"
import {getProductDetails} from "../../API/authApi"

const ProductDetails = () => {
    const { id } = useParams()
    
    useEffect(() => {
        getProductDetails(id)
            .then(res => console.log(res.data))
        .catch(err => console.log(err))
    },[])
    
    return (
        <>
            <Manu></Manu>
        <Layout className="container" title="Product Details">
               <h1>Product Details</h1>
            </Layout>
            </>
    )
}

export default ProductDetails
