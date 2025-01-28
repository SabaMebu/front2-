import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Center from "@/components/Center";
import Header from "@/components/Header";
import styled from "styled-components";
import Footer from "./footer";
import { useTranslation } from "next-i18next";

// Styled components
const Title = styled.h1`
  font-size: 2.8em;
  color: white;
  @media (max-width: 768px) {
    font-size: 2.8em;
  }
  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`;

const TitleWrapper = styled.div`
  background-color: #a22a22;
  padding: 4px 0;
  text-align: center;
  width: 100vw;
  position: relative;
  left: 40%;
  transform: translateX(-50%);
  margin: 18px 0 20px;

  @media (max-width: 768px) {
    left: 45%;
    transform: translateX(-50%);
  }

  @media (max-width: 480px) {
    padding: 2px 0;
  }
`;

const LineSection = styled.div`
  margin-top: 40px;
  @media (max-width: 768px) {
    margin-top: 30px;
  }
  @media (max-width: 480px) {
    margin-top: 20px;
  }
`;

const RedLine = styled.div`
  width: 100px;
  height: 4px;
  background-color: red;
`;

const LineText = styled.p`
  text-align: left;
  color: #333;
`;

const AdditionalText = styled.p`
  margin-top: 10px;
  text-align: left;
  color: #555;
  font-size: 1em;
  @media (max-width: 768px) {
    font-size: 0.9em;
  }
  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`;

const RightAlignedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 50px;
  @media (max-width: 768px) {
    align-items: center;
    margin-top: 40px;
  }
  @media (max-width: 480px) {
    margin-top: 30px;
  }
`;

const ImageWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex-grow: 1;
`;

export default function AboutPage() {
  const { t } = useTranslation("common");

  return (
    <PageWrapper>
      <Header />
      <MainContent>
        <Center>
          <TitleWrapper>
            <Title>{t("about_us")}</Title>
          </TitleWrapper>

          <LineSection>
            <div>
              <RedLine />
              <LineText>{t("company_overview")}</LineText>
              <AdditionalText>{t("company_details")}</AdditionalText>
            </div>
          </LineSection>

          {/* ახალი სექცია - სურათი */}
          <ImageWrapper>
            <img
              src="https://miviuyvan.s3.amazonaws.com/1726661385736.png"
              alt={t("image_alt_text")}
            />
          </ImageWrapper>
        </Center>
      </MainContent>
      {/* <Footer /> */}
    </PageWrapper>
  );
}

// Server-side Translation Support
export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])), // Load translations for the 'common' namespace
    },
  };
}
