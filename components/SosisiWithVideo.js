import React from "react";
import styled from "styled-components";
import { useTranslation } from "next-i18next";

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
  padding: 0 1.25rem;
  z-index: 1;
`;

const TitleContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.875rem;
  border: 0.125rem solid white;
  border-radius: 0.5rem;
  background-color: rgba(0, 0, 0, 0.5);
  width: fit-content;
  margin: 0 auto;
  margin-top: 9.875rem;

  @media (max-width: 544px) {
    margin-top: 9rem;
    flex-direction: column;
    height: 100px;
  }
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin-top: 15.9375rem;
`;

const Video = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const SubtitleWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;

  @media (max-width: 544px) {
    padding: 0 1rem;
  }
`;

const SubtitleIndicator = styled.div`
  width: 6.25rem;
  height: 0.25rem;
  background-color: #ff6347;
  margin: 0 auto 1.25rem;

  @media (max-width: 544px) {
    width: 4rem;
  }
`;

const SubtitleText = styled.span`
  font-size: 1.875rem;
  padding: 1.5rem;

  @media (max-width: 544px) {
    font-size: 1rem;
  }
`;

const VideoBackground = () => {
  const { t } = useTranslation("common");

  return (
    <VideoBackgroundWrapper>
      {/* Title */}
      <TitleWrapper>
        <TitleContent>
          <hr
            style={{
              flex: 1,
              border: 0,
              borderTop: "0.125rem solid #FFF",
              marginRight: "7.5rem",
            }}
          />
          <h1
            style={{
              margin: 0,
              padding: 0,
              color: "white",
              fontSize: "1.5rem",
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
          {t("browser_not_support_video")}
        </Video>
      </VideoContainer>

      {/* Subtitles */}
      <SubtitleWrapper>
        <SubtitleIndicator />
        <SubtitleText>{t("subtitle text")}</SubtitleText>
      </SubtitleWrapper>
    </VideoBackgroundWrapper>
  );
};

export default VideoBackground;

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
