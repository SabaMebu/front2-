import styled from "styled-components";
import Header from "@/components/Header";
import Center from "@/components/Center";
import ProductBox from "@/components/ProductBox";
import { Category } from "@/models/Category";
import { Product } from "@/models/Product"; // Ensure this import exists
import Link from "next/link";
import Footer from "./footer";

const Container = styled.div`
  overflow: hidden;
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin: 11px 16px;

  @media (max-width: 812px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;

const CategoryTitle = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 0;
  padding: 0 20px;
  font-size: 1.5em;
  background-color: #f5f5f5;
  border-bottom: 2px solid #ddd;
  width: 100%;
  box-sizing: border-box;
`;

const CategoryWrapper = styled.div`
  margin-bottom: 40px;
`;

const ShowAllLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: #a22a22;
  font-size: 16px;
  text-decoration: none;
  margin: 20px 0;
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid #a22a22;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #a22a22;
    color: white;
  }

  &::after {
    content: "→";
    margin-left: 8px;
    font-size: 1.2em;
  }
`;

const TitleWrapper = styled.div`
  background-color: #a22a22; /* Change color as needed */
  padding: 27px 0;
  text-align: center;
  width: 100vw;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin: 18px 0 20px;
`;

const Title = styled.h1`
  font-size: 2em;
  color: white;
  margin: 0;
`;

export default function CategoriesPage({ mainCategories, categoriesProducts }) {
  return (
    <Container>
      <Header />
      <Center>
        <TitleWrapper>
          <Title>კატეგორიები</Title>
        </TitleWrapper>

        {mainCategories.map((cat) => (
          <CategoryWrapper key={cat._id}>
            <CategoryTitle>
              <span>{cat.name}</span>
              <ShowAllLink href={`/category/${cat._id}`}>Show all</ShowAllLink>
            </CategoryTitle>

            <CategoryGrid>
              {categoriesProducts[cat._id].map((p) => (
                <ProductBox key={p._id} {...p} />
              ))}
            </CategoryGrid>
          </CategoryWrapper>
        ))}
      </Center>
      <Footer />
    </Container>
  );
}

export async function getServerSideProps() {
  const categories = await Category.find({ parent: null });
  const mainCategories = categories.filter((c) => !c.parent);
  const categoriesProducts = {};

  for (const mainCat of mainCategories) {
    const mainCatId = mainCat._id.toString();
    const childCatIds = categories
      .filter((c) => c?.parent?.toString() === mainCatId)
      .map((c) => c._id.toString());
    const categoriesIds = [mainCatId, ...childCatIds];

    const products = await Product.find({ category: categoriesIds }, null, {
      limit: 4,
      sort: { _id: -1 },
    });

    categoriesProducts[mainCat._id] = products;
  }

  return {
    props: {
      mainCategories: JSON.parse(JSON.stringify(mainCategories)),
      categoriesProducts: JSON.parse(JSON.stringify(categoriesProducts)),
    },
  };
}
