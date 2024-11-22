import Image from "next/image";
import { useTranslation } from "next-i18next";

function Market() {
  const { t } = useTranslation("common");

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "40px",
        backgroundColor: "#f0f0f0", // Light gray background
        padding: "60px", // Add some padding for better spacing
      }}
    >
      <h1 style={{ marginTop: "125px" }}>{t("market title")}</h1>

      {/* Decorative Line */}
      <div
        style={{
          width: "100px",
          height: "4px",
          backgroundColor: "#FF6347", // Same color as the text
          margin: "40px auto 40px", // Adjust spacing above and below the line
        }}
      ></div>

      <div
        style={{ marginTop: "65px", fontSize: "25px", marginBottom: "35px" }}
      >
        <span>{t("market description")}</span>
      </div>

      {/* Grid for images */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", // Responsive columns
          gap: "20px", // Space between grid items
          justifyContent: "center", // Center the grid within its container
          marginTop: "30px", // Space between the text and grid
        }}
      >
        {[
          {
            src: "https://miviuyvan.s3.amazonaws.com/1724931901378.png",
            alt: t("product_delikatesi"),
          },
          {
            src: "https://miviuyvan.s3.amazonaws.com/1724931946925.png",
            alt: t("product_moxarshuli"),
          },
          {
            src: "https://miviuyvan.s3.amazonaws.com/1724931978279.png",
            alt: t("product_sosisi"),
          },
          {
            src: "https://miviuyvan.s3.amazonaws.com/1724932037094.png",
            alt: t("product_servelati"),
          },
          {
            src: "https://miviuyvan.s3.amazonaws.com/1724932070330.png",
            alt: t("product_other"),
          },
        ].map((item, index) => (
          <div key={index} style={{ textAlign: "center", margin: "10px 30px" }}>
            <Image
              style={{
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              src={item.src}
              alt={item.alt}
              width={220}
              height={150}
              className="hover-effect"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        .hover-effect:hover {
          transform: scale(1.3); /* Image zoom on hover */
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Add shadow */
        }
      `}</style>
    </div>
  );
}

export default Market;

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
