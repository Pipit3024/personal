"use client";

import React, { useState } from 'react';
import useOnScreen from '../hooks/useOnScreen';
import Image from 'next/image'; // Impor komponen Image

const Contact: React.FC = () => {
  const isVisible = useOnScreen({ threshold: 0.1 });
  
  // State untuk menyimpan input
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logika pengiriman data atau API
    console.log({ email, subject, message });
    // Reset input setelah pengiriman
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center text-black" // Mengubah teks menjadi hitam
      style={{ background: "#32CD32" }} // Mengubah latar belakang menjadi hijau
    >
      <div className="flex-1 flex flex-col justify-center items-center p-4">
        <h2 className={`text-5xl font-bold mb-4 ${isVisible ? 'slide-up' : 'opacity-0'}`}>
          Contact Me
        </h2>
        
        <form onSubmit={handleSubmit} className={`flex flex-col space-y-4 max-w-md ${isVisible ? 'slide-up' : 'opacity-0'}`}>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xl"
            required
          />
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xl"
            required
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xl"
            rows={5}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-500 text-white py-2 rounded text-xl"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="flex justify-end w-full p-4">
        <Image 
          src="/img.jpeg" // Ganti dengan path gambar yang sesuai
          alt="Descriptive Alt Text"
          className={`transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          width={250} // Tentukan lebar gambar
          height={250} // Tentukan tinggi gambar
          style={{ marginTop: '-250px' }} // Sesuaikan ukuran dan margin sesuai kebutuhan
        />
      </div>
    </section>
  );
};

export default Contact;
