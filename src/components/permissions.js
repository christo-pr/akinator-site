import React from "react"

export const Permissions = props => {
  const { granted } = props

  if (granted) return null

  return (
    <div className="activate-camera-container">
      <div className="message">
        <i className="nes-bcrikko"></i>
        <div className="nes-balloon from-left">
          <p className="text-left">
            To start playing you need to enable camera permissions:
          </p>
          <button type="button" className="nes-btn is-primary">
            Enable camera
          </button>
        </div>
      </div>
    </div>
  )
}
