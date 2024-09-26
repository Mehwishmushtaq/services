import React from 'react';

const HeroSection = () => {
  return (
    <div className="container-fluid relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://codility.co/images/BannerVideoCodility.mp4"
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay with heading */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center px-4">
          Where your ideas evolve into powerful software.
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
