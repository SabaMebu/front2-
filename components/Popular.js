import Image from "next/image";

function Popular() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "120px",
        backgroundColor: "#f0f0f0", // Light gray background
        padding: "30px", // Add some padding for better spacing
      }}
    >
      <h1 style={{ marginTop: "130px" }}>პოპულარული პროდუქცია</h1>

      {/* Decorative Line */}
      <div
        style={{
          width: "100px",
          height: "4px",
          backgroundColor: "#FF6347", // Same color as the text
          margin: "40px auto", // Adjust spacing above and below the line
        }}
      ></div>

      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {/* Each product item */}
        {[
          {
            src: "https://miviuyvan.s3.amazonaws.com/1724919680002.png",
            alt: "დელიკატესი",
            title: "ძეხვი საქონლის",
          },
          {
            src: "https://miviuyvan.s3.amazonaws.com/1724919680002.png",
            alt: "მოხარშული",
            title: "ძეხვი საექიმო",
          },
          {
            src: "https://miviuyvan.s3.amazonaws.com/1724919680002.png",
            alt: "სოსისი",
            title: "ძეხვი სამოყვარულო",
          },
          {
            src: "https://miviuyvan.s3.amazonaws.com/1724919680002.png",
            alt: "სერველატი",
            title: "ძეხვი პიკანტური",
          },
        ].map((item, index) => (
          <div
            key={index}
            style={{
              textAlign: "center",
              margin: "10px 30px",
              cursor: "pointer",
              position: "relative", // For positioning the hover effect
            }}
          >
            <div className="hover-effect" style={{ display: "inline-block" }}>
              <Image src={item.src} alt={item.alt} width={250} height={250} />
            </div>
            <div style={{ color: "black", fontSize: "18px" }}>{item.title}</div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .hover-effect {
          transition: transform 0.3s, box-shadow 0.3s; /* Smooth transition */
        }

        .hover-effect:hover {
          transform: scale(1.1); /* Slightly increase the size on hover */
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4); /* Enhanced shadow */
        }
      `}</style>
    </div>
  );
}

export default Popular;
