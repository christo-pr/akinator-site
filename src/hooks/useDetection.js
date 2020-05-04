import { useState, useEffect, useRef, useCallback } from "react"
import * as hTrack from "handtrackjs"

const modelParams = {
  flipHorizontal: true, // flip e.g for video
  maxNumBoxes: 20, // maximum number of boxes to detect
  iouThreshold: 0.5, // ioU threshold for non-max suppression
  scoreThreshold: 0.6, // confidence threshold for predictions.
}

export const useDetection = (baseElement, cameraActive) => {
  const [loadingModel, setLoadingModel] = useState(true)
  const [akiModel, setAkiModel] = useState(null)
  const animationFrameRef = useRef()

  useEffect(() => {
    if (!baseElement?.current) return

    hTrack.load(modelParams).then(m => {
      setAkiModel(m)
      setLoadingModel(false)
    })
  }, [baseElement])

  const startDetection = useCallback(() => {
    if (!cameraActive) return

    akiModel.detect(baseElement.current).then(predictions => {
      console.log("detection -> predictions", predictions)
      // akiModel.renderPredictions(predictions, canvas, ctx, baseElement.current)
    })
    // Do something with the hands positions now...
    animationFrameRef.current = requestAnimationFrame(startDetection)
  }, [cameraActive, akiModel, baseElement])

  const stopDetection = useCallback(() => {
    cancelAnimationFrame(animationFrameRef.current)
  }, [animationFrameRef])

  return {
    startDetection,
    stopDetection,
    loadingModel,
  }
}
