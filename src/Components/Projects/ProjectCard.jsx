
const ProjectCard = ( {title, main , isrc , href} ) => {
  return (
    <div className="p-2 m-5 md:p-6 w-80 flex flex-col  bg-stone-950 shadow-xl shadow-slate-700 rounded-2xl hover:border-gray-100 hover:border-solid hover:border-2">
      <img className="m-2 border-2" src = {isrc} alt="image" />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md  py-2 text-blue-200 italic">{main}</p>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
        
        <button className="mx-auto p-2 text-white bg-blue-700 font-semibold rounded-lg hover:bg-blue-900">
         <a href={href}>Source Code </a>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
