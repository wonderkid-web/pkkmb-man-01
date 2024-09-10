import React from 'react';
import Image from 'next/image';

// Static imports for images
import arabicClub from '/public/ekskull/arabic-club.png';
import englishClub from '/public/ekskull/english-club.jpg';
import mpk from '/public/ekskull/mpk.jpg';
import osim from '/public/ekskull/osim.png';
import paskibra from '/public/ekskull/paskibra.jpg';
import pmr from '/public/ekskull/pmr.jpeg';
import pramuka from '/public/ekskull/pramuka.png';
import sepakBola from '/public/ekskull/sepak-bola.png';
import sispala from '/public/ekskull/sispala.jpeg';
import uks from '/public/ekskull/uks.jpeg';

const images = [
  { src: arabicClub, alt: 'Arabic Club' },
  { src: englishClub, alt: 'English Club' },
  { src: mpk, alt: 'MPK' },
  { src: osim, alt: 'OSIM' },
  { src: paskibra, alt: 'Paskibra' },
  { src: pmr, alt: 'PMR' },
  { src: pramuka, alt: 'Pramuka' },
  { src: sepakBola, alt: 'Sepak Bola' },
  { src: sispala, alt: 'Sispala' },
  { src: uks, alt: 'UKS' }
];

const ImageGrid = () => {
  return (
    <div>
<h1 className='text-4xl text-primary text-center font-bold mb-4'>Ekstrakulikuler MAN 1 Medan</h1>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 bg-primary rounded-sm">
      {images.map((image, index) => (
        <div key={index} className="aspect-square relative overflow-hidden rounded-lg group bg-white">
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <p className="text-white text-center font-bold text-3xl cursor-default">{image.alt}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ImageGrid;