import heroimage from "../../images/illustration-working.svg";

const Hero = () => {
  return (
    <div className="container mx-auto flex">
      <div className="hero-description flex-1">
        <h1>More than just shorter links</h1>
        <h5>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </h5>
        <button className="">Get Started</button>
      </div>
      <div className="hero-illustration flex-1">
        <img src={heroimage} alt="heroimage" />
      </div>
    </div>
  );
};

export default Hero;
