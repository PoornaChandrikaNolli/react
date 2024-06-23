import React from 'react';
import './Modal.css';

const Modal = ({ src, onClose, onNext, onPrev }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <button className="prev" onClick={onPrev}>&#10094;</button>
        <img src={src} alt="" />
        <button className="next" onClick={onNext}>&#10095;</button>
      </div>
    </div>
  );
};

export default Modal;
