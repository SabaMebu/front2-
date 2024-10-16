import styled from "styled-components";
import Link from "next/link";
import Image from "next/image"; // Import the Image component

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center all content */
  margin-bottom: 20px; /* Add space below each product */
`;

const WhiteBox = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px; /* Slightly rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Box shadow */
  border: 1px solid #ddd; /* Thin border */
  display: flex;
  flex-direction: column;
  align-items: center; /* Center all content */

  img {
    max-width: 100%; /* Ensure the image scales properly */
    max-height: 150px;
    border-radius: 4px; /* Rounded corners for the image */
    object-fit: contain; /* Keep aspect ratio */
  }

  @media (max-width: 600px) {
    padding: 15px; /* Reduce padding on smaller screens */
  }
`;

const Description = styled.div`
  margin-top: 8px; /* Space between image and description */
  font-size: 16px; /* Description text size */
  color: #333; /* Text color */
  text-align: center; /* Center the text */
`;

export default function ProductBox({ _id, description, images, title }) {
  const url = "/products/" + _id;

  return (
    <ProductWrapper>
      <Link href={url} passHref>
        <WhiteBox>
          {/* Use the Image component instead of img */}
          <Image
            src={images[0]}
            alt={title}
            width={150} // Set the width
            height={150} // Set the height
            style={{ borderRadius: "4px" }} // Set rounded corners for the image
          />
        </WhiteBox>
      </Link>
      <Description>{title}</Description>
    </ProductWrapper>
  );
}
