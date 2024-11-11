
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex-row sm:flex  justify-around bg-[#465697] text-white p-5 md:p-12 items-center"
    >
      <div className="md:gap-4">
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="mb-2 text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-2 items-center">

          <MdOutlineEmail />
          vaishali291201@gmail.com
        </li>
        <li className="flex gap-2 items-center">
          <FaLinkedin />
          https://www.linkedin.com/in/vaishali-joshi123
        </li>
        <li className="flex gap-2 items-center">

          <FaGithub />
          https://github.com/vjoshi29
        </li>
      </ul>
    </div>
  );
};

export default Footer;
