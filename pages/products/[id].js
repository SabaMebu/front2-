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
    height: 100%;
    max-width: 100%; /* Ensure the image doesn't exceed the container */
    object-fit: cover; /* Ensures the image maintains a consistent size */
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
  gap: 10px; /* Reduced gap */
  margin-top: 20px;
  justify-content: center;

  img {
    cursor: pointer;
    width: 80px; /* Adjusted thumbnail size */
    height: 80px;
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

  h1 {
    font-size: 18px; /* Reduced size for title */
  }

  p {
    font-size: 14px; /* Reduced size for description */
    line-height: 1.4;
    margin-top: 10px;
  }

  @media (max-width: 1024px) {
    max-width: 80%;
  }

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 20px;

  h1 {
    font-size: 24px; /* Adjusted title size */
    margin-bottom: 10px;
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
              <h1>
                {product[`description_${locale}`] || product.description_ge}
              </h1>
            </DescriptionWrapper>
          </WhiteBox>

          <div>
            <TitleWrapper>
              <h1>{product[`title_${locale}`] || product.title_ge}</h1>
            </TitleWrapper>

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
                src="https://miviuyvan.s3.amazonaws.com/1734585859497.jpg"
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
