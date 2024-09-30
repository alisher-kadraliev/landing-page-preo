import Image from "next/image";
import ProductImage from "../assets/product-image.png";
import ProductShowcaseComponents from "../components/ProductShowcaseComponents";
export default function ProductShowcase() {
  return (
    <section className="md:pb-16 pb-10 bg-gradient-to-b from-white to-gray-100 relative overflow-x-clip">
      <div className="container">
        <div className="flex flex-col justify-center items-center gap-2 w-1/2 mx-auto max-lg:w-full">
          <div className="tag">Boost your career with our job portal</div>
          <h2 className="text-6xl max-lg:text-4xl text-center font-bold tracking-tight main-text-color mt-4">More effective way to find your dream job</h2>
          <p className=" main-desc-color">Effective way to find your dream job and get your dream job and get your dream job</p>
        </div>
        <Image src={ProductImage} alt="Product 1" />
      </div>
      <div>
       <ProductShowcaseComponents/>
      </div>
    </section>
  );
};
