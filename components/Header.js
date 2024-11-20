import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";
import Center from "./Center";
import IMAGE from "@/components/IMAGE"; // Custom IMAGE component
import { useTranslation } from "next-i18next";
const StyledHeader = styled.header`
  background-color: white;
  position: fixed; /* Fix the header to the top */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10; /* Ensure it's above other content */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 90px; /* Set a fixed height for the header */
`;

const Spacer = styled.div`
  height: 80px; /* Equal to the header height to push content below */
`;

const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center; /* Center the logo vertically */
  height: 80%; /* Ensure it takes the full height of the header */
  margin-top: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px; /* Adjust padding to fit your design */
  align-items: center; /* Center items vertically */
  height: 100%; /* Make sure wrapper takes full height of the header */
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 15px;
  position: absolute;
  top: 100%; /* Below the header */
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

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation("common");

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

            {/* Burger Menu Icon */}
            <BurgerMenu onClick={() => setMenuOpen(!menuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </BurgerMenu>

            {/* Navigation Links */}
            <StyledNav isOpen={menuOpen}>
              <NavLink href={"/"}>მთავარი</NavLink>
              <NavLink href={"/products"}>{t("production")}</NavLink>
              <NavLink href={"/categories"}>კატეგორიები</NavLink>
              <NavLink href={"/about us"}>ჩვენს შესახებ</NavLink>
              <NavLink href={"/contact"}>კონტაქტი</NavLink>
            </StyledNav>
          </Wrapper>
        </Center>
      </StyledHeader>

      {/* Spacer to prevent content from being hidden behind the header */}
      <Spacer />

      {/* შენი სხვა კონტენტი */}
      <div>{/* თქვენი დანარჩენი კონტენტი */}</div>
    </>
  );
}
