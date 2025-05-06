import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="Footer"
      className="bg-gray-950 text-white px-6 py-12 flex justify-center items-center"
    >
      <div className="flex flex-col md:flex-row gap-10 md:gap-24 items-center text-center md:text-left">
        {/* Left Side: Heading */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-indigo-400">Contact</h1>
          <p className="text-sm md:text-xl mt-2 text-indigo-400">Feel free to reach out!</p>
        </div>

        {/* Right Side: Contact List */}
        <ul className="space-y-4 text-sm md:text-lg text-gray-400">
          <li className="flex items-center gap-2">
            <MdOutlineEmail className="text-xl" />
            <a
              href="mailto:vaishali291201@gmail.com"
              className="hover:underline break-all"
            >
              vaishali291201@gmail.com
            </a>
          </li>
          <li className="flex items-center gap-2">
            <FaLinkedin className="text-xl" />
            <a
              href="https://www.linkedin.com/in/vaishali-joshi123"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline break-all"
            >
              linkedin.com/in/vaishali-joshi123
            </a>
          </li>
          <li className="flex items-center gap-2">
            <FaGithub className="text-xl" />
            <a
              href="https://github.com/vjoshi29"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline break-all"
            >
              github.com/vjoshi29
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;


