import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";

export default function Modal({ modal, projects }) {
  const { active, index } = modal;

  return (
    <div className={styles.container}>
      <div style={{ top: index * -100 + "%" }} className={styles.slider}>
        {projects.map((project, index) => {
          const { src, color } = project;
          return (
            <div
              key={`modal_${index}`}
              style={{ backgroundColor: color }}
              className={styles.modal}
            >
              <Image
                src={`/images/${src}`}
                width={300}
                height={0}
                alt="image"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
