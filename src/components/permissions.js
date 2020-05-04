import React from "react"

export const Permissions = props => {
  const { requestFn, loading } = props

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
            {loading ? "Requesting Camera..." : "Activate Camera"}
          </button>
        </div>
      </div>
    </div>
  )
}
