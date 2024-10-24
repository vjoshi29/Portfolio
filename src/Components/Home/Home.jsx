import resume from "../../assets/VaishaliJoshi_Resume.pdf"
import avatarImg from "../../assets/Home.png";
import TextChange from "../TextChange";


const Home = () => {
  return(
  <div
        id="Home"
        className="mx-auto h-screen w-full flex flex-col md:flex-row 
                   justify-center items-center align-center  mb-20 md:mb-5">
        <div className="flex-1 flex flex-col justify-center items-center gap-2 mt-5 pt-5 md:mt-0 md:pt-0">
          
            <h2 className="text-center text-white text-3xl font-bold md:text-5xl mt-20 pt-20 md:mt-0 md:pt-0">
           Hi, I am Vaishali
            </h2>
            <h2 className="text-center text-white text-2xl font-bold py-3 md:text-4xl">
            and I love making 
            </h2>
          <h2 className="text-center text-white text-3xl font-bold mt-1 md:text-5xl">
           <TextChange/>
            </h2>
            <a href={resume} download>
            <button className=" mt-4 p-1 px-2 text-gray-100 rounded-lg bg-purple-700 hover:bg-purple-600">Download Resume</button>
            </a>
        </div>
        <div className="flex-1">
          <img src={avatarImg}  alt="Hello.svg" className="h-5/6 "/>
        </div>
       
    </div>
    );
  }


export default Home;