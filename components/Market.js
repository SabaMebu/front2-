import Image from "next/image";

function Market() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "40px",
        backgroundColor: "#f0f0f0", // Light gray background
        padding: "60px", // Add some padding for better spacing
      }}
    >
      <h1 style={{ marginTop: "125px" }}>სად შევიძინოთ</h1>

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
        <span>
          ჩვენი პროდუქციის რეალიზაციის გეორგრაფიული არეალი მოიცავს მთელს
          საქართველოს ჩვენი ნაწარმის შეძენე შეგიძლიათ როგორც ტრადიციულ საცალო
          გაყიდვების წერტილებში ასევე სხვა და სხვა ქსელურ მაღაზიათა ქსელში
        </span>
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
        <a
          href="https://example.com/delikatesi"
          style={{ textDecoration: "none" }}
        >
          <Image
            style={{
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            src="https://miviuyvan.s3.amazonaws.com/1724931901378.png"
            alt="დელიკატესი"
            width={220}
            height={150}
            className="hover-effect"
          />
        </a>
        <a
          href="https://example.com/moxarshuli"
          style={{ textDecoration: "none" }}
        >
          <Image
            style={{
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            src="https://miviuyvan.s3.amazonaws.com/1724931946925.png"
            alt="მოხარშული"
            width={220}
            height={150}
            className="hover-effect"
          />
        </a>
        <a href="https://example.com/sosis" style={{ textDecoration: "none" }}>
          <Image
            style={{
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            src="https://miviuyvan.s3.amazonaws.com/1724931978279.png"
            alt="სოსისი"
            width={220}
            height={150}
            className="hover-effect"
          />
        </a>
        <a
          href="https://example.com/servelati"
          style={{ textDecoration: "none" }}
        >
          <Image
            style={{
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            src="https://miviuyvan.s3.amazonaws.com/1724932037094.png"
            alt="სერველატი"
            width={220}
            height={150}
            className="hover-effect"
          />
        </a>
        <a
          href="https://example.com/some-product"
          style={{ textDecoration: "none" }}
        >
          <Image
            style={{
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            src="https://miviuyvan.s3.amazonaws.com/1724932070330.png"
            alt="სხვა პროდუქტი"
            width={220}
            height={150}
            className="hover-effect"
          />
        </a>
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
