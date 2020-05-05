import React from "react"

export const Questions = props => {
  const { show } = props

  if (!show) return null

  return (
    <div className="nes-container is-rounded is-dark">
      <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
    </div>
  )
}
