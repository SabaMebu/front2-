import styled from "styled-components";
import ProductBox from "@/components/ProductBox";

const StyledProductsGrid = styled.div`
  display: grid;
  gap: 20px;
  justify-content: center; /* Align products to the center */

  /* Default for larger screens */
  grid-template-columns: repeat(4, minmax(200px, 1fr));

  img {
    width: 100%; /* Ensure images take up the full width of the grid item */
    height: auto; /* Maintain aspect ratio */
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, minmax(250px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(230px, 1fr));
    margin-left: 95px;
  }

  @media (max-width: 660px) {
    grid-template-columns: repeat(2, minmax(250px, 1fr));
  }

  @media (max-width: 584px) {
    grid-template-columns: repeat(2, minmax(180px, 1fr));
    justify-content: center;
    width: 100%;
  }
  @media (max-width: 399px) {
    margin-right: -50px;
  }
  @media (max-width: 375px) {
    margin-right: -90px;
  }

  /* Adjust size for smaller screens */
  @media (max-width: 546px) {
    grid-template-columns: repeat(
      1,
      minmax(250px, 1fr)
    ); /* Increase min size */
    justify-content: center;
    width: 100%;
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
