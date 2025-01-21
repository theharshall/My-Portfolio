// Remove the unused `image` import at the top of the file
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let translateX = 0;

      function setTranslateX() {
        const boxes = document.getElementsByClassName("work-box");
        const container = document.querySelector(".work-container");
        if (boxes.length > 0 && container) {
          const rectLeft = container.getBoundingClientRect().left;
          const boxRect = boxes[0].getBoundingClientRect();
          const parentWidth = boxes[0].parentElement!.getBoundingClientRect().width;
          const padding = parseInt(window.getComputedStyle(boxes[0]).padding || "0", 10) / 2;
          translateX = boxRect.width * boxes.length - (rectLeft + parentWidth) + padding;
        }
      }

      setTranslateX();

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".work-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
          pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
          id: "work",
        },
      });

      timeline.to(".work-flex", {
        x: -translateX,
        duration: 40,
        delay: 0.2,
      });

      // Cleanup function to remove ScrollTrigger on unmount
      return () => {
        ScrollTrigger.getById("work")?.kill();
      };
    }
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[...Array(3)].map((_value, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>
                      {index === 0
                        ? "PROJECT 1"
                        : index === 1
                        ? "PROJECT 2"
                        : "PROJECT 3"}
                    </h4>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>
                  {index === 0
                    ? "HTML, CSS, Javascript"
                    : index === 1
                    ? "HTML, CSS, Javascript, Tailwind-css"
                    : "Javascript, Express, NodeJS, React, MongoDB, Redux"}
                </p>
                <a
                  href={
                    index === 0
                      ? "https://food-website-azure-five.vercel.app/"
                      : index === 1
                      ? "https://headphones-landing-page-gamma.vercel.app/"
                      : "https://doctor-appointments-client.vercel.app/login"
                  }
                  className="project-demo-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Demo
                </a>
              </div>
              <WorkImage
                image={
                  index === 0
                    ? "project-1.png"
                    : index === 1
                    ? "project-2.png"
                    : "project-3.png"
                }
                alt={`Project ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
