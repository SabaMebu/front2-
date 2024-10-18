import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.25rem; /* 20px-equivalent */
  max-width: 250px;
  width: 100%;
  /* სვეტებში ავტომატურად მოერგება მშობელ კონტეინერს */
`;

const WhiteBox = styled.div`
  background-color: white;
  padding: 1.15rem; /* 20px-equivalent */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Title = styled.div`
  margin-top: 0.625rem; /* 10px-equivalent */
  text-align: center;
  font-size: clamp(0.875rem, 1vw, 1rem);
  /* ტექსტის ზომა ავტომატურად შეიცვლება ეკრანის ზომაზე */
`;

export default function ProductBox({ _id, images, title }) {
  return (
    <ProductWrapper>
      <Link href={`/products/${_id}`} passHref>
        <WhiteBox>
          <Image src={images[0]} alt={title} width={150} height={150} />
        </WhiteBox>
      </Link>
      <Title>{title}</Title>
    </ProductWrapper>
  );
}
