import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaAws,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiBootstrap,
  SiMicrosoftword,
  SiMicrosoftexcel,
  SiMicrosoftpowerpoint,
} from "react-icons/si";

const Skills = () => {
  return (
    <section
      id="Skills"
      className="py-10 px-4 bg-slate-300 text-white min-h-screen"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl mb-12 md:text-5xl font-extrabold text-center text-gray-800">
          Skills
        </h2>

        <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {/* Frontend */}
          <SkillCard title="Frontend" skills={[
            [FaHtml5, "HTML5", "text-orange-500"],
            [FaCss3Alt, "CSS3", "text-blue-500"],
            [SiJavascript, "JavaScript", "text-yellow-400"],
            [FaReact, "React", "text-cyan-400"],
            [SiTailwindcss, "Tailwind CSS", "text-sky-400"],
            [SiBootstrap, "Bootstrap", "text-purple-400"],
          ]} />

          {/* Backend */}
          <SkillCard title="Backend and Databases" skills={[
            [FaNodeJs, "Node.js", "text-green-500"],
            [SiExpress, "Express.js", "text-gray-300"],
            [SiMongodb, "MongoDB", "text-green-400"],
            [SiMysql, "MySQL", "text-blue-400"],
          ]} />

         

          {/* Cloud */}
          <SkillCard title="AWS Cloud" skills={[
            [FaAws, "EC2, Route53", "text-yellow-400"],
            [FaAws, "S3, EBS, EFS", "text-yellow-400"],
            [FaAws, "RDS, DynamoDB", "text-yellow-400"],
            [FaAws, "EKS, SNS, VPC", "text-yellow-400"],
            [FaAws, "Auto-Scaling, Load-Balancing", "text-yellow-400"],
            [FaAws, "Cloud Front , Cloud Formation", "text-yellow-400"],
           
          ]} />

          {/* Tools & Productivity */}
          <SkillCard title="Tools & Productivity" skills={[
            [FaGitAlt, "Git", "text-red-500"],
            [FaGithub, "GitHub", "text-gray-300"],
            [SiMicrosoftword, "Word", "text-blue-300"],
            [SiMicrosoftexcel, "Excel", "text-green-300"],
            [SiMicrosoftpowerpoint, "PowerPoint", "text-orange-300"],
          ]} />
        </div>
      </div>
    </section>
  );
};

// SkillCard Reusable Component
const SkillCard = ({ title, skills }) => (
  <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700  rounded-2xl p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(99,102,241,0.55)]">
    <h3 className="text-2xl font-semibold mb-4 text-indigo-200">{title}</h3>
    <div className="space-y-3 text-lg">
      {skills.map(([Icon, name, color], idx) => (
        <div key={idx} className="flex items-center gap-3">
          <Icon className={`text-xl ${color}`} />
          {name}
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
