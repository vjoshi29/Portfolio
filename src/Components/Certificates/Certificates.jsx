import React from 'react'
import Image1 from "../../assets/Cert/FullStack_Cert.png"
import Image2 from "../../assets/Cert/Python2.jpg"
import Image3 from "../../assets/Cert/Python1.jpg"
import Image4 from "../../assets/Cert/Chatgpt.jpg"
import Image5 from "../../assets/Cert/AI.jpg"
import Image6 from "../../assets/Cert/Bootstrap.jpg"
import Image7 from "../../assets/Cert/Javascript.jpg"
import Image8 from "../../assets/Cert/React.jpg"
import Image9 from "../../assets/Cert/Python2.jpg"
import Image10 from "../../assets/Cert/Python2.jpg"

const Certificates = () => {
  return (
   <div id="Certificates" className="h-full text-white pb-5">
    <h2 className='py-2 px-4 text-2xl mb-4 md:text-4xl font-bold text-center'>Certificates</h2>
    <div className='flex flex-wrap gap-4 justify-center'>
   
      <img src={Image1} className="w-3/4 h-3/4 sm:w-1/4 sm:h-1/4 hover:border-gray-200 hover:border-solid hover:border-2" />
      <img src={Image2} className="w-3/4 h-3/4 sm:w-1/4 sm:h-1/4  hover:border-gray-200 hover:border-solid hover:border-2" />
      <img src={Image3} className="w-3/4 h-3/4 sm:w-1/4 sm:h-1/4  hover:border-zinc-200 hover:border-solid hover:border-2" />
      <img src={Image4} className="w-3/4 h-3/4 sm:w-1/4 sm:h-1/4  hover:border-zinc-200 hover:border-solid hover:border-2" />
      <img src={Image5} className="w-3/4 h-3/4 sm:w-1/4 sm:h-1/4  hover:border-zinc-200 hover:border-solid hover:border-2" />
      <img src={Image6} className="w-3/4 h-3/4 sm:w-1/4 sm:h-1/4  hover:border-zinc-200 hover:border-solid hover:border-2" />
      <img src={Image7} className="w-3/4 h-3/4 sm:w-1/4 sm:h-1/4  hover:border-zinc-200 hover:border-solid hover:border-2" />
      <img src={Image8} className="w-3/4 h-3/4 sm:w-1/4 sm:h-1/4  hover:border-zinc-200 hover:border-solid hover:border-2" />
      <img src={Image9} className="w-3/4 h-3/4 sm:w-1/4 sm:h-1/4  hover:border-zinc-200 hover:border-solid hover:border-2" />
      <img src={Image10} className="w-3/4 h-3/4 sm:w-1/4 sm:h-1/4 hover:border-zinc-200 hover:border-solid hover:border-2" />
    </div>
  </div>
  )
}

export default Certificates
