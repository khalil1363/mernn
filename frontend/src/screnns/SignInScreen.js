import Axios from 'axios'
import { useContext, useEffect, useState } from 'react';
import { Button, Container, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {Store} from'../Store'

export default function SignInScreen(){     
    const navigate = useNavigate();
    const{search}=useLocation()
    const redirectInUrl=new URLSearchParams(search).get('redirect')
    const redirect =redirectInUrl?redirectInUrl:'/'
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const {state,dispatch:ctxDispatch}=useContext(Store)
  const {userInfo}=state;
    const submitHandler=async(e)=>{
        e.preventDefault();
        try{
const{data}=await Axios.post('/api/users/signin',{
    email,
    password,
})
ctxDispatch({type:'USER_SIGNIN',payload:data})
localStorage.setItem('userInfo', JSON.stringify(data));
navigate(redirect || '/');        
}catch(err){
alert('invalid email or password')
        }
    }
    useEffect(() => {
        if (userInfo) {
          navigate(redirect);
        }
      }, [navigate, redirect, userInfo]);
return(
    
    <Container className="small-container">
        <Helmet>
            <title>sign In</title>
        </Helmet>
        <h1 className="my-3" >Sign In</h1>
        <div  style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}></div>
        <Form  onSubmit={submitHandler}>
            <FormGroup className="mb-3" controlId="email" style={{ 'width':400}}> 
<FormLabel >Email</FormLabel>
<FormControl type="email" required onChange={(e)=>setEmail(e.target.value)}/>
            </FormGroup>
            <FormGroup className="mb-3" controlId="password" style={{ 'width':400}}> 
<FormLabel >Password</FormLabel>
<FormControl type="password" required onChange={(e)=>setPassword(e.target.value)}/>
            </FormGroup>
            <div className="mb-3">
                <Button type="submit"> Sign In</Button>
            </div>
            <div className="mb-3">
                New Customer{' '}
                <Link to={`/signup?redirect=${redirect}`}> create your account </Link>
            </div>
        </Form>
    </Container>
 
)
}