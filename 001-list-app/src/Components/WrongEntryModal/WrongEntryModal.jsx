import styles from "./WrongEntryModal.module.css";

const WrongEntryModal = ({ escapeModal }) => {
  return (
    <div className={styles.wrongentry}>
      Wrong entry!!! Username cannot be empty
      <button onClick={escapeModal}>Okay</button>
    </div>
  );
};

export default WrongEntryModal;
