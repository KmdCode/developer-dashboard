import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { UsersProvider } from "./context/UsersContext"
import { UserProfileProvider } from "./context/UserProfileContext"
import Homepage from "./pages/homepage/Homepage"
import ProfilePage from "./pages/profile-page/ProfilePage"

export const App = () => {

  return (
    <UsersProvider>
      <UserProfileProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />}/>
            <Route path="/user/:username" element={<ProfilePage />}/>
          </Routes>
        </Router>
      </UserProfileProvider>
    </UsersProvider>
  )
}

export default App
