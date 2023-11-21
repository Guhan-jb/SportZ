import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { getProduct, deleteProduct,getUser,deleteUser } from "../Service/Api";
import { useNavigate } from "react-router-dom";

function AdminAllUsers() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State for the search term
  const nav = useNavigate();

  async function fetchData() {
    try {
      const productsData = await getUser();
      setProducts(productsData.data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // Filter products based on the search term
//   const filteredProducts = products.filter((product) =>
//     product.productName.toLowerCase().includes(searchTerm.toLowerCase())
//   );

  const handleDelete = async (id) => {
    await deleteUser(id)
      .then((res) => {
        console.log(res);
        fetchData(); // Fetch updated product list after deletion
      })
      .catch((error) => {
        console.error("Error deleting product", error);
      });
  };
  console.log(products)
  const handleEdit = (id) => {
  
  };

  return (
    <>
      {/* Add a search input field */}
      <div className="mb-3">
       
      </div>
      <table className="table table-bordered">
        {/* Table headers */}
        <thead className="bg-dark text-white">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {products.map((obj) => (
            <tr key={obj.uid}>
              <td>{obj.uid}</td>
              <td>{obj.name}</td>
              <td>{obj.email}</td>
              <td>{obj.role}</td>
              <td>
                <button onClick={() => handleEdit(obj.uid)} className="btn btn-success">
                  Edit
                </button>
                <button onClick={() => handleDelete(obj.uid)} className="btn btn-danger">
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

export default AdminAllUsers;
