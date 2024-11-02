import React from "react";
// Placeholder images for brands - replace these paths with actual paths to your images
const brandLogos = [
  { name: "Vitra", image: "https://picsum.photos/300/300" },
  { name: "Mudo Concept", image: "https://picsum.photos/400/300" },
  { name: "Apex Bank", image: "https://picsum.photos/500/300" },
  { name: "Flua", image: "https://picsum.photos/600/300" },
  { name: "Porcelanosa", image: "https://picsum.photos/700/300" },
  { name: "Axor", image: "https://picsum.photos/800/300" },
  { name: "Grohe", image: "https://picsum.photos/900/300" },
  { name: "Smeg", image: "https://picsum.photos/100/300" },
  { name: "Laminam", image: "https://picsum.photos/200/200" },
  { name: "Progress", image: "https://picsum.photos/200/400" },
  { name: "Hettich", image: "https://picsum.photos/200/600" },
  { name: "Candela", image: "https://picsum.photos/200/500" },
  { name: "Benjamin Moore", image: "https://picsum.photos/200/700" },
  { name: "Onyx", image: "https://picsum.photos/200/800" },
  { name: "Bold Development", image: "https://picsum.photos/200/900" },
];
const Info = () => {
  return (
    <>
      <div className="align-items ">
        <div className="title_info my-10 md:my-24 md:mx-32 text-center">
          <h2 className="text-4xl  text-gray-800 lg:text-5xl font-semibold">About Us</h2>
          <p className="w-full md:w-3/4 text-sm md:text-base  mx-auto mt-5 md:mt-10 text-gray-500 font-semibold">
            MICASA - is a modern design studio located in Tashkent. However, we
            are executing projects all over the world. Each meeting with a
            client for us is an opportunity to find out their preferences,
            produce unique ideas and apply that knowledge to our project, so
            that the results are higher than their expectations..
          </p>
        </div>
      </div>
      <div className="img-container">
        <img src="https://picsum.photos/1280/630" alt="random" className="w-full h-[630px] object-cover" />
      </div>
      <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-semibold mb-12">
          Some of the brands we're working with
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
          {brandLogos.map((brand, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={brand.image}
                alt={brand.name}
                className="h-16 w-32 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
      
    </>
  );
};

export default Info;
