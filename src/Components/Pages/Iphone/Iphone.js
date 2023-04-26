import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Iphone() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/iphone.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch(() => console.log("Unable to fetch data!!"));
  }, []);
  console.log(products);
  let order = 1;
  return (
    <section className="internal-page-wrapper top-100">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12 mt-5">
            <br />
            <div className="title-wraper bold">Iphones</div>
            <br />
            <div className="brief-description">The best for the brightest.</div>
          </div>
        </div>
        {products?.map((data) => {
          let id = data.product_url;
          let title = data.product_name;
          let img = data.product_img;
          let Brief = data.product_brief_description;
          let StartPrice = data.starting_price;
          let PriceRange = data.price_range;
          let productPage = "/iphone/" + id;

          let order1 = 1;
          let order2 = 2;
          if (order !== 1) {
            order1 = 2;
            order2 = 1;
            order--;
          } else {
            order++;
          }

          let productDiv = (
            <div
              key={id}
              className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
            >
              <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                <div className="product-title">{title}</div>
                <div className="product-brief">{Brief}</div>
                <div className="starting-price">
                  {`Starting at ${StartPrice}`}
                </div>
                <div className="monthly-price">{PriceRange}</div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <Link to={productPage}>Learn More</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className={`col-sm-12 col-md-6 order-${order2}`}>
                <div className="product-image">
                  <img src={img} alt="images" />
                </div>
              </div>
            </div>
          );
          return productDiv;
        })}
      </div>
    </section>
  );
}

export default Iphone;
