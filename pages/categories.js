import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Center from "@/components/Center";
import Header from "@/components/Header";
import ProductBox from "@/components/ProductBox";
import { Category } from "@/models/Category";
import { Product } from "@/models/Product";
import Link from "next/link";
import styled from "styled-components";
import Footer from "./footer";
import { useRouter } from "next/router";

const Container = styled.div`
  overflow: hidden; /* This will prevent horizontal scrolling */
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin: 11 16px; /* Normalize margin across width */

  @media (max-width: 812px) {
    grid-template-columns: repeat(2, 1fr); /* 2 products per row */
  }

  @media (max-width: 580px) {
    grid-template-columns: 1fr; /* 1 product per row on very small screens */
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
  background-color: #f5f5f5; /* Gray background */
  padding: 27px 0; /* Top and bottom padding */
  text-align: center; /* Center text */
  width: 100vw; /* Stretch background to full viewport width */
  position: relative; /* Positioning control */
  left: 50%; /* Compensate for left shift */
  transform: translateX(-50%); /* Compensate for left shift */
  margin: 18px 0 20px; /* Top and bottom margins */
  background-color: #a22a22;
`;

const Title = styled.h1`
  font-size: 2em;
  color: white;
  margin: 0;
`;

export default function CategoriesPage({ mainCategories, categoriesProducts }) {
  const { t } = useTranslation("common"); // Access translation function
  const router = useRouter();
  const { locale } = router;

  return (
    <Container>
      <Header />
      <Center>
        <TitleWrapper>
          <Title>{t("categories")}</Title> {/* Dynamic title */}
        </TitleWrapper>

        {mainCategories.map((cat) => (
          <CategoryWrapper key={cat._id}>
            <CategoryTitle>
              <span>{locale === "ge" ? cat.name_ge : null}</span>
              <span>{locale === "en" ? cat.name_en : null}</span>
              <span>{locale === "ru" ? cat.name_ru : null}</span>
              <ShowAllLink href={"/category/" + cat._id}>
                {t("show_more")}
              </ShowAllLink>
            </CategoryTitle>

            <CategoryGrid>
              {categoriesProducts[cat._id].map((p) => (
                <ProductBox key={p._id} {...p} />
              ))}
            </CategoryGrid>
          </CategoryWrapper>
        ))}
      </Center>
      {/* <Footer /> */}
    </Container>
  );
}

export async function getServerSideProps(context) {
  const { locale } = context; // Extract locale from context

  // Fetch categories and products
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
      ...(await serverSideTranslations(locale, ["common"])), // Load translations
      mainCategories: JSON.parse(JSON.stringify(mainCategories)),
      categoriesProducts: JSON.parse(JSON.stringify(categoriesProducts)),
    },
  };
}
