import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify'
import { useState,useEffect } from 'react';
import Loader from './Loader';
import {addCart,getProduct } from '../Service/Api';
const SearchPage = () => {
  const searchTerm = localStorage.getItem('search');
  const [sportsProducts,setSportsProducts]=useState([])
  async function fetchData() {
    try {
      const productsData = await getProduct();
      setSportsProducts(productsData.data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  }
  console.log(sportsProducts)
  useEffect(() => {
    fetchData();
  }, []);
  const addTocart = async (pid,name) => {
    const products = sportsProducts.find((p) => p.pid === pid);
    const uid=localStorage.getItem('uid')
    const orderAddress="Address"
    const paymentMode="upi"
    const quantity=1
    const productIdQuantity=[{pid,quantity}]
    const cart={orderAddress,paymentMode,uid,product:productIdQuantity}
    const res=await addCart(cart)
    if(res.status===200)
    {
      toast.success(`Added ${name} to cart successfully`)
    }
    else{
      toast.error(`${name} not added to cart`)
    }
  }
  const filteredProducts = sportsProducts.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setLoading(false);
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => {
      clearTimeout(loaderTimeout);
    };
  }, []);
  return (
    
    <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {loading ? (
        <Loader /> // Display the loader while loading is true
      ) : (
        <>

      <Row style={{ justifyContent: 'center', alignItems: 'center' }} >
        {filteredProducts.map((product) => (
           <Col md={4} key={product.pid}>
           <Card className="products-card">
             <Card.Img
               variant="top"
               src={process.env.PUBLIC_URL + product.productImage}
               alt={product.productName}
             />
             <Card.Body>
               <Card.Title>{product.productName}</Card.Title>
               <Card.Text>{product.description}</Card.Text>
               <button className="shopnow-btn" onClick={() => addTocart(product.pid,product.productName)}>Shop now</button>
             </Card.Body>
           </Card>
         </Col>
        ))}
      </Row>
        </>
      )
    }
    <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Container>
  );
};

export default SearchPage;
