import React from "react"

export const Loader = props => {
  const { loading } = props

  if (!loading) return null

  return (
    <div className="loader text-center">
      <div className="loading-text">Loading model</div>
      <img
        src="/aki.png"
        alt="Akinator Logo Pixel"
        width="300"
        className="image-loader"
      />
    </div>
  )
}
