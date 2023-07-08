import TwoColorTitle from "@components/two-color-title";
import * as S from "../../../../styles/about-us/components/TeamMembers/index.styles";
import OriginalFancyCarousel from "@/components/OriginalFancyCarousel";
import { successStoriesData } from "@/components/SuccessStoriesSection/mock";
import { useState } from "react";
import { ModalLayout } from "@/components/ModalLayout";
import useModal, { ModalHook } from "@/hooks/useModal";

export const TeamMembers = () => {
  const [isModalVisible, handleModal]: ModalHook = useModal();
  const [dataVideo, setDataVideo] = useState();

  return (
    <>
      <ModalLayout
        visible={isModalVisible}
        onClose={handleModal}
        dataVideo={dataVideo}
      />
      <S.Container>
        <TwoColorTitle text1="Team" text2="Members" hasSpaceBtw as="h2" />
        <OriginalFancyCarousel
          columnGap={8}
          dataArray={successStoriesData}
          openModal={handleModal}
          visibleModal={isModalVisible}
          getDataVideo={setDataVideo}
        />
      </S.Container>
    </>
  );
}

export default TeamMembers;
