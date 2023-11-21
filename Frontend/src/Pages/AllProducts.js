import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { getProduct, deleteProduct } from "../Service/Api";
import { useNavigate } from "react-router-dom";

function AdminAllproducts() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State for the search term
  const nav = useNavigate();

  async function fetchData() {
    try {
      const productsData = await getProduct();
      setProducts(productsData.data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // Filter products based on the search term
  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = async (id) => {
    await deleteProduct(id)
      .then((res) => {
        console.log(res);
        fetchData(); // Fetch updated product list after deletion
      })
      .catch((error) => {
        console.error("Error deleting product", error);
      });
  };

  const handleEdit = (id) => {
    localStorage.setItem('editid', id);
    nav("/EditProduct");
  };

  return (
    <>
      {/* Add a search input field */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table className="table table-bordered">
        {/* Table headers */}
        <thead className="bg-dark text-white">
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Image</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {filteredProducts.map((obj) => (
            <tr key={obj.pid}>
              <td>{obj.pid}</td>
              <td>{obj.productName}</td>
              <td>${obj.productPrice}</td>
              <td>
                <img
                  src={obj.productImage}
                  alt={obj.productName}
                  style={{ maxWidth: '100px', maxHeight: '100px' }} // Standard image size
                />
              </td>
              <td>{obj.description}</td>
              <td>
                <button onClick={() => handleEdit(obj.pid)} className="btn btn-success">
                  Edit
                </button>
                <button onClick={() => handleDelete(obj.pid)} className="btn btn-danger">
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default AdminAllproducts;
