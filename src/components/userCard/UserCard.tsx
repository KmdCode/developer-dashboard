import styles from "./UserCard.module.css";

const UserCard = () => {

  return (
    <div className={styles.card}>
      <img
        src=""
        alt="User avatar"
        className={styles.avatar}
      />

      <div className={styles.info}>
        <h2 className={styles.username}>Karabo</h2>

        <div className={styles.actions}>
          <button className={styles.profileBtn}>Profile</button>
          <button className={styles.profileBtn}>Favorite</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;