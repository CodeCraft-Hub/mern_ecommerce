import React,{useState,useEffect} from 'react'
import {Link, redirect, useLocation } from 'react-router-dom'
import {Form,Button,Row,Col} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from "../components/shared/Message"
import Loader from "../components/shared/Loader"
import {login} from "../actions/userAction"
import FromContainer from '../components/shared/FromContainer'

const LoginScreen = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const location = useLocation();

    const redirect =  location.search ? location.search.split('=')[1]:"/";

    const submitHandler = (e)=>{
        e.preventDefault()
        // dispatch
    }


  return (
    <>
        <FromContainer>
            <h1>SIGN IN</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' placeholder='enter email' value={email} onChange={(e)=>setEmail(e.target.value)}>

                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='email'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='enter password' value={password} onChange={(e)=>setPassword(e.target.value)}>

                    </Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>
                    SIGN IN
                </Button>
            </Form>
            <Row>
                <Col>
                New Customer ? 
                <Link to={redirect ? `register?redirect=${redirect}` : "/register"}>Register</Link>
                </Col>
            </Row>
        </FromContainer>
    </>
  )
}

export default LoginScreen