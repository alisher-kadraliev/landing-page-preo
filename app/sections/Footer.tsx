import Link from "next/link";
import Logo from "../assets/logosaas.png";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black py-10">
      <div className="container">
        <div className="flex gap-8 flex-col items-center text-white justify-center">
          <div className="inline-flex relative before:content-[''] before:absolute before:top-2 before:bottom-0 before:blur before:w-full before:bg-red-500 before:bg-[linear-gradient(to_right,#f87bff,#fb92cf,#ffdd9b,#c2f0b1,#2fd8fe)] ">
            <Image src={Logo} alt="logo" width={40} height={40} className="relative" />
          </div>
          <div className="flex items-center gap-6 max-lg:flex-col">
            <Link href="#" className="hover:scale-110 transition-all">Home</Link>
            <Link href="#" className="hover:scale-110 transition-all">About</Link>
            <Link href="#" className="hover:scale-110 transition-all">Services</Link>
            <Link href="#" className="hover:scale-110 transition-all">Contact</Link>
          </div>
          <div className="flex items-center gap-5">
            <Link className="hover:scale-110 transition-all" target="_blank" href="#">
              <Linkedin color="white" />
            </Link>
            <Link className="hover:scale-110 transition-all" target="_blank" href="#">
              <FaYoutube color="white" size={25} />
            </Link>
            <Link className="hover:scale-110 transition-all" target="_blank" href="#">
              <FaInstagram color="white" size={25} />
            </Link>
            <Link className="hover:scale-110 transition-all" target="_blank" href="#">
              <FaXTwitter color="white" size={25} />
            </Link>
          </div>
          <div>
            <p>© 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
