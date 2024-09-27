import Image from "next/image";
import { ArrowRight, Menu } from 'lucide-react';
import Logo from "../assets/logosaas.png"
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex items-center justify-center py-3 bg-black text-white text-sm">
        <div className="inline-flex gap-2 justify-center items-center">
          <p className="text-white/60 hidden md:block">Streamline your worklow and boost your activity</p>
          <p>Get started for free</p>
          <ArrowRight width={15} height={15} />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="logo" width={40} height={40} />
            <Menu width={40} className="pointer md:hidden" height={40} />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <Link href="#">About</Link>
              <Link href="#">Features</Link>
              <Link href="#">Customers</Link>
              <Link href="#">Contact</Link>
              <Link href="#" className="btn btn-primary">Get Started</Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

