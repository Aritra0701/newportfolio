import React from "react";
import html from "../../src/photoes/html.png";
import css from "../../src/photoes/css.jpg";
import javascript from "../../src/photoes/javascript.png";
import react from "../../src/photoes/react.png"
import redux from "../../src/photoes/redux.png"
import query from "../../src/photoes/query.png"
import mui from "../../src/photoes/mui.png"

function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: mui,
      name: "Material UI",
    },
    {
      id: 4,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 5,
      logo: react,
      name: "React js",
    },
    {
      id: 6,
      logo: redux,
      name: "Redux-Toolkit",
    },
    {
      id: 7,
      logo: query,
      name: "React-Query",
    }
  ];
  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <p className="  ">
          I've 6 months of experience in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;