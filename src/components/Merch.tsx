import React, { useState } from "react";
import shirtFront from "@/assets/shirt_front.svg";
import shirtBack from "@/assets/shirt_back.svg";
import hatBlack from "@/assets/hat_black.svg";
import hatWhite from "@/assets/hat_white.svg";

interface MerchItem {
  id: string;
  name: string;
  price: number;
  images: {
    front?: string;
    back?: string;
    black?: string;
    white?: string;
    main: string;
  };
  colors: string[];
  sizes?: string[];
  type: "shirt" | "hat";
}

const merchItems: MerchItem[] = [
  {
    id: "shirt-1",
    name: "EMPIRE LOGO TEE",
    price: 24.99,
    images: {
      front: shirtFront,
      back: shirtBack,
      main: shirtFront,
    },
    colors: ["black", "white", "gray"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    type: "shirt",
  },
  {
    id: "hat-1",
    name: "EMPIRE CAP",
    price: 21.99,
    images: {
      black: hatBlack,
      white: hatWhite,
      main: hatBlack,
    },
    colors: ["black", "white"],
    type: "hat",
  },
];

const Merch: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<MerchItem | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("black");
  const [selectedSize, setSelectedSize] = useState<string>("M");

  const openModal = (item: MerchItem) => {
    setSelectedItem(item);
    setSelectedImage(item.images.main);
    setSelectedColor("black");
    setSelectedSize(item.sizes ? item.sizes[1] : "");
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const handleHatColorChange = (color: string) => {
    if (!selectedItem) return;
    setSelectedColor(color);

    if (color === "black" && selectedItem.images.black) {
      setSelectedImage(selectedItem.images.black);
    } else if (color === "white" && selectedItem.images.white) {
      setSelectedImage(selectedItem.images.white);
    }
  };

  return (
    <section
      id="merch"
      className="py-20 min-h-screen bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center tracking-tight mb-4">
          MERCHANDISE
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Show your support with Empire Oil official merchandise. Premium
          quality, just like our products.
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-2 gap-6">
            {merchItems.map((item) => (
              <div
                key={item.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg"
                onClick={() => openModal(item)}
              >
                <div className="aspect-square bg-white/5 rounded-lg overflow-hidden flex items-center justify-center p-3">
                  <img
                    src={item.images.main}
                    alt={item.name}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-lg font-bold tracking-wider mb-1">
                    {item.name}
                  </h3>
                  <div className="flex justify-between items-center">
                    <p className="text-base font-mono">${item.price}</p>
                    <button className="bg-white/10 backdrop-blur-md px-3 py-1 rounded text-xs tracking-wider hover:bg-white/20 transition-colors cursor-pointer">
                      VIEW
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-black/70 border border-white/10 rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-end mb-4">
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="bg-white/5 rounded-lg overflow-hidden aspect-square flex items-center justify-center p-6">
                  <img
                    src={selectedImage}
                    alt={selectedItem.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {selectedItem.type === "shirt" && (
                  <div className="flex mt-4 gap-2">
                    {selectedItem.images.front && (
                      <button
                        className={`border ${
                          selectedImage === selectedItem.images.front
                            ? "border-white"
                            : "border-white/20"
                        } rounded-md overflow-hidden h-20 w-20 flex items-center justify-center p-2 cursor-pointer`}
                        onClick={() =>
                          setSelectedImage(selectedItem.images.front!)
                        }
                      >
                        <img
                          src={selectedItem.images.front}
                          alt="Front"
                          className="w-full h-full object-contain"
                        />
                      </button>
                    )}
                    {selectedItem.images.back && (
                      <button
                        className={`border ${
                          selectedImage === selectedItem.images.back
                            ? "border-white"
                            : "border-white/20"
                        } rounded-md overflow-hidden h-20 w-20 flex items-center justify-center p-2 cursor-pointer`}
                        onClick={() =>
                          setSelectedImage(selectedItem.images.back!)
                        }
                      >
                        <img
                          src={selectedItem.images.back}
                          alt="Back"
                          className="w-full h-full object-contain"
                        />
                      </button>
                    )}
                  </div>
                )}

                {selectedItem.type === "hat" && (
                  <div className="flex mt-4 gap-2">
                    {selectedItem.images.black && (
                      <button
                        className={`border ${
                          selectedImage === selectedItem.images.black
                            ? "border-white"
                            : "border-white/20"
                        } rounded-md overflow-hidden h-20 w-20 flex items-center justify-center p-2 cursor-pointer`}
                        onClick={() => {
                          setSelectedImage(selectedItem.images.black!);
                          setSelectedColor("black");
                        }}
                      >
                        <img
                          src={selectedItem.images.black}
                          alt="Black"
                          className="w-full h-full object-contain"
                        />
                      </button>
                    )}
                    {selectedItem.images.white && (
                      <button
                        className={`border ${
                          selectedImage === selectedItem.images.white
                            ? "border-white"
                            : "border-white/20"
                        } rounded-md overflow-hidden h-20 w-20 flex items-center justify-center p-2 cursor-pointer`}
                        onClick={() => {
                          setSelectedImage(selectedItem.images.white!);
                          setSelectedColor("white");
                        }}
                      >
                        <img
                          src={selectedItem.images.white}
                          alt="White"
                          className="w-full h-full object-contain"
                        />
                      </button>
                    )}
                  </div>
                )}
              </div>

              <div>
                <h2 className="text-2xl font-bold tracking-wider mb-2">
                  {selectedItem.name}
                </h2>
                <p className="text-xl font-mono mb-6">${selectedItem.price}</p>

                <div className="mb-6">
                  <h3 className="text-sm text-gray-400 mb-2">COLOR</h3>
                  <div className="flex gap-2">
                    {selectedItem.colors.map((color) => (
                      <button
                        key={color}
                        className={`h-8 w-8 rounded-full ${
                          color === "white"
                            ? "bg-white"
                            : color === "black"
                            ? "bg-black"
                            : "bg-gray-500"
                        } ${
                          selectedColor === color
                            ? "ring-2 ring-white ring-offset-2 ring-offset-black"
                            : ""
                        } cursor-pointer`}
                        onClick={() => {
                          setSelectedColor(color);
                          if (selectedItem.type === "hat") {
                            handleHatColorChange(color);
                          }
                        }}
                      />
                    ))}
                  </div>
                </div>

                {selectedItem.sizes && (
                  <div className="mb-8">
                    <h3 className="text-sm text-gray-400 mb-2">SIZE</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.sizes.map((size) => (
                        <button
                          key={size}
                          className={`h-10 w-10 flex items-center justify-center border ${
                            selectedSize === size
                              ? "border-white bg-white/20"
                              : "border-white/20"
                          } rounded hover:border-white transition-colors cursor-pointer`}
                          onClick={() => setSelectedSize(size)}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <button className="w-full bg-white text-black py-3 rounded font-bold tracking-wider hover:bg-gray-200 transition-colors cursor-pointer">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Merch;
