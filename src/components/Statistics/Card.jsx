const Card = ({ data }) => {
  return (
    <div className="w-96 p-8 flex flex-col">
      <div className="flex justify-center">
        <img src={data.statimage} alt="" />
      </div>
      <div className="text-2xl font-bold">{data.stattitle}</div>
      <div>{data.statdescription}</div>
    </div>
  );
};

export default Card;
