import IMAGE from "@/components/IMAGE"; // Custom IMAGE component

function Card() {
  return (
    <div style={{ textAlign: "center", marginTop: "16px" }}>
      <h1 style={{ marginTop: "130px" }}>ჩვენი პროდუქცია</h1>
      <div
        style={{
          width: "100px",
          height: "4px",
          backgroundColor: "#FF6347", // Same color as the text
          margin: "35px auto 40px", // Adjust spacing above and below the line
        }}
      ></div>
      <div
        style={{ marginTop: "65px", fontSize: "25px", marginBottom: "35px" }}
      >
        <span>
          ჩვენ ვაწარმოებთ 50-მდე დასახელების ხორცპროდუქტს ესენია: სოსისები,
          მოხარშული ძეხვები, დელიკატესები, სერველატები
        </span>
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
            alt="დელიკატესი"
            width={200}
            height={150}
            className="hover-effect"
          />
          <div className="title">დელიკატესი</div>
        </div>

        <div style={{ textAlign: "center", margin: "55px 52px" }}>
          <IMAGE
            style={{
              marginBottom: "8px",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            src="https://miviuyvan.s3.amazonaws.com/1724764412523.png"
            alt="მოხარშული"
            width={300}
            height={200}
            className="hover-effect"
          />
          <div className="title">მოხარშული</div>
        </div>

        <div style={{ textAlign: "center", margin: "55px 52px" }}>
          <IMAGE
            style={{
              marginBottom: "8px",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            src="https://miviuyvan.s3.amazonaws.com/1723975157781.png"
            alt="სოსისი"
            width={300}
            height={200}
            className="hover-effect"
          />
          <div className="title">სოსისი</div>
        </div>

        <div style={{ textAlign: "center", margin: "25px 20px" }}>
          <IMAGE
            style={{
              marginBottom: "8px",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            src="https://miviuyvan.s3.amazonaws.com/1724763820395.png"
            alt="სერველატი"
            width={220}
            height={160}
            className="hover-effect"
          />
          <div className="title">სერველატი</div>
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
