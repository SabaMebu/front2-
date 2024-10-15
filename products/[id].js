import { useState, useEffect } from "react";
import Center from "@/components/Center";
import Description from "@/components/Description";
import Header from "@/components/Header";
import WhiteBox from "@/components/WhiteBox";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import styled from "styled-components";
import React from "react";

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1.2fr;
  gap: 40px;
  margin-top: 40px;
  justify-items: center; // ელემენტების ცენტრირება

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;
    margin-top: 20px;
  }
`;

const ImageWrapper = styled.div`
  img {
    width: 100%;
    max-width: 170%;
    transition: transform 0.6s ease;
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    img {
      max-width: 100%; // ეკრანის დაპატარავებასთან ერთად სურათი პატარავდება
    }
  }

  @media (max-width: 768px) {
    img {
      max-width: 90%;
    }
  }
`;

const DescriptionWrapper = styled.div`
  text-align: center;
  max-width: 600px;
  margin: 0 auto; // ცენტრირებისთვის

  @media (max-width: 1024px) {
    max-width: 80%;
  }

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

export default function ProductPage({ product }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleBackClick = () => {
    window.history.back();
  };

  if (!isMounted) return <div />;

  return (
    <>
      <Header />
      <Center>
        <ColWrapper>
          <WhiteBox>
            <ImageWrapper>
              <img
                src={product.images?.[0]}
                alt="Product"
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </ImageWrapper>

            <DescriptionWrapper>
              <p style={{ margin: "0", lineHeight: "1.6" }}>
                {product.description}
              </p>
            </DescriptionWrapper>
          </WhiteBox>

          <div>
            <Description style={{ fontSize: "30px", textAlign: "center" }}>
              {product.title}
            </Description>

            <hr
              style={{
                width: "50%",
                margin: "20px auto",
                border: "2px solid #f00",
              }}
            />

            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <img
                style={{ maxWidth: "37%", marginTop: "18px" }}
                src="https://miviuyvan.s3.amazonaws.com/1725523038718.png"
                alt="Side Image"
              />
            </div>

            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <button
                onClick={handleBackClick}
                style={{
                  padding: "10px 20px",
                  fontSize: "16px",
                  backgroundColor: "red",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
              >
                Back
              </button>
            </div>
          </div>
        </ColWrapper>
      </Center>
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}
