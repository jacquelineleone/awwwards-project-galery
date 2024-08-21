import React from "react";
import styles from "./style.module.scss";

export default function Project({ index, title, setModal }) {
  return (
    <div
      className={styles.project}
      onMouseEnter={() => setModal({ active: true, index: index })}
      onMouseLeave={() => setModal({ active: false, index: index })}
    >
      <h2>{title}</h2>
      <p>Design & Development</p>
    </div>
  );
}
