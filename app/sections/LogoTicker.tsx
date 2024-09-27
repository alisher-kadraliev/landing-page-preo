import acmeLogo from "../assets/logo-acme.png"
import quantumLogo from "../assets/logo-quantum.png"
import echoLogo from "../assets/logo-echo.png"
import Image from "next/image";

const item = [
  {
    logo: acmeLogo,
    name: "Acme",
  },
  {
    logo: quantumLogo,
    name: "Quantum",
  },
  {
    logo: echoLogo,
    name: "Echo",
  },
  {
    logo: acmeLogo,
    name: "Acme",
  }
];

export default function LogoTicker() {
  return (
    <section className="bg-white md:py-16 py-10">
      <div className="container">
        <div className="flex items-center justify-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex items-center justify-center gap-14">
            {item.map((item, index) => (
              <Image key={index} src={item.logo} className="w-auto h-8" alt={item.name} width={100} height={100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
