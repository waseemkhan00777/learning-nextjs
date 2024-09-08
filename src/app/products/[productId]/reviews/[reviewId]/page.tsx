import React from "react";

const ProductReview = ({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) => {
  return (
    <div>
      Product review for {params.productId} is {params.reviewId}
    </div>
  );
};

export default ProductReview;
