import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { addProduct } from '../Service/Api';
import { toast,ToastContainer } from 'react-toastify';
function ProductForm() {
  const [formData, setFormData] = useState({
    productName: '',
    productPrice: 0,
    productImage: '',
    description: '',
    productQuantity:10000
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
console.log(formData)


  const handleSubmit = async (e) => {
    e.preventDefault();
   await addProduct(formData).then(toast.success("added successfully"))
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
            value={formData.productName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productPrice">Product Price</label>
          <input
            type="number"
            className="form-control"
            id="productPrice"
            name="productPrice"
            value={formData.productPrice}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productImage">Product Image URL</label>
          <input
            type="text"
            className="form-control"
            id="productImage"
            name="productImage"
            value={formData.productImage}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productQuantity">productQuantity</label>
          <input
            type='number'
            className="form-control"
            id="productQuantity"
            name="productQuantity"
            value={formData.productQuantity}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
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
}

export default ProductForm;
