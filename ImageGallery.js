import React, { useState } from 'react';
import Image from './Image';
import Modal from './Modal';
import './ImageGallery.css';

const images = [
  
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl3kgS5uC-0XHaYqqZV7UJb2qyytMyleo4Sg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZNuoNaUJSNS2NvHFAKV-th13KTBFEoUZshA&s',
    'https://t3.ftcdn.net/jpg/02/14/53/92/360_F_214539232_YnUrtuwUEt84gHuU0qG8l7OwZvH4rnPG.jpg',  
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzzqIm6-db43QdiBLoypstdFsCVqZDiLtqNQ&s',
    'https://www.europarl.europa.eu/resources/library/images/20230607PHT95601/20230607PHT95601_original.jpg',
    'https://okcredit-blog-images-prod.storage.googleapis.com/2021/03/Software-Development-Business1--1-.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
    
  // Add more image paths
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = images.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = images.indexOf(selectedImage);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <Image key={index} src={image} onClick={() => openModal(image)} />
      ))}
      {selectedImage && (
        <Modal
          src={selectedImage}
          onClose={closeModal}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </div>
  );
};

export default ImageGallery;
