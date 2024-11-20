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
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function HomePage() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { locale } = router;

  const changeLanguage = (newLocale) => {
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };
  return (
    <div>
      <Header />
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("ge")}>Georgian</button>
      <button onClick={() => changeLanguage("ru")}>russian</button>
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
