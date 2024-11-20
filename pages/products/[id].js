import { useState, useEffect } from "react";
import Center from "@/components/Center";
import Description from "@/components/Description";
import Header from "@/components/Header";
import WhiteBox from "@/components/WhiteBox";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import styled from "styled-components";
import React from "react";
import IMAGE from "@/components/IMAGE"; // Custom IMAGE component
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1.2fr;
  gap: 40px;
  margin-top: 40px;
  justify-items: center;

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
      max-width: 100%;
    }
  }

  @media (max-width: 768px) {
    img {
      max-width: 90%;
    }
  }
`;

const ThumbnailWrapper = styled.div`
  display: flex;
  gap: 15px; /* Increased gap for better spacing */
  margin-top: 20px;
  justify-content: center;

  img {
    cursor: pointer;
    width: 100px; /* Increased width for larger thumbnails */
    height: 100px; /* Increased height for larger thumbnails */
    object-fit: cover;
    transition: transform 0.3s, border 0.3s;
    border: 2px solid transparent;
  }

  img.selected {
    border-color: #f00; /* Highlight color for the selected image */
  }

  img:hover {
    transform: scale(1.1);
  }
`;

const DescriptionWrapper = styled.div`
  text-align: center;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    max-width: 80%;
  }

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

export default function ProductPage({ product }) {
  const [isMounted, setIsMounted] = useState(false);
  const [mainImage, setMainImage] = useState(product.images?.[0]);
  const { t } = useTranslation("common");
  const router = useRouter();
  const { locale } = router;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleBackClick = () => {
    window.history.back();
  };

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  if (!isMounted) return <div />;

  return (
    <>
      <Header />
      <Center>
        <ColWrapper>
          <WhiteBox>
            <ImageWrapper
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IMAGE src={mainImage} alt="Product" />
            </ImageWrapper>

            {/* Thumbnail images */}
            <ThumbnailWrapper>
              {product.images?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => handleThumbnailClick(img)}
                  className={mainImage === img ? "selected" : ""}
                />
              ))}
            </ThumbnailWrapper>

            <DescriptionWrapper>
              <p style={{ margin: "0", lineHeight: "1.6" }}>
                <h1>
                  {product[`description_${locale}`] || product.description_ge}
                </h1>
              </p>
            </DescriptionWrapper>
          </WhiteBox>

          <div>
            <Description style={{ fontSize: "30px", textAlign: "center" }}>
              <h1>{product[`title_${locale}`] || product.title_ge}</h1>
            </Description>

            <hr
              style={{
                width: "50%",
                margin: "20px auto",
                border: "2px solid #f00",
              }}
            />

            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <IMAGE
                style={{
                  maxWidth: "37%",
                  marginTop: "18px",
                }}
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

export async function getServerSideProps({ params, locale }) {
  await mongooseConnect();

  const { id } = params;
  const product = await Product.findById(id);

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}
