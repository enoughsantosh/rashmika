"use client";
import React, { useEffect, useState } from "react";
import Loader from "./loader";

const Page = () => {
  const imageArray = [
    { id: 1, image: "/image1.JPEG" },
    { id: 2, image: "/image2.JPEG" },
    { id: 3, image: "/image3.JPEG" },
    { id: 4, image: "/image4.JPEG" },
  ];
  const newImage = [
    { id: 1, image: "/image1.JPEG" },
    { id: 2, image: "/image2.JPEG" },
    { id: 3, image: "/image3.JPEG" },
    { id: 4, image: "/image4.JPEG" },
    { id: 5, image: "/image5.JPEG" },
    { id: 6, image: "/image6.JPEG" },
    { id: 7, image: "/image7.JPEG" },
    { id: 8, image: "/image8.JPEG" },
    { id: 9, image: "/image9.JPEG" },
    { id: 10, image: "/image10.JPEG" },
    { id: 11, image: "/image11.JPEG" },
    { id: 12, image: "/image12.JPEG" },
    { id: 13, image: "/image13.JPEG" },
    { id: 14, image: "/image14.JPEG" },
    { id: 15, image: "/image15.JPEG" }
  ];

  const [animations, setAnimations] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [compelete, setcompelete] = useState(false);
  const [randomImages, setRandomImages] = useState(false);
  const [shuffledImages, setShuffledImages] = useState([]);
  const [shownImages, setShownImages] = useState([]); 

  useEffect(() => {
    if (isPlaying) {
      const audio = new Audio("/2pal.mp3");
      audio.play();
    }
  }, [isPlaying]);
  useEffect(() => {
    if (compelete) {
      const shuffled = newImage.sort(() => Math.random() - 0.5); 
      setShuffledImages(shuffled);
    }
  }, [compelete]);
  useEffect(() => {
    if (randomImages) {
      shuffledImages.forEach((image, index) => {
        setTimeout(() => {
          setShownImages((prev) => [...prev, image]); 
        }, index * 300);
      });
    }
  }, [randomImages, shuffledImages]);

  const startAnimation = () => {
    const animationClasses = [
      "animate-top-left",
      "animate-top-right",
      "animate-bottom-left",
      "animate-bottom-right",
    ];

    imageArray.forEach((_, index) => {
      setTimeout(() => {
        setAnimations((prev) => [...prev, animationClasses[index % 4]]);
      }, index * 600); 
    });

    setTimeout(() => {
      setAnimations([]); 
      setcompelete(true); 
    }, imageArray.length * 600 + 100); 

    setIsPlaying(true);
  };

  useEffect(() => {
    if (compelete) {
      setTimeout(() => {
        setcompelete(false);
        setRandomImages(true);
      }, 2000);
    }
  }, [compelete]);

  const getRandomPosition = () => {
    const x = Math.random() * 500 - 250; // Increased range for more distance in the X axis
    const y = Math.random() * 500 - 250; // Increased range for more distance in the Y axis
    const z = Math.random() * 500 - 250; // Increased range for more distance in the Z axis
    return `translate3d(${x}px, ${y}px, ${z}px)`; // Apply translation in 3D space
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black">
      <div className="relative h-[400px] w-[400px] mb-6">
        {/* Render images from shownImages when randomImages is true */}
        {randomImages &&
          shownImages.map((image) => (
            <img
              key={image.id}
              src={image.image}
              alt={`Random Image ${image.id}`}
              className="absolute inset-0 w-60 h-60 object-cover rounded-xl opacity-100 transition-all duration-[3000ms] ease-in-out" // Slower transition
              style={{ transform: getRandomPosition() }} 
            />
          ))}
        {!randomImages &&
          imageArray.map((image, index) => (
            <img
              key={image.id}
              src={image.image}
              className={`${
                compelete ? "opacity-0" : "opacity-100"
              } absolute inset-0 w-60 h-60 object-cover rounded-xl transition-all duration-[000ms] ease-in-out ${
                animations[index] || ""
              }`}
            />
          ))}
        {compelete && <Loader />}
      </div>
      <button
        onClick={startAnimation}
        disabled={isPlaying}
        className={`px-6 py-2 text-black rounded-lg ${
          isPlaying ? " cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {!isPlaying && "Activate your crush"}
      </button>
    </div>
  );
};

export default Page;
