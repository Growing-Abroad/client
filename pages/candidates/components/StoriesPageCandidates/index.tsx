import {
  SuccessSubtitle,
  SucessStoriesWrapper,
} from "../../../../styles/candidates/components/Success-stories/index.styles";
import TwoColorTitle from "@components/two-color-title";
import OriginalFancyCarousel from "@/components/OriginalFancyCarousel";
import { successStoriesData } from "@/components/SuccessStoriesSection/mock";
import { useState } from "react";
import { ModalLayout } from "@/components/ModalLayout";
import useModal, { ModalHook } from "@/hooks/useModal";
import useAppContext from "@/hooks/useAppContext";
import { SucessStoriesWrapperCustom } from "./styles";

interface StoriesPageCandidatesProps {
  hasSubTitle?: boolean
}

export const StoriesPageCandidates = ({hasSubTitle=true}: StoriesPageCandidatesProps) => {
  const [isModalVisible, handleModal]: ModalHook = useModal();
  const [dataVideo, setDataVideo] = useState();

  return (
    <>
      <ModalLayout
        visible={isModalVisible}
        onClose={handleModal}
        dataVideo={dataVideo}
      />
      <SucessStoriesWrapperCustom hasSubTitle={hasSubTitle} >
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <TwoColorTitle text1="Success" text2="Stories" hasSpaceBtw as="h2" />
        {hasSubTitle && 
          <SuccessSubtitle>
            Customers from all over the world landed their dream job in Germany
            and many other countries in Europe
          </SuccessSubtitle>
        }
        
        <OriginalFancyCarousel
          columnGap={8}
          dataArray={successStoriesData}
          openModal={handleModal}
          visibleModal={isModalVisible}
          getDataVideo={setDataVideo}
        />
      </SucessStoriesWrapperCustom>
    </>
  );
};

export default StoriesPageCandidates;
