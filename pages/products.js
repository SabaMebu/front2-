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
  color: white; /* Optional: Set title text color to white for contrast */
`;

const TitleWrapper = styled.div`
  background-color: #a22a22; /* Red background */
  padding: 35px 0 20px;
  text-align: center;
  width: 100vw; /* Takes up full width of the viewport */
  margin-bottom: 20px;
  padding-right: 1px; /* Adds space on the right side */
  position: relative;
  left: 48%;
  transform: translateX(-50%); /* Centers the wrapper */
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
  text-decoration: none; /* Ensure no underline from Link */
`;

const ResponsiveProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Default: 4 products per row */
  /* gap: 20px; */
`;

export default function ProductsPage({ products, currentPage, totalPages }) {
  // Generate an array of page numbers
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <>
      <Header />
      <Center>
        <TitleWrapper style={{}}>
          <Title>ყველა პროდუქტი</Title>
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

        {/* Numbered Pagination */}
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
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();

  // Get the current page from query params, default to 1 if not provided
  const page = parseInt(context.query.page) || 1;
  const limit = 10; // Number of products per page
  const skip = (page - 1) * limit;

  // Fetch products with pagination
  const products = await Product.find({}, null, {
    sort: { _id: -1 },
    skip: skip,
    limit: limit,
  });

  // Fetch total number of products
  const totalProducts = await Product.countDocuments();
  const totalPages = Math.ceil(totalProducts / limit);

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      currentPage: page,
      totalPages: totalPages,
    },
  };
}
