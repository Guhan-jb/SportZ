import React, { useState, useEffect } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import '../Assets/CSS/HomePage.css';
import Loader from './Loader';
import {ToastContainer,toast} from 'react-toastify';
import { getUser,addCart,getProduct } from '../Service/Api';
const MenPage = () => {
  const [loading, setLoading] = useState(true);
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
  const menProducts = sportsProducts
  const addTocart = async (pid) => {
    const products = sportsProducts.find((p) => p.pid === pid);
    const uid=localStorage.getItem('uid')
    const orderAddress="Address"
    const paymentMode="upi"
    const quantity=1
    const productIdQuantity=[{pid,quantity}]
    const cart={orderAddress,paymentMode,uid,product:productIdQuantity}
    console.log(cart)
    await addCart(cart).then(toast.success("Added to cart"))
  }
  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setLoading(false);
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => {
      clearTimeout(loaderTimeout);
    };
  }, []);
  return (
    <div className='container'>
      {loading ? (
        <Loader /> // Display the loader while loading is true
      ) : (
        <>
          <h1 className="mt-5 mb-4">Women's Sports Collection</h1>

          {/* Grid of 3x4 Cards */}
          <Row>
            {menProducts.map((product, index) => (
              <Col md={3} key={index}>
                <Card className="products-card">
                  <Card.Img
                    variant="top"
                    src={product.productImage}
                    alt={`Product ${index + 1}`}
                  />
                  <Card.Body>
                    <Card.Title>{product.productName}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <button className="shopnow-btn" onClick={() => addTocart(product.pid)}>Shop now</button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
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
          </Row>
        </>
      )}
    </div>
  );
};

export default MenPage;
