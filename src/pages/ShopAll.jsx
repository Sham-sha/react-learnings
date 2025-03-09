import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function ShopAll() {
  // Hardcoded product data (all products)
  const products = [
    {
      name: "iPhone 13 Pro - Transparent",
      price: "LKR 499",
      image_url:
        "https://images.unsplash.com/photo-1535157412991-2ef801c1748b?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Samsung S23+ - Transparent",
      price: "LKR 799",
      image_url: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "iPhone 14 - Transparent with magsafe",
      price: "LKR 799",
      image_url: "https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aSUyMHBob25lfGVufDB8fDB8fHww",
    },
    {
      name: "Pixel 7 Pro - Transparent Wireless",
      price: "LKR 599",
      image_url: "https://images.unsplash.com/photo-1674111920345-6491746014e6?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGl4ZWwlMjBtb2JpbGV8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Pixel 6a - Matte Black",
      price: "LKR 499",
      image_url: "https://media.istockphoto.com/id/1461127289/photo/smartphone.webp?a=1&s=612x612&w=0&k=20&c=VNzfOGrYJ09hmK32qmNkT9sGZvXJ3Lgj8YzOdU46qPg=",
    },
    {
      name: "Pixel 6a",
      price: "LKR 399",
      image_url: "https://images.unsplash.com/photo-1669888940542-bf597f76ef39?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    },
    {
      name: "iPhone 14 - Transparent with magsafe",
      price: "LKR 799",
      image_url: "https://images.unsplash.com/photo-1592286927505-1def25115558?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aSUyMHBob25lfGVufDB8fDB8fHww ",
    },
    {
      name: "Pixel 7 Pro - Transparent Wireless",
      price: "LKR 599",
      image_url: "https://images.unsplash.com/photo-1669888940542-bf597f76ef39?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    },
    {
      name: "iPhone 13 Pro - Transparent",
      price: "LKR 499",
      image_url: "https://images.unsplash.com/photo-1604705528964-fad3b71b9dab?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGklMjBwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Samsung S23+ - Transparent",
      price: "LKR 799",
      image_url: "https://images.unsplash.com/photo-1583573636246-18cb2246697f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2Ftc3VuZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Pixel 6a - Transparent",
      price: "LKR 599",
      image_url: "https://images.unsplash.com/photo-1719898962473-a018b27b8401?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
    },
    {
      name: "Pixel 7 Pro - Transparent Wireless",
      price: "LKR 599",
      image_url: "https://images.unsplash.com/photo-1636633484288-ba18d16271a0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
    },
    {
      name: "iPhone 13 Pro - Transparent",
      price: "LKR 499",
      image_url: "https://images.unsplash.com/photo-1592179900370-57ae776846a2?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGklMjBwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Samsung S23+ - Transparent",
      price: "LKR 799",
      image_url: "https://images.unsplash.com/photo-1583573636246-18cb2246697f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2Ftc3VuZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "iPhone 14 - Transparent with magsafe",
      price: "LKR 799",
      image_url: "https://images.unsplash.com/photo-1615494488092-b13b68fe0eb5?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGklMjBwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Pixel 7 Pro - Transparent Wireless",
      price: "LKR 599",
      image_url: "https://images.unsplash.com/photo-1599016012665-13b74bb3b528?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGl4ZWwlMjBtb2JpbGV8ZW58MHx8MHx8fDA%3D",
    },
    // Add more products here as needed
  ];

  return (
    <div className="container mt-4">
      <h2 className=" fw-bold">Shop All</h2>
      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100">
              <div
                className="image-container"
                style={{
                  position: "relative",
                  width: "100%",
                  height: "200px", // Set a fixed height for square images
                  overflow: "hidden",
                }}
              >
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="card-img-top img-fluid"
                  style={{
                    objectFit: "cover", 
                    width: "100%",
                    height: "100%", 
                  }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text fw-bold">{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopAll;
