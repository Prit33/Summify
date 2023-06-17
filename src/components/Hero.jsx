import React from "react";
import qrcode from "../assets/github-qr.png";


const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <span className="font-link text-slate-500 hover:text-slate-900" >#Summify</span>

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/Prit33/Summify", "_blank")
          }
        >
          <img src={qrcode} className="h-[8rem] w-30"></img>
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Make reading easier with Summify, an open-source article summary that transforms lengthy articles into clear & concise summaries
      </h2>
    </header>
  );
};

export default Hero;
