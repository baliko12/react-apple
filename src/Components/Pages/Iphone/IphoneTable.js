import React, { useState, useEffect } from "react";
import "./iphoneTable.css";
function IphoneTable() {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/iphone.json")
      .then((result) => result.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);
  console.log(Products);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Product Id</th>
            <th>Product Name</th>
            <th>Product Link</th>
            <th>Product Image</th>
            <th>Product Description</th>
            <th>Product Brief Description</th>
            <th>Starting Price</th>
          </tr>
        </thead>
        <tbody>
          {Products.map((prod, i) => (
            <tr key={i}>
              <td>{prod.description_id}</td>
              <td>{prod.product_name}</td>
              <td>
                <a href={prod.product_link}>{prod.product_link}</a>
              </td>
              <td>
                <a href={prod.product_img}>
                  <img src={prod.product_img} alt={prod.product_name} />
                </a>
              </td>
              <td>{prod.product_description}</td>
              <td>{prod.product_brief_description}</td>
              <td>{prod.starting_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default IphoneTable;
