import React from 'react'
import { Button,Row,Col,ListGroup,Image,Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import Message from "../components/shared/Message"
import CheckoutStep from '../components/shared/CheckoutStep'
import {createOrder} from "../actions/orderAction"

const PlaceOrderScreen = () => {
    const cart = useSelector(state=>state.cart)
    const dispatch = useDispatch();
    const orderCreate = useSelector(state=>state.orderCreate)
    const {loading,success,error} = orderCreate;


  return (
    <>
        <CheckoutStep step1 step2 step3 step4 />
        <Row>
            <Col md={8}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                    <h2>Shipping</h2>
                    <p><strong>Address :</strong></p>
                    {cart.shippingAddress.address}&nbsp;
                    {cart.shippingAddress.city}&nbsp;
                    {cart.shippingAddress.postalcode}&nbsp;
                    {cart.shippingAddress.country}&nbsp;

                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h2>Payment Method</h2>
                        <p><strong>{cart.paymentMethod}</strong></p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h2>Order Items</h2>
                        {cart.cartItems.length === 0 ? (<Message>Your Cart is Empty</Message>)
                        :(
                            <ListGroup variant='flush'>
                                {cart.cartItems.map((item,index)=>{
                                    <ListGroup.Item key={index}>
                                        <Row>
                                            <Col md={1}>
                                                <Image src={item.image} alt={item.name} fluid />
                                            </Col>
                                            <Col>
                                                <Link to={`/product/${item.product}`}>{item.name}</Link>
                                            </Col>
                                            <Col md={4}>
                                                {item.qty} * ${item.price} = ${item.price}
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                })}
                            </ListGroup>
                        )
                        }
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Order Summary</h2>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    </>
  )
}

export default PlaceOrderScreen