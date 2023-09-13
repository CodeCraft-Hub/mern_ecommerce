import React,{useState} from 'react'
import {Form,Button,Col} from 'react-bootstrap';
import {savePaymentMethod} from "../actions/cartAction"
import CheckoutStep from '../components/shared/CheckoutStep';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const PaymentScreen = () => {
    const history = useNavigate();
    const [paymentMethod,setPaymentMethod] = useState('paypal');
    const dispatch = useDispatch();
    const cart = useSelector(state =>state.cart);
    const {shippingAddress} = cart;

    if(!shippingAddress){
        history("/shipping")
    }
    

    const submitHandler = (e)=>{
        dispatch(savePaymentMethod(paymentMethod))
        history('/placeorder')
       
    }

  return (
    <>
        <CheckoutStep step1 step2 step3/>
        <h1>Payment Method</h1>
        <Form onSubmit={submitHandler}>
            <Form.Group>
                <Form.Label as="legend">
                    Select Patment Method
                </Form.Label>
                <Col>
                    <Form.Check type='radio' label='Paypal or Credit Card' id='paypal' name='paymentMethod' value='paypal' checked onChange={e=> setPaymentMethod(e.target.value)}>
                    </Form.Check>
                    {/* <Form.Check type='radio' label='Strip' id='Strip' name='paymentMethod' value='Strip' onChange={e=> setPaymentMethod(e.target.value)}>
                    </Form.Check> */}
                </Col>
            </Form.Group>
            <Button type='submit' variant='primary'>Continue</Button>


        </Form>
    </>
  )
}

export default PaymentScreen