import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Center from "./Center";
import IMAGE from "@/components/IMAGE"; // Custom IMAGE component

// Styled components (same as before)
const StyledHeader = styled.header`
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 90px;
`;

const Spacer = styled.div`
  height: 80px;
`;

const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  height: 80%;
  margin-top: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  height: 100%;
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 15px;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  justify-content: center;
  background-color: white;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;

  @media (min-width: 768px) {
    display: flex;
    position: static;
    flex-direction: row;
    gap: 20px;
    box-shadow: none;
    background: none;
    padding: 0;
  }
`;

const NavLink = styled(Link)`
  color: gray;
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  padding: 10px 0;
  transition: color 0.2s;

  &:hover {
    color: black;
  }
`;

const BurgerMenu = styled.div`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;

  span {
    width: 25px;
    height: 3px;
    background-color: gray;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

// Additional styles for the language switcher
const LanguageSwitcher = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;

  @media (min-width: 768px) {
    display: flex;
  }

  @media (max-width: 768px) {
    display: ${({ isMenuOpen }) => (isMenuOpen ? "flex" : "none")};
  }
`;

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
  width: 80px;

  &:hover {
    background-color: #d00000;
  }
`;

const ArrowIcon = styled.span`
  font-size: 10px;
  transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease;
`;

const LanguageDropdown = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  top: 40px;
  right: 0;
`;

const DropdownLanguageButton = styled.button`
  background-color: white;
  color: #333;
  padding: 8px 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export default function Header() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { locale } = router;

  const [menuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const changeLanguage = (newLocale) => {
    router.push(router.pathname, router.asPath, { locale: newLocale });
    setIsDropdownOpen(false);
  };

  return (
    <>
      <StyledHeader>
        <Center>
          <Wrapper>
            <Logo href={"/"}>
              <IMAGE
                src="https://miviuyvan.s3.amazonaws.com/1723796900551.jpeg"
                alt="logo"
                width={120}
                height={70}
              />
            </Logo>
            {/* Language Switcher moved inside the Burger Menu */}
            <BurgerMenu onClick={() => setMenuOpen(!menuOpen)}>
              <span>"GE"</span>
              <span></span>
              <span></span>
            </BurgerMenu>
            <StyledNav isOpen={menuOpen}>
              <NavLink href={"/"}>{t("home")}</NavLink>
              <NavLink href={"/products"}>{t("production")}</NavLink>
              <NavLink href={"/categories"}>{t("category")}</NavLink>
              <NavLink href={"about%20us"}>{t("about_us")}</NavLink>
              <NavLink href={"/contact"}>{t("contact")}</NavLink>
              {/* Language Switcher inside the Nav when Menu is open */}
              <LanguageSwitcher isMenuOpen={menuOpen}>
                <LanguageButton
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  {locale.toUpperCase()}{" "}
                  <ArrowIcon open={isDropdownOpen}>↓</ArrowIcon>
                </LanguageButton>
                {isDropdownOpen && (
                  <LanguageDropdown>
                    {["ge", "en", "ru"].map((lng) => (
                      <DropdownLanguageButton
                        key={lng}
                        onClick={() => changeLanguage(lng)}
                      >
                        {lng.toUpperCase()}
                      </DropdownLanguageButton>
                    ))}
                  </LanguageDropdown>
                )}
              </LanguageSwitcher>
            </StyledNav>
          </Wrapper>
        </Center>
      </StyledHeader>
      <Spacer />
    </>
  );
}
