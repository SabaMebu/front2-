import styled from "styled-components";
import Head from "next/head";
import { useTranslation } from "next-i18next";

// Footer container
const FooterContainer = styled.footer`
  background-color: #222;
  color: white;
  padding: 40px 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  text-align: left;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px 10px;
  }
`;

// Each column in the footer
const FooterColumn = styled.div`
  flex: 1 1 250px;
  padding: 0 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 10px 0;
    min-width: 100%;
  }
`;

// Footer title styling
const FooterTitle = styled.h3`
  font-size: 1.5em;
  margin-bottom: 20px;
  color: white;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

// Footer link styling
const FooterLink = styled.a`
  display: block;
  color: white;
  text-decoration: none;
  margin-bottom: 10px;
  font-size: 1.1em;

  &:hover {
    color: #ffcc00;
  }

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

// Footer bottom section for copyrights
const FooterBottom = styled.div`
  width: 100%;
  text-align: center;
  padding: 20px 0;
  background-color: #111;
  color: #ccc;
  font-size: 0.9em;

  @media (max-width: 768px) {
    padding: 10px 0;
    font-size: 0.8em;
  }
`;

// Newsletter section styling
const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #ccc;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;

// Input for email
const EmailInput = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  width: 100%;
  background-color: #333;
  color: white;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

// Submit button for newsletter
const SubmitButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #ffcc00;
  color: #333;
  font-size: 1em;
  cursor: pointer;

  &:hover {
    background-color: #e6b800;
  }

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

// Social media icons container
const SocialMediaContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

// Social media icon
const SocialIcon = styled.a`
  color: white;
  font-size: 1.5em;
  cursor: pointer;

  &:hover {
    color: #ffcc00;
  }

  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

export default function Footer() {
  const { t } = useTranslation("common"); // Hook for translations

  return (
    <>
      {/* SEO meta tags */}
      <Head>
        {/* <title>{t("footer_title")}</title> */}
        <meta name="description" content={t("footer_description")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <FooterContainer>
        {/* First column */}
        <FooterColumn>
          <FooterTitle>{t("customer")}</FooterTitle>
          <FooterLink href="#">{t("help")}</FooterLink>
          <FooterLink href="#">{t("network regulation")}</FooterLink>
          <FooterLink href="#">{t("partners")}</FooterLink>
        </FooterColumn>

        {/* Second column */}
        <FooterColumn>
          <FooterTitle>{t("about us")}</FooterTitle>
          <FooterLink href="#">{t("company info")}</FooterLink>
          <FooterLink href="#">{t("team")}</FooterLink>
          <FooterLink href="#">{t("career")}</FooterLink>
        </FooterColumn>

        {/* Third column - Newsletter */}
        <FooterColumn>
          <FooterTitle>{t("newsletter")}</FooterTitle>
          <NewsletterForm>
            <EmailInput type="email" placeholder={t("enter_email")} required />
            <SubmitButton type="submit">{t("subscribe")}</SubmitButton>
          </NewsletterForm>
        </FooterColumn>
      </FooterContainer>

      <FooterBottom>{t("all rights reserved")}</FooterBottom>
    </>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])), // Load translations
    },
  };
}
