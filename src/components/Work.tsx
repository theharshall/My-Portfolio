import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
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
                    {/* <p>FRONTEND</p> */}
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
                {/* Add Project Demo Link Section */}
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
                    ? "first-project.png"
                    : index === 1
                    ? "Third-project.png"
                    : "second-project.png"
                }
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
