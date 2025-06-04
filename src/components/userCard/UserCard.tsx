import styles from "./UserCard.module.css";

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
          <button className={styles.profileBtn}>Profile</button>
          <button className={styles.profileBtn}>Favorite</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;