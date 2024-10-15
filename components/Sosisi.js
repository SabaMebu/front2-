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
      <h1 style={{ marginTop: "6rem", padding: "2rem" }}>
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
        {" "}
        {/* 20px font size in rem */}
        ყოველთვის გემრიელი, სტაბილურად ხარისხიანი და ამავდროულად ხელმისაწვდომი
        პროდუქცია.
      </span>

      <div
        style={{
          marginTop: "2.5rem", // 40px to rem
          width: "100vw",
          height: "calc(90vh - 11.25rem)", // Converted 180px to rem
          backgroundImage:
            "url('https://miviuyvan.s3.amazonaws.com/1724926731122.jpg')",
          backgroundSize: "contain", // Maintain image aspect ratio
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
}

export default Sosisi;
