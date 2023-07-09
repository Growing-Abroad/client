import React, { useEffect, useState } from 'react';
import * as S from './styles'

interface ToastProps {
  message: string;
  setShowToast: React.Dispatch<React.SetStateAction<boolean>>;
  duration?: number;
  onClose?: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, duration = 3000, setShowToast }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setShowToast(false)
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <>
      {visible && (
        <S.ToastContainer fadeOut={!visible}>
          {message}
        </S.ToastContainer>
      )}
    </>
  );
};

export default Toast;
