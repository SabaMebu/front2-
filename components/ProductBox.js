import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  max-width: 250px;
`;

const WhiteBox = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
  width: 100%;
`;

export default function ProductBox({ _id, images, title }) {
  return (
    <ProductWrapper>
      <Link href={`/products/${_id}`} passHref>
        <WhiteBox>
          <Image src={images[0]} alt={title} width={150} height={150} />
        </WhiteBox>
      </Link>
      <div>{title}</div>
    </ProductWrapper>
  );
}
