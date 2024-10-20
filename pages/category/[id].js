import Center from "@/components/Center";
import Header from "@/components/Header";
import ProductsGrid from "@/components/ProductsGrid";
import { Category } from "@/models/Category";
import { Product } from "@/models/Product";
import styled from "styled-components";
import { useRouter } from "next/router";

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

  const handlePageChange = (page) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page },
    });
  };

  return (
    <>
      <Header />
      <Center>
        <title>{category.name}</title>
        <div style={{ marginLeft: "10px", marginTop: "50px" }}>
          <ProductsGrid products={products} />
        </div>
        {/* პაგინაცია */}
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
  const { page = 1 } = context.query;
  const limit = 10; // 10 პროდუქტი თითო გვერდზე
  const skip = (page - 1) * limit;

  const category = await Category.findById(context.query.id);
  const subCategories = await Category.find({ parent: category._id });
  const catIds = [category._id, ...subCategories.map((c) => c._id)];

  // ჯამური პროდუქციის რაოდენობა
  const totalProducts = await Product.countDocuments({ category: catIds });

  // პროდუქციის შერჩევა პაგინაციის მიხედვით
  const products = await Product.find({ category: catIds })
    .skip(skip)
    .limit(limit);

  // ჯამური გვერდების რაოდენობა
  const totalPages = Math.ceil(totalProducts / limit);

  return {
    props: {
      category: JSON.parse(JSON.stringify(category)),
      products: JSON.parse(JSON.stringify(products)),
      currentPage: Number(page),
      totalPages,
    },
  };
}
