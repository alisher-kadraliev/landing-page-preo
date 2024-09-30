import { ArrowRight } from "lucide-react";
import Link from "next/link";
import starImage from "../assets/star.png";
import springImage from "../assets/spring.png";
import Image from "next/image";

export default function CallToAction() {
  return (
    <section className="bg-gradient-to-b from-white to-[#d2dcff] pb-24">
      <div className="container relative">
        <Image src={starImage} alt="star" width={100} height={100} className="w-60 h-60 max-lg:hidden absolute top-0 left-0" />
        <Image src={springImage} alt="spring" width={100} height={100} className="w-60 h-60 max-lg:hidden absolute bottom-0 right-0" />
        <div className="flex items-center justify-center mb-3">
          <div className="tag">Call to Action</div>
        </div>
        <h2 className="main-text-color text-6xl max-lg:text-4xl font-bold text-center">Ready to get started?</h2>
        <p className="main-desc-color text-center mt-6">Sign up for an account and start using our platform</p>
        <div className="flex items-center justify-center mt-10">
          <Link href="#" className="btn btn-primary">Get for free</Link>
          <Link href="#" className="btn btn-text flex items-center gap-2 underline">
            <span>Learn More</span>
            <ArrowRight width={15} height={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};

