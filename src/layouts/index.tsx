/*
 * @Description:
 * @Author: acsamson
 * @Date: 2021-07-09 01:13:30
 * @LastEditTime: 2021-07-09 01:13:30
 * @LastEditors: acsamson@foxmail.com
 * @FilePath: /SamEditor/src/layouts/index.tsx
 */
import React from 'react';
import styles from './index.css';

const BasicLayout: React.FC = props => {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to SamEditor!</h1>
      {props.children}
    </div>
  );
};

export default BasicLayout;
