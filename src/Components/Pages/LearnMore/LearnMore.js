import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function LearnMore() {
  const [product, setProduct] = useState([]);
  const { clientID } = useParams();
  //   console.log(clientID);

  useEffect(() => {
    fetch("/iphone.json")
      .then((res) => res.json())
      .then((data) => {
        const allProduct = data.products;
        // console.log(allProduct);
        const singleProduct = allProduct.filter(
          (result) => result.product_url === clientID
        );
        setProduct(singleProduct);
        console.log(singleProduct);
      })
      .catch(() => console.log("Unable to fetch data!!"));
  });

  return (
    <div>
      <section className="internal-page-wrapper top-100">
        <div className="container">
          {product.map((product, i) => {
            let id = product.product_url;
            let title = product.product_name;
            let img = product.product_img;
            let Brief = product.product_brief_description;
            let StartPrice = product.starting_price;
            let PriceRange = product.price_range;
            let details = product.product_description;

            let productDiv = (
              <div key={id} className="bottom-100">
                <div className="row justify-content-center text-center bottom-50">
                  <div className="mt-5 col-12">
                    <br />
                    <div className="title-wraper bold">{title}</div>
                    <div className="brief-description">{Brief}</div>
                  </div>
                </div>

                <div className="row justify-content-center text-center product-holder h-100">
                  <div className={`col-sm-12 col-md-6 my-auto`}>
                    <div className="starting-price">
                      {`Starting at ${StartPrice}`}
                    </div>
                    <div className="monthly-price">{PriceRange}</div>
                    <div className="product-details">{details}</div>
                  </div>

                  <div className={`col-sm-12 col-md-6`}>
                    <div className="prodict-image">
                      <img src={img} alt="new" />
                    </div>
                  </div>
                </div>
              </div>
            );
            return productDiv;
          })}
        </div>
      </section>
    </div>
  );
}

export default LearnMore;
