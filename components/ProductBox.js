import styled from "styled-components";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useState } from "react";

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centers all content */
`;

const WhiteBox = styled(Link)`
  background-color: white;
  padding: 20px;
  border-radius: 8px; /* Slightly rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Box shadow */
  border: 1px solid #ddd; /* Thin border */
  display: flex;
  flex-direction: column;
  align-items: center; /* Centers content */

  img {
    width: 100%; /* Ensures image fills container width */
    height: auto; /* Maintains aspect ratio */
    max-height: 200px; /* Limit maximum height */
    border-radius: 4px; /* Rounded corners for the image */
    object-fit: contain; /* Ensures image is fully visible without cropping */
  }

  @media (max-width: 476px) {
    img {
      max-height: 220px; /* Slightly larger for smaller screens */
    }
  }
`;

const TitleWrapper = styled.div`
  margin-top: 8px; /* Space between image and titles */
  text-align: center; /* Center align titles */
`;

const Title = styled.h3`
  margin: 0;
  font-size: 18px; /* Title text size */
  color: #333; /* Text color */
`;

const SubTitle = styled.h4`
  margin: 0;
  font-size: 16px; /* Subtitle text size */
  color: #666; /* Lighter text color for the subtitle */
`;

export default function ProductBox({
  _id,
  description,
  images,
  title_ge,
  title_en,
  title_ru,
}) {
  const url = "/products/" + _id;
  const { t } = useTranslation("common");
  const router = useRouter();
  const { locale } = router;

  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <img
          src={images[0]}
          alt={title_en || title_ge} /* Use English or Georgian title as alt */
          srcSet={`${images[0]} 1x, ${
            images[1] || images[0]
          } 2x`} /* Higher resolution image if available */
          sizes="(max-width: 768px) 100vw, 200px" /* Adjusts image size based on screen width */
        />
      </WhiteBox>
      <TitleWrapper>
        <Title>{locale === "ge" ? title_ge : null}</Title>
        <Title>{locale === "en" ? title_en : null}</Title>
        <Title>{locale === "ru" ? title_ru : null}</Title>
      </TitleWrapper>
    </ProductWrapper>
  );
}
