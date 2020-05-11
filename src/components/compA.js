import React, { Component } from "react";
import styles from "./compA.module.scss";

export class compA extends Component {
  render() {
    return <div className={styles["container"]}>Text compA</div>;
  }
}

export default compA;
