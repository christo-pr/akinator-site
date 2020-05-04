import { useState, useCallback } from "react"
import * as hTrack from "handtrackjs"

/**
 * This hook will export 2 functions: `startCamera` & `stopCamera`
 * to enable/disable the video camera of the user.
 * @param {HTMLVideoElement} baseElement
 */
export const useWebCam = baseElement => {
  const [loadingCamera, setLoadingCamera] = useState(false)
  const [cameraActive, setCameraActive] = useState(false)

  const startCamera = useCallback(async () => {
    if (!baseElement?.current) return

    // Set loading
    setLoadingCamera(true)
    // Init the video
    const status = await hTrack.startVideo(baseElement.current)

    // Set Camera status
    setCameraActive(status)
    // Reset loading
    setLoadingCamera(false)
  }, [baseElement])

  const stopCamera = useCallback(() => {
    hTrack.stopVideo(baseElement.current)
  }, [baseElement])

  return {
    startCamera,
    stopCamera,
    loadingCamera,
    cameraActive,
  }
}
