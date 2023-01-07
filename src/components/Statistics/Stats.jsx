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
        "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
    },
  };
  return (
    <div>
      <Card data={data.stat1}></Card>
    </div>
  );
};

export default Stats;
