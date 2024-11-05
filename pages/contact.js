import Header from "@/components/Header";
import { useState } from "react";
import styled from "styled-components";
import Footer from "./footer";

const TitleWrapper = styled.div`
  background-color: #a22a22; /* Red background */
  padding: 27px 0; /* Top and bottom padding */
  text-align: center; /* Center text */
  width: 100vw; /* Stretch background to full viewport width */
  position: relative; /* Positioning control */
  left: 49%; /* Centering */
  transform: translateX(-50%); /* Centering */
  margin: 18px 0 20px; /* Top and bottom margins */
  z-index: 10; /* Ensure it appears on top */
`;

const Title = styled.h2`
  color: white; /* White text color for contrast */
  text-align: center;
  margin: 0; /* Remove margin to reduce space */
  font-size: 24px; /* Adjust font size as needed */
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 58px; /* Space between image and info */

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px; /* Smaller gap for mobile */
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  max-width: 750px;

  @media (max-width: 768px) {
    max-width: 100%; /* Take full width on small screens */
  }
`;

const RightColumn = styled.div`
  flex: 0.3; /* Reduced width for right block */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  border: 1px solid #ccc;
  border-radius: 15px;
  max-width: 350px; /* Width limit */

  @media (max-width: 768px) {
    max-width: 100%; /* Take full width on small screens */
  }
`;

const ImageWrapper = styled.div`
  margin-bottom: 20px;

  img {
    width: 100%;
    border-radius: 8px;
    object-fit: cover; /* Control image size */
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
      object-fit: contain; /* Control image size */
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
        <Title>კონტაქტი</Title>
      </TitleWrapper>
      <Container>
        <LeftColumn>
          <ImageWrapper>
            <img
              src="https://miviuyvan.s3.amazonaws.com/1730790446607.jpg"
              alt="Contact Page Image"
            />
          </ImageWrapper>
          <Title>ჩვენს შესახებ</Title>
          <ImageWrapper>
            <img
              src="https://miviuyvan.s3.amazonaws.com/1726661385736.png"
              alt="Contact Page Image"
            />
          </ImageWrapper>
        </LeftColumn>

        <RightColumn>
          <InfoBlock>
            <h3>ჩვენ სოციალურ მედიაში</h3>
            <p>
              გამოგვყევით სოციალურ ქსელებში და მიიღეთ ინფორმაცია ჩვენი
              პროდუქციის და კომპანიის შესახებ
            </p>
            <div>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://miviuyvan.s3.amazonaws.com/1726663189506.png"
                  alt="Facebook"
                  style={{ width: "55px", height: "55px" }} // Image size control
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
                  <h4>ელ ფოსტა</h4>
                  <p>info@onlma.ge</p>
                </div>
              </div>
              <div className="contact-item">
                <img
                  src="https://miviuyvan.s3.amazonaws.com/1726663692519.png"
                  alt="Phone"
                />
                <div className="contact-details">
                  <h4>ტელეფონი</h4>
                  <p>+995 431 273 193</p>
                </div>
              </div>
              <div className="contact-item">
                <img
                  src="https://miviuyvan.s3.amazonaws.com/1726663766744.png"
                  alt="Address"
                />
                <div className="contact-details">
                  <h4>მისამართი</h4>
                  <p>ქუთაისი, გუგუნავას ქ. #13</p>
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
