import styled from "styled-components";
import Link from "next/link";
import Image from "next/image"; // Import the Image component

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center all content */
`;

const WhiteBox = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Center content within the box */

  /* Adjust the image styles */
  img {
    max-width: 100%;
    max-height: 150px;
    border-radius: 4px;
  }

  @media (max-width: 900px) {
    max-width: 100%;
  }

  @media (max-width: 660px) {
    max-width: 100%;
  }

  @media (max-width: 537px) {
    width: 100%;
    margin: 0 auto; /* Center horizontally */
  }

  @media (max-width: 370px) {
    width: 100%;
    margin: 0 auto;
  }

  @media (max-width: 391px) {
    width: 100%;
    margin: 0 auto;
  }
`;

const Description = styled.div`
  margin-top: 8px;
  font-size: 16px;
  color: #333;
  text-align: center; /* Center the text */

  @media (max-width: 660px) {
    text-align: center;
  }

  @media (max-width: 370px) {
    text-align: center;
  }
`;

export default function ProductBox({ _id, description, images, title }) {
  const url = "/products/" + _id;

  return (
    <ProductWrapper>
      <Link href={url} passHref>
        <WhiteBox>
          <Image
            src={images[0]}
            alt={title}
            width={150}
            height={150}
            style={{ borderRadius: "4px" }}
          />
        </WhiteBox>
      </Link>
      <Description>{title}</Description>
    </ProductWrapper>
  );
}
