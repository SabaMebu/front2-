import IMAGE from "@/components/IMAGE"; // Custom IMAGE component
import { useTranslation } from "next-i18next";

function Card() {
  const { t } = useTranslation("common");

  return (
    <div style={{ textAlign: "center", marginTop: "16px" }}>
      <h1 style={{ marginTop: "130px" }}>{t("our production")}</h1>
      <div
        style={{
          width: "100px",
          height: "4px",
          backgroundColor: "#FF6347", // Same color as the text
          margin: "35px auto 40px", // Adjust spacing above and below the line
        }}
      ></div>
      <div
        style={{ marginTop: "65px", fontSize: "22px", marginBottom: "35px" }}
      >
        <span>{t("product description")}</span>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        <div style={{ textAlign: "center", margin: "10px 30px" }}>
          <IMAGE
            style={{
              marginBottom: "8px",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            src="https://miviuyvan.s3.amazonaws.com/1724764188618.png"
            alt={t("delicacy")}
            width={200}
            height={150}
            className="hover-effect"
          />
          <div className="title">{t("delicacy")}</div>
        </div>

        <div style={{ textAlign: "center", margin: "55px 52px" }}>
          <IMAGE
            style={{
              marginBottom: "8px",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            src="https://miviuyvan.s3.amazonaws.com/1724764412523.png"
            alt={t("boiled")}
            width={300}
            height={200}
            className="hover-effect"
          />
          <div className="title">{t("boiled")}</div>
        </div>

        <div style={{ textAlign: "center", margin: "55px 52px" }}>
          <IMAGE
            style={{
              marginBottom: "8px",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            src="https://miviuyvan.s3.amazonaws.com/1723975157781.png"
            alt={t("sausage")}
            width={300}
            height={200}
            className="hover-effect"
          />
          <div className="title">{t("sausage")}</div>
        </div>

        <div style={{ textAlign: "center", margin: "25px 20px" }}>
          <IMAGE
            style={{
              marginBottom: "8px",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            src="https://miviuyvan.s3.amazonaws.com/1724763820395.png"
            alt={t("salami")}
            width={220}
            height={160}
            className="hover-effect"
          />
          <div className="title">{t("salami")}</div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-5px);
          }
          50% {
            transform: translateX(5px);
          }
          75% {
            transform: translateX(-5px);
          }
        }

        .hover-effect:hover {
          animation: shake 0.2s ease-in-out; /* Image shakes on hover */
        }

        .title {
          color: #black; /* Default light gray color */
          font-size: 22px;
          transition: color 0.3s; /* Smooth color transition */
        }

        .title:hover {
          color: #white; /* Change to black on hover */
        }
      `}</style>
    </div>
  );
}

export default Card;

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
