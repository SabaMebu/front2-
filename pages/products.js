import styled from "styled-components";
import Header from "@/components/Header";
import Center from "@/components/Center";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid";
import Footer from "./footer";
import Link from "next/link";

const Title = styled.h1`
  font-size: 2em;
  margin: 0;
  color: white;
`;

const TitleWrapper = styled.div`
  background-color: #a22a22;
  padding: 35px 0;
  text-align: center;
  width: 100%;
  margin-bottom: 20px;
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const PaginationButton = styled.div`
  margin: 0 5px;
  padding: 10px 15px;
  background-color: ${({ isActive }) => (isActive ? "#8b1f1f" : "#a22a22")};
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #8b1f1f;
  }
`;

const ResponsiveProductsGrid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

export default function ProductsPage({ products, currentPage, totalPages }) {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <>
      <Header />
      <Center>
        <TitleWrapper>
          <Title>ყველა პროდუქტი</Title>
        </TitleWrapper>
        <ResponsiveProductsGrid>
          <ProductsGrid products={products} />
        </ResponsiveProductsGrid>
        <PaginationWrapper>
          {pageNumbers.map((pageNum) => (
            <Link href={`?page=${pageNum}`} passHref key={pageNum}>
              <PaginationButton isActive={pageNum === currentPage}>
                {pageNum}
              </PaginationButton>
            </Link>
          ))}
        </PaginationWrapper>
      </Center>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const page = parseInt(context.query.page) || 1;
  const limit = 10;
  const skip = (page - 1) * limit;
  const products = await Product.find({}, null, { skip, limit });
  const totalProducts = await Product.countDocuments();
  const totalPages = Math.ceil(totalProducts / limit);

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      currentPage: page,
      totalPages,
    },
  };
}
