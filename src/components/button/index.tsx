import React from "react";
import styles from "./styles.module.scss";
export interface ButtonProps {
  label: string;
}

export const Button = (props: ButtonProps) => {
  return (
    <button className={`${styles.test_button} text-black dark:text-white`}>
      {props.label}
    </button>
  );
};
