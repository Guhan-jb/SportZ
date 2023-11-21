import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import '../Assets/CSS/HomePage.css'; // Create a CSS file for MenPage if needed
import { selectUser } from '../redux/userSlice';
import Loader from './Loader'; // Import the Loader component
import { addCart,getProduct } from '../Service/Api';
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
  const addTocart = async (pid) => {
    const products = sportsProducts.find((p) => p.pid === pid);
    const uid=localStorage.getItem('uid')
    const orderAddress="Address"
    const paymentMode="upi"
    const quantity=1
    const productIdQuantity=[{pid,quantity}]
    const cart={orderAddress,paymentMode,uid,product:productIdQuantity}
    console.log(cart)
    await addCart(cart)
  }
  const menProducts = sportsProducts

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setLoading(false);
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => {
      clearTimeout(loaderTimeout);
    };
  }, []);
  const Email = useSelector(selectUser);
  return (
    <div className='container'>
      {loading ? (
        <Loader /> // Display the loader while loading is true
      ) : (
        <>
          <h1 className="mt-5 mb-4">Men's Sports Collection</h1>

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
          </Row>
        </>
      )}
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
    </div>
  );
};

export default MenPage;
