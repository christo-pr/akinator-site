import React from "react"

export const Permissions = props => {
  const { requestFn } = props

  return (
    <div className="activate-camera-container">
      <div className="message">
        <i className="nes-bcrikko"></i>
        <div className="nes-balloon from-left">
          <p className="text-left">You need to activate your camera!</p>
          <button
            type="button"
            onClick={() => requestFn()}
            className="nes-btn is-primary"
          >
            Enable camera
          </button>
        </div>
      </div>
    </div>
  )
}
