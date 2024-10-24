
import AboutImg from "../../assets/About.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="h-full text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center  p-4 sm:p-12"
    >
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 sm:p-5 p-1 rounded-2xl">
        <h2 className="py-2 px-4 text-2xl md:text-4xl font-bold ">About</h2>
        <div className="md:flex flex-wrap flex-col lg:flex-row items-center">
          <img className=" h:5/6  m-auto" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward  className="mt-1" />

              <span className="w-full lg:w-96">
                <p className="text-sm md:text-lg ">
                I am a passionate and dedicated <strong>Full-Stack Web Developer </strong> with a strong foundation in both <strong>Front-End</strong> and <strong>Back-End</strong> technologies. Graduated with a degree in <strong>Computer Science</strong>, I am eager to apply my skills in real-world projects. I have hands-on experience with <strong>HTML, CSS, </strong> and <strong> JavaScript</strong> as well as frameworks like <strong>React and Node.js.</strong>
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward className="mt-1" />

              <span className="w-full lg:w-96">
                <p className="text-sm md:text-lg">
                Currently , I am looking for an <strong>Entry-Level</strong> position where I can contribute my technical skills and enthusiasm for <strong>Web Development</strong> while growing alongside a talented team.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;