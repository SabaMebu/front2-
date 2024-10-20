// ProductBox.jsx
import styled from "styled-components";
import Link from "next/link";

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centers all content */
`;

const WhiteBox = styled(Link)`
  background-color: white; /* White background */
  padding: 20px;
  border-radius: 8px; /* Slightly rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Box shadow */
  border: 1px solid #ddd; /* Thin border */
  display: flex;
  flex-direction: column;
  align-items: center; /* Centers content */

  img {
    max-width: 150%; /* Ensure the image fits */
    max-height: 270px; /* Limit height */
    border-radius: 4px; /* Rounded corners for the image */
  }
`;

const Description = styled.div`
  margin-top: 8px; /* Space between image and description */
  font-size: 16px; /* Description text size */
  color: #333; /* Text color */
`;

export default function ProductBox({ _id, description, images, title }) {
  const url = "/products/" + _id;

  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <img src={images[0]} alt={title} />
      </WhiteBox>
      <Description>{title}</Description>
    </ProductWrapper>
  );
}
