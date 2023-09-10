import React, { useState, useEffect } from 'react'
// import axios from "axios";
import { Row, Col, ListGroup, Button, Image, ListGroupItem, Form } from "react-bootstrap";
import Rating from '../components/Rating';
import { Link, useNavigate, useNavigation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails } from "../actions/productActions";
import Loader from '../components/shared/Loader'
import Message from '../components/shared/Message'


const ProductDetails = () => {
    const [qty, setQty] = useState(1);
    const history = useNavigate();

    // const [product,setProduct] = useState([]);
    const { id } = useParams();
    const dispatch = useDispatch();
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        // const fetchProduct = async ()=>{
        //     const {data} = await axios.get(`http://localhost:8000/api/products/${id}`);
        //     setProduct(data);
        // }
        // fetchProduct();

        // redux
        dispatch(listProductDetails(id))
    }, [dispatch])


    const addToCartHandler = ()=>{
        history(`/cart/${id}?qty=${qty}`)
    }

    return (
        <>
            {
                loading ? <Loader /> : error ? <Message varient="danger">{error}</Message> :
                    <div>
                        <Link to="/" className='btn btn-light'>
                            <i className='fas fa-arrow-left'></i> &nbsp;
                            GO BACK</Link>
                        <Row>
                            <Col md={6}>
                                <Image src={product.image} alt={product.name} fluid />
                            </Col>
                            <Col md={3}>
                                <ListGroup variant='flush'>
                                    <ListGroupItem>
                                        <h3>{product.name}</h3>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <Rating value={product.rating} text={`${product.numReviews} Reviews`} />
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Price : ${product.price}
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        {product.description}
                                    </ListGroupItem>
                                </ListGroup>
                            </Col>
                            <Col md={3}>
                                <ListGroup>
                                    <ListGroupItem>
                                        <Row>
                                            <Col>Status :</Col>
                                            <Col>
                                                {product.countInStock > 0 ? "In Stock" : "out of stock"}
                                            </Col>
                                        </Row>
                                    </ListGroupItem>
                                    {product.countInStock > 0 && (
                                        <ListGroupItem>
                                            <Row>
                                                <Col>Qty</Col>
                                                <Form.Control
                                                    as="select"
                                                    value={qty}
                                                    onChange={(e) => setQty(e.target.value)}
                                                >
                                                    {[...Array(product.countInStock).keys()].map((x) => (
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option>
                                                    ))}
                                                </Form.Control>
                                            </Row>
                                        </ListGroupItem>
                                    )}
                                    <ListGroupItem >
                                        <Button className="btn-block" type="button" onClick={addToCartHandler}>Add to cart</Button>
                                    </ListGroupItem>
                                </ListGroup>
                            </Col>
                        </Row>
                    </div>
            }
        </>
    )
}

export default ProductDetails