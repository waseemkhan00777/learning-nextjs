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
  return (
    <div>
      Product review for {params.productId} is {params.reviewId}
    </div>
  );
};

export default ProductReview;
