import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="hero h-[500px] md:h-[550px] bg-base-200 rounded-2xl">
        <div className="flex flex-col lg:flex-row-reverse justify-around items-center w-full gap-y-4">
          <img
            src="https://i.postimg.cc/Bn6hHJQS/the-alchemist.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="">
            <h1 className="text-3xl lg:text-6xl font-bold">
              Books to freshen up <br /> your bookshelf
            </h1>
            <div className="lg:mt-12 mt-7" >
              <Link to={`/listedbooks`}>
                <button className="btn signInBtn" >View The List</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
