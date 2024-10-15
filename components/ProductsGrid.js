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
    ); /* Prevent products from shrinking too much */
  }
  @media (max-width: 1398px) {
    grid-template-columns: repeat(
      3,
      minmax(250px, 1fr)
    ); /* Prevent products from shrinking too much */
  }

  @media (max-width: 905px) {
    grid-template-columns: repeat(
      3,
      minmax(255px, 1fr)
    ); /* Prevent products from shrinking too much */
  }
  @media (max-width: 1400px) {
    margin-left: 60px;
    grid-template-columns: repeat(
      3,
      minmax(200px, 1fr)
    ); /* Prevent products from shrinking too much */
  }

  @media (max-width: 768px) {
    margin-left: 0px;
    grid-template-columns: repeat(
      2,
      minmax(230px, 1fr)
    ); /* Ensure larer product sizes on smaller screens */
  }
  @media (max-width: 906px) {
    margin-right: 70px;
    grid-template-columns: repeat(
      2,
      minmax(230px, 1fr)
    ); /* Ensure larer product sizes on smaller screens */
  }
  @media (max-width: 762px) {
    margin-right: 100px;
    grid-template-columns: repeat(
      2,
      minmax(210px, 1fr)
    ); /* Ensure larger product sizes on smaller screens */
  }

  @media (max-width: 660px) {
    grid-template-columns: repeat(2, minmax(180px, 1fr));
    margin: 0 auto; /* გარეთა კონტეინერის ცენტრში დასმა */
    place-items: center; /* თითოეული ელემენტის ცენტრში დასმა */
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; // product per row on very small screens
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
