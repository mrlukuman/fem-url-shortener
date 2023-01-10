import Card from "./Card";
import brand from "../../images/icon-brand-recognition.svg";
import custom from "../../images/icon-fully-customizable.svg";
import detailed from "../../images/icon-detailed-records.svg";

const Stats = () => {
  const data = {
    stat1: {
      statimage: brand,
      stattitle: "Brand Recognition",
      statdescription:
        "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instill confidence in your content.",
    },
    stat2: {
      statimage: detailed,
      stattitle: "Detailed Records",
      statdescription:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },
    stat3: {
      statimage: custom,
      stattitle: "Fully Customizable",
      statdescription:
        "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    },
  };
  return (
    <div className="container mx-auto flex flex-col items-center space-y-3 lg:flex-row lg:justify-between lg:space-x-5">
      <Card data={data.stat1}></Card>
      <Card data={data.stat2}></Card>
      <Card data={data.stat3}></Card>
    </div>
  );
};

export default Stats;
