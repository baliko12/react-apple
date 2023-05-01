import React, { useEffect } from "react";
import logo from "../images/icons/logo-sm.png";
import search from "../images/icons/search-icon-sm.png";
import cart from "../images/icons/cart-sm.png";
import NavBarList from "../Pages/NavbarList/NavBarList";
import { Navbar } from "react-bootstrap";
import $ from "jquery";
function Header() {
  useEffect(() => {
    $(".search-link").click(function (e) {
      e.preventDefault();
      $(".navbar-collapse.collapse").removeClass("show");
      $(".searchbox").slideToggle();
    });
  }, []);
  return (
    <div>
      <div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <Navbar
              className="w-100"
              collapseOnSelect
              expand="lg"
              variant="dark"
            >
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />

              <a className="navbar-brand mx-auto" href="/">
                <img src={logo} alt="logo" />
              </a>

              <Navbar.Collapse id="responsive-navbar-nav">
                <div className="navbar-collapse collapse">
                  <ul className="navbar-nav nav-justified w-100 nav-fill">
                    <NavBarList LinkUrl="/mac" LinkName="Mac" />
                    <NavBarList LinkUrl="/iphone" LinkName="iPhone" />
                    <NavBarList LinkUrl="/ipad" LinkName=" iPad" />
                    <NavBarList LinkUrl="/watch" LinkName="Watch" />
                    <NavBarList LinkUrl="/tv" LinkName="Tv" />
                    <NavBarList LinkUrl="/music" LinkName=" Music" />
                    <NavBarList LinkUrl="/support" LinkName="Support" />
                    <NavBarList LinkUrl="/table1" LinkName="Table 1" />
                    <NavBarList LinkUrl="/table2" LinkName="Table 2" />

                    <li className="nav-item">
                      <a className="nav-link js-scroll-trigger" href="/search">
                        <img src={search} alt="search" />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link js-scroll-trigger" href="/cart">
                        <img src={cart} alt="cart" />
                      </a>
                    </li>
                  </ul>
                </div>
              </Navbar.Collapse>
            </Navbar>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
