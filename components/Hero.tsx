import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-black"
      style={{ background: "linear-gradient(to bottom, #00FF00, #00FF00)" }} // Mengubah latar belakang menjadi hijau
    >
      <Image
        src="/ma.jpeg"
        alt="Designer Avatar"
        width={200}
        height={160}
        className="rounded slide-up"
      />
      <h2 className="text-4xl font-bold my-4 slide-up">Hello, I&apos;M Pipit Wulandari</h2> {/* Menggunakan &apos; */}
      <p className="text-6xl font-bold slide-up">A CREATIVE DEVELOPER</p>
      <p className="slide-up">Passionate about crafting elegant solutions and user-friendly designs.</p>
      <p className="slide-up">Wanna know more about me?</p>
      <a href="#about" className="mt-4 text-yellow-400 slide-up">
        Click here to learn more
      </a>
    </section>
  );
};

export default Hero;
