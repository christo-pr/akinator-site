import React from "react"

import { Header } from "../components"

export default () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="activate-camera-container">
          <div className="message">
            <i className="nes-bcrikko"></i>
            <div className="nes-balloon from-left">
              <p className="text-left">
                Welcome to Akin-site! You can think on a character and I'll try
                to guess it by asking some questions!
                <br />
                To start you need to enable camera permissions:
              </p>
              <button type="button" className="nes-btn is-primary">
                Enable camera
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
