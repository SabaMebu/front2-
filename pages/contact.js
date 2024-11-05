import Header from "@/components/Header";
import styled from "styled-components";
import Footer from "./footer";

const TitleWrapper = styled.div`
  background-color: #f5f5f5; /* Gray background */
  padding: 27px 0; /* Top and bottom padding */
  text-align: center; /* Center text */
  width: 100vw; /* Stretch background to full viewport width */
  position: relative; /* Positioning control */
  left: 49%; /* Compensate for left shift */
  transform: translateX(-50%); /* Compensate for left shift */
  margin: 18px 0 20px; /* Top and bottom margins */
  background-color: #a22a22;
`;

const TitleText = styled.h1`
  font-size: 2rem;
  color: white;
  font-weight: bold;
  margin: 0;
  padding: 0;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Smaller font size on mobile */
  }
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
  max-width: 900px;

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
    height: 600px;
    border-radius: 18px;
    object-fit: cover;
  }
`;

const Divider = styled.div`
  width: 50px;
  height: 3px;
  background-color: #a22a22;
  margin-bottom: 20px;
`;

const DecorativeText = styled.div`
  font-size: 1.2em;
  line-height: 1.6;
  color: #555;
  text-align: center;
  padding: 20px;
`;

export default function ContactPage() {
  return (
    <>
      <Header />
      <TitleWrapper>
        <TitleText>კონტაქტი</TitleText>
      </TitleWrapper>
      <Container>
        <LeftColumn>
          <ImageWrapper>
            <img
              src="https://miviuyvan.s3.amazonaws.com/1726661385736.png"
              alt="Contact Page Image"
            />
          </ImageWrapper>
          <Divider />
          <DecorativeText>
            <p>
              მოგვყევით სოციალურ ქსელებში და მიიღეთ უახლესი ინფორმაცია ჩვენი
              პროდუქციის შესახებ. ჩვენი გუნდი მუდამ მზად არის, მოგაწოდოთ
              საუკეთესო ხარისხი და სერვისი.
            </p>
            <p>
              ჩვენი მისიაა მუდმივად გავაუმჯობესოთ პროდუქციის ხარისხი და
              მივაღწიოთ მომხმარებლის მაქსიმალურ კმაყოფილებას.
            </p>
          </DecorativeText>
        </LeftColumn>

        <RightColumn>
          <h3>ჩვენ სოციალურ მედიაში</h3>
          <p>
            გამოგვყევით სოციალურ ქსელებში და მიიღეთ ინფორმაცია ჩვენი პროდუქციის
            და კომპანიის შესახებ
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
                style={{ width: "55px", height: "55px" }}
              />
            </a>
          </div>

          <Divider />

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
        </RightColumn>
      </Container>
      <Footer />
    </>
  );
}
