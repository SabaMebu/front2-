import styled from "styled-components";
import ProductBox from "@/components/ProductBox";

const StyledProductsGrid = styled.div`
  display: grid;
  gap: 20px;
  justify-content: center; /* Align products to the center */
  grid-template-columns: repeat(
    4,
    minmax(200px, 1fr)
  ); /* Default grid for larger screens */

  img {
    width: 100%;
    height: auto;
    object-fit: contain; /* Keep aspect ratio */
    max-height: 150px; /* Set a maximum height */
  }

  /* Adjust for screens smaller than 1200px */
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, minmax(250px, 1fr));
  }

  /* Adjust for screens smaller than 768px */
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
    margin-left: auto;
    margin-right: auto;
  }

  /* Adjust for screens smaller than 600px */
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(180px, 1fr));
    gap: 40px; /* Reduce the gap between grid items */
  }

  /* Adjust for screens smaller than 396px */
`;

export default function ProductsGrid({ products }) {
  return (
    <StyledProductsGrid>
      {products?.length > 0 &&
        products.map((product) => (
          <ProductBox key={product._id} {...product} />
        ))}
    </StyledProductsGrid>
  );
}
