import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Header from "@/components/Header";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import styled from "styled-components";
import Footer from "./footer";

const TitleWrapper = styled.div`
  background-color: #a22a22;
  padding: 27px 0;
  text-align: center;
  width: 100vw;
  position: relative;
  left: 49%;
  transform: translateX(-50%);
  margin: 18px 0 20px;
  z-index: 10;
`;

const Title = styled.h2`
  color: white;
  text-align: center;
  margin: 0;
  font-size: 24px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 58px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  max-width: 750px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const RightColumn = styled.div`
  flex: 0.3;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  border: 1px solid #ccc;
  border-radius: 15px;
  max-width: 350px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ImageWrapper = styled.div`
  margin-bottom: 20px;

  img {
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
  }
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Divider = styled.div`
  width: 50px;
  height: 3px;
  background-color: #a22a22;
  margin-bottom: 20px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  margin-top: 20px;
  text-align: left;

  .contact-item {
    display: flex;
    align-items: center;
    gap: 10px;

    img {
      width: 56px;
      height: 70px;
      object-fit: contain;
    }

    .contact-details {
      margin-right: 100px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      h4 {
        margin: 0;
      }

      p {
        margin: 0;
      }
    }
  }
`;

export default function ContactPage() {
  const { t } = useTranslation("common"); // Hook to fetch translations

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data: ", formData);
  };

  return (
    <>
      <Header />
      <TitleWrapper>
        <Title>{t("contact")}</Title>
      </TitleWrapper>
      <Container>
        <LeftColumn>
          <ImageWrapper>
            <img
              src="https://miviuyvan.s3.amazonaws.com/1730790446607.jpg"
              alt={t("contact_image_alt")}
            />
          </ImageWrapper>
          <Title>{t("about_us")}</Title>
          <ImageWrapper>
            <img
              src="https://miviuyvan.s3.amazonaws.com/1726661385736.png"
              alt={t("contact_image_alt")}
            />
          </ImageWrapper>
        </LeftColumn>

        <RightColumn>
          <InfoBlock>
            <h3>{t("socialmedia")}</h3>
            <p>{t("follow_us_social_media")}</p>
            <div>
              <a
                href="https://www.facebook.com/@onimaproducts"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://miviuyvan.s3.amazonaws.com/1726663189506.png"
                  alt="Facebook"
                  style={{ width: "55px", height: "55px" }}
                />
              </a>
            </div>

            <Divider />

            <ContactInfo>
              <div className="contact-item">
                <img
                  src="https://miviuyvan.s3.amazonaws.com/1726662964405.png"
                  alt="Email"
                />
                <div className="contact-details">
                  <h4>{t("email")}</h4>
                  <p>info@onlma.ge</p>
                </div>
              </div>
              <div className="contact-item">
                <img
                  src="https://miviuyvan.s3.amazonaws.com/1726663692519.png"
                  alt="Phone"
                />
                <div className="contact-details">
                  <h4>{t("phone")}</h4>
                  <p>+995 431 273 193</p>
                </div>
              </div>
              <div className="contact-item">
                <img
                  src="https://miviuyvan.s3.amazonaws.com/1726663766744.png"
                  alt="Address"
                />
                <div className="contact-details">
                  <h4>{t("address")}</h4>
                  <p>{t("address_details")}</p>
                </div>
              </div>
            </ContactInfo>
          </InfoBlock>
        </RightColumn>
      </Container>
      <Footer />
    </>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])), // Load translations for 'common' namespace
    },
  };
}
