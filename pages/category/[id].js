import Center from "@/components/Center";
import Header from "@/components/Header";
import ProductsGrid from "@/components/ProductsGrid";
import { Category } from "@/models/Category";
import { Product } from "@/models/Product";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next"; // დამატებულია
import { serverSideTranslations } from "next-i18next/serverSideTranslations"; // დამატებულია

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  button {
    padding: 10px 15px;
    margin: 0 5px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    cursor: pointer;
    &:hover {
      background-color: #ddd;
    }
  }
`;

export default function CategoryPage({
  category,
  products,
  currentPage,
  totalPages,
}) {
  const router = useRouter();
  const { t } = useTranslation("common"); // დამატებულია მრავალენოვანი ტექსტებისთვის

  const handlePageChange = (page) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page },
    });
  };

  return (
    <>
      <Header /> {/* Header ავტომატურად აიღებს ენას useTranslation-იდან */}
      <Center>
        <title>{t(category.name)}</title> {/* ტექსტის თარგმანი */}
        <div style={{ marginLeft: "10px", marginTop: "50px" }}>
          <ProductsGrid products={products} />
        </div>
        <Pagination>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              disabled={currentPage === index + 1}
            >
              {index + 1}
            </button>
          ))}
        </Pagination>
      </Center>
    </>
  );
}

export async function getServerSideProps(context) {
  const { locale } = context; // ენის მიღება კონტექსტიდან
  const { page = 1 } = context.query;
  const limit = 10;
  const skip = (page - 1) * limit;

  const category = await Category.findById(context.query.id);
  const subCategories = await Category.find({ parent: category._id });
  const catIds = [category._id, ...subCategories.map((c) => c._id)];

  const totalProducts = await Product.countDocuments({ category: catIds });
  const products = await Product.find({ category: catIds })
    .skip(skip)
    .limit(limit);
  const totalPages = Math.ceil(totalProducts / limit);

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])), // მრავალენოვანი მხარდაჭერა
      category: JSON.parse(JSON.stringify(category)),
      products: JSON.parse(JSON.stringify(products)),
      currentPage: Number(page),
      totalPages,
    },
  };
}
