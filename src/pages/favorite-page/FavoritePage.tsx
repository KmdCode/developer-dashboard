import { useFavorites } from "../../context/FavoriteContext";
import { Link } from "react-router-dom";

const FavoritesPage = () => {
  const { favorites } = useFavorites();

  return (
    <div>
      <h1>Favorite Users</h1>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <ul>
          {favorites.map((user) => (
            <li key={user.login}>
              <img src={user.avatar_url} alt={user.login} width="50" />
              <Link to={`/user/${user.login}`}>{user.login}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesPage;
