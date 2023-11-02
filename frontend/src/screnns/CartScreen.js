import axios from "axios";
import { useContext } from "react";
import { Button, Card, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import MessageBox from "../components/MessageBox";
import { Store } from "../Store";

export default function CartScreen(){
    const navigate =useNavigate()
    const{ state ,dispatch:ctxDispatch}=useContext(Store)
const{

    cart:{cartItems},
}=state

const updateCartHandeler=async(item,quantity)=>{
    const{data}=await axios.get(`/api/products/${item._id}`)
    if (data.countInStock<quantity){
        window.alert('sorry product is out of stock')
        return;
    }    
    ctxDispatch({
        type:'CART_ADD_ITEM',
        payload:{...item,quantity}
    })
}

const removeItemHandler=(item)=>{
 ctxDispatch({type:'CART_REMOVE_ITEM',payload:item})       
}
const checkoutHandler=()=>{
    navigate(`/signin?redirect=/shipping`)
}
return(
    <div >
        <Helmet>
            <title>Shopping Cart</title>
        </Helmet>
        <h1>Shopping Cart</h1>
        <Row>
<Col md={8}>
    {
        cartItems.length===0?(
        <MessageBox>
            Cart is empty.<Link to="/">Go Shopping</Link>
        </MessageBox>
        ):
        (
            <ListGroup> 
                {cartItems.map((item)=>(
<ListGroupItem key={item._id}> 
<Row className="align-items-center">
    <Col md={4}> 
<img
src={item.image}
alt={item.name}
className="img-fluid rounder img-thumbnail"
></img>{' '}
<Link to={`/product/${item.slug} `}> {item.name}</Link>
</Col>
<Col md={3}>
    <Button variant="ligth"
    onClick={()=>updateCartHandeler(item,item.quantity-1)}
    disabled={item.quantity===1}>
        <i className="fas fa-minus-circle" ></i>
    </Button>{' '}
    <span>{item.quantity}</span>{' '}
    <Button variant="ligth"
    onClick={()=>updateCartHandeler(item,item.quantity+1)}
    disabled={item.quantity===item.countInstock}>
        <i className="fas fa-plus-circle" ></i>
    </Button>
</Col>
<Col md={3}>{item.price}</Col>
<Col md={2}>
    <Button
    onClick={()=>removeItemHandler(item)}
    variant="light">
        <i className="fas fa-trash"></i>
    </Button>
</Col>
</Row>
</ListGroupItem>
                ))}
            </ListGroup>
        )
    }
</Col>
<Col md={4}>
<Card>
        <Card.Body>
            <ListGroup variant="flush">
<ListGroupItem>
    <h3>
        Subtotal({cartItems.reduce((a,c)=>a+c.quantity,0)}{' '}
        items):$
        {cartItems.reduce((a,c)=>a+c.price*c.quantity,0)}
    </h3>
</ListGroupItem>
<ListGroupItem>
    <div className="d-grid">
        <Button
type="button"
variant="primary"
onClick={checkoutHandler}
disabled={cartItems.length===0}
>
Process checkout
        </Button>
    </div>
</ListGroupItem>
            </ListGroup>
        </Card.Body>
    </Card>
</Col>
        </Row>
    </div>
)
}