import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUserProfile } from "../../context/UserProfileContext";
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
    <div className={styles.container}>
      <img src={profile.avatar_url} alt={profile.login} className={styles.avatar} />
      <h2 className={styles.name}>{profile.name}</h2>
      <p className={styles.username}>@{profile.login}</p>
      <p className={styles.bio}>{profile.bio || "No bio"}</p>

      <ul className={styles.infoList}>
        <li className={styles.infoItem}>{profile.location || "No location"}</li>
        <li className={styles.infoItem}>{profile.followers} followers</li>
        <li className={styles.infoItem}>{profile.following} following</li>
        <li className={styles.infoItem}>{profile.public_repos} public repos</li>
      </ul>
    </div>
  );
};

export default ProfilePage;
