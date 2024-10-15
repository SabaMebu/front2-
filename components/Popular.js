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
          margin: "40px auto 40px", // Adjust spacing above and below the line
        }}
      ></div>

      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        <a
          href="/products/66d97681ec812e1a9751fda9"
          style={{ textDecoration: "none" }}
        >
          <div style={{ textAlign: "center", margin: "10px 30px" }}>
            <img
              style={{ transition: "transform 0.3s, box-shadow 0.3s" }}
              src="https://miviuyvan.s3.amazonaws.com/1724919680002.png"
              alt="დელიკატესი"
              width={250}
              height={250}
              className="hover-effect"
            />
            <div style={{ color: "black", fontSize: "18px" }}>
              ძეხვი საქონლის
            </div>
          </div>
        </a>
        <a
          href="/products/66d97798ec812e1a9751fdb9"
          style={{ textDecoration: "none" }}
        >
          <div style={{ textAlign: "center", margin: "10px 30px" }}>
            <img
              style={{ transition: "transform 0.3s, box-shadow 0.3s" }}
              src="https://miviuyvan.s3.amazonaws.com/1724919680002.png"
              alt="მოხარშული"
              width={250}
              height={250}
              className="hover-effect"
            />
            <div style={{ color: "black", fontSize: "18px" }}>
              ძეხვი საექიმო
            </div>
          </div>
        </a>
        <a
          href="/products/66d97704ec812e1a9751fdb1"
          style={{ textDecoration: "none" }}
        >
          <div style={{ textAlign: "center", margin: "10px 30px" }}>
            <img
              style={{ transition: "transform 0.3s, box-shadow 0.3s" }}
              src="https://miviuyvan.s3.amazonaws.com/1724919680002.png"
              alt="სოსისი"
              width={250}
              height={250}
              className="hover-effect"
            />
            <div style={{ color: "black", fontSize: "18px" }}>
              ძეხვი სამოყვარულო
            </div>
          </div>
        </a>
        <a
          href="/products/66d97315ec812e1a9751fd94"
          style={{ textDecoration: "none" }}
        >
          <div style={{ textAlign: "center", margin: "10px 30px" }}>
            <img
              style={{ transition: "transform 0.3s, box-shadow 0.3s" }}
              src="https://miviuyvan.s3.amazonaws.com/1724919680002.png"
              alt="სერველატი"
              width={250}
              height={250}
              className="hover-effect"
            />
            <div style={{ color: "black", fontSize: "18px" }}>
              ძეხვი პიკანტური
            </div>
          </div>
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

export default Popular;
