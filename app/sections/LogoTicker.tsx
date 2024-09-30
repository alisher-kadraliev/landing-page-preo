import acmeLogo from "../assets/logo-acme.png";
import quantumLogo from "../assets/logo-quantum.png";
import echoLogo from "../assets/logo-echo.png";
import LogoTickerComponents from "../components/LogoTickerComponents";
import { StaticImageData } from 'next/image'; // Add this import

interface ItemInterface {
    logo: StaticImageData; // Ensure this matches the expected type
    name: string;
}

// Ensure the item array is typed correctly
const items: ItemInterface[] = [
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
  }
];

export default function LogoTicker() {
  return (
    <section className="bg-white md:py-16 py-10">
      <div className="container">
        <div className="flex items-center gap-14 justify-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          {items.map((item: ItemInterface, index) => (
            <LogoTickerComponents 
              key={index} 
              item={{ ...item, logo: item.logo.src }} // Convert StaticImageData to string
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};
