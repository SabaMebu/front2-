import Header from "@/components/Header";
import CarouselPage from "@/components/CarouselPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "@/components/Card";
import Popular from "@/components/Popular";
import Sosisi from "@/components/Sosisi";
import SosisiWithVideo from "@/components/SosisiWithVideo";
import Market from "@/components/Market";
import { mongooseConnect } from "@/lib/mongoose";
import Footer from "./footer";

export default function HomePage() {
  return (
    <div>
      <Header />

      <CarouselPage />
      <div className="container mx-auto py-12">{/* <ProductGrid /> */}</div>
      <Card />
      <Popular />
      <Sosisi />
      <SosisiWithVideo />
      <Market />
      <Footer />
    </div>
  );
}

// export async function getServerSideProps() {
//   const featuredProductId = "66b210da2bf2331b1c233f94";
//   await mongooseConnect();
//   const featuredProduct = await Product.findById(featuredProductId);
//   const newProducts = await Product.find({}, null, {
//     sort: { _id: -1 },
//     limit: 10,
//   });
//   return {
//     props: {
//       featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
//       newProducts: JSON.parse(JSON.stringify(newProducts)),
//     },
//   };
// }
