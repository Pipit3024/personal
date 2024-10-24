import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center"
      style={{ background: "linear-gradient(to bottom, #00FF00, #00FF00)" }} // Mengubah latar belakang menjadi hijau
    >
      <Image
        src="/ma.jpeg"
        alt="Designer Avatar"
        width={200}
        height={160}
        className="rounded slide-up"
      />
      <h2 className="text-4xl font-bold my-4 slide-up text-black">Hello, I'M Pipit Wulandari</h2> {/* Tulisan menjadi hitam */}
      <p className="text-6xl font-bold slide-up text-black">A CREATIVE DEVELOPER</p> {/* Tulisan menjadi hitam */}
      <p className="slide-up text-black">Passionate about crafting elegant solutions and user-friendly designs.</p> {/* Tulisan menjadi hitam */}
      <p className="slide-up text-black">Wanna know more about me?</p> {/* Tulisan menjadi hitam */}
      <a href="#about" className="mt-4 text-yellow-400 slide-up">
        Click here to learn more
      </a>
    </section>
  );
};

export default Hero;
