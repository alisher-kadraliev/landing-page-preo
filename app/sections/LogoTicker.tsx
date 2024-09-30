import acmeLogo from "../assets/logo-acme.png"
import quantumLogo from "../assets/logo-quantum.png"
import echoLogo from "../assets/logo-echo.png"
import Image from "next/image";
import LogoTickerComponents from "../components/LogoTickerComponents";

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
    logo: quantumLogo,
    name: "Quantum",
  },
  
];

export default function LogoTicker() {
  return (
    <section className="bg-white md:py-16 py-10">
      <div className="container">
        <div className="flex items-center gap-14 justify-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          {item.map((item, index) => (
            <LogoTickerComponents key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
