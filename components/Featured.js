// import Image from "next/image";
import Center from "./Center";
import styled from "styled-components";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;
const Title = styled.h1`
  margin: 0;
  font-weight: normal;
`;
const Desc = styled.p`
  color: #aaa;
  font-size: large.8rem;
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  img {
    max-width: 250px;
    margin-left: 150px;
  }
`;

export default function Featured() {
  return (
    <Bg>
      <Center>
        <Wrapper>
          <div>
            <Title>Pro anywere</Title>
            <Desc>sdjkfnhsdlkjfvbdshjkvasnsbjkscbaskjn cbash dsjsd v</Desc>
          </div>
          <div>
            <img
              src="https://miviuyvan.s3.amazonaws.com/1722945426008.png"
              alt=""
            />
          </div>
        </Wrapper>
      </Center>
    </Bg>
  );
}
