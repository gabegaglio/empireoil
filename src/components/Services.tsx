import React, { useState } from "react";

interface ProductType {
  name: string;
  description: string;
  specs: {
    label: string;
    value: string;
  }[];
  type: "oil" | "gas";
}

const products: ProductType[] = [
  // Oil Products
  {
    name: "SYNTHETIC BLEND",
    description:
      "Our premium synthetic blend combines high-quality base oils with advanced additives for superior performance.",
    specs: [
      { label: "VISCOSITY", value: "5W-30" },
      { label: "IDEAL FOR", value: "Daily driving in moderate conditions" },
    ],
    type: "oil",
  },
  {
    name: "FULL SYNTHETIC",
    description:
      "Engineered for maximum performance, our full synthetic oil provides unmatched protection against wear and heat.",
    specs: [
      { label: "VISCOSITY", value: "0W-20" },
      {
        label: "IDEAL FOR",
        value: "High-performance engines and extreme conditions",
      },
    ],
    type: "oil",
  },
  {
    name: "HIGH MILEAGE",
    description:
      "Specially formulated for vehicles with over 75,000 miles, helping to reduce oil consumption and prevent leaks.",
    specs: [
      { label: "VISCOSITY", value: "10W-40" },
      { label: "IDEAL FOR", value: "Older engines with higher mileage" },
    ],
    type: "oil",
  },
  {
    name: "RACING FORMULA",
    description:
      "Our track-tested racing formula maximizes horsepower while providing superior protection at high RPMs.",
    specs: [
      { label: "VISCOSITY", value: "5W-50" },
      { label: "IDEAL FOR", value: "Racing and track use" },
    ],
    type: "oil",
  },

  // Gas Products
  {
    name: "REGULAR (87)",
    description:
      "Our standard unleaded gasoline is perfect for everyday vehicles designed to run on regular fuel.",
    specs: [
      { label: "OCTANE", value: "87" },
      { label: "IDEAL FOR", value: "Most cars and light trucks" },
    ],
    type: "gas",
  },
  {
    name: "PLUS (89)",
    description:
      "Mid-grade fuel offering better performance than regular with enhanced detergents for cleaner engines.",
    specs: [
      { label: "OCTANE", value: "89" },
      { label: "IDEAL FOR", value: "Vehicles recommending mid-grade fuel" },
    ],
    type: "gas",
  },
  {
    name: "PREMIUM (91)",
    description:
      "Higher octane fuel to prevent knocking in high-compression engines and optimize performance.",
    specs: [
      { label: "OCTANE", value: "91" },
      { label: "IDEAL FOR", value: "Luxury and performance vehicles" },
    ],
    type: "gas",
  },
  {
    name: "ULTRA (93)",
    description:
      "Top-tier gasoline with maximum detergents and octane for superior engine protection and performance.",
    specs: [
      { label: "OCTANE", value: "93" },
      { label: "IDEAL FOR", value: "High-performance sports cars" },
    ],
    type: "gas",
  },
  {
    name: "RACING (100)",
    description:
      "Competition-grade fuel formulated for maximum power output in high-performance race engines.",
    specs: [
      { label: "OCTANE", value: "100+" },
      { label: "IDEAL FOR", value: "Racing and track-only vehicles" },
    ],
    type: "gas",
  },
];

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"oil" | "gas">("oil");

  const filteredProducts = products.filter(
    (product) => product.type === activeTab
  );
  
  // Check if we need to center the last item (for odd number of items)
  const isOdd = filteredProducts.length % 2 !== 0;

  return (
    <section id="services" className="py-20 min-h-screen bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center tracking-tight mb-4">
          OUR PRODUCTS
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-8">
          Empire Oil offers premium automotive lubricants and fuels engineered
          for maximum performance and protection.
        </p>

        {/* Product Type Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md overflow-hidden border border-white/20">
            <button
              className={`px-6 py-2 text-sm tracking-wider font-medium ${
                activeTab === "oil"
                  ? "bg-white text-black"
                  : "bg-black/50 text-white"
              } transition-colors cursor-pointer`}
              onClick={() => setActiveTab("oil")}
            >
              OIL
            </button>
            <button
              className={`px-6 py-2 text-sm tracking-wider font-medium ${
                activeTab === "gas"
                  ? "bg-white text-black"
                  : "bg-black/50 text-white"
              } transition-colors cursor-pointer`}
              onClick={() => setActiveTab("gas")}
            >
              GAS
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className={`bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all group ${
                isOdd && index === filteredProducts.length - 1 
                  ? "md:col-span-2 md:max-w-md md:mx-auto" 
                  : ""
              }`}
            >
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-bold tracking-wider mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-400 mb-4 flex-grow">
                  {product.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {product.specs.map((spec, i) => (
                    <div key={i} className="bg-white/5 rounded p-3">
                      <span className="text-xs text-gray-500 block">
                        {spec.label}
                      </span>
                      <span className="text-white text-lg font-mono">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-auto">
                  <button className="text-white text-sm tracking-wider inline-flex items-center gap-2 group-hover:text-gray-300 cursor-pointer">
                    VIEW DETAILS
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
