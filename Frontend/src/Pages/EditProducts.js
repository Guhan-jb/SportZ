import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { editProduct, getProductbyId } from '../Service/Api';
import { useNavigate } from 'react-router-dom';

function EditProductForm() {
  const id = localStorage.getItem('editid');

  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [description, setDescription] = useState('');
    const nav=useNavigate()
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getProductbyId(id);
        const productData = response.data;
        setProductName(productData.productName);
        setProductPrice(productData.productPrice);
        setProductImage(productData.productImage);
        setProductQuantity(productData.productQuantity);
        setDescription(productData.description);
      } catch (error) {
        console.error("Error fetching product", error);
      }
    }

    fetchData();
  }, [id]);

  const formData = { productName, productPrice, productImage,productQuantity, description };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await editProduct(id,formData);
    nav("/AllProduct")
  };

  return (
    <div className="container mt-4">
      <h1>Product Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            className="form-control"
            id="productName"
            name="productName"
            value={productName}
            onChange={(e) => { setProductName(e.target.value) }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productPrice">Product Price</label>
          <input
            type="number"
            className="form-control"
            id="productPrice"
            name="productPrice"
            value={productPrice}
            onChange={(e) => { setProductPrice(e.target.value) }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productImage">Product Image URL</label>
          <input
            type="text"
            className="form-control"
            id="productImage"
            name="productImage"
            value={productImage}
            onChange={(e) => { setProductImage(e.target.value) }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={description}
            onChange={(e) => { setDescription(e.target.value) }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productImage">Product Quantity</label>
          <input
            type="number"
            className="form-control"
            id="productQuantity"
            name="productQuantity"
            value={productQuantity}
            onChange={(e) => { setProductQuantity(e.target.value) }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditProductForm;
