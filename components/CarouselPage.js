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
    <div style={{ width: "100vw", overflow: "hidden" }}>
      <Carousel>
        <Carousel.Item>
          <IMAGE
            style={{
              width: "100%", // Ensure full width of the viewport
              height: "auto", // Let height adjust automatically to maintain aspect ratio
              objectFit: "contain", // Scale image to fit within its container without being cropped
            }}
            className="d-block"
            src="https://miviuyvan.s3.amazonaws.com/1723725457188.jpeg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <IMAGE
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
            className="d-block"
            src="https://miviuyvan.s3.amazonaws.com/1723725965572.jpeg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <IMAGE
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
            className="d-block"
            src="https://miviuyvan.s3.amazonaws.com/1723726449034.jpeg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      {/* Media queries for responsiveness */}
      <style jsx>{`
        @media (max-width: 768px) {
          img {
            width: 100%; /* Ensure the image always takes the full width */
            height: auto; /* Auto height to keep the aspect ratio */
          }
        }

        @media (max-width: 576px) {
          img {
            width: 100%; /* Same behavior for smaller screens */
            height: auto;
          }
        }
      `}</style>
    </div>
  );
}

export default CarouselPage;
