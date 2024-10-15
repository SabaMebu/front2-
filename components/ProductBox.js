import styled from "styled-components";
import Link from "next/link";

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* ცენტრში გაწვდოს ყველა შინაარსი */
`;

const WhiteBox = styled.div`
  background-color: white; /* თეთრი ფონი */
  padding: 20px;
  border-radius: 8px; /* ოდნავ მომრგვალებული კუთხეები */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* ჩარჩოს ჩრდილი */
  border: 1px solid #ddd; /* თხელი ჩარჩო */
  display: flex;
  flex-direction: column;
  align-items: center; /* ცენტრში გაწვდოს ყველა შინაარსი */

  img {
    max-width: 150%;
    max-height: 150px;
    border-radius: 4px; /* ფოტოს ოდნავ მომრგვალებული კუთხეები */
  }
  @media (max-width: 900px) {
    max-width: 100%; /* მცირე ეკრანებზე სიგანის შემცირება */
    margin-right: 24px;
  }
  @media (max-width: 890px) {
    max-width: 100%; /* მცირე ეკრანებზე სიგანის შემცირება */
    margin-right: 5px;
  }
`;

const Description = styled.div`
  margin-top: 8px; /* ადგილი ფოტოსა და აღწერის შორის */
  font-size: 16px; /* აღწერის ტექსტის ზომა */
  color: #333; /* ტექსტის ფერი */
`;

export default function ProductBox({ _id, description, images, title }) {
  const url = "/products/" + _id;

  return (
    <ProductWrapper>
      <Link href={url} passHref>
        <WhiteBox>
          {/* make WhiteBox behave like an anchor element */}
          <img src={images[0]} alt={title} />
        </WhiteBox>
      </Link>
      <Description>{title}</Description>
    </ProductWrapper>
  );
}
