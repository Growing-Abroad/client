import React, { useRef } from 'react';
import * as S from "./styled"
import Image from 'next/image';
import closeIcon from "@assets/close-icon.svg"

interface IPopupProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};


const Popup = ({ isOpen, onClose, children }: IPopupProps) => {
  const popupRef = useRef<HTMLDivElement | null>(null);

  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <S.PopupContainer onClick={handleOutsideClick}>
      <S.PopupContent ref={popupRef}>
        <S.CloseButton onClick={onClose}>
          <Image alt='Close buttom' src={closeIcon}  />
        </S.CloseButton>
        {children}
      </S.PopupContent>
    </S.PopupContainer>
  );
};


export default Popup;
