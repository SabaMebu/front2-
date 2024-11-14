import styled from "styled-components";
import Link from "next/link";

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centers all content */
`;

const WhiteBox = styled(Link)`
  background-color: white;
  padding: 20px;
  border-radius: 8px; /* Slightly rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Box shadow */
  border: 1px solid #ddd; /* Thin border */
  display: flex;
  flex-direction: column;
  align-items: center; /* Centers content */

  img {
    width: 100%; /* Ensures image fills container width */
    height: auto; /* Maintains aspect ratio */
    max-height: 200px; /* Limit maximum height */
    border-radius: 4px; /* Rounded corners for the image */
    object-fit: contain; /* Ensures image is fully visible without cropping */
  }

  @media (max-width: 476px) {
    img {
      max-height: 220px; /* Slightly larger for smaller screens */
    }
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
        <img
          src={images[0]}
          alt={title}
          srcSet={`${images[0]} 1x, ${
            images[1] || images[0]
          } 2x`} /* Higher resolution image if available */
          sizes="(max-width: 768px) 100vw, 200px" /* Adjusts image size based on screen width */
        />
      </WhiteBox>
      <Description>{title}</Description>
    </ProductWrapper>
  );
}
