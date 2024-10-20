// ProductsGrid.jsx
import styled from "styled-components";
import ProductBox from "@/components/ProductBox";

const StyledProductsGrid = styled.div`
  display: grid;
  gap: 20px; /* Space between items */

  /* Default for larger screens */
  grid-template-columns: repeat(
    4,
    minmax(200px, 1fr)
  ); /* Min 200px to prevent shrinking */

  img {
    width: 100%; /* Ensure images take up the full width of the grid item */
    height: auto; /* Maintain aspect ratio */
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(
      3,
      minmax(250px, 1fr)
    ); /* Prevent shrinking */
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(
      2,
      minmax(230px, 1fr)
    ); /* Two products on smaller screens */
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* One product per row on very small screens */
  }
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
