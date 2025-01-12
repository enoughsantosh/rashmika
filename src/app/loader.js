import React from "react";

const Loader = () => {
  const imageArray = [
    { id: 1, image: "/image1.jpeg" },
    { id: 2, image: "/image2.jpeg" },
    { id: 3, image: "/image3.jpeg" },
    { id: 4, image: "/image4.jpeg" },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-black  -mt-60">
      <div className="relative w-48 h-48">
        {imageArray.map((image, index) => (
          <img
            key={image.id}
            src={image.image}
            alt={`Image ${image.id}`}
            className={`absolute h-40 w-40 rounded-full object-cover animate-spin-slow`}
            style={{
              transform: `rotate(${index * 90}deg) translate(80px) rotate(-${index * 90}deg)`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loader;
