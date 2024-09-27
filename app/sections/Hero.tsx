import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Cog from "../assets/cog.png"
import Cylinder from "../assets/cylinder.png"
import Image from "next/image";
import Noodle from "../assets/noodle.png"

export default function Hero() {
  return (
    <section className="pt-8 pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#eaeefe_66%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-1/2">
            <div className="tag">Version 2.0 is here</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter main-text-color mt-6">Path way to your dream job</h1>
            <p className="text-2xl text-black mt-6">Select your dream job and start your career and get your dream job</p>
            <div className="flex gap-2 mt-6 items-center">
              <Link href="#" className="btn btn-primary">Get Started</Link>
              <Link href="#" className="btn btn-text flex items-center gap-2 underline">
                <span>Learn More</span>
                <ArrowRight width={15} height={15} />
              </Link>
            </div>
          </div>
          <div className="mt-20 md:mt-0 h-[500px] max-lg:h-auto md:flex-1 relative">
            <Image src={Cog} alt="cog" width={500} height={500} className="md:absolute lg:max-w-none  md:h-full md:w-auto right-0" />
            <Image src={Cylinder} alt="cylinder" width={220} height={220} className="lg:block hidden -top-8 right-96 md:absolute" />
            <Image src={Noodle} alt="noodle" width={220} height={220} className="md:block hidden -bottom-40 -right-32 md:absolute rotate-[30deg]" />
          </div>
        </div>
      </div>
    </section>
  );
};
