import React from "react";
import logo from "../images/icons/logo-sm.png";
import "./Header.css";
import search from "../images/icons/search-icon-sm.png";
import cart from "../images/icons/cart-sm.png";
import NavBarList from "../Pages/NavbarList/NavBarList";

function Header() {
  return (
    <div>
      <div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              ☰
            </button>
            <a className="navbar-brand mx-auto" href="/">
              <img src={logo} alt="logo" />
            </a>

            <div className="navbar-collapse collapse">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <NavBarList LinkUrl="/mac" LinkName="Mac" />
                <NavBarList LinkUrl="/iphone" LinkName="iPhone" />
                <NavBarList LinkUrl="/ipad" LinkName=" iPad" />
                <NavBarList LinkUrl="/watch" LinkName="Watch" />
                <NavBarList LinkUrl="/tv" LinkName="Tv" />
                <NavBarList LinkUrl="/music" LinkName=" Music" />
                <NavBarList LinkUrl="/support" LinkName="Support" />

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
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
