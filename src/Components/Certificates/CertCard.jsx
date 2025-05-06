const CertCard = ({ image, title }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md">
      <img src={image} alt={title} className="w-full object-cover" />
      <div className="p-4  bg-slate-300 ">
        <h3 className="text-lg font-semibold text-gray-950 text-center">{title}</h3>
      </div>
    </div>
  );
};

export default CertCard;

  