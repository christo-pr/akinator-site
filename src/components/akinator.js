import React, { useRef } from "react"

import { Permissions } from "./permissions"
import { useWebCam, useDetection } from "../hooks"
import { Loader } from "../components"

export const Akinator = props => {
  const videoContainer = useRef(null)
  const { startCamera, stopCamera, loadingCamera, cameraActive } = useWebCam(
    videoContainer
  )
  const { startDetection, stopDetection, loadingModel } = useDetection(
    videoContainer,
    cameraActive
  )

  return (
    <>
      <Loader loading={loadingModel} />
      <div className={`content-${loadingModel ? "loading" : "loaded"}`}>
        <button onClick={startDetection} className="nes-btn is-secondary">
          Start detection
        </button>
        <button onClick={stopDetection} className="nes-btn is-secondary">
          Stop detection
        </button>
        {!cameraActive && (
          <Permissions requestFn={startCamera} loading={loadingCamera} />
        )}
        <div className="nes-container with-title text-center">
          <h3 className="title">Akinator</h3>
          {cameraActive && (
            <i
              className="nes-icon close close-video"
              onClick={() => stopCamera()}
            ></i>
          )}
          <video src="" ref={videoContainer}></video>
        </div>
      </div>
    </>
  )
}
