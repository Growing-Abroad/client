import React from "react";

import * as T from "./types";

export const VideoIframe = ({ url, title }: T.VideoProps) => {
  return (
    <div className="box-content-video">
      <iframe
        width="560"
        height="315"
        src={url}
        title={title}
        // frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};
