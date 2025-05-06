import resume from "../../assets/resume.pdf";
import avatarImg from "../../assets/Home.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div
      id="Home"
      className="mx-auto h-screen w-full flex flex-col md:flex-row justify-center items-center  md:mb-0 px-2"
    >
      <div className="flex-1 flex flex-col justify-center items-center gap-2  md:mt-0 md:pt-0">
        <h2 className="text-center text-white text-3xl font-bold md:text-5xl mt-16 pt-20 md:mt-0 md:pt-0">
          Hi, I am Vaishali
        </h2>
        <h2 className="text-center text-white text-2xl font-bold py-3 md:text-4xl">
          and I love making
        </h2>
        <h2 className="text-center text-white text-3xl font-bold mt-1 md:text-5xl">
          <TextChange />
        </h2>
        <a href={resume} download>
          <button className="mt-4 p-2 px-4 text-gray-100 text-sm rounded-lg bg-purple-700 hover:bg-purple-600 transition duration-300">
            Download Resume
          </button>
        </a>
      </div>
      <div className="flex-1">
        <img
          src={avatarImg}
          alt="Hello.svg"
          className="h-5/6 object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Home;


