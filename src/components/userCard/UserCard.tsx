import styles from "./UserCard.module.css";
import { Link } from "react-router-dom";


interface Props {
    username: string;
    avatar: string;
    url: string;
    }

const UserCard = ({ username, avatar, url }: Props) =>{

  return (
    <div className={styles.card}>
      <img
        src={avatar}
        alt={`${username} avatar`}
        className={styles.avatar}
      />

      <div className={styles.info}>
        <h2 className={styles.username}>{username}</h2>

        <div className={styles.actions}>
            <Link to={`/user/${username}`}>
             <button className={styles.profileBtn}>Profile</button>
            </Link>
          
          <button className={styles.profileBtn}>Favorite</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;