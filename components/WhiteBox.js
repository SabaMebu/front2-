import styled from "styled-components";

const WhiteBox = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 25px;

  @media (max-width: 400px) {
    padding: 15px;
    border-radius: 15px;
  }
`;

export default WhiteBox;
