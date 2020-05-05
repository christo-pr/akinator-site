import React from "react"

export const Controls = props => {
  const { show } = props

  if (!show) return null

  const answers = [
    { text: "Yes", style: "is-primary" },
    { text: "No", style: "is-success" },
    { text: "Don't know", style: "is-warning" },
    { text: "Probably", style: "is-error" },
    { text: "Probably not", style: "" },
  ]
  return (
    <div className="controls-btn">
      {Object.values(answers).map(ans => (
        <button key={ans.text} type="button" className={`nes-btn ${ans.style}`}>
          {ans.text}
        </button>
      ))}
      <i className="nes-icon close close-video"></i>
    </div>
  )
}
