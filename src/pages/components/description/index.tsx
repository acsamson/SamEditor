/*
 * @Description:
 * @Author: acsamson
 * @Date: 2021-07-09 01:32:30
 * @LastEditTime: 2021-07-09 01:37:15
 * @LastEditors: acsamson@foxmail.com
 * @FilePath: /SamEditor/src/pages/components/description/index.tsx
 */
import React from 'react';
import { Tag } from 'antd';
import styles from './index.less';
import { stateToHTML } from 'draft-js-export-html';

function Description(props) {
  return (
    <div className={styles.description}>
      <div className={styles.item}>
        <Tag color="blue">Tools触发的命令:</Tag>
        {JSON.stringify(props.data.cmd)}
      </div>
      <div className={styles.item} >
        <Tag color="pink">编辑区域的HTML内容:</Tag>
        {props.data && props.data.editorState && stateToHTML(props.data.editorState.getCurrentContent())}
      </div>
    </div >
  );
}

export default Description;
