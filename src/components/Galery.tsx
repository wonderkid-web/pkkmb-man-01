import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import Image from 'next/image';

interface GalleryProps {
  data: {
    docsUrl: string[];
  };
}

const Gallery: React.FC<GalleryProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (url: string): void => {
    setSelectedImage(url);
    setIsOpen(true);
  };

  const closeModal = (): void => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        {data?.docsUrl?.map((url: string, index: number) => (
          <div key={index} className="flex justify-center">
            {url.includes('data:application/pdf;base64,') ? (
              <div>PDFReviewer Component</div> // Ganti dengan PDFReviewer yang kamu buat
            ) : (
              <Image
                src={url}
                alt={`foto-${index}`}
                width={100}
                height={100}
                className="rounded-lg shadow-md cursor-pointer"
                onClick={() => openModal(url)}
              />
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
        <div className="fixed inset-0 bg-black bg-opacity-75" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-lg"
            >
              X
            </button>
            {selectedImage && (
              <Image
                src={selectedImage}
                alt="Selected"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default Gallery;
