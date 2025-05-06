const ProjectCard = ({ isrc, title, main, href }) => {
  return (
    <div className="bg-slate-950 rounded-2xl overflow-hidden shadow-lg hover:shadow-indigo-500/40 transition duration-300 transform hover:-translate-y-1">
      <img src={isrc} alt={title} className="w-full h-48 object-contain" />
      <div className="p-5 space-y-3">
        <h3 className="text-xl font-bold text-indigo-200">{title}</h3>
        <p className="text-sm text-gray-300 ">{main}</p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-indigo-400 hover:text-indigo-300 font-semibold transition"
        >
          View on GitHub →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
