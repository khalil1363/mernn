import axios from "axios"
import { useContext } from "react"
import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Store } from "../Store"
import Rating from './Rating'
const Product=(props)=>{
    const{product}=props
    const{ state ,dispatch:ctxDispatch}=useContext(Store)
    const{
    
        cart:{cartItems},
    }=state
    const addToHandeler=async(item)=>{
      const existItem=cartItems.find((x)=>x._id===product._id)
const quantity=existItem ? existItem.quantity +1:1;
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
    return(
        <Card  >
      <Link to={`/product/${product.slug}`}><img src={product.image}  className="card-img-top" alt="img"/>
      </Link>
      <Card.Body>
      <Link style={{color:'black'}} to={`/product/${product.slug}`}>
        <Card.Title>{product.name}</Card.Title>
     </Link>
     <Rating rating={product.rating} numReviews={product.numReviews}/>
     <Card.Text> ${product.price }</Card.Text>
     <Button  style={{backgroundColor:'#f0c040' ,color:'black'}}
     onClick={()=>addToHandeler(product)}
     >Add To Cart</Button>
      </Card.Body>
            </Card>
    )
}
export default Product