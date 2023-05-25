
import React, { useEffect } from 'react';
import GetRandomColor from '../../Shared/GetRandomColor/GetRandomColor';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Gallery = () => {
  const textColor = GetRandomColor();

  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <div className='mb-20'  data-aos='fade-up' data-aos-duration='5000' data-aos-delay='500' >
       <h1  style={{ color: textColor }}className='mb-20 font-bold mt-10   font-sans text-3xl  text-center  border-x-4 border-indigo-500 '>OUR MOST SELLING TOYS </h1>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5RnpOAOKn7kcU02gXOmDY1uLRJO3ErBa7XlhVBGUU-I7WGDykTLz8eV9j5KwVmxNR-kE&usqp=CAU"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpAM5Apfc2HqCYb_vBqpz05tF9GpaLz02Ec4lN6MCwNWn6VOYCWcyekl-dpzRsuH2cbDA&usqp=CAU"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqflBr7rr-XDDdswtIdfyXC2e_nE0LfQJGpjiGDf2lGH518Qc-s2pOYkX05eFsJvdEpIQ&usqp=CAU"
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI0-KYBc6uVe-u_gll613yjwkphZKanQH7PG3ZItvF_x0Br452JPqFuAdEHAJ4Lo6TQDw&usqp=CAU"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF6HFnrrO2EXG_ZAYr_FZdIVzlmkIjWFnI77-W02EnwVqzaDw46aLfTO5pcjPtF8N5nos&usqp=CAU"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://www.hasbro.com/common/productimages/en_CA/FAF9A3BB99684973AD82740A15FD720F/c0f39a55b9d34d8b8a7c11e83c2ed4df029ec328.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu1XsjmmTRshboy7G1QuWdD6ji4ha3dXLnPWMCfW8jtARksfWVNLuVWu1w7W49h7MAyVQ&usqp=CAU"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPCAvKFDKXCrLjdZSa9jR4y52Ka3FtXfBq4kdFzLKamAUkaofAPZtAXrzcjUO9YJOUx0c&usqp=CAU"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt3VpsN4BDeJWhCua6Cus8z39lJ5lm-SXRDrECCG573jbc10rI-CNAt7Ax4ZbycpIJKSw&usqp=CAU"
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOZ8DlU-cYpRaoq8S1OR9FBg6uLyya6YGHwMqF5IZ-r4JY1mR7O2rHtZfRI6IG4EdGz24&usqp=CAU"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu1XsjmmTRshboy7G1QuWdD6ji4ha3dXLnPWMCfW8jtARksfWVNLuVWu1w7W49h7MAyVQ&usqp=CAU"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNeeu5bZLruw-Nz_JEWdWWgMTApY9m8xfJULeaYoKG6KafAlxiUeup203oS-jJaM-QPHw&usqp=CAU"
            alt=""
          />
        </div>
      </div>
    </div>
    </div>
  );
};

   
export default Gallery;