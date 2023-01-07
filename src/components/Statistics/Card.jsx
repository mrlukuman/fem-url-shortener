const Card = ({ data }) => {
  return (
    <div>
      <div>
        <img src={data.statimage} alt="" />
      </div>
      <div>{data.stattitle}</div>
      <div>{data.statdescription}</div>
    </div>
  );
};

export default Card;
