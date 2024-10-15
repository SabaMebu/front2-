import React from "react";

const VideoBackground = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* სათაური */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          textAlign: "center",
          padding: "0 1.25rem", // 20px to rem
          zIndex: "1", // უნდა იყოს ვიდეოს ზემოთ
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.875rem", // 30px to rem
            border: "0.125rem solid white", // 2px to rem, ჩარჩოს ფერი
            borderRadius: "0.5rem", // 8px to rem, რაუნდი კუთხეები
            backgroundColor: "#00000050", // ჩარჩოს ფონით
            width: "fit-content",
            margin: "0 auto",
            marginTop: "9.875rem", // 158px to rem
          }}
        >
          <hr
            style={{
              flex: 1,
              border: "0",
              borderTop: "0.125rem solid #FFF", // 2px to rem, ხაზის ფერი
              marginRight: "7.5rem", // 120px to rem
            }}
          />
          <h1
            style={{
              margin: 0,
              padding: 0,
              color: "white", // ტექსტის ფერი
              fontSize: "1.5rem", // 24px to rem
            }}
          >
            HACCP & ISO22000
          </h1>
          <hr
            style={{
              flex: 1,
              border: "0",
              borderTop: "0.125rem solid #FFF", // 2px to rem, ხაზის ფერი
              marginLeft: "7.5rem", // 120px to rem
            }}
          />
        </div>
      </div>

      {/* ვიდეო */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          marginTop: "15.9375rem", // 255px to rem
        }}
      >
        <video
          autoPlay
          muted
          loop
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: "-1", // ვიდეო უნდა იყოს სათაურის ქვეშ
          }}
        >
          <source src="video.mp4" type="video/mp4" />
          <source src="video.webm" type="video/webm" />
          <source src="video.ogv" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* წარწერები */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "6.25rem", // 100px to rem
            height: "0.25rem", // 4px to rem
            backgroundColor: "#FF6347",
            margin: "0 auto 1.25rem", // 20px to rem
          }}
        ></div>
        <span style={{ fontSize: "1.875rem", padding: "1.5rem" }}>
          {" "}
          {/* 30px და 24px to rem */}
          2015 წელს კომპანიამ წარმატებით დანერგა სურსათის უვნებლობის სისტემა და
          მოიპოვა საერთაშორისო აღიარებული სერტიფიკატები HACCP და ISO22000
        </span>
      </div>
    </div>
  );
};

export default VideoBackground;
