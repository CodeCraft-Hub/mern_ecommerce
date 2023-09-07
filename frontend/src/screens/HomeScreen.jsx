import React,{useState,useEffect} from 'react'
import axios from "axios";
import {Row,Col} from 'react-bootstrap'
import ProductScreen from './ProductScreen'

function HomeScreen() {
  const [Products,setProducts] = useState([]);

  useEffect(()=>{
    const fetchProducts = async ()=>{
      const {data} = await axios.get("http://localhost:8000/api/products");
      setProducts(data);
    }
    fetchProducts();
  },[])

  return (
    <>
        <Row>
            {
                Products.map((product) =>{
                    return (<Col  key={product._id}  md={3}>
                       <ProductScreen product={product}/>
                    </Col>
                    )
                })
            }
        </Row>
    </>
  )
}

export default HomeScreen