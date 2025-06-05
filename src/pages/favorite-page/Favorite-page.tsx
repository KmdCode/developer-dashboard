import { useFavorites } from "../../context/FavoriteContext";
import NavigationBar from "../../components/navBar/NavigationBar";
import { Link } from "react-router-dom";
import styles from "./FavoritePage.module.css";

const FavoritesPage = () => {
  const { favorites } = useFavorites();

  return (
    <div className={styles.container}>
      <NavigationBar />
      <h1 className={styles.heading}>Favorite Users</h1>
      {favorites.length === 0 ? (
        <p className={styles.message}>No favorites yet.</p>
      ) : (
        <ul className={styles.userList}>
          {favorites.map((user) => (
            <li key={user.login} className={styles.userItem}>
              <img src={user.avatar_url} alt={user.login} width="100" />
              <Link to={`/user/${user.login}`} className={styles.userLink}>
                {user.login}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesPage;
