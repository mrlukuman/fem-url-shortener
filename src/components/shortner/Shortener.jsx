const Shortener = () => {
  return (
    <div className="container mx-auto">
      <div className="bg-[url('images/bg-shorten-desktop.svg')] bg-no-repeat">
        <input type="text" placeholder="Shorten a link here..." />
        <button className="p-40"> Shorten It!</button>
      </div>
    </div>
  );
};

export default Shortener;
