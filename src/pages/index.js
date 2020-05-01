import React from "react"

import { Header, Permissions, Akinator } from "../components"

export default () => {
  return (
    <>
      <Header />
      <div className="container">
        <Permissions />
        <Akinator />
      </div>
    </>
  )
}
