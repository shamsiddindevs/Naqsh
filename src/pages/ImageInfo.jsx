import React from "react";

const ImageInfo = () => {
  // Replace these image paths with actual paths to your images
  const projectImages = [
    "https://picsum.photos/1200/700",
    "https://picsum.photos/1200/600",
    "https://picsum.photos/1200/750",
    "https://picsum.photos/1200/650",
    "https://picsum.photos/1200/800",
  ];
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Project Title Section */}
      <div className="container mx-auto py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">APEX Tower</h1>
        <p className="text-lg text-gray-600">Exterior</p>
        <p className="text-sm text-gray-500 mt-2">Tashkent, Uzbekistan</p>
      </div>

      {/* Project Images Section */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
        {projectImages.map((image, index) => (
          <>
            <div
              key={index}
              className="overflow-hidden h-[500px] shadow-lg">
              <img
                src={image}
                alt={`Project Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div
              key={index}
              className="overflow-hidden  h-[500px] shadow-lg">
              <img
                src={image}
                alt={`Project Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div
              key={index}
              className=" col-span-2 overflow-hidden h-[500px]  shadow-lg">
              <img
                src={image}
                alt={`Project Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default ImageInfo;
