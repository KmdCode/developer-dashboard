import { useUserContext } from "../../context/UsersContext";
import UserCard from "../../components/userCard/UserCard";
import Search from "../../components/searchBar/SearchBar";
import NavigationBar from "../../components/navBar/NavigationBar";
import styles from'./Homepage.module.css'

const Homepage = () => {

  const { users, nextPage } = useUserContext();

  return (
    <div>
      <NavigationBar/>
      <Search/>
      <h1>Users</h1>
      <div className={styles.container}>
        {users.map((user) => (
          <UserCard
            key={user.id}
            username={user.login}
            avatar={user.avatar_url}
            url={user.html_url}
          />
        ))}
      </div>
      <button onClick={nextPage} style={{ marginTop: "2rem" }}>
        Next Page
      </button>
    </div>
  );
};

export default Homepage;
