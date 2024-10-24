
import  { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" p-3 bg-gradient-to-r from-indigo-900 to-rose-900">
      <div className="flex items-center justify-between">
        <div className="text-white font-bold text-3xl">Portfolio</div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? 'Close' : 'MENU'}
          </button>
        </div>
      </div>
      <div className={`md:flex ${isOpen ? 'block' : 'hidden'} mt-2`}>
        <a href="#About" className="block text-slate-400 hover:bg-zinc-400 hover:text-black py-1 px-2 rounded">About</a>
        <a href="#Skills" className="block text-slate-400 hover:bg-zinc-400 hover:text-black py-1 px-2 rounded">Skills</a>
        <a href="#Projects" className="block text-slate-400 hover:bg-zinc-400 hover:text-black py-1 px-2 rounded">Projects</a>
        <a href="#Certificates" className="block text-slate-400 hover:bg-zinc-400 hover:text-black py-1 px-2 rounded">Certificates</a>
        <a href="#Footer" className="block text-slate-400 hover:bg-zinc-400 hover:text-black py-1 px-2 rounded">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
