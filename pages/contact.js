import Header from "@/components/Header";
import { useState } from "react";
import styled from "styled-components";
import Footer from "./footer";

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 58px; /* სივრცე ფოტოსა და ინფორმაციას შორის */

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
  flex: 0.3; /* შემცირებულია მარჯვენა ბლოკის სიგანე */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  border: 1px solid #ccc;
  border-radius: 15px;
  max-width: 350px; /* სიგანის ლიმიტი */

  @media (max-width: 768px) {
    max-width: 100%; /* Take full width on small screens */
  }
`;

const ImageWrapper = styled.div`
  margin-bottom: 20px;

  img {
    width: 100%;
    border-radius: 8px;
    object-fit: cover; /* სურათის ზომის კონტროლი */
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

const Title = styled.h2`
  color: #a22a22;
  text-align: center;
  margin-bottom: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  input,
  textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }

  textarea {
    height: 150px;
    resize: none;
  }

  button {
    padding: 10px;
    background-color: #a22a22;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #871e1e;
    }
  }
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
      object-fit: contain; /* სურათის ზომის კონტროლი */
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
      <Container>
        <LeftColumn>
          <ImageWrapper>
            <img
              src="https://miviuyvan.s3.amazonaws.com/1726661385736.png"
              alt="Contact Page Image"
            />
          </ImageWrapper>
          <Title>საკონტაქტო ფორმა</Title>
          <Divider />
          <Form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Message subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your message here"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Email</button>
          </Form>
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
                  style={{ width: "55px", height: "55px" }} // გამოსახულების ზომის კონტროლი
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
