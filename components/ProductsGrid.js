import styled from "styled-components";
import ProductBox from "@/components/ProductBox";

const StyledProductsGrid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

export default function ProductsGrid({ products }) {
  return (
    <StyledProductsGrid>
      {products.map((product) => (
        <ProductBox key={product._id} {...product} />
      ))}
    </StyledProductsGrid>
  );
}
