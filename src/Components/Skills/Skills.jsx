import { FaHtml5 , FaCss3Alt , FaReact ,FaBootstrap , FaNode , FaFileExcel ,FaFileWord ,FaFilePowerpoint} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript , SiMongodb , SiMysql} from "react-icons/si";
const Skills = () => {
  return (
    <div id="Skills" className=" p-10 md:p-18 h-max">
      <h1 className="text-2xl md:text-4xl text-white font-bold md:px-12">Skills</h1>
      <section className="mt-12 sm:flex  justify-around flex-wrap">
          <div className="flex sm:w-1/4 bg-gradient-to-r  from-blue-950 to-emerald-950  mt-4 p-5  items-center w-full border-gray-300 border-r-4 border-b-4 rounded-md">
            <span className="text-white">
              <h1 className="text-lg bg-zinc-200 px-2 text-black font-bold ">Frontend</h1>
              
              <ul className="text-sm p-2 md:text-lg list-disc " >
                <li>HTML5 </li>
                <li>CSS</li>
                <li>Tailwind CSS</li>
                <li>Javascript</li>
                <li>React.Js</li>
                <li>Bootstrap</li>
              </ul>
            </span>
          </div>
          <div className="flex sm:w-1/4   mt-4 bg-gradient-to-r  from-pink-950 to-slate-900 p-5 items-center border-gray-300 border-r-4 border-b-4 rounded-md">

            <span className="text-white">
              <h1 className="text-lg bg-zinc-200 px-2 text-black font-bold ">Backend</h1>
            
              <ul className="text-sm p-2  md:text-lg list-disc">
                <li>Node.Js </li>
                <li>Express.Js</li>
                <li>MongoDB</li>
                <li>MySQL</li>
              </ul>
            </span>
          </div>
          <div className="flex  sm:w-1/4    mt-4 bg-gradient-to-r  from-blue-950 to-emerald-950 p-5 items-center border-gray-300 border-r-4 border-b-4 rounded-md">
            <span className="text-white">
              <h1 className="text-lg bg-zinc-200 px-2 text-black font-bold ">Microsoft Excel</h1>
             
              <ul className="text-sm p-2  md:text-lg list-disc">
                <li>MS Excel</li>
                <li>MS Word</li>
                <li>MS Powerpoint</li>
              </ul>
            </span>
          </div>
          </section>
          <div className="p-5  flex flex-wrap justify-center gap-5 bg-gradient-to-r  from-slate-900 to-slate-500  mt-10 m-auto inline text-white text-2xl md:3xl">
          <FaHtml5 />   
          <FaCss3Alt />
          <RiTailwindCssFill />
          <SiJavascript />
          <FaReact />
          <FaBootstrap />
          <FaNode />
          <SiMongodb />
          <SiMysql />
          <FaFileExcel />
          <FaFileWord />
          <FaFilePowerpoint />

          </div>
        </div>
    
  );
};

export default Skills;
