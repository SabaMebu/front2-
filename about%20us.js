import Center from "@/components/Center";
import Header from "@/components/Header";
import styled from "styled-components";
import Footer from "./footer";

// სათაურის სტილები
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

// წითელი ხაზისა და ტექსტის კონტეინერი
const LineTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  margin-top: 20px;
  margin-left: 0;
  padding-left: 0;

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 480px) {
    gap: 15px;
  }
`;

// წითელი ხაზის სტილი
const RedLine = styled.div`
  width: 100px;
  height: 4px;
  background-color: red;
`;

// ტექსტის სტილი ხაზის ქვემოთ
const LineText = styled.p`
  text-align: left;
  color: #333;
`;

// ქვემოთ დამატებითი ტექსტის სტილი
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

// კონტეინერი სათაურისა და ხაზებისათვის
const TitleWrapper = styled.div`
  background-color: #f5f5f5;
  padding: 4px 0;
  text-align: center;
  width: 100vw;
  position: relative;
  left: 40%;
  transform: translateX(-50%);
  margin: 18px 0 20px;
  background-color: #a22a22;

  @media (max-width: 768px) {
    left: 45%;
    transform: translateX(-50%);
  }

  @media (max-width: 480px) {
    padding: 2px 0;
  }
`;

// კონტეინერი ხაზებისა და აღწერისათვის
const LineSection = styled.div`
  margin-top: 40px;

  @media (max-width: 768px) {
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    margin-top: 20px;
  }
`;

// ხაზი და ტექსტის კონტეინერი მარჯვნივ განთავსებისთვის
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

// ძირითადი კომპონენტი
export default function AboutPage() {
  return (
    <>
      <Header />
      <Center>
        <TitleWrapper>
          <Title>ჩვენი ისტორია</Title>
        </TitleWrapper>

        {/* ახალი დივი ხაზებისთვის და ტექსტებისთვის */}
        <LineSection>
          <LineTextWrapper>
            <div>
              <RedLine />
              <LineText>კომპანიის შესახებ</LineText>
              <AdditionalText>
                ხორცპროდუქტების მწარმოებელი კომპანია “ონიმა” 2008 წელს ქალაქ
                ქუთაისში დაარსდა. წარმოების პირველ ეტაპზე ტექნოლოგიურ მხარეს
                ადგილობრივი სპეციალისტები უზრუნველყოფდნენ. 2009 წლიდან კი
                კომპანიის ხელმძღვანელობას, სხადასხვა ქვეყნებიდან, რეგულარულად
                ჩამოჰყავს ცნობილი სპეციალისტები, რომლებიც პროდუქციის
                ასორტიმენტის გაზრდაზე, სწორი ტექნიკური და ტექნოლოგიური ხაზის
                შენარჩუნებაზე ზრუნავენ. მაღალხარისხიანი პროდუქციის წარმოებასა და
                რეალიზაციას მნიშვნელოვანწილად ასევე ხელს უწყობს სრულიად ახალი
                ტექნოლოგიური დანადგარები. 2015 წელს კომპანიამ წარმეტებით დანერგა
                სურსათის უვნებლობის სისტემა და მოიპოვა საერთსალაქო აღიარებული
                სერტიფიკატები HACCP და ISO22000. საწარმოში 150 ზე მეტი ადამიანია
                დასაქმებული და ეს რიცხვი წარმადობის მატებასთან ერთად უფრო და
                უფრო იზრდება. ამჟამად კომპანია მომხმარებელს ორმოცამდე სახეობის
                პროდუქციას სთავაზობს. ახლო მომავალში არსებული ასორტიმენტი კიდევ
                უფრო გაიზრდება.
              </AdditionalText>
            </div>

            {/* ხარისხის კონტროლი - ქვემოთ და მარჯვნივ */}
            <RightAlignedWrapper>
              <RedLine />
              <LineText>ხარისხის კონტროლი</LineText>
              <AdditionalText>
                ჩვენთვის ხარისხის კონტროლი ერთ-ერთი უმთავრესი პრიორიტეტია. 2015
                წელს კომპანიამ წარმეტებით დანერგა სურსათის უვნებლობის სისტემა და
                მოიპოვა საერთსაციოდ აღიარებული სერტიფიკატები HACCP და ISO22000.
                აღნიშნული სისტემა მოიცავს ყველა პროცესსა თუ სფეროს და
                უზრუნველყოფს -უსაფრთხო, სტაბილური პროდუქციის წარმოებას და
                მიწოდებას ჩვენს მომხმარებლამდე. კონტროლი მკაცრად ხორციელდება
                წარმოების თითოეულ ეტაპზე.
              </AdditionalText>
            </RightAlignedWrapper>
          </LineTextWrapper>
        </LineSection>
      </Center>
      <Footer />
    </>
  );
}
