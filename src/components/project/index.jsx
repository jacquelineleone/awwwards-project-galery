import React from "react";
import styles from "./style.module.scss";

export default function Project({ title }) {
  return (
    <div className={styles.project}>
      <h2>{title}</h2>
      <p>Design & Development</p>
    </div>
  );
}
