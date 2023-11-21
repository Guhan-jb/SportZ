import React, { useState,useEffect   } from "react";
import { Container, Navbar, Nav, Dropdown } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";
import "../Assets/CSS/NavBar.css";
import { getUserbyId } from "../Service/Api";
export default function NavBar() {
  const [showBasic, setShowBasic] = useState(false);
  const [search, setSearch] = useState("");
  const [user,setUser]=useState([])
  const uid=localStorage.getItem('uid')
  const fetchuser = async () => {
    try {
        const response = await getUserbyId(uid);
        setUser(response.data);
    } catch (error) {
        console.error("Error fetching user", error);
    }
}
useEffect(() => {
    fetchuser();
}, []);
  let name=user.name
  const nav = useNavigate();
  const HandleLogout = () => {
    // localStorage.setItem('Token',null)
    nav("/");
  };
  const HandleSearch = () => {
    localStorage.setItem("search", search);
    nav("/user/search");
  };
  const HandleNav = (param) => {
    nav(`/user${param}`);
  };

  const HandleLogin = () => {
    if (name!=="null") {
      return (
        <>
          <div className="nav-item">
            <button
              className="nav-link btn btn-link"
              onClick={() => HandleNav("/profile")}
            >
              Profile
            </button>
          </div>
          <div className="nav-item">
            <button
              className="nav-link btn btn-link"
              onClick={() => HandleNav("/cart")}
            >
              Cart
            </button>
          </div>
          <div className="nav-item">
            <button className="nav-link btn btn-link" onClick={HandleLogout}>
              Logout
            </button>
          </div>
        </>
      );
    } else {
      return (
        <div className="nav-item">
          <button
            className="nav-link btn btn-link"
            onClick={() => HandleNav("/login")}
          >
            Login
          </button>
        </div>
      );
    }
  };

  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/">SportsZ</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarSupportedContent"
            onClick={() => setShowBasic(!showBasic)}
          />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="mr-auto">
              <div className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  onClick={() => HandleNav("/")}
                >
                  Home
                </button>
              </div>
              <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                  Categories
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => HandleNav("/men")}>
                    Men's
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => HandleNav("/women")}>
                    Women's
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => HandleNav("/kids")}>
                    Kids
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => HandleNav("/accessories")}>
                    Accessories
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {HandleLogin()}
            </Nav>
          </Navbar.Collapse>
          <div className="nav-item mr-auto justify-content-end">
            <div class="">
              <input
                type="text"
                class="input"
                id="text"
                name="seaect"
                placeholder="search"
                autocomplete="off"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <input
                class="button--submit"
                value="Search"
                type="submit"
                onClick={HandleSearch}
              />
            </div>
          </div>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}
