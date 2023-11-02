import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeScreen from './screnns/HomeScreen';
import ProductScreen from './screnns/ProductScreen';
import  {Navbar,Container,Nav, Badge, NavDropdown} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { useContext, useEffect, useState } from 'react';
import { Store } from './Store';
import CartScreen from './screnns/CartScreen';
import SignInScreen from './screnns/SignInScreen';
import ShippingAddressScreen from './screnns/ShippingAddressScreen';
import SignupScreen from './screnns/SignupScreen';
import PaymentMethodScreen from './screnns/PaymentMethodScreen';
import PlaceOrderScreen from './screnns/PlaceOrderScreen';
import OrderScreen from './screnns/OrderScreen';

import OrderHistoryScreen from './screnns/OrderHistoryScreen';
import SearchBox from './components/SearchBox';
import AdminRoute from './components/AdminRoute';
import ProductListScreen from './screnns/ProductListScreen';
import ProductEditScreen from './screnns/ProductEditScreen';
import OrderListScreen from './screnns/OrderListScreen';
import UserListScreen from './screnns/UserListScreen';
import UserEditScreen from './screnns/UserEditScreen';
import Button from 'react-bootstrap/Button';
import { getError } from './screnns/util';
import axios from 'axios';
import SearchScreen from './screnns/SearchScreen';
import log from './log.jpg'
import car from './car.jpg'

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {cart,userInfo}=state
  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/signin';
  };
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories`);
        setCategories(data);
      } catch (err) {
        alert(getError(err));
      }
    };
    fetchCategories();
  }, []);
  return (
    <div
        className={
          sidebarIsOpen
            ? 'd-flex flex-column site-container active-cont'
            : 'd-flex flex-column site-container'
        }
      >
     <header >
      <Navbar style={{backgroundColor:'#212529' }}  expand="lg">
        <Container >
        <Button
                variant="dark"
                onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
              >
                <i className="fas fa-bars"></i>
              </Button>
          <LinkContainer to="/">
          <Navbar.Brand>  <img src={log} alt="logo"  style={{'height':40}} /> </Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto w-100 justify-content-end" >
            <SearchBox/>
            <Link to="/cart" className='nav-link'>
            <img src={car} alt="logo"  style={{'height':40}} />
              {
                cart.cartItems.length>0 && (
                  <Badge pill bg="danger">
                    {cart.cartItems.reduce((a,c)=>a+c.quantity,0)}
                  </Badge>
                )
              }
                </Link>
                {userInfo ? (
                 <NavDropdown  title={userInfo.name}  id="basic-nav-dropdown"  > 
                   
                    <LinkContainer to="/orderhistory">
                      <NavDropdown.Item>Order History</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <Link
                      className="dropdown-item"
                      to="#signout"
                      onClick={signoutHandler}
                    >
                      Sign Out
                    </Link>
                  </NavDropdown>
                ) : (
                  <Link className="nav-link" to="/signin">
                  <h4 style={{ color:'white'}}>  Sign In </h4>
                  </Link>
                )}
                 {userInfo && userInfo.isAdmin && (
                    <NavDropdown title="Admin" id="admin-nav-dropdown">
                      <LinkContainer to="/admin/products">
                        <NavDropdown.Item>Products</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/orders">
                        <NavDropdown.Item>Orders</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/users">
                        <NavDropdown.Item>Users</NavDropdown.Item>
                      </LinkContainer>
                    </NavDropdown>
                  )}
          </Nav>
        </Container>
      </Navbar>

      </header>
      <div
          className={
            sidebarIsOpen
              ? 'active-nav side-navbar d-flex justify-content-between flex-wrap flex-column'
              : 'side-navbar d-flex justify-content-between flex-wrap flex-column'
          }
        >
          <Nav className="flex-column text-white w-100 p-2" style={{backgroundColor:'#212529'}}>
            <Nav.Item>
              <strong>Categories</strong>
            </Nav.Item>
            {categories.map((category) => (
              <Nav.Item key={category}>
                <LinkContainer
                  to={`/search?category=${category}`}
                  onClick={() => setSidebarIsOpen(false)}
                >
                  <Nav.Link>{category}</Nav.Link>
                </LinkContainer>
              </Nav.Item>
            ))}
          </Nav>
        </div>
<main>
  <Container className='mt-3'>
  <Routes>
  <Route path="/product/:slug" element={<ProductScreen/>}/>
    <Route path="/cart" element={<CartScreen/>}/>
    <Route path="/search" element={<SearchScreen />} />
    <Route path="/signin" element={<SignInScreen/>}/>
    <Route path="/signup" element={<SignupScreen  />} />
    <Route path="/placeorder" element={<PlaceOrderScreen />} />


    <Route path="/shipping" element={<ShippingAddressScreen />}/>
      <Route path="/order/:id" element={<OrderScreen />}/>
      <Route path="/orderhistory" element={<OrderHistoryScreen />}/>
      <Route path="/payment" element={<PaymentMethodScreen />}/>        
      <Route path="/admin/orders" element={<AdminRoute><OrderListScreen /></AdminRoute>}/>             
      <Route path="/admin/products" element={<AdminRoute><ProductListScreen /></AdminRoute>}/>
      <Route path="/admin/product/:id" element={<AdminRoute><ProductEditScreen /></AdminRoute>}/>
      <Route path="/admin/users" element={<AdminRoute><UserListScreen /></AdminRoute>}/>
      <Route path="/admin/user/:id" element={<AdminRoute><UserEditScreen /></AdminRoute>}/>
    <Route path="/" element={<HomeScreen/>}/>
    </Routes>
  </Container>
</main>
<footer>
  <div className='text-center'>All rigth reserved</div>
</footer>
    </div>
  );
}
export default App;
