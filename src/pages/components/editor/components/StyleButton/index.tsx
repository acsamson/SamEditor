/*
 * @Description:
 * @Author: acsamson
 * @Date: 2021-07-20 03:07:59
 * @LastEditTime: 2021-07-20 03:20:57
 * @LastEditors: acsamson@foxmail.com
 * @FilePath: /SamEditor/src/pages/components/editor/components/StyleButton/index.tsx
 */
import React, { useState } from 'react';
import styles from './index.less';

interface Props {
  onToggle: Function;
  style: object;
  active: boolean;
  label: string
}

function StyleButton(props: Props) {
  let _className = styles['RichEditor-styleButton'];
  if (props.active) {
    _className += ' ' + styles['RichEditor-activeButton'];
  }
  const [className, setclassName] = useState(_className);
  const onToggle = (e) => {
    e.preventDefault();
    props.onToggle(props.style);
  };
  return (
    <span className={className} onMouseDown={onToggle}>
      {props.label}
    </span>
  );
}

export default StyleButton;
