import React from "react";
import { useTranslation } from "next-i18next";

function Sosisi() {
  const { t } = useTranslation("common");

  return (
    <div
      style={{
        textAlign: "center",
        margin: "0",
        padding: "0",
        overflow: "hidden", // Prevent vertical scroll
      }}
    >
      <h1 style={{ marginTop: "6rem", padding: "2rem", fontSize: "2.5rem" }}>
        {t("taste everyone loves")}
      </h1>
      <div
        style={{
          width: "6.25rem", // 100px to rem
          height: "0.25rem", // 4px to rem
          backgroundColor: "#FF6347",
          margin: "2.5rem auto", // 40px to rem
        }}
      ></div>
      <span style={{ fontSize: "1.25rem" }}>
        {t("Always tasty, steadily quality and affordable products")}
      </span>

      <div
        style={{
          marginTop: "2.5rem", // 40px to rem
          width: "100%", // Full width
          height: "auto",
          maxHeight: "60vh", // Set a max height for larger screens
          display: "flex", // Use flexbox for centering
          justifyContent: "center", // Center the image horizontally
          alignItems: "center", // Center the image vertically
          overflow: "hidden", // Hide overflow
        }}
      >
        <img
          src="https://miviuyvan.s3.amazonaws.com/1738082155962.jpg"
          alt={t("sosisi")}
          style={{
            width: "100%", // Ensure image takes full width
            height: "100%", // Ensure image takes full height
            objectFit: "cover", // Maintain aspect ratio and cover the area
          }}
        />
      </div>

      {/* Responsive styles using media queries */}
      <style jsx>{`
        @media (max-width: 768px) {
          h1 {
            font-size: 2rem; /* Adjust font size for smaller screens */
          }
          span {
            font-size: 1rem; /* Adjust font size for smaller screens */
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 1.5rem; /* Further adjust font size for mobile */
          }
          span {
            font-size: 0.875rem; /* Further adjust font size for mobile */
          }
        }
      `}</style>
    </div>
  );
}

export default Sosisi;

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
