import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUserProfile } from "../../context/UserProfileContext";
import NavigationBar from "../../components/navBar/NavigationBar";
import styles from "./UserProfile.module.css"

const ProfilePage = () => {
  const { username } = useParams();
  const { profile, loadUserProfile } = useUserProfile();

  useEffect(() => {
    if (username) {
      loadUserProfile(username);
    }
  }, [username]);

  if (!profile) return <p>Loading...</p>;

  return (
    <>
      <NavigationBar />
      <div className={styles.container}>
        <img src={profile.avatar_url} alt={profile.login} className={styles.avatar} />
        <h2 className={styles.name}>Name: {profile.name}</h2>
        <p className={styles.username}>@{profile.login}</p>
        <p className={styles.bio}>{profile.bio || "No bio"}</p>

        <ul className={styles.infoList}>
          <li className={styles.infoItem}>{profile.location || "No location"}</li>
          <li className={styles.infoItem}>Folowers: {profile.followers}</li>
          <li className={styles.infoItem}>Following: {profile.following}</li>
          <li className={styles.infoItem}>Repositories: {profile.public_repos}</li>
        </ul>
      </div>

    </>
  );
};

export default ProfilePage;
