import { ArrowRight } from "lucide-react";
import Link from "next/link";
import HeroImageComponent from "../components/HeroComponent";

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
          <HeroImageComponent />
        </div>
      </div>
    </section>
  );
};
