const Card = (prop) => {
  return (
    <div>
      <div>
        <img src={prop.data.statimage} alt="" />
      </div>
      <div>{prop.data.stattitle}</div>
      <div>{prop.data.statdescription}</div>
    </div>
  );
};

export default Card;
