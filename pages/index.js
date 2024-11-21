import Header from "@/components/Header";
import CarouselPage from "@/components/CarouselPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "@/components/Card";
import Popular from "@/components/Popular";
import Sosisi from "@/components/Sosisi";
import SosisiWithVideo from "@/components/SosisiWithVideo";
import Market from "@/components/Market";
import Footer from "./footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
