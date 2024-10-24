"use client"; // Menandai komponen ini sebagai Client Component

import React from 'react';
import useOnScreen from '../hooks/useOnScreen';
import Image from 'next/image'; // Impor komponen Image

const About: React.FC = () => {
  const isVisible = useOnScreen({ threshold: 0.1 });

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col lg:flex-row justify-center items-center text-white"
      style={{ background: "#32CD32" }} // Mengubah latar belakang menjadi hijau seluruhnya
    >
      <div className="flex-1 flex flex-col justify-center items-center p-4">
        <h2 className={`text-3xl font-bold mb-4 ${isVisible ? 'slide-up' : 'opacity-0 animate-pulse'}`}>
          About Me ...
        </h2>
        <p className={`text-center max-w-md ${isVisible ? 'slide-up' : 'opacity-0 animate-bounce'}`}>
          Hello, my name is Pipit Wulandari, and I am a student at SMKN 21 Jakarta. I have a passion for cats, enjoy reading novels on Wattpad, and love listening to music and watching movies. Currently, I am pursuing a major in Software and Game Development (PPLG) at SMKN 21 Jakarta because I aspire to become a developer in the future.
          Let&apos;s click <a href="#contact" className="text-yellow-600 underline">Contact</a>
        </p>
      </div>
      <div className="flex-1 flex justify-center">
        <Image
          src="/sya.jpeg" // Ganti dengan path gambar yang sesuai
          alt="Descriptive Alt Text"
          width={400} // Tentukan lebar gambar
          height={300} // Tentukan tinggi gambar
          className={`${isVisible ? 'slide-up' : 'opacity-0 animate-spin'}`}
          style={{ transition: 'opacity 0.5s' }} // Transisi opacity untuk efek muncul
        />
      </div>
    </section>
  );
};

export default About;
