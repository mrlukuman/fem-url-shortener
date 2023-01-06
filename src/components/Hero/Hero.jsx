import heroimage from "../../images/illustration-working.svg";

const Hero = () => {
  return (
    <div className="container mx-auto flex flex-col justify-center lg:flex-row-reverse">
      <div className="hero-illustration flex flex-1 justify-center">
        <img src={heroimage} alt="heroimage" />
      </div>
      <div className="hero-description flex flex-col justify-center align-middle flex-1 lg:text-left">
        <h1 className="text-7xl font-bold">More than just shorter links</h1>
        <h5 className="text-xl my-4 font-bold text-gray">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </h5>
        <button className="bg-cyan text-xl text-white font-bold rounded-full p-4 lg:w-48">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
