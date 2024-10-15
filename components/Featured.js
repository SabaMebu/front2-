import Center from "./Center";
import styled from "styled-components";
import IMAGE from "@/components/IMAGE"; // Custom IMAGE component

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
  font-size: large;
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
            <Title>Pro anywhere</Title>
            <Desc>sdjkfnhsdlkjfvbdshjkvasnsbjkscbaskjn cbash dsjsd v</Desc>
          </div>
          <div>
            <IMAGE
              src="https://miviuyvan.s3.amazonaws.com/1722945426008.png"
              alt=""
              width={250}
              height={250} // Add appropriate height
              style={{ marginLeft: "150px" }} // Optional: If you want to keep the same margin as before
            />
          </div>
        </Wrapper>
      </Center>
    </Bg>
  );
}
