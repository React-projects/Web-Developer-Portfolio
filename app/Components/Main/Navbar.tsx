import { Socials } from "@/app/constants";
import { px } from "framer-motion";
import Image from "next/image";

function Navbar() {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]  bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px] ">
        <a href="#about" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/assets/Logo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] md-block text-gray-300 md:display-none">
       Portfolio
          </span>
        </a>
        <div className="w-[500px] h-full flex flex-row   item-center justify-between md:mr-20 py-[11px]">
          <div className="flex items-center w-full justify-between border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer ">
              About-Me
            </a>
            <a href="#Skills" className="cursor-pointer ">
              Skills
            </a>
            <a href="#Projects" className="cursor-pointer ">
              Projects
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            // eslint-disable-next-line react/jsx-key
            <a href={social.herf} target="_blank">
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
