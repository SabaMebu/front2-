import styled from "styled-components";
import ProductBox from "@/components/ProductBox";

const StyledProductsGrid = styled.div`
  display: grid;
  gap: 20px;
  justify-content: center; /* Align products to the center */

  /* Default for larger screens */
  grid-template-columns: repeat(4, minmax(200px, 1fr));

  img {
    width: 100%;
    height: auto;
    object-fit: contain; /* Keep aspect ratio */
    max-height: 150px; /* Set a maximum height */
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, minmax(250px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(230px, 1fr));
    margin-left: -35px;
  }

  @media (max-width: 660px) {
    grid-template-columns: repeat(2, minmax(250px, 1fr));
  }

  @media (max-width: 584px) {
    grid-template-columns: repeat(2, minmax(180px, 1fr));
    justify-content: center;
    width: 120%;
  }

  @media (max-width: 546px) {
    grid-template-columns: repeat(1, minmax(145px, 1fr));
    justify-content: center;
    width: 100%;

    img {
      max-width: 100%;
      max-height: 200px; /* Set a maximum height for smaller screens */
      object-fit: contain; /* Ensure the image doesn't stretch */
    }
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
