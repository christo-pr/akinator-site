import React, { useRef } from "react"

import { Permissions } from "./permissions"
import { useWebCam, useDetection } from "../hooks"
import { Loader, Controls } from "../components"

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
        <Permissions
          requestFn={startCamera}
          loading={loadingCamera}
          show={!cameraActive}
        />
        <div className="nes-container with-title text-center">
          <h3 className="title">Akinator</h3>
          <Controls />
          <video src="" ref={videoContainer}></video>
        </div>
      </div>
    </>
  )
}
