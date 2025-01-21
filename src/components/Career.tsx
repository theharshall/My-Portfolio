import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer Intern </h4>
                <h5>N.S.Media Vasai-Palghar</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Developed and maintained websites using HTML, CSS, and JavaScript. <br />
              Collaborated with the design team to implement user-friendly web pages. <br />
              Optimised web applications for speed and scalability. <br />
              Assisted in debugging and troubleshooting code issues.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
