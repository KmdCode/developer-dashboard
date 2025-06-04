import React from "react"
import { GithubProvider } from "./context/UsersContext"
import Homepage from "./pages/homepage/Homepage"

export const App = () => {

  return (
<GithubProvider>
    <Homepage />
  </GithubProvider>
  )
}

export default App
