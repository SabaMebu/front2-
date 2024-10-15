import React from "react";

function Sosisi() {
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
        გემო რომელიც ყველას უყვარს
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
        {/* 20px font size in rem */}
        ყოველთვის გემრიელი, სტაბილურად ხარისხიანი და ამავდროულად ხელმისაწვდომი
        პროდუქცია.
      </span>

      <div
        style={{
          marginTop: "2.5rem", // 40px to rem
          width: "100%",
          height: "auto",
          maxHeight: "60vh", // Set a max height for larger screens
          display: "flex", // Use flexbox for centering
          justifyContent: "center", // Center the image horizontally
          alignItems: "center", // Center the image vertically
          overflow: "hidden", // Hide overflow
        }}
      >
        <img
          src="https://miviuyvan.s3.amazonaws.com/1724926731122.jpg"
          alt="Sosisi"
          style={{
            maxWidth: "100%", // Ensure image does not exceed container width
            maxHeight: "100%", // Ensure image does not exceed container height
            objectFit: "cover", // Maintain aspect ratio
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
