import React from "react";
import reactjs from "../../src/photoes/reactjs.png";
function PortFolio() {
  const cardItem = [
    {
        id: 1,
        logo: reactjs,
        name: "Student Server Website using React and Redux-Toolkit",
        text:"For this project,I utilized React-Query and Redux-Toolkit to develop a student server website.The website interacts with Webskitters Academy's own API.For designing the webpage,i used Material UI",
        certificate:"render-Link: https://crud-application-using-react-query.onrender.com"
      },
    {
      id: 2,
      logo: reactjs,
      name: "Education Website Using React and Redux-Toolkit.",
      text:"For this project,I developed an education webskite using React-query and Redux-toolkit.I utilized the Webskitters Academy's API for data handling.For designing the web pages,I used Material UI",
      certificate:"vercel-Link: https://education-khaki.vercel.app/"
    }
  ];
  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Projects</h1>
        <span className=" underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-3 justify-items-center mt-5">
          {cardItem.map(({ id, logo, name,text,certificate}) => (
            <div
              className="md:w-[350px] md:h-[460px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">{text}</p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">
                {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                Source code
                </button> */}
                <p className=" underline font-semibold">{certificate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;