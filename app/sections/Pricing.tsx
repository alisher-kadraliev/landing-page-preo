import { CheckIcon } from "lucide-react";
import Link from "next/link";
import PricingComponents from "../components/PricingComponents";

const item = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="py-10 bg-white">
      <div className="container">
        <h2 className="main-text-color text-6xl max-lg:text-4xl font-bold text-center">Pricing</h2>
        <p className="main-desc-color">Choose the plan that works best for you</p>
        <div className="flex flex-col md:flex-row gap-5 items-end max-lg:items-center justify-center">
          {item.map((item, index) => (
            <div key={index} className={`p-5 shadow-xl rounded-xl border border-gray-200 ${item.inverse ? 'bg-black text-white' : ''}`}>
              <h3 className="text-gray-500 text-lg mb-3">{item.title}</h3>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-5xl font-bold">${item.monthlyPrice}</span>
                  <span className="text-sm text-gray-500">/month</span>
                </div>
                {item.popular &&
                  <PricingComponents />
                }
              </div>
              <Link href="#" className={`btn btn-primary my-5 ${item.inverse ? 'bg-white text-black' : ''}`}>{item.buttonText}</Link>
              <ul>
                {item.features.map((feature, index) => (
                  <li className="flex items-center gap-2 py-3" key={index}>
                    <CheckIcon width={15} height={15} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
