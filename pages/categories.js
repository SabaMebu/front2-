import styled from "styled-components";
import Header from "@/components/Header";
import Center from "@/components/Center";
import ProductBox from "@/components/ProductBox";
import { Category } from "@/models/Category";
import { Product } from "@/models/Product";
import Link from "next/link";
import Footer from "./footer";

const Container = styled.div`
  overflow: hidden;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 773px) {
    grid-template-columns: repeat(2, 1fr); /* Two columns */
    gap: 16px;
  }

  @media (max-width: 580px) {
    grid-template-columns: 1fr; /* Single column */
    gap: 12px;
  }
`;

const CategoryTitle = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  padding: 10px 20px;
  font-size: 1.5em;
  background-color: #f5f5f5;
  border-bottom: 2px solid #ddd;
  box-sizing: border-box;

  @media (max-width: 580px) {
    font-size: 1.3em;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
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
  margin-top: 10px;
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid #a22a22;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #a22a22;
    color: white;
  }

  @media (max-width: 580px) {
    align-self: flex-start;
  }
`;

const TitleWrapper = styled.div`
  background-color: #a22a22;
  padding: 27px 0;
  text-align: center;
  width: 100%;
  margin: 18px 0 20px;
`;

const Title = styled.h1`
  font-size: 2em;
  color: white;
  margin: 0;

  @media (max-width: 580px) {
    font-size: 1.8em;
  }

  @media (max-width: 400px) {
    font-size: 1.5em;
  }
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
