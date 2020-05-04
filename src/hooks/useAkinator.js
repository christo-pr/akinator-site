import { useState, useCallback, useEffect, useRef } from "react"

import * as hTrack from "handtrackjs"

const modelParams = {
  flipHorizontal: true, // flip e.g for video
  maxNumBoxes: 20, // maximum number of boxes to detect
  iouThreshold: 0.5, // ioU threshold for non-max suppression
  scoreThreshold: 0.6, // confidence threshold for predictions.
}

export const useAkinator = baseElement => {
  const [loading, setLoading] = useState(true)
  const [cameraActive, setCameraActive] = useState(false)
  const [akiModel, setAkiModel] = useState(null)
  const animationRef = useRef()

  const startCamera = useCallback(async () => {
    if (!baseElement?.current) return

    // Init the video tracking
    const status = await hTrack.startVideo(baseElement.current)
    // Set camera permission status
    setCameraActive(status)
    // Do more...
    startDetection()
  }, [baseElement, akiModel])

  const stop = useCallback(() => {
    // hTrack.stopVideo(baseElement.current)
    cancelAnimationFrame(animationRef.current)
  }, [])

  useEffect(() => {
    if (!baseElement?.current) return

    hTrack.load(modelParams).then(m => {
      console.log("m", m)
      setAkiModel(m)
      setLoading(false)
    })
  }, [baseElement])

  const startDetection = () => {
    akiModel.detect(baseElement.current).then(predictions => {
      console.log("detection -> predictions", predictions)
    })
    // Do something with the hands positions now...
    animationRef.current = requestAnimationFrame(startDetection)
  }

  return {
    startCamera,
    stop,
    loading,
    cameraActive,
  }
}
