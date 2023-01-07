const Shortener = () => {
  return (
    <div className="container mx-auto my-6 p-4 bg-gray rounded-lg">
      <div className="flex flex-col space-y-6">
        <input
          type="text"
          placeholder="Shorten a link here..."
          className=" bg-black text-white p-3 rounded"
        />
        <button className="bg-cyan p-3 rounded"> Shorten It!</button>
      </div>
    </div>
  );
};

export default Shortener;
