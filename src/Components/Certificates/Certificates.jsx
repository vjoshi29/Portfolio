import CertCard from "./CertCard";
import Image1 from "../../assets/Cert/FullStack_Cert.png";
import Image2 from "../../assets/Cert/Python2.jpg";
import Image3 from "../../assets/Cert/Python1.jpg";
import Image4 from "../../assets/Cert/Chatgpt.jpg";
import Image5 from "../../assets/Cert/AI.jpg";
import Image6 from "../../assets/Cert/Bootstrap.jpg";
import Image7 from "../../assets/Cert/Javascript.jpg";
import Image8 from "../../assets/Cert/React.jpg";

const Certificates = () => {
  const certificates = [
    { image: Image1, title: "Full Stack Development" },
    { image: Image2, title: "Python - Advanced" },
    { image: Image3, title: "Python - Basics" },
    { image: Image4, title: "ChatGPT Integration" },
    { image: Image5, title: "AI Foundations" },
    { image: Image6, title: "Bootstrap Design" },
    { image: Image7, title: "JavaScript Essentials" },
    { image: Image8, title: "React Development" },
  ];

  return (
    <section
      id="Certificates"
      className="min-h-screen bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 py-10 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-purple-100 mb-12">
          Certificates
        </h2>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="break-inside-avoid transition duration-300 transform hover:scale-[1.03]"
            >
              <CertCard image={cert.image} title={cert.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
