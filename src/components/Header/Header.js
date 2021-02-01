import React from "react";
import styles from "./Header.module.css";
import logo from "../images/Logo.png";

function Header() {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src={logo} placeholder="logo" />
    </div>
  );
}

export default Header;
