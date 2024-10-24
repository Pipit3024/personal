import React from 'react';
import Image from 'next/image'; // Impor komponen Image

const Footer = () => {
    return (
        <footer className="flex justify-center items-center p-4 bg-purple-600 text-white-500">
            <p>Get in touch:</p>
            <a href="https://www.instagram.com/pipitwulandari_06" target="_blank" rel="noopener noreferrer" className="ml-2 flex items-center">
                <Image 
                    src="/ig.png" // Ganti dengan path gambar yang sesuai
                    alt="Instagram" 
                    width={26} // Tentukan lebar gambar
                    height={26} // Tentukan tinggi gambar
                    className="mr-1"
                />
            </a>
            
            <a href="https://github.com/Pipit3024" target="_blank" rel="noopener noreferrer">
                <Image 
                    src="/github-icon.jpg" // Ganti dengan path gambar yang sesuai
                    alt="Twitter" 
                    width={26} // Tentukan lebar gambar
                    height={26} // Tentukan tinggi gambar
                />
            </a>
        </footer>
    );
};

export default Footer;
