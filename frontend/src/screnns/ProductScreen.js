import axios from "axios";
import { useContext, useEffect, useReducer } from "react";
import { Badge, Button, Card, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import {  useNavigate, useParams } from "react-router-dom"
import LodingBox from "../components/LodingBox";
import MessageBox from "../components/MessageBox";
import Rating from "../components/Rating";
import { Store } from "../Store";
import { getError } from "./util";
const reducer=(state,action)=>{
    switch(action.type){
      case'FETCH_REQUEST':
      return{...state,loading:true}
      case'FETCH_SUCCESS':
      return{...state,product:action.paylode,loading:false};
      case 'FETCH_FAIL':
        return{...state,loading:false,error:action.paylode};
        default:
          return state;
    }
  };

const ProductScreen=()=>{
    const navigate =useNavigate() 
    const params=useParams()
    const {slug}=params;
    const [{loading,error,product},dispatch]=useReducer(reducer,{
        product:[],
        loading:true,
        error:'',
      })
        useEffect(() => {
          const fetchData = async () => {
            dispatch({type:'FETCH_REQUEST'})
            try{
              const result = await axios.get(`/api/products/slug/${slug}`);
              dispatch({type:'FETCH_SUCCESS',paylode:result.data})
            }catch(err){
               dispatch({type:'FETCH_FAIL',paylode:getError(err)})
            }
      
      
          };
          fetchData();
        }, [slug]);

const {state,dispatch:ctxDispatch}=useContext(Store);
const {cart}=state
        const addToCardHandeler= async()=>{
const existItem=cart.cartItems.find((x)=>x._id===product._id)
const quantity=existItem ? existItem.quantity +1:1;
const {data} = await axios.get(`/api/products/${product._id}`)
if (data.countInStock<quantity){
    window.alert('sorry product is out of stock')
    return;
}    
ctxDispatch({
    type:'CART_ADD_ITEM',
    payload:{...product,quantity}
})
navigate('/cart')
        }

    return  loading?(
        <LodingBox/>
        ):error?(
        <MessageBox variant="danger"> {error}</MessageBox>
        ):(
<div  > 
    <Row>
    <Col md={6}>
        <img 
        className="img-large"
        src={product.image}
        alt={product.name}>
        </img>
    </Col>
    <Col md={3}>
        <ListGroup variant="flush">
            <ListGroupItem>
                <Helmet>
              <title>{product.name}</title>
              </Helmet>
                <h1>{product.name}</h1>
              
            </ListGroupItem>
            <ListGroupItem>
                <Rating
                rating={product.rating}
                numReviews={product.numReviews}>
                </Rating>
            </ListGroupItem>
            <ListGroupItem>
                price:${product.price}
            </ListGroupItem>
            <ListGroupItem>
                Description:
                <p>{product.description}</p>
            </ListGroupItem>
        </ListGroup>
    </Col>




   <Col md={3}>
        <Card >
<Card.Body>
    <ListGroup variant="flush" >
<ListGroup.Item>
    <Row>
        <Col>price:</Col>
        <Col>$ {product.price}</Col>
    </Row>
</ListGroup.Item>

<ListGroup.Item>
    <Row>
        <Col>status:</Col>
        <Col>
        { product.countInStock>0?(
        <Badge bg="success"> In stock</Badge>
        ):(
            <Badge bg="danger">  product is out of stock</Badge>
        )}
        </Col>
    </Row>
</ListGroup.Item>
{product.countInStock>0 &&(
    <ListGroup.Item>
        <div className="d-grid">
<Button style={{backgroundColor:'#f0c040' ,color:'black'}} onClick={addToCardHandeler} variant="primary" >
    Add To Card
</Button>
        </div>
    </ListGroup.Item>
)}
    </ListGroup>
</Card.Body>
        </Card>
    </Col>
    </Row>
     </div>
    )
}
export default ProductScreen