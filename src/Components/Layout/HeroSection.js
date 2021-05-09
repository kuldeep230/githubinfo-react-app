import React from "react";
const HeroSection = () => {
  return (
    <div className="flex justify-around  ">
      <section className=" hero flex flex-col justify-start mt-20  ">
        <div className="ml-10 pl-5 pt-5 rounded h-2/4 bg-inherit text-white">
          <h1 className="lg:text-5xl md:text-2xl sm:text-1xl text-3xl font-black mb-14">
            Hello There ! <br></br>
            <br></br>
            Welcome to GithubInfo.
          </h1>
          <p className="text-3xl">
            Knowing the github stats made more easy.
            <br></br> Get your Github stats in one App.
          </p>
          <br></br>
          <br></br>
          <p className="animate-pulse ">
            *Stay Home Stay Safe. Wear <i>Mask</i>{" "}
            {/* <img
              src="https://img.icons8.com/carbon-copy/100/000000/protection-mask.png"
              alt=""
              className="w-10"
            /> */}
          </p>
        </div>
      </section>
      <section className="shadow-lg rounded max-w-full h-auto align-middle border-none mt-10">
        <div>
          <img
            src="https://cdn.dribbble.com/users/577645/screenshots/15309171/media/3efa6a481a2f75f81c9724007c46ffa1.jpg?compress=1&resize=400x400"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};
export default HeroSection;
