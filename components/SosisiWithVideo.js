import React from "react";
import styled from "styled-components";

const VideoBackgroundWrapper = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

const TitleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  padding: 0 1.25rem; /* 20px to rem */
  z-index: 1; /* Above video */
`;

const TitleContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.875rem; /* 30px to rem */
  border: 0.125rem solid white; /* 2px to rem */
  border-radius: 0.5rem; /* 8px to rem, rounded corners */
  background-color: rgba(0, 0, 0, 0.5); /* Background with transparency */
  width: fit-content;
  margin: 0 auto;
  margin-top: 9.875rem; /* Adjust margin for larger screens */

  @media (max-width: 552px) {
    margin-top: 5.5rem; /* Reduced margin for small screens */
    flex-direction: column; /* Stack elements vertically */
  }
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin-top: 15.9375rem; /* 255px to rem */
`;

const Video = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1; /* Behind title */
`;

const SubtitleWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;

  @media (max-width: 552px) {
    padding: 0 1rem; /* Padding adjustments for smaller screens */
  }
`;

const SubtitleIndicator = styled.div`
  width: 6.25rem; /* 100px to rem */
  height: 0.25rem; /* 4px to rem */
  background-color: #ff6347;
  margin: 0 auto 1.25rem; /* 20px to rem */

  @media (max-width: 544px) {
    width: 4rem; /* Adjust indicator width for small screens */
  }
`;

const SubtitleText = styled.span`
  font-size: 1.875rem;
  padding: 1.5rem;

  @media (max-width: 548px) {
    font-size: 1.25rem; /* Reduce font size for small screens */
  }
`;

const VideoBackground = () => {
  return (
    <VideoBackgroundWrapper>
      {/* Title */}
      <TitleWrapper>
        <TitleContent>
          <hr
            style={{
              flex: 1,
              border: 0,
              borderTop: "0.125rem solid #FFF", // 2px to rem
              marginRight: "7.5rem", // 120px to rem
            }}
          />
          <h1
            style={{
              margin: 0,
              padding: 0,
              color: "white",
              fontSize: "1.5rem", // 24px to rem
            }}
          >
            HACCP & ISO22000
          </h1>
          <hr
            style={{
              flex: 1,
              border: 0,
              borderTop: "0.125rem solid #FFF",
              marginLeft: "7.5rem",
            }}
          />
        </TitleContent>
      </TitleWrapper>

      {/* Video */}
      <VideoContainer>
        <Video autoPlay muted loop>
          <source src="video.mp4" type="video/mp4" />
          <source src="video.webm" type="video/webm" />
          <source src="video.ogv" type="video/ogg" />
          Your browser does not support the video tag.
        </Video>
      </VideoContainer>

      {/* Subtitles */}
      <SubtitleWrapper>
        <SubtitleIndicator />
        <SubtitleText>
          2015 წელს კომპანიამ წარმატებით დანერგა სურსათის უვნებლობის სისტემა და
          მოიპოვა საერთაშორისო აღიარებული სერტიფიკატები HACCP და ISO22000
        </SubtitleText>
      </SubtitleWrapper>
    </VideoBackgroundWrapper>
  );
};

export default VideoBackground;
