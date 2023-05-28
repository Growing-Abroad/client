import { useEffect } from "react";
import * as S from "./styles";
import type * as T from "./types";
import { VideoIframe } from "../VideoIframe";
import { CloseIcon } from "./CloseIcon";

export const ModalLayout = ({
  visible,
  onClose,
  dataVideo,
}: T.OrderModalProps) => {
  console.log("Modal", { dataVideo });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!visible) return null;

  return (
    <S.ModalLayoutOverlay onClick={onClose}>
      <S.ModalLayoutBody>
        <div className="modal-header">
          <button className="close-modal" onClick={onClose}>
            {/* close */}
            <CloseIcon/>
          </button>
        </div>

        <VideoIframe url={dataVideo?.urlVideo} title={dataVideo?.titleVideo} />
      </S.ModalLayoutBody>
    </S.ModalLayoutOverlay>
  );
};
