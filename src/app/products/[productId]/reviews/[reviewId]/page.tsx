"use client";
import { notFound } from "next/navigation";
import React from "react";

const ProductReview = ({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) => {
  if (parseInt(params.reviewId) > 50) {
    notFound();
  }
  if (parseInt(params.reviewId) === 5) {
    throw new Error("Error loading review...");
  }
  return (
    <div>
      Product review for {params.productId} is {params.reviewId}
    </div>
  );
};

export default ProductReview;
