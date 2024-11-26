import Carousel from "react-bootstrap/Carousel";
import { useEffect } from "react";
import IMAGE from "@/components/IMAGE"; // Custom IMAGE component

function CarouselPage() {
  useEffect(() => {
    // Ensure no horizontal scroll
    document.body.style.overflowX = "hidden";

    return () => {
      // Cleanup when component unmounts
      document.body.style.overflowX = "auto";
    };
  }, []);

  return (
    <div style={{ width: "100vw", overflow: "hidden", padding: "0 20px" }}>
      <Carousel>
        <Carousel.Item>
          <IMAGE
            style={{
              width: "calc(100% - 96px)", // Subtract padding for both sides
              margin: "0 auto", // Center the image
              height: "auto", // Maintain aspect ratio
              objectFit: "contain", // Fit the image within the space
              borderRadius: "10px", // Optional: Add rounded corners
            }}
            className="d-block"
            src="https://miviuyvan.s3.amazonaws.com/1723725457188.jpeg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <IMAGE
            style={{
              width: "calc(100% - 96px)",
              margin: "0 auto",
              height: "auto",
              objectFit: "contain",
              borderRadius: "10px",
            }}
            className="d-block"
            src="https://miviuyvan.s3.amazonaws.com/1730790945211.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <IMAGE
            style={{
              width: "calc(100% - 96px)",
              margin: "0 auto",
              height: "auto",
              objectFit: "contain",
              borderRadius: "10px",
            }}
            className="d-block"
            src="https://miviuyvan.s3.amazonaws.com/1723726449034.jpeg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      <style jsx>{`
        @media (max-width: 768px) {
          img {
            width: calc(100% - 30px); /* Smaller padding for smaller screens */
            height: auto;
            object-fit: contain;
          }
        }

        @media (max-width: 576px) {
          img {
            width: calc(100% - 20px);
            height: auto;
            object-fit: contain;
          }
        }
      `}</style>
    </div>
  );
}

export default CarouselPage;
