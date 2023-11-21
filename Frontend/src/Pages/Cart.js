import React, { useEffect, useState } from 'react';
import { getCart,deleteCartItem } from '../Service/Api';
import { Card, Col, Button } from 'react-bootstrap';
import { getCartCount } from '../Service/Api';
const  Cart = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await getCart(localStorage.getItem('uid'));
                setOrders(response.data);
            } catch (error) {
                console.error("Error fetching user orders:", error);
            }
        }

        fetchOrders();
    }, []);

    const totalAmount = calculateTotalAmount(orders);
    const handleRemove=async(id)=>{
      await deleteCartItem(id)
    }
    const cartNo= getCartCount(localStorage.getItem('uid'))
    console.log(cartNo)

    return (
        <div className="container">
            {orders.length === 0 ? (
                <div className='cart-empty shadow card'>
                    <p><b>Your Cart is empty</b></p>
                </div>
            ) : (
                <div>
                    <h1 className='cart-title primary'>Cart</h1>
                    <div className='order-products row'>
                        {orders.map((order) => (
                            order.products.map((product) => (
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
                                            <Card.Text>Price: ${product.productPrice.toFixed(2)}</Card.Text>
                                            <button className="btn btn-danger" onClick={()=>handleRemove(order.oid)}>Remove</button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        ))}
                    </div>
                    <p className='cart-total card'>Total: ${totalAmount.toFixed(2)}</p>
                </div>
            )}
        </div>
    );
};

const calculateTotalAmount = (orders) => {
    return orders.reduce((total, order) => {
        return total + order.orderTotal;
    }, 0);
}

export default Cart;
