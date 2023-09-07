import React,{useState,useEffect} from 'react'
// import axios from "axios";
import {Row,Col} from 'react-bootstrap'
import ProductScreen from './ProductScreen'
import {useDispatch,useSelector} from 'react-redux'
import {listProducts} from "../actions/productActions"

function HomeScreen() {
  // const [Products,setProducts] = useState([]);

  const dispatch = useDispatch();
  const productList = useSelector(state => state.productList);
  const {loading,error,products} = productList;

  useEffect(()=>{
    // const fetchProducts = async ()=>{
    //   const {data} = await axios.get("http://localhost:8000/api/products");
    //   setProducts(data);
    // }
    // fetchProducts();

    dispatch(listProducts())
  },[])

  return (
    <>
    {
      loading ? <h2>Loading..</h2> : error ? <h2>{error}</h2> : 
      <Row>
      {
          products.map((product) =>{
              return (<Col  key={product._id}  md={3}>
                 <ProductScreen product={product}/>
              </Col>
              )
          })
      }
  </Row>
    }
       
    </>
  )
}

export default HomeScreen