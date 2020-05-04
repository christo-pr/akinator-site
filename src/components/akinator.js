import React, { useEffect, useRef } from "react"
import * as handTrack from "handtrackjs"

import { Permissions } from "./permissions"
import { useAkinator } from "../hooks"
import { Loader } from "../components"

export const Akinator = props => {
  const videoContainer = useRef(null)
  const { startCamera, cameraActive, stop, loading } = useAkinator(
    videoContainer
  )

  return (
    <>
      <Loader loading={loading} />
      <div className={`content-${loading ? "loading" : "loaded"}`}>
        {!cameraActive && <Permissions requestFn={startCamera} />}
        <div className="nes-container with-title text-center">
          <h3 className="title">Akinator</h3>

          <video src="" ref={videoContainer}></video>
        </div>
      </div>
    </>
  )
}
