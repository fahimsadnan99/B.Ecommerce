import React, { useEffect, useState } from 'react'
import Layout from '../Layout'
import Manu from '../Manu';
import {getProduct,getProductDetails,GetCatagory,getFilterProducts} from "../../API/authApi"
import ProductCard from './ProductCard';
import CheckBox from './CheckBox';

const Home = () => {
  const [products, setProducts] = useState([])
  const [order, setOrder] = useState('desc')
  const [sortBy,setSortBy] = useState("")
  const [limit, setLimit] = useState(30)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  const [skip,setSkip] = useState(0)
  const [catagorys, setCatagorys] = useState("")
  const [filters, setFilters] = useState({
    catagory: [],
    price : []
  })
 
  

  useEffect(() => {
    getProduct(sortBy, order, limit)
      .then((res) => setProducts(res.data))
      .catch((err) => setError("Faild to product Load"));
    GetCatagory()
      .then((response) => setCatagorys(response.data))
      .catch((err) => console.log(err));
  }, [products]);

 
  const handleFilter = (myFilter, filterBy) => {
    const newFilters = { ...filters };
    if (filterBy === "catagory") {
      newFilters[filterBy] = myFilter;
    }
    setFilters(newFilters);
    getFilterProducts(skip, sortBy, order, limit, newFilters)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  };
  console.log(products);
    return (
      <>
        <Manu></Manu>
        <Layout className="container" title="Home Page">
          <div>
            <div className="row">
              <div className="col-md-3">
                <div className="d-flex">
                  new/Old -
                  <select
                    className="form-control form-control-sm"
                    onChange={(e) => setOrder(e.target.value)}
                  >
                    <option value="desc">New product</option>
                    <option value="aesc">Old product</option>
                  </select>
                </div>
              </div>
              <div className="col-md-3">
                <div className="d-flex">
                  SortBy -
                  <select
                    className="form-control form-control-sm"
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="createdBy">createdBy</option>
                    <option value="price">price</option>
                  </select>
                </div>
              </div>
              <div className="col-md-3">
                <div className="d-flex">
                  limit-
                  <input
                    type="number"
                    className="form-control"
                    onChange={(e) => setLimit(e.target.value)}
                  ></input>
                </div>
              </div>
              <div>
                {catagorys && (
                  <ul>
                    <CheckBox
                      catagorys={catagorys}
                      handleFilter={myFilter =>
                        handleFilter( myFilter, "catagory")
                      }
                    ></CheckBox>
                  </ul>
                )}
               
              </div>
            </div>

            <div className="row">
              {products &&
                products.map((item) => {
                  return (
                    <div className="col-md-4">
                      <ProductCard item={item}></ProductCard>
                    </div>
                  );
                })}
            </div>
          </div>
        </Layout>
      </>
    );
}

export default Home
