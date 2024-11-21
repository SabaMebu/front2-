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
import styled from "styled-components";
import { useState } from "react";

// Styled component for the language switcher container
const LanguageSwitcher = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

// Styled button for language change (compact)
const LanguageButton = styled.button`
  background-color: #ff0000;
  color: white;
  padding: 5px 12px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: background-color 0.3s ease;
  width: 80px; /* Smaller width */

  &:hover {
    background-color: #d00000;
  }
`;

// Arrow icon for dropdown
const ArrowIcon = styled.span`
  font-size: 10px;
  transform: ${(props) => (props.open ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease;
`;

// Styled dropdown container for the language options
const LanguageDropdown = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// Language button for each option in the dropdown
const DropdownLanguageButton = styled.button`
  background-color: white;
  color: #333;
  padding: 8px 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export default function HomePage() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { locale } = router;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility

  const changeLanguage = (newLocale) => {
    router.push(router.pathname, router.asPath, { locale: newLocale });
    setIsDropdownOpen(false); // Close the dropdown after changing language
  };

  return (
    <div>
      <Header />
      {/* Language Switcher */}
      <LanguageSwitcher>
        <LanguageButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          {/* Display the current language code */}
          {locale === "en" ? "EN" : locale === "ge" ? "GE" : "RU"}
          {/* Arrow icon indicating dropdown */}
          <ArrowIcon open={isDropdownOpen}>↓</ArrowIcon>
        </LanguageButton>

        {isDropdownOpen && (
          <LanguageDropdown>
            {/* Dropdown language options */}
            <DropdownLanguageButton onClick={() => changeLanguage("en")}>
              EN
            </DropdownLanguageButton>
            <DropdownLanguageButton onClick={() => changeLanguage("ge")}>
              GE
            </DropdownLanguageButton>
            <DropdownLanguageButton onClick={() => changeLanguage("ru")}>
              RU
            </DropdownLanguageButton>
          </LanguageDropdown>
        )}
      </LanguageSwitcher>

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
