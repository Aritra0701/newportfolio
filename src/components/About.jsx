import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm Aritra, a passionate React Developer with a keen eye for MERN
          Stack . With a background in IT, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education
        </h1>
        <span>
          <div>2022-Final Year Student</div>
          Bachelor of Technology in Information Technology(IT),
          Maulana Abul Kalam Azad University of Technology,
          SGPA-7.5
        </span>
        <br/>
        <span>
          <div>2019-2022</div>
          Diploma in Electronics & Tele-Communication(DETC)
          Birla Institute of Technology,
          GPA-8.6
        </span>
        <span>
          <div>2015</div>
          Higher Secondary Examination,
          West Bengal Council of Higher Secondary Education,
          Percentage-64.4%
        </span>
        <span>
          <div>2013</div>
          Secondary Examination,
          West Bengal Board of Secondary Education,
          Percentage-81%
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <div>
          <span style={{backgroundColor:"orange",margin:"15px"}}>HTML</span>
          <span style={{backgroundColor:"blue",margin:"15px",color:"white"}}>CSS</span>
          <span style={{backgroundColor:"violet",margin:"15px"}}>BOOTSTRAP</span>
          <span style={{backgroundColor:"skyblue",margin:"15px"}}>Material UI</span>
          <span style={{backgroundColor:"yellow",margin:"15px"}}>JAVASCRIPT</span>
          <span style={{backgroundColor:"aqua",margin:"15px"}}>REACT JS</span>
          <span style={{backgroundColor:"teal",margin:"15px",color:"white"}}>FORM VALIDATION,REACT HOOK FORM</span>
          <span style={{backgroundColor:"lavender",margin:"15px"}}>REDUX-TOOLKIT</span>
          <span style={{backgroundColor:"crimson",margin:"15px",color:"white"}}>REACT-QUERY</span>
        </div>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Tranning and Experience
        </h1>
        <span>
          Recently,I Completed Training Program on Full React.js from "WEBSKITTERS ACADEMY"
        </span><br/>
        <h4 className="text-crimson-600 font-semibold text-xl">
          Certificate link-
        </h4>
        <span className=" underline font-semibold">
        https://certificate.webskittersacademy.in/crtdls/aritra-halderreact-js-full-react-js-course-training/465-0/
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <span>
          Successfully,Completed Course on "HTML, CSS, and Javascript for Web Developers" from "JOHNS HOPKINS UNIVERSITY"
        </span><br/>
        <h4 className="text-crimson-600 font-semibold text-xl">
          Certificate link-
        </h4>
        <span className=" underline font-semibold">
        https://www.coursera.org/account/accomplishments/verify/P6U6QJNAVKUC
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to leverage my skills and creativity to deliver
          innovative on Frontend development solutions that exceed client expectations and
          contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons.
        </p>
      </div>
    </div>
  );
}

export default About;