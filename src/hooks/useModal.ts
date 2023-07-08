import { useState } from 'react';

export type ModalHook = [boolean, () => void];

const useModal = (): ModalHook => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return [isModalVisible, handleModal];
};

export default useModal;
