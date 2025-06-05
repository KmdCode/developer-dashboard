import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { UsersProvider } from "./context/UsersContext"
import { UserProfileProvider } from "./context/UserProfileContext"
import { FavoriteProvider } from "./context/FavoriteContext"
import Homepage from "./pages/homepage/Homepage"
import ProfilePage from "./pages/profile-page/ProfilePage"
import FavoritesPage from "./pages/favorite-page/Favorite-page"

export const App = () => {

  return (
    <FavoriteProvider>
      <UsersProvider>
        <UserProfileProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/user/:username" element={<ProfilePage />} />
              <Route path="/favorite" element={<FavoritesPage/>}/>
            </Routes>
          </Router>
        </UserProfileProvider>
      </UsersProvider>
    </FavoriteProvider>
    
  )
}

export default App
