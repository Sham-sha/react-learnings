import React from "react";

function PropsChild(props) {
  console.log(props); // Check what data is being received

  return (
    <div>
      <h1>Product Items</h1>
      
        {props.data && props.data.map((item, index) => (
          <h1 key={index}>{item.name}</h1>
        ))}
    </div>
  );
}

export default PropsChild;
