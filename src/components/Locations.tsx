import React from "react";
import truckLogo from "@/assets/trucksideBLACK.png";

interface Location {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  hours: string;
}

const locations: Location[] = [
  {
    name: "Empire Oil Manhattan",
    address: "235 Fifth Avenue",
    city: "New York",
    state: "NY",
    zip: "10016",
    phone: "(212) 555-1234",
    hours: "Mon-Fri: 7AM-8PM, Sat-Sun: 8AM-6PM",
  },
  {
    name: "Empire Oil Brooklyn",
    address: "157 Atlantic Avenue",
    city: "Brooklyn",
    state: "NY",
    zip: "11201",
    phone: "(718) 555-4321",
    hours: "Mon-Fri: 7AM-8PM, Sat-Sun: 8AM-6PM",
  },
  {
    name: "Empire Oil Queens",
    address: "88 Queens Boulevard",
    city: "Queens",
    state: "NY",
    zip: "11375",
    phone: "(718) 555-7890",
    hours: "Mon-Fri: 7AM-9PM, Sat-Sun: 8AM-7PM",
  },
  {
    name: "Empire Oil Bronx",
    address: "2500 Grand Concourse",
    city: "Bronx",
    state: "NY",
    zip: "10468",
    phone: "(718) 555-6543",
    hours: "Mon-Fri: 7AM-8PM, Sat-Sun: 8AM-6PM",
  },
];

const Locations: React.FC = () => {
  return (
    <section
      id="locations"
      className="py-20 min-h-screen bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center tracking-tight mb-4">
          OUR LOCATIONS
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-8">
          Find Empire Oil products at one of our premium locations throughout
          the New York metro area.
        </p>

        {/* Truck Delivery Banner */}
        <div className="max-w-5xl mx-auto mb-16 p-6 bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 hover:border-white/20 transition-all">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-2/5">
              <img
                src={truckLogo}
                alt="Empire Oil Delivery Truck"
                className="w-full h-auto object-contain rounded"
              />
            </div>
            <div className="md:w-3/5">
              <h3 className="text-xl md:text-2xl font-bold tracking-wide mb-3">
                DELIVERY AVAILABLE
              </h3>
              <p className="text-gray-300 mb-4">
                Empire Oil offers convenient delivery service to businesses and
                residential customers throughout the New York metro area. Our
                modern fleet includes electric trucks to reduce emissions,
                ensuring your products arrive safely and on time while
                minimizing our environmental impact.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-white/10 px-3 py-1 rounded text-sm">
                  Same-Day Available
                </span>
                <span className="bg-white/10 px-3 py-1 rounded text-sm">
                  Wholesale & Retail
                </span>
                <span className="bg-white/10 px-3 py-1 rounded text-sm">
                  Emergency Service
                </span>
                <span className="bg-green-800/40 px-3 py-1 rounded text-sm flex items-center">
                  <svg
                    className="w-3 h-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Eco-Friendly Fleet
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 overflow-hidden group hover:border-white/20 transition-all duration-300"
            >
              <div className="p-6 border-b border-white/10">
                <h3 className="text-lg font-bold tracking-wide mb-2">
                  {location.name}
                </h3>
                <address className="not-italic text-gray-300">
                  {location.address}
                  <br />
                  {location.city}, {location.state} {location.zip}
                  <br />
                  <span className="text-gray-400">{location.phone}</span>
                </address>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h4 className="text-xs text-gray-500 mb-1">HOURS</h4>
                  <p className="text-sm">{location.hours}</p>
                </div>

                <div className="flex justify-between items-center pt-2 border-t border-white/5 mt-2">
                  <button className="text-white text-sm inline-flex items-center gap-2 group-hover:text-gray-300 cursor-pointer">
                    GET DIRECTIONS
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
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
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

export default Locations;
