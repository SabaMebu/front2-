import styled from "styled-components";
import Link from "next/link";
import Image from "next/image"; // Import the Image component

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center all content */
`;

const WhiteBox = styled.div`
  background-color: white; /* White background */
  padding: 20px;
  border-radius: 8px; /* Slightly rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Box shadow */
  border: 1px solid #ddd; /* Thin border */
  display: flex;
  flex-direction: column;
  align-items: center; /* Center all content */

  /* Adjust the image styles */
  img {
    max-width: 150%;
    max-height: 150px;
    border-radius: 4px; /* Slightly rounded corners for the image */
  }

  @media (max-width: 900px) {
    max-width: 100%; /* Reduce width on smaller screens */
    margin-right: 24px;
  }
  @media (max-width: 660px) {
    max-width: 100%; /* Reduce width on smaller screens */
    margin-left: -70px;
  }

  @media (max-width: 890px) {
    max-width: 100%; /* Reduce width on smaller screens */
    margin-right: 5px;
  }
`;

const Description = styled.div`
  margin-top: 8px; /* Space between image and description */
  font-size: 16px; /* Description text size */
  color: #333; /* Text color */
  @media (max-width: 660px) {
    margin-left: -70px;
  }
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
