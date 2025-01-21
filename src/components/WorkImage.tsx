import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string; // Optional path to a video file
  link?: string; // Optional external link
}

const WorkImage: React.FC<Props> = ({ image, alt, video, link }) => {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  const handleMouseEnter = async () => {
    if (video) {
      try {
        const module = await import(`../assets/${video}`); // Adjust the path based on your asset folder structure
        setVideoSrc(module.default || module);
      } catch (error) {
        console.error("Error loading video asset:", error);
        setVideoSrc(null);
      }
    }
  };

  const handleMouseLeave = () => {
    setVideoSrc(null); // Reset video source
  };

  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={link || "#"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        target={link ? "_blank" : "_self"}
        rel="noopener noreferrer"
        data-cursor="disable"
      >
        {link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}
        {/* Render the image by default */}
        <img src={image} alt={alt || "Work Image"} className="image-element" />
        {/* Show video on hover */}
        {videoSrc && (
          <video
            src={videoSrc}
            autoPlay
            muted
            playsInline
            loop
            className="video-element"
          ></video>
        )}
      </a>
    </div>
  );
};

export default WorkImage;
