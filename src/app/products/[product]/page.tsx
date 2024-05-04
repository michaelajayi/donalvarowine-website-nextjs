"use client";
import React, { useEffect } from "react";

const Product = ({ params }: { params: { product: string } }) => {
  useEffect(() => {
    // get all required data for the particualr product
  }, []);
  return (
    <div>
      <h1>Product - {params.product} </h1>
    </div>
  );
};

export default Product;
