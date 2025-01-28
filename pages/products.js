import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styled from "styled-components";
import Header from "@/components/Header";
import Center from "@/components/Center";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid";
import Footer from "./footer";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const Title = styled.h1`
  font-size: 2em;
  margin: 0;
  color: white;
`;

const TitleWrapper = styled.div`
  background-color: #a22a22;
  padding: 35px 0 20px;
  text-align: center;
  width: 100vw;
  margin-bottom: 20px;
  position: relative;
  left: 48%;
  transform: translateX(-50%);
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const PaginationButton = styled.div`
  margin: 0 5px;
  padding: 10px 15px;
  background-color: ${({ isActive }) => (isActive ? "#ff0000" : "#ffffff")};
  color: ${({ isActive }) => (isActive ? "#ffffff" : "#000000")};
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  &:hover {
    background-color: ${({ isActive }) => (isActive ? "#ff0000" : "#f0f0f0")};
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const ResponsiveProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export default function ProductsPage({ products, currentPage, totalPages }) {
  const { t } = useTranslation("common");

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <>
      <Header />
      <Center>
        <TitleWrapper>
          <Title>{t("all products")}</Title>
        </TitleWrapper>

        <ResponsiveProductsGrid
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ProductsGrid products={products} />
        </ResponsiveProductsGrid>

        <PaginationWrapper>
          {pageNumbers.map((pageNum) => (
            <StyledLink href={`?page=${pageNum}`} passHref key={pageNum}>
              <PaginationButton isActive={pageNum === currentPage}>
                {pageNum}
              </PaginationButton>
            </StyledLink>
          ))}
        </PaginationWrapper>
      </Center>
      {/* <Footer /> */}
    </>
  );
}

export async function getServerSideProps(context) {
  const { locale } = context; // Extract the current locale from the context

  await mongooseConnect();

  const page = parseInt(context.query.page) || 1;
  const limit = 10;
  const skip = (page - 1) * limit;

  const products = await Product.find({}, null, {
    sort: { _id: -1 },
    skip: skip,
    limit: limit,
  });

  const totalProducts = await Product.countDocuments();
  const totalPages = Math.ceil(totalProducts / limit);

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      products: JSON.parse(JSON.stringify(products)),
      currentPage: page,
      totalPages: totalPages,
    },
  };
}
