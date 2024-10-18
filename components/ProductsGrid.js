import styled from "styled-components";
import ProductBox from "@/components/ProductBox";

const GridWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  min-height: 100vh; /* გვერდი მთლიანი ეკრანის სიმაღლეზე */
`;

const StyledProductsGrid = styled.div`
  display: grid;
  gap: 1.25rem; /* 20px-equivalent */
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  max-width: 1200px; /* კონტეინერის მაქსიმალური სიგანე */
  width: 100%; /* კონტეინერი მშობლის სიგანეს მოერგება */
`;

export default function ProductsGrid({ products }) {
  return (
    <GridWrapper>
      <StyledProductsGrid>
        {products.map((product) => (
          <ProductBox key={product._id} {...product} />
        ))}
      </StyledProductsGrid>
    </GridWrapper>
  );
}
