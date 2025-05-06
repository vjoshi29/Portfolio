import AboutImg from "../../assets/About.png";

const About = () => {
  return (
    <section
      id="About"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-indigo-100 flex items-center justify-center px-4 py-10"
    >
      <div className="max-w-6xl w-full bg-gray-900 rounded-3xl shadow-2xl  shadow-[0_8px_24px_rgba(99,102,241,0.35)]  p-6 sm:p-10 md:p-16 space-y-10 ">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-indigo-200 ">
          About Me
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Image Section */}
          <div className="flex-1 flex justify-center ">
            <img
              src={AboutImg}
              alt="About"
              className="w-full  max-w-xs sm:max-w-sm bg-slate-200 lg:max-w-md rounded-3xl shadow-lg shadow-[0_8px_24px_rgba(99,102,241,0.35)]  hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 space-y-6 text-base sm:text-lg leading-relaxed">
            <div className="flex gap-3 items-start">
                
              <p>
              I am a <strong>Computer Science</strong> graduate with certification in  <strong>Full Stack Development</strong> expertising in <strong>MERN Stack.</strong> Currently advancing my expertise through specialized training in <strong>Amazon Web Services (AWS). </strong> Skilled in building <strong> responsive</strong> web apps using<strong> HTML, CSS, JavaScript</strong> and frameworks like <strong>React</strong> and <strong>Node.js</strong>.
              </p>
            </div>
            <div className="flex gap-3 items-start">
                
              <p>
              I aspire to build <strong> dynamic, scalable web solutions</strong>  by harnessing the power of modern <strong>Web Development</strong> and the limitless potential of <strong> AWS cloud technologies.</strong> 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

